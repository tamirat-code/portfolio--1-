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
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const honeypot = e.currentTarget.elements.namedItem('_honey')?.value ?? '';
    setStatus('sending');

    try {
      const response = await window.fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _replyto: form.email,
          _subject: form.subject || `Portfolio contact from ${form.name}`,
          message: form.message,
          _honey: honeypot,
        }),
      });
      const result = await response.json();

      if (!response.ok || result.success !== 'true') {
        throw new Error('Message delivery failed');
      }

      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
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
          aria-busy={status === 'sending'}
          className="card-base p-6 sm:p-8 flex flex-col gap-5"
        >
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
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

          <button type="submit" disabled={status === 'sending'} className="btn-primary self-start mt-1 disabled:cursor-not-allowed disabled:opacity-60">
            {status === 'sending' ? (
              <>
                <FiSend /> Sending...
              </>
            ) : status === 'success' ? (
              <>
                <FiCheck /> Message sent
              </>
            ) : (
              <>
                <FiSend /> Send message
              </>
            )}
          </button>
          {status === 'success' && (
            <p role="status" className="text-sm text-emerald-400">
              Thanks for reaching out. Your message was delivered.
            </p>
          )}
          {status === 'error' && (
            <p role="alert" className="text-sm text-red-400">
              We couldn&apos;t send your message. Please email{' '}
              <a className="underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>{' '}
              directly.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}