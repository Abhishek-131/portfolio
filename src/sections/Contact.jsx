import { ExternalLink } from 'lucide-react';
import Section from '../components/Section.jsx';
import { codingProfiles, contactItems, socials } from '../data/portfolio.js';

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something great together." className="py-14 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-card rounded-2xl p-5 sm:p-6">
          <h3 className="text-xl font-bold text-slate-950 dark:text-white">Connect</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            I am open to Full Stack Developer roles, Java development opportunities, and collaborative product work.
          </p>
          <div className="mt-5 grid gap-3">
            {contactItems.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-slate-50 p-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-blue-300"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-300">
                  <Icon size={18} />
                </span>
                {label}
              </a>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-2xl border border-gray-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:text-blue-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">Coding Profiles</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Explore my DSA practice, programming badges, and verified platform activity.
              </p>
            </div>
            <span className="hidden rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300 sm:inline-flex">
              Practice
            </span>
          </div>

          <div className="mt-5 grid gap-3">
            {codingProfiles.map(({ label, href, icon: Icon, description, accent }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-white hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg transition group-hover:scale-105`}>
                  <Icon size={21} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-bold text-slate-950 dark:text-white">{label}</span>
                  <span className="mt-1 block text-sm leading-5 text-slate-600 dark:text-slate-300">{description}</span>
                </span>
                <ExternalLink className="shrink-0 text-slate-400 transition group-hover:text-blue-600 dark:group-hover:text-blue-300" size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
