import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { services } from '@/data/services';
import { staggerContainer, slideUp, sectionViewport } from '@/utils/motionVariants';

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="services"
      title="What I can help with"
      subtitle="Grounded in what I've actually shipped, not a generic checklist."
    >
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={slideUp}
            className="card-base p-6 hover:border-primary-500/40 hover:bg-card-hover transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-primary-500/10 border border-primary-500/25 flex items-center justify-center text-primary-400 mb-5">
              <service.icon size={20} />
            </div>
            <h3 className="font-display font-semibold text-ink mb-2">{service.title}</h3>
            <p className="text-sm text-ink-muted leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}