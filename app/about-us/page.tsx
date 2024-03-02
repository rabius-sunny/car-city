import { Metadata } from 'next'
import Image from 'next/image'
import Container from '~/components/shared/Container'

export const metadata: Metadata = {
  title: 'About us',
  description:
    "Car City ~ Empowering Dhaka with AI-powered Car Care. Car City is more than just a platform - it's the future of data-driven car care in Dhaka."
}

const Title = ({ title }: { title: string }) => (
  <h1 className='border-primary text-primary mt-10 border-l-4 bg-gradient-to-r from-sky-100 p-1 text-lg uppercase sm:p-2 sm:text-2xl'>
    {title}
  </h1>
)

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
      <Container size='sm' className='-mt-20 mb-20 grid gap-4 md:mt-0'>
        <Title title='our story' />
        <p>
          <strong>In the bustling heart of Dhaka,</strong> car care often felt
          like a gamble. Finding reliable mechanics was a frustrating dance of
          word-of-mouth and chance encounters. As a data-driven car enthusiast,
          I saw an <strong>opportunity to bridge the gap</strong> between car
          owners and skilled professionals.
        </p>
        <p>
          Driven by{' '}
          <strong>
            AI-powered algorithms and a passion for empowering communities,
          </strong>{' '}
          Car City was born. We go beyond a marketplace, fostering a{' '}
          <strong>connected ecosystem</strong> built on{' '}
          <strong>
            trust, convenience, and shared passion for automobiles.
          </strong>
        </p>
        <p>
          Car City empowers you with <strong>data-driven insights.</strong> Our{' '}
          <strong>AI-powered platform</strong> matches you with{' '}
          <strong>vetted and reviewed professionals,</strong> enabling{' '}
          <strong>informed decisions</strong> and an{' '}
          <strong>effortless service experience.</strong>
        </p>
        <p>
          <strong>
            We believe in a world where car ownership is a joy, not a chore.
          </strong>{' '}
          Car City simplifies car care not just for users, but also for local
          businesses. <strong>Through targeted visibility tools,</strong> we
          help them <strong>reach new customers and thrive.</strong>
        </p>
        <p>
          This is our story - a tale of{' '}
          <strong>innovation and community,</strong> fueled by the desire to
          <strong>revolutionise car care in Dhaka.</strong>
        </p>
        <Title title="Car City's Mission" />
        <p>
          Empowering Dhaka's car owners with{' '}
          <strong>transparent, stress-free car care experiences.</strong>
        </p>
        <Title title='Our Vision' />
        <p>
          Transforming Dhaka's car service landscape by becoming the{' '}
          <strong>
            go-to platform connecting users with the most reliable and
            highly-rated professionals.
          </strong>
        </p>
        <Title title='Our Approach' />
        <ul className='list-disc'>
          <li>
            <strong>Local Expertise:</strong> We connect you with local
            businesses and professionals who understand your specific car needs
            and the Dhaka region.
          </li>
          <li>
            <strong>AI-powered Transparency:</strong> Compare prices, access
            in-depth reviews, and choose the service provider that best fits
            your requirements and budget, all powered by AI.
          </li>
          <li>
            <strong>Seamless Experience:</strong> Manage your car care journey
            effortlessly – from finding and booking appointments to accessing
            service history and reviews – all on one convenient platform.
          </li>
        </ul>
        <Title title='what differentiates us' />
        <ul className='list-disc'>
          <li>
            <strong>AI-powered Matching:</strong> Our intelligent algorithms
            ensure you connect with the most suitable service provider for your
            specific needs.
          </li>
          <li>
            <strong>Advanced Review System:</strong> We leverage AI to analyse
            reviews, providing you with deeper insights and ensuring the
            credibility of information.
          </li>
          <li>
            <strong>Predictive Maintenance:</strong> Based on your car's history
            and driving patterns, our AI suggests personalised recommendations
            for future maintenance needs, ensuring optimal car health.
          </li>
        </ul>
        <hr />
        <h2 className='text-xl font-semibold'>
          Join Car City - a data-driven revolution shaping the future of car
          care in Dhaka. Let's create a world where every car owner enjoys a
          positive and empowered car ownership experience.
        </h2>
      </Container>
    </div>
  )
}
