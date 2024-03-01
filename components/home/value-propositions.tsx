import Image from 'next/image'
import { valuesData } from '~/constants/features'

import Container from '../shared/container'
import SectionHeader from '../shared/section-header'

export default function Values() {
  return (
    <div>
      <SectionHeader
        className='mb-2'
        header='Effortless Car Care - Powered by AI'
      />
      <Container>
        <p className='text-center text-sm'>
          Ditch the app juggling act for your car needs! Car City connects you
          with a trusted network of car service businesses, all in one
          AI-powered platform.
        </p>
        <div className='mt-10 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2'>
          {valuesData.user.map((item, idx) => (
            <div className='col-auto' key={idx}>
              <div className='relative flex items-start gap-4'>
                <Image
                  src={item.image}
                  alt='values we propose'
                  width={100}
                  height={100}
                />
                <div>
                  <h2 className='font-semibold'>{item.title}</h2>
                  <p className='text-sm'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <SectionHeader
        className='mb-2'
        header="Grow Your Business with Car City's AI-Powered Platform"
      />
      <Container>
        <p className='text-center text-sm'>
          Expand your reach and connect with a wider audience of potential
          customers actively searching for your car-related services. Here's how
          Car City empowers your business with AI-powered solutions:
        </p>
        <div className='mt-10 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2'>
          {valuesData.business.map((item, idx) => (
            <div className='col-auto' key={idx}>
              <div className='relative flex items-start gap-4'>
                <Image
                  src={item.image}
                  alt='values we propose'
                  width={100}
                  height={100}
                />
                <div>
                  <h2 className='font-semibold'>{item.title}</h2>
                  <p className='text-sm'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
