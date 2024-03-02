import Image from 'next/image'
import Container from '~/components/shared/Container'
import Navbar from '~/components/shared/Navbar'

export default function AboutUs() {
  return (
    <div>
      <div className='flex h-[70vh] flex-col lg:min-h-screen'>
        <Image
          fill
          src='/about-us.jpeg'
          alt='about us background image'
          className='-z-10 max-h-[70vh] w-full object-cover brightness-50 lg:min-h-screen'
        />
        <Container
          size='md'
          className='z-10 mt-[5vh] sm:mt-[10vh] lg:mt-[20vh]'
        >
          <h1 className='text-center text-2xl font-semibold text-white sm:text-3xl md:text-start md:font-bold lg:text-5xl'>
            Car City: Empowering Dhaka with AI-powered Car Care
          </h1>
          <p className='mt-4 text-center text-white md:text-start'>
            Car City is more than just a platform – it's the future of
            data-driven car care in Dhaka.
          </p>
        </Container>
      </div>
      <div className='-mt-10 md:mt-0'>dkfj</div>
    </div>
  )
}
