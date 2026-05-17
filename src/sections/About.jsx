import { CheckCircle2 } from 'lucide-react';
import Section from '../components/Section.jsx';
import { achievements, sectionCopy } from '../data/portfolio.js';

export default function About() {
  const profileImage = `${import.meta.env.BASE_URL}A.png`;

  return (
    <Section id="about" eyebrow="About" title="Engineering reliable systems with clean fundamentals.">
      <div className="glass-card grid gap-8 rounded-2xl p-6 sm:p-8 lg:grid-cols-[320px_1fr] lg:p-10">
        <div className="flex items-center justify-center">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 p-1 shadow-glow">
            <img
              src={profileImage}
              alt="Abhishek Kumar"
              className="h-full w-full rounded-2xl bg-slate-900 object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">{sectionCopy.about}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {achievements.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-gray-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" size={20} />
                <p className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
