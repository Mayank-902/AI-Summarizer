import React from 'react';
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
      </nav>

      <h1 className="head_text">
        Summarize Your Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        SummaRise: Your go-to app for quick and efficient article summarization. 
        Transform lengthy texts into concise summaries with ease. 
        Simplify your reading experience and save time with SummaRise today!
      </h2>
    </header>
  )
}

export default Hero