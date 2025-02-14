import { Company } from '../@types/Company';
import { icons } from '../common';

export const companies: Company[] = [
    {
        iconUrl: icons.gxbank,
        roundedIcon: true,
        companyName: 'GXBank',
        title: 'Senior iOS Developer',
        screenshots: [
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/gxbank-1.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/gxbank-2.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/gxbank-3.gif',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/gxbank-4.gif',
        ],
        summary: [
            'Developed and seamlessly integrated MSME features as a modular package across multiple host applications in three countries.',
            'Established a strong commitment to SOLID principles, particularly in dependency inversion and single responsibility, enabling exceptional scalability and reusability.',
        ],
        boldString: [],
        appstoreUrl: 'https://apps.apple.com/my/app/gxbank/id6454673510',
    },
    {
        iconUrl: icons.trim,
        roundedIcon: true,
        companyName: 'Trim Agency',
        title: 'Software Engineer',
        screenshots: [
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/verkly-1.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/verkly-2.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/worx360-1.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/worx360-3.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/infinidus-3.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/infinidus-5.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/pbs-1.png',
        ],
        summary: [
            'Successfully led a team in developing an innovative Bluetooth-enabled door unlocking mechanism using the Kisi SDK, while expertly managing a Slack bot that optimized bookings for cafes, rooms, and events, benefiting over 2,000 members.',
            'Enhanced the recruitment process for both employers and talents by implementing crucial features such as internal chat with socket.io, secure Stripe payments, and an efficient check-in system. Effectively guided the team and collaborated closely with the product owner and project manager to ensure seamless project alignment and progress.',
            'Provided mentorship and support to two iOS developers, driving the development of advanced features like geofencing for location - based messaging and the integration of image processing, video recording, and voice recording functionalities for enhanced message delivery. ',
        ],
        boldString: ['2,000 members'],
        appstoreUrl:
            'https://apps.apple.com/in/app/general-provision/id6444879814',
    },
    {
        iconUrl: icons.alongside,
        roundedIcon: true,
        companyName: 'Alongside.xyz',
        title: 'Software Engineer',
        screenshots: [
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/alongside-1.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/alongside-2.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/alongside-3.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/alongside-4.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/alongside-5.png',
        ],
        summary: [
            'Implemented seamless user onboarding on mobile apps utilizing Magic for email and phone number, allowing users to easily initiate trading activities by integrating with MoonPay, Wyre, and Plaid.',
            'Investigated, diagnosed, and significantly reduced login process time by 13 seconds through the implementation of asynchronous and background checks.',
            'Developed efficient internal management tools for marketing and finance teams using Next.js, Supabase.',
        ],
        boldString: ['13 seconds'],
    },
    {
        iconUrl: icons.tokyocatch,
        roundedIcon: true,
        companyName: 'TokyoCatch',
        title: 'Senior Mobile Engineer',
        summary: [
            `Launched successfully a video streaming game on both iOS and Android platforms, garnering a substantial daily play count of 10,000 and generating monthly revenue amounting to $250,000.`,
            'Analyzed statistics and evaluated the efficiency of GraphQL subscription, leading to a reduced failure rate of 22% by transitioning to socket.io and improving the overall product.',
            'Achieved impressive crash-free statistics of 99% on iOS and 98.73% on Android by tracking crashes using Sentry and Firebase Crashlytics.',
            'Collaborated with the marketing team to enhance the deep linking infrastructure, enabling seamless integration of new product features and supporting marketing initiatives.',
        ],
        boldString: ['10,000', '$250,000', '22%', '99%', '98.73%'],
        screenshots: [
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/tokyocatch-1.jpg',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/tokyocatch-2.jpg',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/tokyocatch-3.jpg',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/tokyocatch-4.jpg',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/tokyocatch-5.jpg',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/tokyocatch-6.jpg',
        ],
        demoUrl: 'https://youtu.be/yfaVSPaiaDQ',
        appstoreUrl:
            'https://apps.apple.com/us/app/tokyocatch-claw-machine/id1485188384',
    },
    {
        iconUrl: icons.coinhako,
        roundedIcon: true,
        companyName: 'Coinhako',
        title: 'Mobile Lead',
        summary: [
            'Developed the application from the ground up, prioritizing security measures, bringing about an impressive 4.4 rating and accumulating over 3,800 positive reviews from satisfied users.',
            'Expanded business operations, seamlessly integrating support for 31 currencies, expanding into 4 countries, and effortlessly localizing the application into 4 languages, resulting in enhanced accessibility and a superior user experience worldwide.',
            'Streamlined development processes by expertly resolving dependencies between the mobile and backend teams, leading to 40% reduction in development time.',
            "Analyzed competitors and market trends to identify opportunities for improvement, resulting in the successful introduction of new features and an enhanced user experience, solidifying the product's position as a market leader.",
        ],
        boldString: [
            '4.4 rating',
            '3,800',
            '4 countries',
            '31 currencies',
            '4 languages',
            '40%',
        ],
        screenshots: [
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/coinhako-6.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/coinhako-5.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/coinhako-4.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/coinhako-3.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/coinhako-2.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/coinhako-1.png',
        ],
        demoUrl: 'https://youtu.be/WnMlVS-riZc',
        appstoreUrl:
            'https://apps.apple.com/us/app/coinhako-bitcoin-wallet-asia/id1137855704?l=en',
    },
    {
        iconUrl: icons.moca,
        roundedIcon: true,
        companyName: 'Moca',
        title: 'iOS Developer',
        summary: [
            'Optimized payment flow, reducing transaction time by 17 seconds to user experience and enhancing transaction efficiency.',
            'Refactored the project meticulously to Swift, prompting a remarkable 38% improvement in application performance, boosting speed, responsiveness, and user satisfaction.',
            'Monitored user activities and promptly addressed feedback within a 4-hour timeframe, demonstrating a dedicated commitment to customer support and ensuring positive user experiences.',
        ],
        boldString: ['17 seconds', '38%', '4-hour'],
        screenshots: [
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/moca-1.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/moca-2.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/moca-3.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/moca-4.png',
            'https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/moca-5.png',
        ],
    },
];
