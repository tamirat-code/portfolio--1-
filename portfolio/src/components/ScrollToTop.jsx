import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function ScrollToTop() {
  const visible = useScrollPosition(480);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-card border border-card-border text-primary-400 flex items-center justify-center shadow-lg shadow-black/30 hover:bg-card-hover hover:border-primary-500 transition-colors"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
