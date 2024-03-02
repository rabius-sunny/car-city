import Image from 'next/image'

import Container from '../shared/Container'

export default function Hero() {
  return (
    <div className='flex h-[70vh] flex-col lg:min-h-screen'>
      <Image
        fill
        src='/bg.png'
        alt='Hero background image'
        className='-z-10 max-h-[70vh] w-full object-cover brightness-50 lg:min-h-screen'
      />
      <Container className='z-10 mt-[5vh] sm:mt-[10vh] lg:mt-[20vh]'>
        <h1 className='text-center text-2xl font-semibold text-white sm:text-3xl md:text-start md:font-bold lg:text-5xl'>
          Revolutionising Car Ownership with AI-Powered Solutions for a
          Simplified, Seamless, Stress-Free Experience
        </h1>
        <p className='mt-4 text-center text-white md:text-start'>
          Find, compare, and book car services all in one place. From rentals
          and repairs to parts and accessories, its car care made easy, powered
          by AI
        </p>
      </Container>
    </div>
  )
}
