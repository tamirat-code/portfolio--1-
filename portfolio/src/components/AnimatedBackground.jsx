import { motion } from 'framer-motion';

/**
 * Ambient background used behind the hero: a faint code-editor-like grid,
 * a soft radial glow, and two slow-floating blurred gradient orbs.
 */
export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_65%_55%_at_50%_10%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <motion.div
        className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-primary-600/20 blur-[100px]"
        animate={{ x: [0, 24, 0], y: [0, -28, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-80px] right-[-60px] w-[340px] h-[340px] rounded-full bg-violet-500/15 blur-[100px]"
        animate={{ x: [0, -20, 0], y: [0, 24, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  );
}
