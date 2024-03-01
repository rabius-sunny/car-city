type features = {
  user: string[]
  business: string[]
}
type values = {
  user: {
    title: string
    description: string
    image: string
  }[]
  business: {
    title: string
    description: string
    image: string
  }[]
}

export const featuresData: features = {
  user: [
    'Schedule appointments in seconds with AI-powered recommendations.',
    'Find trusted professionals near you, intelligently matched by our AI.',
    'Compare prices and reviews, guided by AI insights.',
    'Manage your car care needs on the go with our user-friendly mobile app.'
  ],
  business: [
    'Reach more customers and grow your business with AI-driven marketing tools.',
    'Simplify your operations, attract new clients, and streamline communication with AI assistance.',
    'Get discovered and increase your revenue through intelligent user matching and targeted marketing.',
    'Gain access to valuable marketing tools and resources to understand your customers and optimise your offerings'
  ]
}

export const valuesData: values = {
  user: [
    {
      title: 'AI-driven search',
      description:
        'Our intelligent search engine understands your needs and suggests relevant services, parts, and professionals tailored to your car and preferences.',
      image: '/icons/1.jpg'
    },
    {
      title: 'Intelligent matching',
      description:
        'Forget endless browsing! Our AI algorithm analyzes user data, service provider profiles, and reviews to match you with the perfect professional based on expertise, location, and ratings.',
      image: '/icons/2.jpg'
    },
    {
      title: 'Predictive maintenance',
      description:
        "Car City will leverage AI to analyse your car's data (with your consent) and predict potential issues, allowing you to avoid costly repairs and extend your car's lifespan through proactive maintenance suggestions.",
      image: '/icons/3.jpg'
    },
    {
      title: 'Trusted professionals',
      description:
        'Connect with a network of pre-vetted, reviewed, and reliable businesses.',
      image: '/icons/4.jpg'
    },
    {
      title: 'Compare prices and reviews',
      description:
        'Read customer reviews and compare prices before making an informed decision that fits your budget and preferences.',
      image: '/icons/5.jpeg'
    },
    {
      title: 'Schedule appointments with ease',
      description:
        'Book appointments directly with businesses through our platform, saving you time and streamlining the process.',
      image: '/icons/6.jpg'
    },
    {
      title: 'Seamless mobile experience',
      description:
        'Manage appointments, access service history, and stay informed on the go with our user-friendly mobile app.',
      image: '/icons/7.jpg'
    }
  ],
  business: [
    {
      title: 'Increased visibility and exposure',
      description:
        'Gain exposure to a large user base actively searching for services like yours on our platform.',
      image: '/icons/8.jpg'
    },
    {
      title: 'Effortless lead generation',
      description:
        'Attract new customers looking for reliable and trusted professionals like yourself.',
      image: '/icons/9.jpg'
    },
    {
      title: 'AI-powered marketing tools',
      description:
        'Leverage our AI-driven marketing tools to target specific customer segments and reach new audiences with personalized campaigns.',
      image: '/icons/10.jpg'
    },
    {
      title: 'Streamlined customer management',
      description:
        'Manage leads, bookings, and customer interactions directly through our platform.',
      image: '/icons/11.jpg'
    },
    {
      title: 'Data-driven insights',
      description:
        'Gain valuable customer insights from reviews and AI analysis to understand your audience and improve your offerings.',
      image: '/icons/12.jpg'
    },
    {
      title: 'Streamlined operations',
      description:
        'Save time and resources by managing your business profile, appointments, and communication with customers through a centralised platform.',
      image: '/icons/13.jpg'
    },
    {
      title: 'Enhanced marketing opportunities',
      description:
        "Leverage our platform's marketing tools and promotional features to showcase your services.",
      image: '/icons/14.jpg'
    }
  ]
}
