import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import { certificateIcon, certifications } from '../data/portfolio.js';

export default function Certifications() {
  const Icon = certificateIcon;

  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials that support the engineering craft.">
      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((certificate, index) => (
          <motion.article
            key={certificate.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ scale: 1.035, y: -6 }}
            className="glass-card overflow-hidden rounded-2xl transition hover:border-indigo-400/50 hover:shadow-glow-indigo"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={certificate.image} alt={certificate.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              <div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur">
                <Icon size={22} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{certificate.name}</h3>
              <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{certificate.issuer}</p>
              <p className="mt-4 text-sm font-bold text-blue-600 dark:text-blue-400">{certificate.year}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
