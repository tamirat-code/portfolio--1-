import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '@/data/nav';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToSection } from '@/utils/scrollTo';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollPosition(40);
  const activeId = useActiveSection(navLinks.map((l) => l.href));

  const handleNavigate = (href) => {
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-lg border-b border-card-border shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-base flex items-center justify-between h-16 sm:h-20" aria-label="Primary">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display font-semibold text-lg text-ink tracking-tight"
        >
          tamirat<span className="text-primary-400">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavigate(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activeId === link.href ? 'text-white' : 'text-ink-muted hover:text-white'
                }`}
                aria-current={activeId === link.href ? 'page' : undefined}
              >
                {link.label}
                {activeId === link.href && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-card border border-card-border"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button onClick={() => handleNavigate('contact')} className="btn-primary text-sm py-2.5 px-5">
            Let&apos;s talk
          </button>
        </div>

        <button
          className="md:hidden text-ink text-2xl p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-bg/95 backdrop-blur-lg border-b border-card-border"
          >
            <ul className="container-base flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavigate(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeId === link.href
                        ? 'bg-card text-white'
                        : 'text-ink-muted hover:bg-card hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button onClick={() => handleNavigate('contact')} className="btn-primary w-full text-sm">
                  Let&apos;s talk
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
