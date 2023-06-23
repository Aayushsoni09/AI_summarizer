import {logo} from '../assets'
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="w-full flex justify-between items-center mb-10 pt-3">
            <img src={logo} alt="sumz_logo" className='w-28 object-contain' />

        </nav>
    <h1 className='head_text'>
        Summarize Articles or Webpages with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
    </h1>
    <h2 className='desc'>
    Simplify your reading with Summize, an open-source article/webpage summarizer
        that transforms lengthy text into clear and concise summaries
    </h2>
    </header>
  )
}

export default Hero