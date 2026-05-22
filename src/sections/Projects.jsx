import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected builds with backend depth and polished interfaces.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
            whileHover={{ y: -10 }}
            className="glass-card group overflow-hidden rounded-2xl transition hover:border-blue-400/50 hover:shadow-glow"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-700 dark:text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={project.code}
                  target='_blank'
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-blue-300"
                >
                  <Github size={17} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target='_blank'
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
