import { Send } from 'lucide-react';
import Section from '../components/Section.jsx';
import { contactItems, socials } from '../data/portfolio.js';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something great together.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Connect</h3>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            I am open to Full Stack Developer roles, Java development opportunities, and collaborative product work.
          </p>
          <div className="mt-8 grid gap-4">
            {contactItems.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-blue-300"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-300">
                  <Icon size={20} />
                </span>
                {label}
              </a>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                className="grid h-11 w-11 place-items-center rounded-2xl border border-gray-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:text-blue-300"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-white/10 dark:bg-white/10 dark:text-white"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                placeholder="your@example.com"
                className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-white/10 dark:bg-white/10 dark:text-white"
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Message
            <textarea
              rows="7"
              placeholder="Tell me about your project or opportunity"
              className="resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-white/10 dark:bg-white/10 dark:text-white"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-blue-500 sm:w-auto"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}
