import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { profile } from '@/data/profile';

export const navLinks = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Education', href: 'education' },
  { label: 'Services', href: 'services' },
  { label: 'Contact', href: 'contact' },
];

export const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: FiGithub },
  { label: 'LinkedIn', href: '#', icon: FiLinkedin },
  { label: 'Twitter', href: '#', icon: FiTwitter },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FiMail },
];
