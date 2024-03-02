'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navitems } from '~/constants/info'
import { cn } from '~/lib/utils'

import Container from './container'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <Container className='z-10 flex flex-col items-center justify-between text-white md:flex-row'>
      <Link href='/'>
        <Image src='/logo.png' alt='car city logo' width={80} height={80} />
      </Link>
      <div className='flex items-center gap-2 text-xs font-medium uppercase sm:gap-4 sm:text-sm lg:gap-8'>
        {navitems.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            className={cn(
              'hover:text-sky-500',
              pathname === item.href &&
                'text-sky-500 underline underline-offset-2'
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </Container>
  )
}
