import Image from 'next/image'
import Link from 'next/link'

import Container from './container'

export default function Navbar() {
  return (
    <Container className='z-10 flex flex-col items-center justify-between text-white md:flex-row'>
      <Link href='/'>
        <Image src='/logo.png' alt='car city logo' width={80} height={80} />
      </Link>
      <div className='flex items-center gap-4 lg:gap-8'>
        <p className='font-semibold'>Services</p>
        <p className='font-semibold'>Rent a car</p>
        <p className='font-semibold'>Garages</p>
        <p className='font-semibold'>Exchage</p>
        <p className='font-semibold'>About us</p>
        <p className='font-semibold'>Contact</p>
      </div>
    </Container>
  )
}
