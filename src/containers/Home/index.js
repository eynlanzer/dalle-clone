import React from 'react'
import axios from 'axios'
import './index.scss'

import surpriseMePrompts from '../../constants'

const Home = () => {

  const generateImages = async () => {
    try {
      // const options = {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     message: 'An african samurai'
      //   }),
      //   headers: {
      //     "Content-type": "application/json"
      //   }
      // }
      // const response = await fetch('/images', options)
      // const data = await response.json()
      // console.log(data)
      axios.post('/images', { prompt: 'An african samurai' }).then(response => {
        console.log(response)
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
          <input placeholder="Insert your prompt here"/>
          <button onClick={generateImages}>Generate</button>
        </div>
      </section>
      <section className='home__image-section'>

      </section>
    </div>
  )
}

export default Home