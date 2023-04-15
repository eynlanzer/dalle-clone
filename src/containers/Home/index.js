import { useState } from 'react'
import axios from 'axios'

import './index.scss'

import { surpriseMePrompts } from '../../constants'

const Home = () => {
  const [images, setImages] = useState([])
  const [promptValue, setPromptValue] = useState(null)

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

  const handleSurpriseMe = () => {
    const randomPrompt = surpriseMePrompts[Math.floor(Math.random() * surpriseMePrompts.length)]
    setPromptValue(randomPrompt)
  }

  return (
    <div className='home'>
      <section className='home__search-section'>
        <p>Start with a detailed description 
          <span onClick={handleSurpriseMe}>Surprise me</span>
        </p>
        <div className="home__input-container">
          <input 
          value={promptValue}
            placeholder="Insert your prompt here"
            onChange = {(e) => setPromptValue(e.target.value)}
          />
          <button onClick={generateImages}>Generate</button>
        </div>
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