import { Company } from '../@types/Company'
import { icons } from '../common'

export const companies: Company[] = [
  {
    iconUrl: icons.alongside,
    roundedIcon: true,
    companyName: 'Alongside.xyz',
    title: 'Software Engineer',
    screenshots: [
      '/images/alongside-1.png',
      '/images/alongside-2.png',
      '/images/alongside-3.png',
      '/images/alongside-4.png',
      '/images/alongside-5.png'
    ],
    summary: [
      'Managed and brought users onboarding and on-ramping with Magic and Wyre, Plaid.',
      'Investigated the issue and reduced  13 seconds in the login process by async and background check.',
      'Organized source code in a mono repo with React Native, React.js, Next.js, TypeScript, StyledComponent, and TailwindCSS.'
    ]
  },
  {
    iconUrl: icons.tokyocatch,
    roundedIcon: true,
    companyName: 'TokyoCatch',
    title: 'Senior Mobile Engineer',
    summary: [
      'Built a stable video streaming game using socket.io, GraphQL, and JSMpeg that gains 10.000 play times a day, earning $250.000 every month.',
      'Reduced the failure rate to 22% by analyzing the statistics and evaluating the efficiency of GraphQL subscription, and improving the product by changing to socket.io.',
      'Achieved crash-free statistics of 99% on iOS and 98.73% on Android by tracking crashes with Sentry, Firebase Crashlytics.'
    ],
    screenshots: [
      '/images/tokyocatch-1.jpg',
      '/images/tokyocatch-2.jpg',
      '/images/tokyocatch-3.jpg',
      '/images/tokyocatch-4.jpg',
      '/images/tokyocatch-5.jpg',
      '/images/tokyocatch-6.jpg'
    ],
    demoUrl: 'https://youtu.be/yfaVSPaiaDQ',
    appstoreUrl:
      'https://apps.apple.com/us/app/tokyocatch-claw-machine/id1485188384'
  },
  {
    iconUrl: icons.doNotPay,
    roundedIcon: true,
    companyName: 'DoNotPay',
    title: 'Senior iOS Engineer',
    summary: [
      '60% screens are configurable from server.',
      'Helped 600.000 users solve their problems with a smart chatbot and friendly user experience.'
    ],
    screenshots: [
      '/images/donotpay-4.png',
      '/images/donotpay-3.png',
      '/images/donotpay-2.png',
      '/images/donotpay-1.png'
    ]
  },
  {
    iconUrl: icons.coinhako,
    roundedIcon: true,
    companyName: 'Coinhako',
    title: 'Mobile Lead',
    summary: [
      'Expanded the business from 3 to 31 currencies, 2 to 4 countries effortlessly by designing a flexible architecture.',
      'Saved $500 a month after changing from Pusher socket to Firebase Realtime Database.',
      'Saved 40% time of development by resolving the dependencies between mobile and backend team.'
    ],
    screenshots: [
      '/images/coinhako-6.png',
      '/images/coinhako-5.png',
      '/images/coinhako-4.png',
      '/images/coinhako-3.png',
      '/images/coinhako-2.png',
      '/images/coinhako-1.png'
    ],
    demoUrl: 'https://youtu.be/WnMlVS-riZc',
    appstoreUrl:
      'https://apps.apple.com/us/app/coinhako-bitcoin-wallet-asia/id1137855704?l=en'
  },
  {
    iconUrl: icons.moca,
    roundedIcon: true,
    companyName: 'Moca',
    title: 'iOS Developer',
    summary: [
      'Reduced 17 seconds for every transaction by changing the payment flow.',
      'Increased app performance to 38% by refactoring the project to Swift.',
      'It was acquired by Grab, an Asian unicorn and serving millions of users every day.'
    ],
    screenshots: [
      '/images/moca-1.png',
      '/images/moca-2.png',
      '/images/moca-3.png',
      '/images/moca-4.png',
      '/images/moca-5.png'
    ]
  }
]
