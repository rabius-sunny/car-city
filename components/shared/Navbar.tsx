import Image from 'next/image'
import Link from 'next/link'

import Container from './container'

export default function Navbar() {
  return (
    <Container className='z-10 flex flex-col items-center justify-between text-white md:flex-row'>
      <Link href='/'>
        <Image src='/logo.png' alt='car city logo' width={80} height={80} />
      </Link>
      <div className='flex items-center gap-4 text-xs font-medium uppercase sm:text-sm lg:gap-8'>
        <h2>Services</h2>
        <h2>Rent a car</h2>
        <h2>Garages</h2>
        <h2>Exchage</h2>
        <h2>About us</h2>
        <h2>Contact</h2>
      </div>
    </Container>
  )
}
