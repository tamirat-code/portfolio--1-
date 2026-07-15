import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { skillCategories } from '@/data/skills';
import { staggerContainer, slideUp, sectionViewport } from '@/utils/motionVariants';

function SkillBar({ skill }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2 text-sm text-ink">
          <skill.icon className="text-primary-400 shrink-0" size={15} />
          <span>{skill.name}</span>
        </div>
        <span className="font-mono text-xs text-ink-faint">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-bg overflow-hidden border border-card-border">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={sectionViewport}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="h-full rounded-full bg-accent-gradient"
        />
      </div>
    </div>
  );
}

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

            <div className="flex flex-col gap-4">
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}