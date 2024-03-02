import { cn } from '~/lib/utils'

import Container from './Container'

type TProps = {
  title?: string
  header: string
  className?: string
}
export default function SectionHeader({ title, header, className }: TProps) {
  return (
    <Container className={cn('mb-10 mt-20 text-center', className)}>
      <h2 className='font-medium uppercase text-sky-500'>{title}</h2>
      <h1 className='text-2xl font-semibold text-slate-700 sm:text-3xl'>
        {header}
      </h1>
    </Container>
  )
}
