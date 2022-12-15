import { Project } from '../@types/Project'

export const projects: Project[] = [
  {
    id: 'verkly',
    name: 'Verkly',
    screenshots: [
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6533213d-38ca-4bdb-b398-0740b49d3fb2/verkly-1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T015654Z&X-Amz-Expires=86400&X-Amz-Signature=39c3bcfe6a2f4a5a37397a5309a25594d0833059372b14d1e5d9defec7e94757&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22verkly-1.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fc972513-29ba-45da-bb01-f1eba0f19f38/verkly-2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T015659Z&X-Amz-Expires=86400&X-Amz-Signature=59ab865eba4782b24c243a49e6be410bf623d0749a2dc21b7c1fa43adfeae256&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22verkly-2.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c2429e10-85a9-434f-a945-5b725bbffd35/verkly-3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T015703Z&X-Amz-Expires=86400&X-Amz-Signature=673bbd6858e9003dc1750d83f9ac4751141c4bc51685b7f35a5bb25c798c2cb1&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22verkly-3.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1b942c47-66d1-4d09-951e-9a1f3c2b5a8d/verkly-4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T015707Z&X-Amz-Expires=86400&X-Amz-Signature=989d2ec243064ed240b34ca4cea0d4b6b70f7fd1d83e480eb88a200f72b71033&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22verkly-4.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c0ddd42e-bfc9-4b40-80f7-18fb0b21bb93/verkly-5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T015711Z&X-Amz-Expires=86400&X-Amz-Signature=85445279d9fae84ade2cd3caec3457b3ac1e39ada8751e75293180b32866451d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22verkly-5.PNG.png%22&x-id=GetObject'
    ],
    details: [
      'Geofence to detect doors and unlock by swiping.',
      'Tap the phone to the reader to unlock.'
    ],
    tech: ['CoreBluetooth', 'CoreLocation', 'GeoFence']
  },
  {
    id: 'baucu',
    name: 'Baucu',
    imageWidth: 300,
    screenshots: [
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a2e55a7f-b43d-4bae-b8ab-674e76baebb5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T014554Z&X-Amz-Expires=86400&X-Amz-Signature=034ec8089bea5f4477dd0959f3017aa889f2de26a9e971ef688fa3cd8e88f3ed&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject'
    ],
    details: [
      'Built in 2 days with Next.js, IndexedDB.',
      'Saved manual works up to 35 minutes.',
      'Exported data to Excel for report and printing.'
    ],
    tech: ['Next.js', 'IndexedDB', 'Prisma', 'PostgreSQL']
  },
  {
    id: 'acamp',
    name: 'Acamp',
    screenshots: [
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/265565d0-5dbe-4c09-8eeb-f9837a795d77/acamp-1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T101004Z&X-Amz-Expires=86400&X-Amz-Signature=534510e33f076b9a0f27247f6bd357522cc7c7572c03ace8f653f73c0ba970fe&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22acamp-1.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f7cfbb39-5e1e-4bf0-8196-64f1ceea01e1/acamp-2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T101007Z&X-Amz-Expires=86400&X-Amz-Signature=e4dd512a1e8ca46d837ff4cb303e0ced2a43aab2192c5873d104ec83aa5baaeb&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22acamp-2.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/91845997-8909-4d06-bd36-a0b8c09b06a5/acamp-3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T101012Z&X-Amz-Expires=86400&X-Amz-Signature=150da43d7a300408bee8b8c29c1cefbe5199caa7dd4c20696218ebd7cab8cf83&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22acamp-3.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/79970659-67dc-44c7-85e5-347d39fda010/acamp-4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T101017Z&X-Amz-Expires=86400&X-Amz-Signature=e861b9422c31f3758fe41d45ec240985abc950dd7ecb649c952246dfa9d8ea66&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22acamp-4.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b799e639-f754-45c5-8f11-b6038f85e6a6/acamp-5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T101020Z&X-Amz-Expires=86400&X-Amz-Signature=2c79aefa8eba10f2b7b62ce4bfc61626736db4f6063c96ae73591aed3042e903&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22acamp-5.PNG.png%22&x-id=GetObject'
    ],
    details: [
      'Migrated Apple Maps to Google Maps.',
      'Added Apple Pay to easier book a camp.',
      'Used Realm as a local database to offline support and faster load.',
      'Added flagging feature and switching environment for better testing and delivering. '
    ],
    tech: ['Google Maps', 'Apple Pay', 'Realm', 'Snapkit']
  },
  {
    id: 'worx360',
    name: 'Worx360',
    screenshots: [
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/014046ad-618c-4e8f-8401-2df4ece6ab90/worx360-1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221214T214207Z&X-Amz-Expires=86400&X-Amz-Signature=9956680398dc92484797974b9858ab95e2bef71ab9c7c667dc35fcfdcdce0a07&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22worx360-1.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0672eee2-6f6b-4a34-8392-cf4f62472f3c/worx360-2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221214T214452Z&X-Amz-Expires=86400&X-Amz-Signature=dce767a436b2daa30f74150bf75058cc8fa6850776a493ed13ea6b37a4325212&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22worx360-2.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c2e4b560-ecef-4d6a-9cb0-b3550983c64a/worx360-3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221214T214445Z&X-Amz-Expires=86400&X-Amz-Signature=d6241cf2b2c631c744c2807f3e2acd182680bfbd82ea2fa9f4b5f71957f3438c&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22worx360-3.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/68cf8adb-740c-40e3-bd9f-6af7ca521d42/worx360-5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221214T214442Z&X-Amz-Expires=86400&X-Amz-Signature=be352e20e549bc93d9686af23dbdc37f0b28f0cbad872e90df4a4d65c3079d51&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22worx360-5.PNG.png%22&x-id=GetObject'
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
    ]
  },
  {
    id: 'infinidus',
    name: 'Infinidus',
    screenshots: [
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a7425c5e-2733-4fe7-9ed0-7b1986aa50e4/infinidus-1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T012252Z&X-Amz-Expires=86400&X-Amz-Signature=8dc8c58ef9e91495b7a48320ef457482f5f91efff98eef1bbcec9234d7d660ee&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22infinidus-1.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11a9e556-5b90-4c8b-9082-7a7a3f24577e/infinidus-2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T012302Z&X-Amz-Expires=86400&X-Amz-Signature=d44d7e047cd14972c0c97814d4bdf3ffeb4aeb8d670f9a31590706be191d9dba&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22infinidus-2.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5a9d6d30-8b9b-4407-af84-6153b5f9ec82/infinidus-3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T012306Z&X-Amz-Expires=86400&X-Amz-Signature=c26b7fbf03ec25b6ee528dbbae5ecefaeec1062225991a640c34816697ccbad4&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22infinidus-3.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e8257211-2d1f-4d3b-aa54-69f4780edb3a/infinidus-5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T012312Z&X-Amz-Expires=86400&X-Amz-Signature=0549f367745693bd17850e5c410dfffe2154fb94f5e1fbcf5d5ae0ef215df094&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22infinidus-5.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/908f6e3a-7513-45af-84df-d07f3e3d8425/infinidus-7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T012336Z&X-Amz-Expires=86400&X-Amz-Signature=c7abd88e434af512259296be4b98cf99e59b454ffdcf393b4be12a09ecb70c58&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22infinidus-7.png%22&x-id=GetObject'
    ],
    details: [
      'Mentored and supported 2 iOS developers in building complicated features. Managed and assigned tasks to their abilities.',
      'Geofence to display message at the correct location.'
    ],
    tech: ['Nest.js', 'Prisma', 'PostgreSQL', 'AWS', 'Twilio']
  },
  {
    id: 'done',
    name: 'Done!',
    screenshots: [
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c8c1fc0e-290e-4b35-b5d4-ee2565fe58b6/done-1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T104014Z&X-Amz-Expires=86400&X-Amz-Signature=9f0cf3ecb4bcbcd3181f126d285d7353fc262085e19234eda548e6244c9c2508&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22done-1.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4a1e992c-1dc6-48c7-855b-69a70aa33ac9/done-2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T104018Z&X-Amz-Expires=86400&X-Amz-Signature=db50c5a9f1e69ddfd57eaa81ebf37e730f8e35016edce19a7a6dfe959def5283&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22done-2.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cbfaa860-07e6-48cb-bf50-563497b801bb/done-3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T104022Z&X-Amz-Expires=86400&X-Amz-Signature=f0084d140fd8966ea43c4eede5329ddfa715451daee02d72d15fb124f84637ab&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22done-3.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6429ae26-3cf1-4975-9a2f-0ba16de53602/done-4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T104026Z&X-Amz-Expires=86400&X-Amz-Signature=a5906a944a6393ee185443b6aa3ead5461ff0729e3e8be993585a990d230d43d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22done-4.PNG.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/77e6a2f4-e0dd-4330-8997-4e418fe7d372/done-5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T104031Z&X-Amz-Expires=86400&X-Amz-Signature=71ed0f204aa73fffca69b3667d6120dc42cacf886a58b39fb3f7170370e37290&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22done-5.PNG.png%22&x-id=GetObject'
    ],
    details: [
      'Authenticated with Firebase',
      'Persistence with Realm for offline support.',
      'Built UI programmatically with Snapkit'
    ],
    tech: ['Firebase', 'Snapkit', 'Realm']
  },
  {
    id: 'groovetime',
    name: 'Groovetime',
    imageWidth: 800,
    screenshots: [
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b40a4de2-e54e-4dff-89fa-6a92c847ad1f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T034722Z&X-Amz-Expires=86400&X-Amz-Signature=dc5e6cc6185463115130c093bf1cc50f6b8d0c0d58123141d4a4d3730d023311&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject'
    ],
    details: [
      'Simply create Solana wallet with social login.',
      'Implement Moonpay on iOS and backend for on-ramp progress.',
      'Show and bid video NFTs in app.'
    ],
    tech: ['SwiftUI', 'Moonpay', 'Java', 'Web3Auth']
  },
  {
    id: 'neuroid',
    name: 'Neuro-ID-SDK',
    imageWidth: 150,
    screenshots: [
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/72e667a1-e8ff-4c7e-8f19-1e7f0badde6c/neuroid.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T041638Z&X-Amz-Expires=86400&X-Amz-Signature=554354410bb1b32bec578e1c082e2c90defa4e497a3dc55a9285bdd66a0592ea&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22neuroid.png%22&x-id=GetObject'
    ],
    details: [
      'A Human Analytics SDK silently capture user behaviors.',
      'Developer friendly, only one line to setup.'
    ],
    tech: ['Observation pattern', 'Method swizzling', 'SQLCipher', 'SQLite']
  },
  {
    id: 'video-recorder',
    name: 'The social app - Video recorder',
    imageWidth: 150,
    rounded: true,
    screenshots: [
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F18e2dad4-d5b5-4dce-a389-66f7844c4aac%2FItunesArtwork2x.png?table=block&id=4c0e2338-507e-4fd1-ab92-2078bd8fb2e4&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=250&userId=&cache=v2'
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
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5fa21f73-c157-47ca-88b2-cdf145b0fe70%2FScreenshots-11.jpg?id=7543e5f7-f49a-41ac-b3f3-84bb5c607de0&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=2000&userId=&cache=v2',
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F08bbc55c-00cf-401c-8c09-1799f3312d96%2FScreenshots-12.jpg?id=2b1df042-7a5f-45de-ae0d-aa0b5073e3fb&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=2000&userId=&cache=v2',
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff1073a00-b973-4615-93ff-96afbb66a873%2FScreenshots-13.jpg?id=910e0404-e9a1-4f27-9c78-523f78b322bd&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=2000&userId=&cache=v2',
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F04e0bbb7-ead2-4b26-9459-2d689974560a%2FScreenshots-15.jpg?id=e970352c-3c7b-433c-8e3d-04730bd18186&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=2000&userId=&cache=v2',
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fffd6ea67-62dc-4667-bc07-09c002d25ae5%2FScreenshots-16.jpg?id=4d50f2f3-6e10-454c-82b7-646a0c487649&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=2000&userId=&cache=v2'
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
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F57c1c044-7b5c-4d7b-9d90-7d018fdb23e3%2Fwebgaff_screenshot_2.jpg?id=f9e6d1d4-b75b-405c-8f93-9ce31ccba585&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=1740&userId=&cache=v2',
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa195a03c-e7e4-49cc-9740-3100f171cfec%2Fwebgaff_screenshot_3.jpg?id=a4b1f120-49bc-4e8d-a2c1-b815218f8c0f&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=1740&userId=&cache=v2',
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fef2fa650-5e90-4832-b82f-4cb8d8c36609%2Fwebgaff_screenshot_4.jpg?id=ffbd2823-9564-452c-bcfe-e6ae1389048f&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=1740&userId=&cache=v2',
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F502ae0c0-0e9e-42ca-b047-ed6167a72d8f%2Fwebgaff_screenshot_5.jpg?id=c868b306-d959-4f5b-8934-db626ca27040&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=1740&userId=&cache=v2'
    ],
    details: [
      'WebGaff is an Ireland based mobile and online real estate and rental marketplace, focused on providing real-time data and analytics to potential customers about properties of interest.'
    ],
    demoUrl: 'https://youtu.be/03fy9G_FKhk',
    tech: ['Storyboard', 'CoreLocation', 'Google Maps SDK']
  },
  {
    id: 'opiny',
    name: 'Opiyn',
    screenshots: [
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F319fe5c1-4a74-4331-9027-474da8e8dafe%2FScreenshots-17.jpg?id=161bfabc-5a76-49b4-827e-5462326ae3c2&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=2000&userId=&cache=v2',
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4dd8e29d-31ac-4bd1-bfde-f740e58f58d9%2FScreenshots-18.jpg?id=7d1922cf-11db-4c5d-889b-711e6ec53203&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=2000&userId=&cache=v2',
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafd98415-e279-4456-92f0-ed2e3305292a%2FScreenshots-19.jpg?id=8567ada3-e99d-428a-9c45-29f294e0559a&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=2000&userId=&cache=v2'
    ],
    details: ['Opiyn a mobile interactive reviewing social network.'],
    tech: ['Firebase', 'Geofencing', 'Google Maps SDK', 'Google Places SDK']
  },
  {
    id: 'drips',
    name: 'Drips',
    screenshots: [
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd6033b09-5eab-46ec-9d04-5b9d82c715f9%2FIMG_1267_(1).png?id=ffae9e2f-94dc-444c-8e46-3fec6c352e63&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=1660&userId=&cache=v2',
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc3a3016d-6ccc-42c9-af7c-872b62b39b7a%2FIMG_1270_(1).png?id=211bbf71-b344-4561-be25-49b10f321aa5&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=1660&userId=&cache=v2',
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa13dba81-9a80-4e4c-9138-78e334ec73d9%2FIMG_1271_(1).png?id=5300b531-0f7f-43b8-851b-026087e93a72&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=1660&userId=&cache=v2',
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffeffc2e5-22e9-4ea4-af35-70f82455c664%2FIMG_1268-min.png?id=9865d790-c7cb-41c2-90af-fea5c202c01d&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=1660&userId=&cache=v2'
    ],
    demoUrl: 'https://apps.apple.com/gb/app/snapshop-republic/id1309079895',
    details: [
      'Drips is a fashion marketplace that brings together the best fashion brands and boutiques into one easy and seamless shopping app.'
    ],
    tech: ['Stripe', 'Swift', 'Auto Layout Programmatically ']
  },
  {
    id: 'fixir',
    name: 'Fixir',
    imageWidth: 100,
    screenshots: [
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Feb51397e-b3a0-42af-b73c-99c18dcca4ef%2Ffixir.png?table=block&id=e2542bd4-5e04-4fb1-bd9f-258c3f0463dc&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=250&userId=&cache=v2'
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
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcb83f591-00b1-4dee-8fb1-fab19580a2fe%2Fstreamy.png?table=block&id=21d98fac-02cd-4b86-9b14-895685c21a36&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=250&userId=&cache=v2'
    ],
    details: ['Streamy is a ticket marketplace and streaming app.'],
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
      'https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F348f4ac6-dc28-4e3c-9435-bb0610d6ee3f%2FUntitled.png?id=7c1a3836-aeb6-4d61-9300-47402b42c9b7&table=block&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=2000&userId=&cache=v2'
    ],
    details: [
      'Hang out with your friends without the hassle of making plans',
      'Group calendar, group chat'
    ],
    tech: ['Geofencing', 'Google Places/Maps SDK', 'socket.io']
  },
  {
    id: 'revie',
    name: 'Food revie',
    screenshots: [
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b8c614f4-ca86-4efc-8898-c7d26fc25e5e/food-revie-1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T082146Z&X-Amz-Expires=86400&X-Amz-Signature=5ea9d76a16c6f615b1beb86a2760cbc246f9a4de5c3edde25111ff7e29521db4&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22food-revie-1.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dbd3d733-0ab2-46bc-8f9a-c8ced15e29e7/food-revie-4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T082152Z&X-Amz-Expires=86400&X-Amz-Signature=312e77d736d02aab0958972d555c61da5a38e55e99e7dfd0529a64b187897770&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22food-revie-4.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eb754a11-984d-4138-8e6e-d9e3f13e7b5d/food-revie-5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T082156Z&X-Amz-Expires=86400&X-Amz-Signature=ec823b9a2aed34c1fe3e4c63ed144f39cef79a8fb27a4c96a1820ec72118b250&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22food-revie-5.png%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/72030ee2-1a6d-4609-a0ed-9fd85b17753c/food-revie-6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T082200Z&X-Amz-Expires=86400&X-Amz-Signature=d0877272afa6d42b4b9be4e3f17a2327f80a888d8eaf24371a23c17c93ea1435&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22food-revie-6.png%22&x-id=GetObject'
    ],
    details: ['Geofence to show restaurants around.', 'Share review by videos'],
    tech: ['Geofence', 'Google Maps SDK', 'AVFoundation']
  }
]
