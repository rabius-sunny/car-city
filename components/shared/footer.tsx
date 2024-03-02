import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Facebook, Github, Globe, Linkedin } from 'lucide-react'

import Container from './Container'

export default function Footer() {
  return (
    <footer className='mt-20 border border-t border-slate-200 bg-slate-100 py-10 text-slate-400'>
      <Container className='grid grid-cols-1 gap-8 px-2 lg:grid-cols-2'>
        <div className='flex flex-col items-center text-center lg:items-start lg:text-start'>
          <Image src='/logo.png' alt='car city logo' width={100} height={100} />
          <p className='mt-2 text-sm text-slate-400'>
            Revolutionising Car Ownership with AI-Powered Solutions for a
            Simplified, Seamless, Stress-Free Experience Find, compare, and book
            car services all in one place. From rentals and repairs to parts and
            accessories, its car care made easy, powered by AI
          </p>
        </div>
        <div className='flex items-start justify-evenly'>
          <div>
            <h2 className='font-semibold uppercase text-black'>About</h2>
            <div className='footer-item mt-4 grid gap-2 text-sm'>
              <span>Features</span>
              <span>Pricing</span>
              <span>Support</span>
              <span>Blogs</span>
            </div>
          </div>
          <div>
            <h2 className='font-semibold uppercase text-black'>Services</h2>
            <div className='footer-item mt-4 grid gap-2 text-sm'>
              <span>Parts & Accessories</span>
              <span>Rent a car</span>
              <span>Garages</span>
              <span>Exchange</span>
            </div>
          </div>
          <div>
            <h2 className='font-semibold uppercase text-black'>Contact</h2>
            <div className='footer-item mt-4 grid gap-2 text-sm'>
              <span>
                <Link href='https://rabius-sunny.vercel.app'>
                  Developer <ArrowUpRight className='size-4' />
                </Link>
              </span>
              <span>
                <Link href='https://github.com/rabius-sunny'>
                  Github <ArrowUpRight className='size-4' />
                </Link>
              </span>
              <span>
                <Link href='https://fb.com/rabibinsalam'>
                  Facebook <ArrowUpRight className='size-4' />
                </Link>
              </span>
              <span>
                <Link href='https://linkedin.com/in/rabius-sunny'>
                  Linkedin <ArrowUpRight className='size-4' />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <hr className='my-6' />
        <div className='flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between'>
          <p className='text-sm'>
            Copyright @ <strong>Rabius Sunny,</strong> 2024
          </p>
          <div className='footer-item flex items-center gap-4'>
            <Link href='https://rabius-sunny.vercel.app'>
              <Globe className='size-5' />
            </Link>
            <Link href='https://github.com/rabius-sunny'>
              <Github className='size-5' />
            </Link>
            <Link href='https://linkedin.com/in/rabius-sunny'>
              <Linkedin className='size-5' />
            </Link>
            <Link href='https://fb.com/rabibinsalam'>
              <Facebook className='size-5' />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
