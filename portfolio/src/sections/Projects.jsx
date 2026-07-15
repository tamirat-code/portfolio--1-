import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheck, FiClock } from 'react-icons/fi';
import { Section } from '@/components/Section';
import { ProjectImage } from '@/components/ProjectImage';
import { projects } from '@/data/projects';

import { staggerContainer, slideUp, slideInLeft, slideInRight, sectionViewport } from '@/utils/motionVariants';

const featured = projects.filter((p) => p.featured);
const secondary = projects.filter((p) => !p.featured && !p.concept);
const concepts = projects.filter((p) => p.concept);

function FeaturedProject({ project, index }) {
  const reverse = index % 2 === 1;
  const textVariant = reverse ? slideInRight : slideInLeft;
  const imageVariant = reverse ? slideInLeft : slideInRight;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <motion.div variants={textVariant}>
        <span className="tag-chip mb-4 inline-block">Featured Project</span>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-2">
          {project.title}
        </h3>
        <p className="text-primary-400 text-sm font-mono mb-4">{project.subtitle}</p>
        <p className="text-ink-muted leading-relaxed mb-5">{project.description}</p>

        {project.features?.length > 0 && (
          <ul className="flex flex-col gap-2 mb-6">
            {project.features.slice(0, 5).map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-ink-muted">
                <FiCheck className="text-primary-400 shrink-0 mt-0.5" size={15} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="tag-chip">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
              <FiGithub /> Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </motion.div>

      <motion.div variants={imageVariant}>
        <ProjectImage project={project} />
      </motion.div>
    </motion.div>
  );
}

function SecondaryProjectCard({ project }) {
  return (
    <motion.div
      variants={slideUp}
      className="card-base p-5 flex flex-col hover:border-primary-500/40 hover:bg-card-hover transition-colors"
    >
      <ProjectImage project={project} />
      <h3 className="font-display font-semibold text-ink mt-4 mb-1">{project.title}</h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-4 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="tag-chip">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-2.5">
        {project.repo && (
          
           <a href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label={`${project.title} on GitHub`}
          >
            <FiGithub size={17} />
          </a>
        )}
        {project.liveUrl && (
          
           <a href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label={`${project.title} live demo`}
          >
            <FiExternalLink size={17} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ConceptCard({ project }) {
  return (
    <motion.div variants={slideUp} className="card-base border-dashed p-6 flex flex-col sm:flex-row gap-5">
      <div className="shrink-0 w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-violet-400">
        <FiClock size={20} />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <h3 className="font-display font-semibold text-ink">{project.title}</h3>
          <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/25">
            concept
          </span>
        </div>
        <p className="text-sm text-ink-muted leading-relaxed mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="tag-chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="projects"
      title="Things I've built"
      subtitle="A mix of production-shaped SaaS work, learning projects, and one idea still on the drawing board."
    >
      <div className="flex flex-col gap-20 mb-20">
        {featured.map((project, i) => (
          <FeaturedProject key={project.id} project={project} index={i} />
        ))}
      </div>

      {secondary.length > 0 && (
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="grid sm:grid-cols-2 gap-6 mb-16"
        >
          {secondary.map((project) => (
            <SecondaryProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      )}

      {concepts.length > 0 && (
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="flex flex-col gap-4"
        >
          <h3 className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-1">
            What&apos;s next
          </h3>
          {concepts.map((project) => (
            <ConceptCard key={project.id} project={project} />
          ))}
        </motion.div>
      )}
    </Section>
  );
}