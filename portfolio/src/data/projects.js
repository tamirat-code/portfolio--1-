
export const projects = [
  {
    id: 'collabflow',
    title: 'CollabFlow',
    subtitle: 'Full-stack project management SaaS',
    featured: true,
    repo: 'https://github.com/tamirat-code/collabFlow',
    liveUrl: '', 
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Stripe', 'Cloudinary'],
    description:
      'Flagship project: a real-time project management SaaS with tiered billing, live collaboration, and AI-assisted task tooling.',
    features: [
      'Stripe billing across free / pro / business tiers',
      'Real-time Kanban board (Socket.io)',
      'Task comments and an activity feed',
      'Cloudinary file attachments, with a fix for Amharic filename encoding',
      'In-app and email notifications',
      'Google OAuth, profile/avatar settings, email verification',
      'WebGL-animated homepage',
      'AI task features — summarize, generate subtasks, suggest priority — gated to the business plan',
    ],
    engineeringNotes: [
      'Resolved systemic merge-conflict artifacts left in the codebase',
      'Fixed missing controllers that were crashing the app under ESM',
      'Debugged middleware and cookie/logout handling issues',
    ],
    designSystem: {
      bg: '#020f18',
      card: '#051e2e',
      accent: '#00c8b4',
      note: "CollabFlow's own dark-teal brand — used in its screenshots, not this portfolio's theme.",
    },
  },
  {
    id: 'rose-hotel',
    title: 'Rose Hotel',
    subtitle: 'Full-stack hotel management system',
    featured: true,
    repo: '',
    liveUrl: '',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe', 'Recharts', 'React Router v6', 'Axios'],
    description:
      'MERN hotel management system covering booking, payments, and admin operations end to end.',
    features: [
      'JWT auth plus Google OAuth',
      'Stripe payments via Stripe Elements on the customer-facing frontend',
      'Nodemailer booking notifications',
      'Booking management',
      'Interactive API docs',
      'React admin dashboard with Recharts, React Router v6, and Axios',
    ],
    engineeringNotes: [
      'Handled a real security incident: scrubbed an exposed .env from git history and rotated all credentials',
    ],
  },
  {
    id: 'dukantrack',
    title: 'DukanTrack',
    subtitle: 'Orders & customer management for Ethiopian small shops',
    featured: false,
    repo: '', 
    liveUrl: '',
    tech: ['Django', 'Python', 'Tailwind CSS'],
    description:
      'A Django learning project built to manage orders and customers for small Ethiopian shops — models, migrations, views, forms, auth, and CRUD, styled with Tailwind.',
    features: [
      'Django models and migrations',
      'Views and forms',
      'Authentication',
      'Full CRUD for orders and customers',
      'Tailwind CSS integration',
    ],
  },
  {
    id: 'oasis-internship-task',
    title: 'OASIS Internship Task',
    subtitle: 'Pizza ordering & inventory platform',
    featured: false,
    repo: '', 
    liveUrl: '',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
    description:
      'Full-stack pizza ordering and inventory platform with separate user and admin roles, built as an internship task.',
    features: ['User and admin roles', 'Razorpay payments (test mode)', 'Inventory tracking'],
  },
  {
    id: 'amharic-ai-chatbot',
    title: 'Amharic AI Chatbot',
    subtitle: 'Startup concept — not yet built',
    featured: false,
    concept: true,
    repo: '',
    liveUrl: '',
    tech: ['Telegram Bot API', 'AI/LLM', 'Amharic NLP'],
    description:
      'An Amharic-language AI chatbot for Ethiopian business customer support, reachable over Telegram and WhatsApp. Grew out of a structured market-research process; planned as a Telegram-first MVP.',
    features: [
      'Telegram bot with AI/LLM backend',
      'Amharic NLP for understanding and generating Amharic text',
      'Customer support for Ethiopian businesses',
    ],
  },
];
