import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { profile } from '@/data/profile';
import { aboutStats, strengths } from '@/data/about';
import { staggerContainer, slideUp, slideUpSmall, sectionViewport } from '@/utils/motionVariants';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="about"
      title="Building things I'm proud to ship"
      subtitle="A closer look at how I work and what I'm building toward."
    >
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16">
       
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="flex flex-col gap-6"
        >
          <motion.p variants={slideUp} className="text-ink-muted leading-relaxed text-[15.5px]">
            I'm a full-stack developer working primarily in the{' '}
            <span className="text-ink font-semibold">MERN stack</span>, with Python and Django in
            the mix. I don't build toy projects — my flagship app, CollabFlow, is a full
            project-management SaaS with tiered Stripe billing, real-time boards over Socket.io,
            Google OAuth, and AI-assisted task features gated to paid plans. I like problems with
            enough moving parts that they force me to actually understand the system, not just
            follow a tutorial.
          </motion.p>

          <motion.p variants={slideUp} className="text-ink-muted leading-relaxed text-[15.5px]">
            What I enjoy building most is software that solves a concrete, local problem —
            booking systems, ordering platforms, tools small businesses can actually use. That's
            what's pulling me toward Django and toward an idea I'm researching now: an
            Amharic-language AI chatbot for Ethiopian business customer support, starting on
            Telegram.
          </motion.p>

          <motion.p variants={slideUp} className="text-ink-muted leading-relaxed text-[15.5px]">
            <span className="text-ink font-semibold">Right now</span>, I'm focused on landing a
            junior or entry-level full-stack role — somewhere I can keep growing under people who
            've shipped more than I have.{' '}
            <span className="text-ink font-semibold">Longer-term</span>, the goal is my own
            software company, built for the Ethiopian market.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={slideUp}
            className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-card-border"
          >
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-gradient">
                  {stat.value}
                </p>
                <p className="text-xs text-ink-faint mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

     
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="flex flex-col gap-4"
        >
          {strengths.map((strength) => (
            <motion.div
              key={strength.title}
              variants={slideUpSmall}
              className="card-base p-5 flex gap-4 hover:border-primary-500/50 hover:bg-card-hover transition-colors"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-primary-500/10 border border-primary-500/25 flex items-center justify-center text-primary-400">
                <strength.icon size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-ink text-[15px] mb-1.5">
                  {strength.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">{strength.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}