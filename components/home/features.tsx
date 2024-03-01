import { featuresData } from '~/constants/features'
import { CheckCircleIcon } from 'lucide-react'

import Container from '../shared/container'
import SectionHeader from '../shared/section-header'

export default function Features() {
  return (
    <div>
      <SectionHeader
        className='mt-0'
        title='effortless car care'
        header='Get the Services You Need, Delivered by AI'
      />
      <Container size='md' className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {featuresData.user.map((item, idx) => (
          <div className='col-auto flex items-start gap-4' key={idx}>
            <CheckCircleIcon className='size-8 text-green-500' />
            <p className='font-medium'>{item}</p>
          </div>
        ))}
      </Container>
      <SectionHeader
        className='mt-10'
        title='effortless car care'
        header='Get the Services You Need, Delivered by AI'
      />
      <Container size='md' className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {featuresData.business.map((item, idx) => (
          <div className='col-auto flex items-start gap-4' key={idx}>
            <CheckCircleIcon className='size-8 text-green-500' />
            <p className='font-medium'>{item}</p>
          </div>
        ))}
      </Container>
    </div>
  )
}
