import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { useTypewriter } from '@/hooks/useTypewriter';
import { scrollToSection } from '@/utils/scrollTo';
import { staggerContainer, slideUpSmall } from '@/utils/motionVariants';
import { profile, heroCodeLines } from '@/data/profile';

const SOCIALS = [
  { label: 'GitHub', href: profile.github, icon: FiGithub },
  { label: 'LinkedIn', href: '#', icon: FiLinkedin },
  { label: 'Twitter', href: '#', icon: FiTwitter },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FiMail },
];

function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] max-w-[88vw] max-h-[88vw] rounded-full border border-dashed border-primary-500/25 animate-spin-slow">
        <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary-400 shadow-[0_0_16px_4px_rgba(96,165,250,0.7)]" />
      </div>

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="relative w-[min(430px,88vw)] rounded-2xl border border-card-border bg-gradient-to-b from-card/95 to-[#182130]/95 backdrop-blur-md shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border bg-bg/40 rounded-t-2xl">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="ml-2 font-mono text-xs text-ink-faint">about-me.js</span>
        </div>

        <div className="px-6 py-6 font-mono text-[13.5px] leading-[1.85] min-h-[230px] whitespace-pre-wrap">
          {heroCodeLines.map((seg, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.01, delay: 1.4 + i * 0.045 }}
              className={seg.cls}
            >
              {seg.text}
            </motion.span>
          ))}
          <motion.span
            className="inline-block w-[7px] h-[15px] bg-primary-400 ml-0.5 align-middle"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
          />
        </div>


        <div className="absolute -bottom-5 -right-3.5 w-[74px] h-[74px] rounded-full bg-accent-gradient p-[3px] shadow-[0_12px_28px_-6px_rgba(59,130,246,0.6)]">
          <div className="w-full h-full rounded-full bg-bg-soft flex items-center justify-center font-display font-bold text-xl text-ink">
            {profile.initials}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 sm:pt-32"
      aria-label="Introduction"
    >
      <AnimatedBackground />

      <div className="container-base grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          <motion.span
            variants={slideUpSmall}
            className="inline-flex items-center gap-2 font-mono text-[13px] text-primary-400 bg-primary-500/10 border border-primary-500/25 rounded-full px-3.5 py-1.5 mb-6"
          >
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulseDot" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            Open to junior &amp; entry-level full-stack roles
          </motion.span>

          <motion.h1
            variants={slideUpSmall}
            className="font-display font-bold leading-[0.98] tracking-tight text-[clamp(42px,5.4vw,76px)]"
          >
            Hi, I&apos;m
            <br />
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            variants={slideUpSmall}
            className="mt-5 flex items-center gap-2 font-mono text-[clamp(15px,1.6vw,19px)] text-ink-muted min-h-[28px]"
          >
            <span className="text-primary-400">&gt;</span>
            <span className="text-ink">{role}</span>
            <span className="inline-block w-[2px] h-[1em] bg-primary-400 animate-blink" />
          </motion.div>

          <motion.p variants={slideUpSmall} className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-ink-muted">
            {profile.tagline}
          </motion.p>

          <motion.div variants={slideUpSmall} className="mt-9 flex flex-wrap gap-3.5">
            <a href="/tamirat-beyene-resume.pdf" download className="btn-primary">
              <FiDownload />
              Download résumé
            </a>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              <FiMail />
              Get in touch
            </button>
          </motion.div>

          <motion.div variants={slideUpSmall} className="mt-10 flex gap-3.5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="icon-btn"
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex justify-center order-1 lg:order-2">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
