import { Project } from '../@types/Project';

export const projects: Project[] = [
  {
    id: 'gp',
    name: 'General Provision',
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/verkly-1.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/verkly-2.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/verkly-3.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/verkly-4.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/verkly-5.png'
    ],
    details: [
      'Geofence to detect doors and unlock by swiping.',
      'Tap the phone to the reader to unlock.',
      'Book meeting rooms, order coffee to table, purchase event tickets'
    ],
    appstoreUrl: 'https://apps.apple.com/us/app/general-provision/id6444879814',
    tech: [
      'Swift',
      'CoreBluetooth',
      'CoreLocation',
      'GeoFence',
      'Node.js',
      'PostgreSQL',
      'TypeORM',
      'Heroku'
    ]
  },

  {
    id: 'acamp',
    name: 'Acamp',
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/acamp-1.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/acamp-2.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/acamp-3.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/acamp-4.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/acamp-5.png'
    ],
    details: [
      'Brought more conveniences for booking by adding Apple Pay.',
      'Spreaded the app to Europe by integrating Google Translate to fully support multi languages for user-created content.',
      'Used Realm as a local database to offline support and faster load.',
      'Developed flagging feature and switching environment for better testing and delivering.'
    ],
    tech: [
      'Google Maps',
      'Apple Pay',
      'Realm',
      'SnapKit',
      'Google Translate',
      'Swiftgen'
    ],
    appstoreUrl: 'https://apps.apple.com/se/app/id1523868447'
  },
  {
    id: 'worx360',
    name: 'Worx360',
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/worx360-1.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/worx360-2.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/worx360-3.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/worx360-4.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/worx360-5.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/worx360-6.png'
    ],
    details: [
      'Fully supported from A to Z employer and talent recruitment functions with internal chat with socket.io, payment system with Stripe, and time management.',
      'Built iOS app and server API while mentoring other developers by conference, and code review.'
    ],
    tech: [
      'Nest.js',
      'Prisma',
      'PostgreSQL',
      'AWS',
      'Twilio',
      'Stripe',
      'Checkr',
      'Mailchimp',
      'socket.io'
    ],
    appstoreUrl: 'https://apps.apple.com/se/app/worx360/id6444571359?l=en'
  },
  {
    id: 'baucu',
    name: 'Baucu',
    imageWidth: 300,
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/baucu.png'
    ],
    details: [
      'Built in 2 days with Next.js, IndexedDB.',
      'Saved manual works up to 35 minutes.',
      'Exported data to Excel for report and printing.'
    ],
    tech: ['Next.js', 'IndexedDB', 'Prisma', 'PostgreSQL']
  },
  {
    id: 'hotmeal',
    name: 'Hot Meal Challenge',
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/hotmeal-1.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/hotmeal-2.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/hotmeal-3.png'
    ],
    details: [
      'Designed and developed a meticulously crafted iOS and Android application aimed at providing hot meals to individuals in need in London, leading to an impressive 194 donated meals within just 2 days of its launch. ',
      'Implemented seamless payment experiences by integrating Apple Pay and Google Pay through Stripe, enhancing convenience and user satisfaction.'
    ],
    tech: [
      'React Native',
      'Realm',
      'NativeBase',
      'Nest.js',
      'Supabase',
      'Firebase',
      'Heroku',
      'Stripe',
      'Apple Pay',
      'Google Pay'
    ],
    appstoreUrl: 'https://apps.apple.com/app/hot-meal/id6449185803'
  },
  {
    id: 'infinidus',
    name: 'Infinidus',
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/infinidus-1.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/infinidus-2.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/infinidus-3.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/infinidus-4.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/infinidus-5.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/infinidus-6.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/infinidus-7.png'
    ],
    details: [
      'Mentored and supported 2 iOS developers in building complicated features. Managed and assigned tasks to their abilities.',
      'Geofence to display message at the correct location.'
    ],
    tech: ['Nest.js', 'Prisma', 'PostgreSQL', 'AWS', 'Twilio']
  },
  {
    id: 'donotpay',
    name: 'DoNotPay',
    details: [
      '60% screens are configurable from server.',
      'Helped 600.000 users solve their problems with a smart chatbot and friendly user experience.'
    ],
    tech: ['Swift', 'Firebase', 'Go'],
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/donotpay-4.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/donotpay-3.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/donotpay-2.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/donotpay-1.png'
    ]
  },
  {
    id: 'done',
    name: 'Done!',
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/done-1.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/done-2.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/done-3.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/done-4.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/done-5.png'
    ],
    details: [
      'Authenticated with Firebase',
      'Persistence with Realm for offline support.',
      'Built UI programmatically with SnapKit'
    ],
    tech: ['Firebase', 'SnapKit', 'Realm'],
    appstoreUrl:
      'https://apps.apple.com/se/app/done-happy-productivity/id1058049013?l=en'
  },
  {
    id: 'groovetime',
    name: 'Groovetime',
    imageWidth: 800,
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/groovetime.png'
    ],
    details: [
      'Simply create Solana wallets with social login methods.',
      'Implement Moonpay on iOS and backend for on-ramp process.',
      'Show and bid video NFTs in app.'
    ],
    tech: ['SwiftUI', 'Moonpay', 'Java', 'Web3Auth'],
    appstoreUrl:
      'https://apps.apple.com/us/app/groovetime-home-dance-studio/id1506502185'
  },
  {
    id: 'jet',
    name: 'Jet',
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/jet-1.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/jet-2.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/jet-3.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/jet-4.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/jet-5.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/jet-6.png'
    ],
    details: [
      'On-ramp and off-ramp users with MoonPay',
      'Managed states with Redux.',
      'UI built with NativeBase for multi screen adaption'
    ],
    tech: ['React Native', 'MoonPay', 'Redux', 'NativeBase', 'Charts']
  },
  {
    id: 'knconstraints',
    name: 'KNConstraints',
    imageWidth: 300,
    details: [
      'Short and sweet syntax',
      'Easy to understand and maintain',
      'Used in some commercial projects like Coinhako, TokyoCatch...'
    ],
    screenshots: [
      '.https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/knconstraints-1.png'
    ],
    tech: [],
    githubUrl: 'https://github.com/nguyentruongky/KNConstraints'
  },
  {
    id: 'neuroid',
    name: 'Neuro-ID-SDK',
    imageWidth: 150,
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/neuroid.png'
    ],
    details: [
      'A Human Analytics SDK silently capture user behaviors.',
      'Developer friendly.'
    ],
    tech: ['Observation pattern', 'Method swizzling', 'SQLCipher', 'SQLite']
  },
  {
    id: 'video-recorder',
    name: 'The social app - Video recorder',
    imageWidth: 150,
    rounded: true,
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/video-recorder.png'
    ],
    details: [
      'Record video like Tiktok with the finger pressed/released to record/pause.',
      'Add music, voice over to the recorded video.',
      'Trim the video, add watermark.'
    ],
    tech: ['AVFoundation', 'ffmpeg'],
    demoUrl: 'https://youtu.be/LzOH53MIQA8'
  },
  {
    id: 'ogenii',
    name: 'Ogenii',
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/ogenii-1.jpg',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/ogenii-2.jpg',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/ogenii-3.jpg',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/ogenii-4.jpg',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/ogenii-5.jpg',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/ogenii-6.jpg'
    ],
    details: [
      'Ogenii is a platform to connect teachers and learners. ',
      'Founded and established the team from scratch.'
    ],
    tech: [
      'Node.js',
      'MySQL',
      'AWS',
      'Firebase',
      'Google Maps',
      'Google Places'
    ]
  },
  {
    id: 'webgaff',
    name: 'WebGaff',
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/webgaff-1.jpg',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/webgaff-2.jpg',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/webgaff-3.jpg',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/webgaff-4.jpg'
    ],
    details: [
      'WebGaff is an Ireland based mobile and online real estate and rental marketplace, focused on providing real-time data and analytics to potential customers about properties of interest.'
    ],
    demoUrl: 'https://youtu.be/03fy9G_FKhk',
    tech: ['Storyboard', 'CoreLocation', 'Google Maps SDK']
  },
  {
    id: 'opiyn',
    name: 'Opiyn',
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/opiyn-1.jpg',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/opiyn-2.jpg',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/opiyn-3.jpg'
    ],
    details: [
      'Opiyn a mobile interactive reviewing social network.',
      'Displayed heavily format text with multi fonts, sizes and styles.',
      'Showed reviews on in-app Google Maps with performance enhancement.'
    ],
    tech: [
      'TextKit',
      'Firebase',
      'Geofence',
      'Google Maps SDK',
      'Google Places SDK'
    ]
  },
  {
    id: 'drips',
    name: 'Drips',
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/drips-1.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/drips-2.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/drips-3.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/drips-4.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/drips-5.png'
    ],
    details: [
      'Drips is a fashion marketplace that brings together the best fashion brands and boutiques into one easy and seamless shopping app.',
      'Developed UI programmatically with KNConstraints.'
    ],
    tech: ['Stripe', 'Swift', 'Auto Layout Programmatically'],
    appstoreUrl: 'https://apps.apple.com/gb/app/snapshop-republic/id1309079895'
  },
  {
    id: 'fixir',
    name: 'Fixir',
    imageWidth: 100,
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/fixir.png'
    ],
    details: [
      'Get more requests by using new detail collection system like a step-by-step chat bot.',
      'Eliminate 100% manual progress by building chat system between drivers and workshops.',
      'Clear dependencies between frontend and backend by designing unique data for every API.'
    ],
    tech: [
      'VIP architecture pattern',
      'FCM',
      'MapKit',
      'socket.io',
      'Core Location'
    ]
  },
  {
    id: 'streamy',
    name: 'Streamy',
    imageWidth: 100,
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/streamy.png'
    ],
    details: [
      'Streamy is a ticket marketplace and streaming app.',
      "Live stream the event directly on the user's Facebook personal page or group.",
      'Live stream in the platform with Wowza Streaming Engine.'
    ],
    tech: [
      'Facebook Live API',
      'Wowza Streaming Cloud SDK',
      'Wowza GoCoder',
      'Wowza Player'
    ]
  },
  {
    id: 'kickit',
    name: 'kickit',
    imageWidth: 800,
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/kickit.png'
    ],
    details: [
      'Geofence to detect friends nearby.',
      'Heavily customize Google Map Pin to display complex states.',
      'Keep friends on the same pages with group calendars and group chats.'
    ],
    tech: ['Geofencing', 'Google Places', 'Google Maps', 'socket.io', 'SnapKit']
  },
  {
    id: 'revie',
    name: 'Food revie',
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/food-revie-1.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/food-revie-2.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/food-revie-3.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/food-revie-4.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/food-revie-5.png'
    ],
    details: ['Geofence to show restaurants around.', 'Share review by videos'],
    tech: ['Geofence', 'Google Maps SDK', 'AVFoundation']
  },
  {
    id: 'ever',
    name: 'Ever.ca',
    screenshots: [
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/ever-1.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/ever-2.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/ever-3.png',
      'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/ever-4.png'
    ],
    tech: [
      'React Native',
      'Expo',
      'Nest.js',
      'PostgreSQL',
      'TypeScript',
      'NativeBase',
      'Recoil',
      'Sentry'
    ],
    details: [
      'Developed deposit and withdrawal with Plaid and VoPay.',
      'Added flagging feature for A/B testing.'
    ]
  }
];
