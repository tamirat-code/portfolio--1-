import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiCheck } from 'react-icons/fi';
import { Section } from '@/components/Section';
import { profile } from '@/data/profile';
import { slideInLeft, slideInRight, sectionViewport } from '@/utils/motionVariants';

const contactSocials = [
  { label: 'GitHub', href: profile.github, icon: FiGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tamneg', icon: FiLinkedin },
  { label: 'Twitter', href: '#', icon: FiTwitter },
];

const initialForm = { name: '', email: '', subject: '', message: '' };

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Portfolio contact from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setForm(initialForm);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section
      id="contact"
      eyebrow="contact"
      title="Let's build something"
      subtitle="Open to junior full-stack roles, freelance work, or just a conversation about what you're building."
    >
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">
        {/* Info column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={slideInLeft}
          className="flex flex-col gap-5"
        >
          <a
            href={`mailto:${profile.email}`}
            className="card-base p-5 flex items-center gap-4 hover:border-primary-500/40 hover:bg-card-hover transition-colors"
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-primary-500/10 border border-primary-500/25 flex items-center justify-center text-primary-400">
              <FiMail size={18} />
            </div>
            <div>
              <p className="text-xs text-ink-faint font-mono mb-0.5">Email</p>
              <p className="text-ink font-medium text-sm">{profile.email}</p>
            </div>
          </a>

          <div className="card-base p-5 flex items-center gap-4">
            <div className="shrink-0 w-11 h-11 rounded-xl bg-primary-500/10 border border-primary-500/25 flex items-center justify-center text-primary-400">
              <FiMapPin size={18} />
            </div>
            <div>
              <p className="text-xs text-ink-faint font-mono mb-0.5">Location</p>
              <p className="text-ink font-medium text-sm">{profile.location} · Remote-friendly</p>
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            {contactSocials.map((social) => (
              
               <a key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="icon-btn"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

       
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={slideInRight}
          onSubmit={handleSubmit}
          className="card-base p-6 sm:p-8 flex flex-col gap-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-ink-faint mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl bg-bg border border-card-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-ink-faint mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl bg-bg border border-card-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-mono text-ink-faint mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-xl bg-bg border border-card-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-primary-500 focus:outline-none transition-colors"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono text-ink-faint mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl bg-bg border border-card-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-primary-500 focus:outline-none transition-colors resize-none"
              placeholder="Tell me a bit about what you need..."
            />
          </div>

          <button type="submit" className="btn-primary self-start mt-1">
            {sent ? (
              <>
                <FiCheck /> Opening your email app...
              </>
            ) : (
              <>
                <FiSend /> Send message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}