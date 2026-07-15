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
      { name: 'React', level: 90, icon: SiReact },
      { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss },
      { name: 'JavaScript (ES6+)', level: 85, icon: SiJavascript },
      { name: 'React Router', level: 80, icon: SiReactrouter },
      { name: 'Recharts / Data Viz', level: 65, icon: FiBarChart2 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: FiServer,
    skills: [
      { name: 'Node.js', level: 85, icon: SiNodedotjs },
      { name: 'Express', level: 85, icon: SiExpress },
      { name: 'REST API Design', level: 80, icon: FiServer },
      { name: 'Python', level: 65, icon: SiPython },
      { name: 'Django', level: 55, icon: SiDjango },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: FiDatabase,
    skills: [
      { name: 'MongoDB', level: 85, icon: SiMongodb },
      { name: 'Mongoose ODM', level: 80, icon: SiMongodb },
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations & AI',
    icon: FiZap,
    skills: [
      { name: 'Stripe Billing', level: 75, icon: SiStripe },
      { name: 'Google OAuth', level: 75, icon: SiGoogle },
      { name: 'Socket.io (real-time)', level: 75, icon: SiSocketdotio },
      { name: 'Cloudinary', level: 70, icon: SiCloudinary },
       { name: 'OpenAI API', level: 60, icon: FiCpu },
      { name: 'Nodemailer / Email', level: 70, icon: FiMail },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: FiTool,
    skills: [
      { name: 'Git & GitHub', level: 85, icon: SiGit },
      { name: 'Vite', level: 80, icon: SiVite },
      { name: 'Postman', level: 75, icon: SiPostman },
      { name: 'Env & Secrets Hygiene', level: 75, icon: FiLock },
    ],
  },
];