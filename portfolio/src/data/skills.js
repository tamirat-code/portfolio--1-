import { FiMonitor, FiServer, FiDatabase, FiTool, FiZap } from 'react-icons/fi';
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiReactrouter,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPython,
  SiMongodb,
  SiGit,
  SiPostman,
  SiVite,
  SiStripe,
  SiGoogle,
  SiSocketdotio,
  SiCloudinary,
} from 'react-icons/si';
import { FiBarChart2, FiMail, FiLock, FiCpu } from 'react-icons/fi';

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: FiMonitor,
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'JavaScript (ES6+)', icon: SiJavascript },
      { name: 'React Router', icon: SiReactrouter },
      { name: 'Recharts / Data Viz', icon: FiBarChart2 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: FiServer,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'REST API Design', icon: FiServer },
      { name: 'Python', icon: SiPython },
      { name: 'Django', icon: SiDjango },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: FiDatabase,
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Mongoose ODM', icon: SiMongodb },
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations & AI',
    icon: FiZap,
    skills: [
      { name: 'Stripe Billing', icon: SiStripe },
      { name: 'Google OAuth', icon: SiGoogle },
      { name: 'Socket.io (real-time)', icon: SiSocketdotio },
      { name: 'Cloudinary', icon: SiCloudinary },
      { name: 'OpenAI API', icon: FiCpu },
      { name: 'Nodemailer / Email', icon: FiMail },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: FiTool,
    skills: [
      { name: 'Git & GitHub', icon: SiGit },
      { name: 'Vite', icon: SiVite },
      { name: 'Postman', icon: SiPostman },
      { name: 'Env & Secrets Hygiene', icon: FiLock },
    ],
  },
];