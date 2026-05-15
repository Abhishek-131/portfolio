import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`section-pad ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="container-max"
      >
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
