import Image from 'next/image'
import { featuresData } from '~/constants/features'
import { CheckCircleIcon } from 'lucide-react'

import Container from '../shared/Container'

export default function Features() {
  return (
    <div className='-mt-20 md:mt-0'>
      <Container className='grid grid-cols-1 items-center gap-4 md:grid-cols-2'>
        <div>
          <Image
            src='/user.jpeg'
            alt='user benifits'
            width={400}
            height={300}
            className='w-full'
          />
        </div>
        <div>
          <h2 className='text-primary font-medium uppercase'>
            effortless car care
          </h2>
          <h1 className='text-2xl font-semibold text-slate-700 sm:text-3xl'>
            Get the Services You Need, Delivered by AI
          </h1>
          <div className='mt-6 grid gap-4'>
            {featuresData.user.map((item, idx) => (
              <div className='flex items-start gap-4' key={idx}>
                <CheckCircleIcon className='size-8 text-green-500' />
                <p className='font-medium'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container className='mt-10 grid grid-cols-1 items-center gap-4 md:grid-cols-2'>
        <div className='md:order-last'>
          <Image
            src='/business.jpeg'
            alt='business benifits'
            width={400}
            height={300}
            className='w-full'
          />
        </div>
        <div>
          <h2 className='text-primary font-medium uppercase'>
            The Future of Car Services
          </h2>
          <h1 className='text-2xl font-semibold text-slate-700 sm:text-3xl'>
            Partner with Car City's AI-Powered Platform and Thrive
          </h1>
          <div className='mt-6 grid gap-4'>
            {featuresData.business.map((item, idx) => (
              <div className='flex items-start gap-4' key={idx}>
                <CheckCircleIcon className='size-8 text-green-500' />
                <p className='font-medium'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
