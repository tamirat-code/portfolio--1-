import { motion } from 'framer-motion';
import { FiBookOpen, FiMapPin, FiCalendar } from 'react-icons/fi';
import { Section } from '@/components/Section';
import { education } from '@/data/education';
import { slideUp, sectionViewport } from '@/utils/motionVariants';

export function Education() {
  return (
    <Section id="education" eyebrow="education" title="Education">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={slideUp}
        className="card-base p-7 sm:p-9 max-w-3xl"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/25 flex items-center justify-center text-primary-400">
            <FiBookOpen size={20} />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">{education.degree}</h3>
            <p className="text-ink-muted">{education.school}</p>

            <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3 text-sm text-ink-faint">
              <span className="flex items-center gap-1.5">
                <FiCalendar size={14} />
                {education.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <FiMapPin size={14} />
                {education.location}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-card-border">
          <h4 className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-3">
            Relevant coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span key={course} className="tag-chip">
                {course}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}