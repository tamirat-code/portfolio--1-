import { FiMonitor, FiServer, FiLayers, FiCode, FiCpu, FiPenTool } from 'react-icons/fi';

export const services = [
  {
    id: 'frontend',
    icon: FiMonitor,
    title: 'Frontend Development',
    description:
      'React interfaces that feel fast and considered — from dashboards with real-time data to marketing pages with WebGL touches, built with Tailwind and Framer Motion.',
  },
  {
    id: 'backend',
    icon: FiServer,
    title: 'Backend Development',
    description:
      'Node.js/Express APIs with proper auth (JWT, Google OAuth), file handling, and email flows — the kind of backend that holds up once billing and real users are involved.',
  },
  {
    id: 'fullstack',
    icon: FiLayers,
    title: 'Full-Stack Applications',
    description:
      'End-to-end builds like CollabFlow and Rose Hotel: React front end, Express/MongoDB back end, Stripe billing, and everything wired together and deployed.',
  },
  {
    id: 'apis',
    icon: FiCode,
    title: 'REST API Design',
    description:
      'Clean, documented REST APIs — sensible resource structure, auth middleware, and error handling that makes the frontend (or another team) easy to build against.',
  },
  {
    id: 'ai',
    icon: FiCpu,
    title: 'AI-Assisted Features',
    description:
      'Practical AI integration, not novelty — task summarization, subtask generation, and priority suggestions built into CollabFlow using the OpenAI API.',
  },
  {
    id: 'ui',
    icon: FiPenTool,
    title: 'UI Development',
    description:
      'Turning a design or a rough idea into a polished, responsive interface — dark-themed, accessible, and animated with intent rather than decoration.',
  },
];