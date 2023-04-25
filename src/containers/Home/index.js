import { useState } from 'react'
import axios from 'axios'
import './index.scss'
import Modal from "../../components/Modal";
import { surpriseMePrompts } from '../../constants'

const Home = () => {
  const [images, setImages] = useState([])
  const [promptValue, setPromptValue] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const generateImages = async () => {
    setImages(null)
    if (promptValue === null) {
      alert('Error! Please insert a valid prompt')
    }
    try {
      axios.post('/images', { message: promptValue }).then(response => {
        console.log(response)
        setImages(response.data)
      }) 
    } catch (error) {
      console.error(error)
    }
  }

  const uploadImage = async(e) => {
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    setModalOpen(true)
    setSelectedImage(e.target.files[0])
    e.target.value = null

    try {
     await axios.post('/upload', formData).then(response => {
        console.log(response)
      }) 
    } catch (error) {
      console.error(error)
    }
  }

  const handleSurpriseMe = () => {
    const randomPrompt = surpriseMePrompts[Math.floor(Math.random() * surpriseMePrompts.length)]
    setPromptValue(randomPrompt)
  }

  const generateVariations = async () => {
    setImages(null)
    if (selectedImage === null) {
      alert('Error! Existing image required')
      setModalOpen(false)
      return
    }
    try {
     await axios.post('/variations').then(response => {
        console.log(response)
        setImages(response.data)
        setModalOpen(false)
      }) 
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='home'>
      <section className='home__input-section'>
        <p>Start with a detailed description 
          <span className='home__input-surprise' onClick={handleSurpriseMe}>Surprise me</span>
        </p>
        <div className="home__input-container">
          <input 
          value={promptValue}
            placeholder="Insert your prompt here"
            onChange = {(e) => setPromptValue(e.target.value)}
          />
          <button onClick={generateImages}>Generate</button>
        </div>
        <p className='home__uploader'>Or,&nbsp;
          <span>
            <label htmlFor="files">upload an image</label>
            <input onChange={uploadImage} id="files" accept="image/*" type="file" hidden />
          </span>
          &nbsp;to edit.
        </p>
        {modalOpen &&
          <Modal 
            setModalOpen={setModalOpen} 
            setSelectedImage={setSelectedImage} 
            selectedImage={selectedImage}
            generateVariations={generateVariations}
          />
        }
      </section>
      <section className='home__image-section'>
        {images?.map((image, index) => (
          <img key={index} src={image.url} alt={`Generated image of ${promptValue}`} />
        ))}
      </section>
    </div>
  )
}

export default Home