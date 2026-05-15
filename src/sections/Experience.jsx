import Section from '../components/Section.jsx';
import { timeline } from '../data/portfolio.js';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience & Education" title="A focused path through learning, teams, and backend practice.">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent sm:left-1/2" />
        <div className="grid gap-8">
          {timeline.map(({ type, icon: Icon, title, institution, logo, meta, year }, index) => (
            <article
              key={`${title}-${year}`}
              className={`relative grid gap-4 sm:grid-cols-2 ${index % 2 === 0 ? '' : 'sm:[&>div:first-child]:col-start-2'}`}
            >
              <div className="glass-card ml-16 rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-glow sm:ml-0">
                <div className="mb-4 flex items-center gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-500 text-sm font-black text-white shadow-glow">
                    {logo}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                      {type}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
                  </div>
                </div>
                <p className="font-semibold text-slate-700 dark:text-slate-200">{institution}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{meta}</p>
                <p className="mt-4 text-sm font-bold text-indigo-600 dark:text-indigo-300">{year}</p>
              </div>

              <div className="absolute left-0 top-6 grid h-12 w-12 place-items-center rounded-full border-4 border-white bg-blue-600 text-white shadow-glow sm:left-1/2 sm:-translate-x-1/2 dark:border-[#0b1120]">
                <Icon size={20} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
