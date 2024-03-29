'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navitems } from '~/constants/info'
import { cn } from '~/lib/utils'

import Container from './Container'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <Container className='mt-4 flex flex-col items-center justify-between text-white md:flex-row'>
      <Link href='/'>
        <Image src='/logo.png' alt='car city logo' width={80} height={80} />
      </Link>
      <div className='mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium uppercase sm:text-sm md:mt-0 lg:gap-8'>
        {navitems.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            className={cn(
              'hover:text-sky-600',
              pathname === item.href &&
                'text-primary underline underline-offset-2'
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </Container>
  )
}
