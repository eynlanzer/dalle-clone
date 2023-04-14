import { useState } from 'react'
import axios from 'axios'

import './index.scss'

import surpriseMePrompts from '../../constants'

const Home = () => {
  const [images, setImages] = useState([])
  const [promptValue, setPromptValue] = useState(null)
  const generateImages = async () => {
    try {
      axios.post('/images', { prompt: 'An african samurai' }).then(response => {
        console.log(response)
        setImages(response.data)
      }) 
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='home'>
      <section className='home__search-section'>
        <p>Start with a detailed description 
          <span>Surprise me</span>
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