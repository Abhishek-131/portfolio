import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Core technologies and practical engineering toolkit.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {skills.map(({ title, icon: Icon, description, items }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card group rounded-2xl p-6 transition hover:border-blue-400/50 hover:shadow-glow"
          >
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-blue-600/10 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:text-blue-300">
              <Icon size={27} />
            </div>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
            <p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-700 dark:text-blue-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
