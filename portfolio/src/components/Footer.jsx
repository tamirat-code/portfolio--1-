import { navLinks, socialLinks } from '@/data/nav';
import { scrollToSection } from '@/utils/scrollTo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-bg-soft">
      <div className="container-base py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-sm">
            <a href="#hero" className="font-display font-semibold text-lg text-ink">
              tamirat<span className="text-primary-400">.dev</span>
            </a>
            <p className="mt-3 text-sm text-ink-muted leading-relaxed">
              Full-stack developer in the MERN stack, building toward junior full-stack roles
              and a software startup for the Ethiopian market.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-4">
                Quick links
              </h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-ink-muted hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-4">
                Connect
              </h3>
              <ul className="flex flex-col gap-2.5">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-ink-muted hover:text-primary-400 transition-colors"
                    >
                      <social.icon aria-hidden />
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-faint font-mono">
            © {year} Tamirat. All rights reserved.
          </p>
          <p className="text-xs text-ink-faint font-mono">Built with React, JavaScript &amp; Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
