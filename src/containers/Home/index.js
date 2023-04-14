import React from 'react'

import surpriseMePrompts from '../../constants'

const Home = () => {
  return (
    <div className='home'>
      <section className='home__search-section'>
        <p>Start with a detailed description 
          <span className='home__surprise'>Surprise me</span>
        </p>
        <div className="home__input-container">
          <input placeholder="Insert your prompt here"/>
          <button>Generate</button>
        </div>
      </section>
      <section className='home__image-section'>

      </section>
    </div>
  )
}

export default Home