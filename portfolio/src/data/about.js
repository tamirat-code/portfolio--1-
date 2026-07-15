import { FiLayers, FiTool, FiShield, FiGlobe } from 'react-icons/fi';


export const aboutStats = [
  { label: 'Years building software', value: '2+' },
  { label: 'Production-shaped projects', value: '4+' },
  { label: 'Core stack', value: 'MERN + Django' },
];


export const strengths = [
  {
    icon: FiLayers,
    title: 'Full ownership, not just features',
    description:
      'I build the whole vertical slice — Stripe billing tiers, Socket.io real-time boards, Google OAuth, email notifications — not just the UI on top of someone else\'s API.',
  },
  {
    icon: FiTool,
    title: 'Comfortable debugging under pressure',
    description:
      'I\'ve tracked down and fixed systemic issues: merge-conflict artifacts, missing controllers crashing ESM builds, and middleware bugs that only showed up in production-like conditions.',
  },
  {
    icon: FiShield,
    title: 'Security-conscious by habit',
    description:
      'After a real incident on Rose Hotel — an exposed .env — I scrubbed it from git history and rotated every credential. I treat that as a baseline, not a one-off.',
  },
  {
    icon: FiGlobe,
    title: 'Building for real users, not templates',
    description:
      'From fixing Amharic filename encoding in file uploads to researching an Amharic-language AI chatbot for Ethiopian businesses, I design for the market I actually understand.',
  },
];