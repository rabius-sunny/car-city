import Image from 'next/image'

import Container from '../shared/Container'

export default function Hero() {
  return (
    <div className='flex h-[60vh] justify-center lg:min-h-screen '>
      <Image
        fill
        src='/bg.png'
        alt='Hero background image'
        className='max-h-[60vh] w-full object-cover brightness-50 lg:min-h-screen'
      />
      <Container className='z-10 mt-[10vh] lg:mt-[30vh]'>
        <h1 className='text-2xl font-semibold text-white sm:text-3xl md:font-bold lg:text-5xl'>
          Revolutionising Car Ownership with AI-Powered Solutions for a
          Simplified, Seamless, Stress-Free Experience
        </h1>
        <p className='mt-4 text-white'>
          Find, compare, and book car services all in one place. From rentals
          and repairs to parts and accessories, its car care made easy, powered
          by AI
        </p>
      </Container>
    </div>
  )
}
