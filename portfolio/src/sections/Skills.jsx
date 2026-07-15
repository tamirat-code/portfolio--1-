import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { skillCategories } from '@/data/skills';
import { staggerContainer, slideUp, slideUpSmall, sectionViewport } from '@/utils/motionVariants';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="skills"
      title="Tools I build with"
      subtitle="The stack I reach for day to day, plus what's actively in progress."
    >
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skillCategories.map((category) => (
          <motion.div key={category.id} variants={slideUp} className="card-base p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/25 flex items-center justify-center text-primary-400">
                <category.icon size={18} />
              </div>
              <h3 className="font-display font-semibold text-ink">{category.title}</h3>
            </div>

            <motion.div
              variants={staggerContainer(0.04)}
              className="flex flex-wrap gap-2"
            >
              {category.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={slideUpSmall}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-bg border border-card-border px-3 py-1.5 text-sm text-ink-muted hover:border-primary-500/50 hover:text-ink transition-colors"
                >
                  <skill.icon className="text-primary-400 shrink-0" size={14} />
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}