import { motion } from 'framer-motion';
import { slideUp, sectionViewport } from '@/utils/motionVariants';

export function Section({ id, eyebrow, title, subtitle, children, className = '', align = 'left' }) {
  const headerAlign = align === 'center' ? 'items-center text-center mx-auto' : 'items-start';

  return (
    <section id={id} className={`py-20 sm:py-28 scroll-mt-20 ${className}`} aria-label={title}>
      <div className="container-base">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={slideUp}
            className={`flex flex-col mb-14 max-w-2xl ${headerAlign}`}
          >
            {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
