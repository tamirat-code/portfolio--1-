import { motion } from 'framer-motion';

/**
 * Brief terminal-styled boot sequence. Matches the code-editor signature
 * established in the hero, rather than a generic spinner.
 */
export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-bg flex items-center justify-center"
    >
      <div className="font-mono text-primary-400 text-sm sm:text-base">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          $ initializing portfolio
        </motion.span>
        <motion.span
          className="inline-block w-2 h-4 bg-primary-400 ml-1 align-middle"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </motion.div>
  );
}
