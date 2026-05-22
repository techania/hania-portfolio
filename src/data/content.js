export const profile = {
  name: 'Hania Guiagoussou',
  role: 'Deployment Strategist',
  tagline: 'Strategist and designer',
  location: 'New York, NY',
  email: 'mail2hania@gmail.com',
  linkedin: 'https://www.linkedin.com/in/haniaguiagoussou/',
  instagram: 'https://www.instagram.com/csgirlcolumbia/',
  tiktok: 'https://www.tiktok.com/@hania_guia',
  youtube: 'https://www.youtube.com/channel/UCrKkUL0nBOcrY3m61eAJoag',
  resumeUrl: '/Hania-Guiagoussou-Resume.pdf',
}

export const about = {
  headshot: '/Hania.jpg',
  intro:
    "A strategist and designer, working where product, design, and data overlap.",
  body: [
    "Studied computer science at Columbia and economics at Sciences Po Paris, two schools, two ways of thinking about systems and the people inside them. Started in EdTech, working as a data analyst and TPM building tools and infrastructure for learning programs. Then moved into deployment strategy, embedding with enterprise customers to turn real problems into software that actually gets used.",
  ],
  highlights: [],
}

export const projects = [
  {
    id: 'aliotos',
    title: 'Aliotos',
    year: '2023',
    type: 'Smartwatch app',
    category: 'Design + Engineering',
    role: 'Designer & Developer',
    tools: ['Figma', 'Swift', 'watchOS', 'iOS'],
    blurb:
      'A communication app for non-verbal users where children tap icons on their Apple Watch to express themselves, while a caregiver companion app on iPhone mirrors the same interface for real-time support and check-ins.',
    tags: ['Accessibility', 'Wearable', 'Healthcare', 'Companion'],
    color: '#3FB8D1',
    thumbnail: '/projects/aliotos/aliotos.png',
    heroImage: '/projects/aliotos/hero.png',
    sourceUrl:
      'https://haniaguiagoussou.wixsite.com/hania-guiagoussou/copy-of-water-saver-1',
    overview: {
      problem:
        'Existing AAC workflows split child and caregiver experiences across disconnected tools. Tablets are bulky; watch-based communication is fast, but caregivers also need a phone-based AAC option when the child hands it over.',
      goal:
        'Build a paired watch and companion experience with an easy toggle so the same expressive AAC system works both on the child’s watch and the parent’s phone.',
      audience:
        'Nonverbal children, caregivers, and families who need a flexible communication system that supports both independence and shared device handoff.',
    },
    process: [
      {
        phase: 'Research',
        summary:
          'Interviewed parents, caregivers, and speech-language pathologists. A mother described wanting the AAC interface on her phone so she could hand it over without making her child take the watch off. These conversations shaped the dual-mode product direction.',
      },
      {
        phase: 'Structure',
        summary:
          'Designed a grid-first watch interface with core categories and quick action buttons. Defined the parent companion around live status, watch battery, alert actions, and message context.',
      },
      {
        phase: 'Design',
        summary:
          'Refined iconography, button hierarchy, and color to support rapid choice-making. Built a bright, friendly companion dashboard with clear feedback for last message, location, and alert state.',
      },
      {
        phase: 'Build',
        summary:
          'Developed the watchOS and iOS companion UI in Swift, focusing on seamless transitions between parent and child flows and reliable communication across devices.',
      },
    ],
    features: [
      'Watch-based category grid for fast, tap-driven communication',
      'Phone companion AAC toggle so caregivers can switch the same interface onto the phone',
      'Parent dashboard with last message, watch battery, alert, and live location',
      'Quick-response buttons for Thank you, Yes, No, and More',
      'Dual persona state: Parent and child flows for shared context',
      'Accessible icon system and large touch targets for users with motor challenges',
      'Live location map with standard and satellite views',
      'End-to-end Swift implementation across watchOS and iOS',
    ],
    insights: [
      {
        title: 'Accessibility is a spectrum',
        body: 'No one-size-fits-all. The system needs to be flexible and customizable from the first tap.',
      },
      {
        title: 'Wearables reimagine AAC',
        body: 'Moving from tablet to watch collapses the distance between child and world. Communication becomes ambient, not performative.',
      },
      {
        title: 'Design for connection',
        body: 'Beyond function, the goal was self-expression and bridges between child, parent, and therapist.',
      },
    ],
    testimonials: [
      {
        quote: "Because it's always on him, communication feels more natural and immediate.",
        attribution: 'Mother',
      },
      {
        quote: 'For the first time, it felt like the tool fit him instead of the other way around.',
        attribution: 'Father',
      },
      {
        quote: 'It meets the user where they are, instead of asking them to adapt to the tool.',
        attribution: 'Therapist',
      },
    ],
    outcome:
      'A full AAC product, designed and built end-to-end: a native watchOS app, an iOS companion, and a design system holding it together. Swaps stigma and bulk for independence, connection, and a modern sense of voice.',
    personas: [
      {
        name: 'The User',
        age: '12–16',
        role: 'Nonverbal child',
        quote: 'I want to say things without everyone staring at a big screen.',
        goals: [
          'Communicate independently with peers without drawing attention',
          'Express urgency when he needs something important',
          'Feel included in group conversations',
        ],
        painPoints: [
          'Existing tablets are bulky and stigmatizing in social settings',
          'Limited vocabulary pre-loaded into systems doesn\'t match his real needs',
          'Takes too long to compose messages in group situations',
        ],
        behaviors: [
          'Uses multiple communication methods depending on context (sounds, gestures, AAC)',
          'Communicates more when in familiar, low-pressure environments',
          'Wants to maintain eye contact and social presence',
        ],
        icon: 'MessageSquare',
        color: '#3FB8D1',
      },
      {
        name: 'The Caregiver',
        age: '35–55',
        role: 'Parent',
        quote: 'I need to let him grow, but also know he\'s safe and can reach me.',
        goals: [
          'Give their child agency and independence in communication',
          'Maintain a discreet way to check in without hovering',
          'Understand what he\'s trying to communicate when frustration builds',
        ],
        painPoints: [
          'Feels conflicted monitoring them, but worried about safety',
          'Existing solutions force impossible choices between surveillance and independence',
          'Limited visibility into daily communication needs and progress',
          'Device restrictions make it hard to customize for evolving vocabulary',
        ],
        behaviors: [
          'Works closely with speech-language pathologists on communication strategies',
          'Constantly adjusts AAC settings based on feedback and context',
          'Balances protection with pushing for more independence',
        ],
        icon: 'Heart',
        color: '#2D8FA8',
      },
    ],
    artifacts: [
      {
        heading: 'Navigation hierarchy',
        caption:
          'A button-first menu structure that supports fast category selection and deeper submenu exploration, allowing users to access both immediate high-frequency responses and more specific communication options.',
        layout: 'menu-hierarchy',
        menuItems: [
          {
            name: 'Food',
            purpose: 'Quick food requests and preferences',
            submenus: ['Breakfast', 'Lunch', 'Dinner', 'Snack']
          },
          {
            name: 'Drink',
            purpose: 'Beverage choices and hydration needs',
            submenus: ['Water', 'Juice', 'Milk', 'Soda']
          },
          {
            name: 'Help',
            purpose: 'Emergency assistance and support calls',
            submenus: ['Mom', 'Dad', 'Teacher', 'Doctor']
          },
          { name: 'Toilet', purpose: 'Bathroom and hygiene requests' },
          { name: 'Play', purpose: 'Activity and entertainment options' },
          { name: 'Thank You', purpose: 'Positive acknowledgment response', color: '#3FB8D1' },
          { name: 'No', purpose: 'Negative or rejection response', color: '#FF5454' },
          { name: 'Yes', purpose: 'Affirmative response', color: '#70C573' },
          { name: 'More', purpose: 'Request additional options or help', color: '#FF964F' },
        ],
      },
      {
        heading: 'Visual system',
        caption:
          'Two palettes: a dark watchOS palette for fast, low-glare interaction, and a warm companion phone palette for caregiver context. The watch uses near-black backgrounds and deep surfaces for focus, while the phone employs soft mint-greens and white cards for clarity.',
        layout: 'visual-system',
        colors: [
          {
            section: 'Watch palette',
            entries: [
              { name: 'Watch background', hex: '#121212', usage: 'Primary watch screen' },
              { name: 'Watch surface', hex: '#2B2A33', usage: 'Watch menu cards' },
              { name: 'Thank You', hex: '#3FB8D1', usage: 'Positive response' },
              { name: 'No', hex: '#FF5454', usage: 'Negative response' },
              { name: 'Yes', hex: '#70C573', usage: 'Affirmative response' },
              { name: 'More', hex: '#FF964F', usage: 'Expand / more options' },
            ],
          },
          {
            section: 'Companion phone palette',
            entries: [
              { name: 'Phone background', hex: '#E2F5EE', usage: 'Companion app canvas' },
              { name: 'Phone header', hex: '#1CC8A0', usage: 'Parent dashboard header' },
              { name: 'Card surface', hex: '#FFFFFF', usage: 'Companion app cards' },
              { name: 'Alert red', hex: '#FF4B4B', usage: 'Urgent status and warnings' },
              { name: 'Title text', hex: '#1A3A33', usage: 'Primary phone text' },
              { name: 'Icon bg', hex: '#E6FAF4', usage: 'Companion icon surfaces' },
            ],
          },
        ],
      },
    ],
    finalScreens: {
      sections: [
        {
          subheading: 'Watch Interface',
          description:
            'The watch interface is built around a grid-first category system. Each tile maps to a core communication need: Food, Drink, Help, and more. Quick-response buttons (Yes, No, Thank You, More) are anchored for instant, single-tap replies. Large touch targets and high-contrast icons keep interaction fast and eyes-free.',
          images: [
            {
              src: '/projects/aliotos/Watch App_ Basic Anatomy & Key Menus.png',
              alt: 'Watch App: Basic Anatomy & Key Menus',
            },
          ],
        },
        {
          subheading: 'Companion App Modes',
          imageMaxWidth: 'max-w-3xl',
          description:
            'The companion app gives caregivers a real-time view of their child\'s communication. The dashboard surfaces the last message sent, watch battery level, live location, and alert state, all in one scroll. A phone-side AAC toggle mirrors the watch interface so parents can hand the phone over without switching apps.',
          images: [
            {
              src: '/projects/aliotos/Companion App_ Basic Anatomy & Key Menus.png',
              alt: 'Companion App: Basic Anatomy & Key Menus',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'water-saver',
    title: 'Water Saver',
    year: '2022',
    type: 'IoT system',
    category: 'UX / Full-Stack',
    role: 'UX Designer · Front-End Developer',
    tools: ['Figma', 'Flask', 'Python', 'JavaScript', 'HTML/CSS', 'Java'],
    blurb:
      'A water optimization system that helps households monitor, reduce, and rethink their daily water consumption. Pairs a real-time irrigation backend with a calm, legible interface.',
    tags: ['UX Research', 'IoT', 'Sustainability'],
    color: '#5F818C',
    thumbnail: '/projects/watersaver/Watersaver.png',
    heroImage: '/projects/watersaver/hero.png',
    demoUrl: 'https://www.tiktok.com/@hania_guia/video/7138174062504840454',
    sourceUrl: 'https://haniaguiagoussou.wixsite.com/hania-guiagoussou/water-saver',
    overview: {
      problem:
        'California was in one of its worst droughts in decades, mandatory conservation targets in place, and most households had no visibility into how much water they were actually wasting.',
      goal:
        'Replace the previously existing JMX interface with a clean front-end that surfaces live sensor data and gives households real control over their water footprint.',
      audience:
        'Households reducing water use during drought, from home gardeners to people managing multiple sources who want automation without the complexity.',
    },
    process: [
      {
        phase: 'Hardware setup',
        summary:
          'Wired temperature and humidity sensors to a Raspberry Pi and configured GPIO pins to control water source relays. This gave the software direct, low-latency control over when each water source activates and stops.',
      },
      {
        phase: 'Algorithm design',
        summary:
          'Built a configurable irrigation algorithm that reads live sensor data against user-defined thresholds. If temperature or humidity crosses a set limit, the system triggers the correct relay autonomously, no manual input required.',
      },
      {
        phase: 'JMX bridge',
        summary:
          'The existing backend exposed controls through JMX, a Java management interface not built for end users. Mapped those endpoints to a Python Flask layer that translated user actions into backend commands and served a clean API to the front-end.',
      },
      {
        phase: 'Interface build',
        summary:
          'Designed and built a Flask and vanilla JS front-end to replace the JMX interface entirely. Prioritized real-time sensor readings, schedule controls, and threshold configuration so the full system is usable without any technical background.',
      },
    ],
    insights: [
      {
        title: 'Hardware as a design constraint',
        body: 'Every UI decision had to clear a hardware bar first. The Raspberry Pi GPIO layer was fast and reliable, but it set hard limits on what the software could promise.',
      },
      {
        title: 'Building the algorithm',
        body: 'Designing the irrigation logic meant deciding exactly how sensor readings map to watering decisions. Temperature and humidity thresholds had to be configurable by users while remaining precise enough to trigger the right relay at the right time.',
      },
      {
        title: 'Bridging physical and digital',
        body: 'Wiring sensors to GPIO pins and translating live readings into relay triggers taught me how tightly physical systems and software have to be designed together to work reliably.',
      },
    ],
    outcome:
      'An end-to-end IoT system: sensors wired to a Raspberry Pi, a configurable irrigation algorithm that reads live data and triggers the right relay autonomously, and a backend that gives households real control over their water footprint.',
    award: "Won the Duke's Choice Award, Oracle's recognition for the most innovative use of Java technology.",
    awardUrl: 'https://blog.google/products-and-platforms/products/education/my-coding-journey/',
    personas: [
      {
        name: 'Sarah',
        age: '38',
        role: 'Home Gardener',
        quote: 'I want to do right by my garden without wasting water or worrying about it.',
        goals: [
          'Monitor and reduce water usage without daily manual effort',
          'Keep plants healthy across different watering needs',
        ],
        painPoints: [
          'No visibility into how much water is actually being used day to day',
          'Manual scheduling is tedious and easy to forget',
        ],
        behaviors: [
          'Waters by habit rather than data, often over-watering in dry months',
          'Values simplicity over feature density in her tools',
        ],
        icon: 'Leaf',
        color: '#5F818C',
      },
    ],
    artifacts: [
      {
        heading: 'Visual system',
        caption:
          'A restrained palette built around a muted blue and neutral greys, keeping the interface calm and legible so the live data stays front and center.',
        layout: 'visual-system',
        colors: [
          {
            section: 'Core palette',
            entries: [
              { name: 'Theme Blue', hex: '#5F818C', usage: 'Primary brand color' },
              { name: 'White Background', hex: '#FFFFFF', usage: 'App background' },
              { name: 'Grey Secondary', hex: '#B6B4B4', usage: 'Secondary UI elements' },
              { name: 'Grey Secondary', hex: '#E4E4E4', usage: 'Subtle backgrounds and dividers' },
            ],
          },
        ],
      },
      {
        heading: 'System algorithm',
        caption:
          'The irrigation logic maps live sensor inputs to watering decisions. Temperature and humidity readings are tested against user-defined thresholds; when a limit is crossed, the Raspberry Pi GPIO layer triggers the correct relay, activating or stopping a water source without any manual input.',
        images: [
          {
            src: '/projects/watersaver/WaterSaverAlgorithm.png',
            alt: 'Water Saver irrigation algorithm diagram',
          },
        ],
      },
    ],
    finalScreens: {
      sections: [
        {
          subheading: 'Dashboard & Live Readings',
          columns: 2,
          description:
            'The main dashboard surfaces real-time temperature, humidity, and pressure through clean, glanceable icons. Auto-alert toggles hand control to the irrigation system the moment conditions cross user-defined thresholds.',
          images: [
            {
              src: '/projects/watersaver/hifi1.avif',
              alt: 'Water Saver dashboard with live environmental readings',
            },
            {
              src: '/projects/watersaver/hifi2.png',
              alt: 'Water Saver alert controls and threshold settings',
            },
          ],
        },
        {
          subheading: 'Scheduling & Configuration',
          columns: 2,
          description:
            'Custom watering schedules let users set duration, frequency, and intervals per water source. Sleep-time windows and threshold controls prevent over-watering and protect plants during off-hours.',
          images: [
            {
              src: '/projects/watersaver/hifi3.png',
              alt: 'Water Saver scheduling interface',
            },
            {
              src: '/projects/watersaver/hifi4.png',
              alt: 'Water Saver configuration and source settings',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'click2consume',
    title: 'Click2Consume',
    year: '2022',
    type: 'Cloud tool',
    category: 'Cloud',
    role: 'Designer & Developer',
    tools: ['Oracle Cloud Infrastructure', 'Python', 'JavaScript', 'Slack API', 'Gmail API'],
    blurb:
      'A cloud tool built on Oracle Cloud Infrastructure that streamlines how teams move data in and out of OCI. Collapses a clunky, multi-step upload flow into one reliable click-to-consume experience.',
    tags: ['Cloud', 'OCI', 'Developer Tools'],
    color: '#994839',
    thumbnail: '/projects/click2consume/click2consume.png',
    heroImage: '/projects/click2consume/hero.png',
    overview: {
      problem:
        'The Oracle OCI interface required complex multi-page navigation and cumbersome upload flows just to share a file. Basic usability principles around flexibility, efficiency, and minimalist design were all failing.',
      goal:
        'Simplify file sharing on OCI into a single, streamlined flow - letting users upload, generate a pre-authenticated link, and send it via email or Slack without unnecessary steps.',
      audience:
        'Teams and developers who need to move files in and out of OCI quickly, without navigating a tool built for infrastructure engineers.',
    },
    process: [
      {
        phase: 'Audit',
        summary:
          'Mapped the existing Oracle OCI upload and sharing flow, identifying where usability broke down. The multi-page navigation, redundant steps, and limited sharing destinations were the core problems to solve.',
      },
      {
        phase: 'Architecture',
        summary:
          'Designed a single-flow experience: select destination, enter recipient, upload file, send. Integrated the Slack API and Gmail API to support multi-channel delivery from one interface.',
      },
      {
        phase: 'Build',
        summary:
          'Built the tool on Oracle Cloud Infrastructure, connecting OCI buckets to pre-authenticated link generation and wiring up the Slack and Gmail APIs for direct delivery to recipients.',
      },
      {
        phase: 'Test',
        summary:
          'Validated the flow end-to-end across both sharing channels, confirming link generation, delivery reliability, and a measurable reduction in clicks compared to the original OCI interface.',
      },
    ],
    features: [
      'Single-flow upload: destination, recipient, file, send',
      'Pre-authenticated link generation from OCI buckets',
      'Multi-channel delivery via email and Slack',
      '60% reduction in clicks required to share a file',
      '40% increase in successful first-time uploads',
      '3× increase in distribution channels vs. original OCI interface',
    ],
    insights: [
      {
        title: 'Usability is a system problem',
        body: "The original OCI interface wasn't just hard to use - it was built without usability principles in mind. Fixing it meant redesigning the flow entirely, not patching individual screens.",
      },
      {
        title: 'APIs as UX levers',
        body: "Wiring in the Slack and Gmail APIs wasn't just a technical decision - it directly expanded what the tool could do for users without adding complexity to the interface.",
      },
      {
        title: 'Clicks matter',
        body: 'Reducing the number of steps from upload to delivery was the clearest measure of success. Every removed click was a real reduction in friction for the people using it.',
      },
    ],
    outcome:
      'A single-flow file sharing tool on OCI that cut required clicks by 60%, tripled available distribution channels, and increased successful first-time uploads by 40%.',
    artifacts: [
      {
        heading: 'System architecture',
        caption: "The tool connects OCI bucket storage to pre-authenticated link generation, then routes delivery through the Slack or Gmail API based on the user's selected destination.",
        images: [
          {
            src: '/projects/click2consume/architecture.png',
            alt: 'Click2Consume system architecture diagram',
          },
        ],
      },
    ],
    finalScreens: {
      sections: [
        {
          subheading: 'Upload & Share Flow',
          columns: 2,
          description:
            'The core flow: select a destination, enter a recipient, upload a file, and send. Each step is a single screen - no multi-page navigation, no redundant confirmations.',
          images: [
            { src: '/projects/click2consume/hifi1.png', alt: 'Click2Consume landing screen' },
            { src: '/projects/click2consume/hifi2.png', alt: 'Click2Consume recipient entry' },
          ],
        },
        {
          subheading: 'File Upload & Confirmation',
          columns: 2,
          description:
            'Users choose to browse their device or paste a link, then confirm. The pre-authenticated OCI link is generated automatically and delivered to the recipient via their chosen channel.',
          images: [
            { src: '/projects/click2consume/hifi3.png', alt: 'Click2Consume file upload screen' },
            { src: '/projects/click2consume/hifi4.png', alt: 'Click2Consume confirmation screen' },
          ],
        },
      ],
    },
  },
  {
    id: 'stylist',
    title: 'Stylist',
    year: '2015',
    type: 'AI app',
    category: 'AI / UX',
    role: 'Designer & Developer',
    tools: ['OpenAI API', 'Flask', 'Python', 'JavaScript', 'HTML/CSS'],
    blurb:
      "An AI-powered outfit suggestor that generates personalized recommendations based on weather, season, style, and personal preferences. Driven by iterative prompt engineering to turn user context into advice that actually fits.",
    tags: ['AI', 'Fashion', 'UX'],
    color: '#5B693D',
    thumbnail: '/projects/stylist/stylist.png',
    heroImage: '/projects/stylist/hero.png',
    videoUrl: 'https://www.tiktok.com/@hania_guia/video/7168338545755639045',
    overview: {
      problem:
        'Figuring out what to wear and putting together an outfit that actually reflects your style takes more thought than it should, especially when you\'re short on time.',
      goal:
        'Use iterative prompt engineering to coax genuinely useful, personalized outfit recommendations out of the OpenAI API, then wrap them in an interface anyone can use.',
      audience:
        'Fashion-conscious people with busy schedules who want personalized styling without the friction of scrolling through endless options.',
    },
    process: [
      {
        phase: 'Research',
        summary:
          'Defined the problem through persona development and pain point analysis. Mapped how people actually make outfit decisions to identify where the friction was highest.',
      },
      {
        phase: 'Design',
        summary:
          'Built out user flows, sketches, and lo-fi wireframes before moving to a hi-fi design system. Ran accessibility reviews throughout to ensure the interface worked for a broad range of users.',
      },
      {
        phase: 'Prompt engineering',
        summary:
          'This was the core of the project. Ran dozens of prompt iterations, adjusting structure, specificity, and context injection, until the outputs felt like real style advice rather than generic suggestions. Each variable (weather, occasion, age, personal style) required its own tuning to produce reliable, relevant results.',
      },
      {
        phase: 'Build',
        summary:
          'Built the app in Flask with a Python backend and vanilla JS front-end. Integrated the OpenAI API and validated the full flow end-to-end across different user preference combinations.',
      },
    ],
    features: [
      'Prompt engineering as the primary design surface: iterated on structure, tone, and context injection across many versions',
      'Multi-variable context input: weather, season, occasion, age, and personal style all fed into the prompt',
      'Prompts tuned to produce specific, actionable outfit advice rather than vague suggestions',
      'Intuitive interface that makes the AI capability accessible to non-technical users',
    ],
    insights: [
      {
        title: 'Prompt engineering is design',
        body: 'Every iteration of the prompt was a design decision. Structure, specificity, ordering of variables: each choice changed the output quality. The best prompts weren\'t the most detailed; they were the most intentional.',
      },
      {
        title: 'Context is what makes AI useful',
        body: 'Generic prompts produce generic outputs. The breakthrough came from injecting real-world context (weather, season, occasion) as structured inputs that the model could reason against. That specificity was the difference between advice that felt personal and advice that felt canned.',
      },
      {
        title: 'Outputs are only as good as the input design',
        body: 'Designing the preference inputs wasn\'t just a UX task. It directly shaped what the model had to work with. Poorly framed inputs led to weaker recommendations. The frontend and the prompt were interdependent.',
      },
    ],
    outcome:
      'Started in 2015 as a high school project that won Cisco\'s IoT World Forum Young Women\'s Innovation Grand Challenge. Rebuilt at Columbia in 2022 when the tools finally caught up to the original idea, with prompt engineering as the core design discipline.',
    award: "Cisco IoT World Forum Young Women's Innovation Grand Challenge winner",
    awardUrl: 'https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2015/m08/cisco-announces-winners-of-iot-world-forum-young-women-s-innovation-grand-challenge.html',
    personas: [
      {
        name: 'Maya',
        age: '26',
        role: 'Busy Professional',
        quote: 'I want to look put together without spending 20 minutes deciding what to wear.',
        goals: [
          'Get outfit suggestions that match her style and the weather',
          'Spend less mental energy on getting dressed in the morning',
        ],
        painPoints: [
          'No time to plan outfits in advance',
          'Generic style advice online never accounts for her specific preferences',
        ],
        behaviors: [
          'Checks the weather every morning before getting dressed',
          'Has a defined personal style but struggles to execute it under time pressure',
        ],
        icon: 'Zap',
        color: '#5B693D',
      },
    ],
    artifacts: [
      {
        heading: 'Visual system',
        caption: 'A warm, earthy palette anchored by an olive green theme with neutral off-white and cream tones to keep the interface grounded and approachable.',
        layout: 'visual-system',
        colors: [
          {
            section: 'Core palette',
            entries: [
              { name: 'Theme', hex: '#5B693D', usage: 'Primary brand color' },
              { name: 'Off White Background', hex: '#FCF9F3', usage: 'App background' },
              { name: 'Dark Cream Secondary', hex: '#B1A8A0', usage: 'Secondary UI elements' },
            ],
          },
        ],
      },
    ],
    finalScreens: {
      sections: [
        {
          subheading: 'Preference Input & Recommendations',
          columns: 2,
          description:
            'Users enter their style preferences, weather, and occasion. The AI returns a personalized outfit recommendation through a clean, single-flow interface.',
          images: [
            { src: '/projects/stylist/hifi1.png', alt: 'Stylist preference input screen' },
            { src: '/projects/stylist/hifi2.png', alt: 'Stylist recommendation screen' },
          ],
        },
        {
          subheading: 'Output & Additional Questionnaires',
          columns: 2,
          description:
            'Additional preference questionnaires that feed the prompt and the output screen.',
          images: [
            { src: '/projects/stylist/hifi3.png', alt: 'Stylist outfit recommendation output' },
            { src: '/projects/stylist/hifi4.png', alt: 'Stylist additional preference questionnaire' },
          ],
        },
      ],
    },
  },
  {
    id: 'learner-dashboard',
    title: 'Learner Risk Dashboard',
    year: '2024',
    type: 'Analytics tool',
    category: 'Data / EdTech',
    role: 'Designer & Developer',
    tools: ['Python', 'Streamlit', 'Pandas'],
    blurb:
      'A dashboard for workforce development program managers to triage 200+ learners across a 3-month training pipeline. Segments cohorts by engagement, progress, and barriers so coaches can focus their time on the people who need it most.',
    tags: ['Data', 'Workforce Development', 'Analytics'],
    color: '#1d293d',
    thumbnail: '/projects/learner-dashboard/learner-dashboard.png',
    demoUrl: 'https://learner-segmentation-dashboard-vtl5uz7k6am5iagovgwfpr.streamlit.app/',
    overview: {
      problem:
        'Program coaches managing 200+ learners across a 3-month workforce development pipeline had no efficient way to identify who was falling behind. Everything lived in spreadsheets, and by the time a learner went silent, it was often too late.',
      goal:
        'Build a tool that automatically segments learners by risk level (using engagement, progress, and barriers as inputs) so coaches can prioritize outreach and allocate their time where it matters most.',
      audience:
        'Program managers and success coaches at workforce development organizations running multi-stage training cohorts.',
    },
    process: [
      {
        phase: 'Segmentation logic',
        summary:
          'Defined composite risk segments across three dimensions: engagement (days since last activity), progress (completion percentage), and barriers (reported challenges). Any Critical criterion flags a learner as urgent.',
      },
      {
        phase: 'Priority worklist',
        summary:
          'Built a ranked worklist that surfaces the highest-risk learners first, sorted by days inactive (descending) then progress (ascending), so coaches open the dashboard and immediately know who to call.',
      },
      {
        phase: 'Build',
        summary:
          'Built the full pipeline in Python using Pandas for data processing and Streamlit for the interactive dashboard. Handles missing values, converts percentages to numeric, and exports the segmented dataset as a downloadable CSV.',
      },
    ],
    features: [
      'Composite risk segmentation across engagement, progress, and barriers',
      'Priority worklist ranked by urgency for immediate coach action',
      'Interactive drilldowns by engagement, progress, grade, barriers, and training stage',
      'Downloadable segmented CSV for offline analysis',
    ],
    insights: [
      {
        title: 'Triage is a design problem',
        body: 'The hardest part wasn\'t the data logic. It was deciding what a coach should see first. Sorting the worklist by days inactive then progress meant the most urgent case was always row one.',
      },
      {
        title: 'Barriers change everything',
        body: 'A learner with 80% progress and a known barrier is more at risk than someone at 40% with none. Treating barriers as a hard override, not just another metric, made the segmentation reflect reality.',
      },
      {
        title: 'Thresholds are opinions',
        body: 'Every cutoff (14 days inactive = Critical, 50% progress = Critical) is a judgment call. Making them configurable in the code means the tool adapts to different programs without a rebuild.',
      },
    ],
    outcome:
      'A live, deployable dashboard that turns a 200-row spreadsheet into a clear triage system. Coaches open it and know exactly who to reach out to, in what order, and why.',
    finalScreens: {
      sections: [
        {
          subheading: 'Segmentation Overview',
          columns: 1,
          description:
            'The executive summary surfaces total learners and segment counts at a glance. The bar chart shows the distribution across Critical, Moderate, and On Track at a glance.',
          images: [
            { src: '/projects/learner-dashboard/overview.png', alt: 'Segmentation overview with KPI tiles and bar chart' },
          ],
        },
        {
          subheading: 'High-Risk Priority Worklist',
          columns: 1,
          description:
            'Learners requiring immediate outreach, ranked by days inactive then progress. Coaches start here.',
          images: [
            { src: '/projects/learner-dashboard/worklist.png', alt: 'High-risk learner priority worklist' },
          ],
        },
        {
          subheading: 'Engagement Breakdown',
          columns: 1,
          description:
            'Dimension-specific drilldowns show how each segment distributes across engagement, progress, grade, barriers, and training stage.',
          images: [
            { src: '/projects/learner-dashboard/engagement.png', alt: 'Engagement breakdown by segment' },
          ],
        },
      ],
    },
  },
  {
    id: 'subway-learn',
    title: 'Subway Learn',
    year: '2022',
    type: 'Wayfinding app',
    category: 'Design',
    role: 'UX Designer',
    tools: ['Figma'],
    blurb:
      'An interactive app that helps tourists and newcomers learn how to navigate the NYC subway, turning the system into something approachable instead of intimidating.',
    tags: ['Tourism', 'Wayfinding', 'Mobile'],
    color: '#D4A59A',
    thumbnail: '/projects/subwayLearn/subwayLearn.png',
  },
  /* Hidden for now - uncomment to display on the work grid.
  {
    id: 'pika',
    title: 'Pika',
    year: '2023',
    type: 'Mobile app',
    category: 'UX / UI Design',
    role: 'UX Designer',
    tools: ['Figma'],
    blurb:
      'A recipe management app that turns scattered screenshots and bookmarks into a calm, searchable home kitchen.',
    tags: ['Consumer', 'Mobile', 'Information Architecture'],
    color: '#E8B8C4',
  },
  {
    id: 'grad-tracker',
    title: 'Grad Tracker',
    year: '2023',
    type: 'Web app',
    category: 'UX / UI Design',
    role: 'UX Designer',
    tools: ['Figma'],
    blurb:
      'A task manager built for graduate students, balancing coursework, research, and the quiet chaos in between.',
    tags: ['Productivity', 'Web App', 'EdTech'],
    color: '#3D2A33',
  },
  {
    id: 'green-thumb',
    title: 'Green Thumb',
    year: '2022',
    type: 'Voice skill',
    category: 'Voice / Design',
    role: 'Voice UX Designer',
    tools: ['Alexa Skills Kit'],
    blurb:
      'An Amazon Alexa skill that coaches new plant parents through watering, light, and seasonal care.',
    tags: ['Voice UX', 'Conversational', 'IoT'],
    color: '#D4A5A8',
  },
  {
    id: 'certifai',
    title: 'CertifAI',
    year: '2024',
    type: 'AI platform',
    category: 'AI / Education',
    role: 'UX Designer',
    tools: ['Figma', 'AI'],
    blurb:
      'A platform exploring how AI can verify, credential, and support learning at scale.',
    tags: ['AI', 'EdTech', 'Credentialing'],
    color: '#5A3D47',
  },
  */
]

export const disciplines = [
  {
    title: 'UX / Product Design',
    body: 'Research, IA, interaction, and visual design, from first sketch to production-ready specs.',
  },
  {
    title: 'Full-Stack Development',
    body: 'React, Flask, Node, and cloud infrastructure. Pairing design and code when one needs the other to ship.',
  },
  {
    title: 'Data & Analysis',
    body: 'Python, SQL, and Tableau. Turning messy datasets into dashboards and decisions that actually land.',
  },
  {
    title: 'Deployment Strategy',
    body: 'Embedding with customer teams to translate complex business problems into software that ships. Product, engineering, and strategy working at the same time.',
  },
]

export const marqueeWords = [
  'Design',
  'Engineering',
  'Research',
  'Data',
  'Product',
  'Systems',
  'Accessibility',
  'Education',
  'Sustainability',
]
