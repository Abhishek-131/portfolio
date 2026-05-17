import { ArrowDown, Download, Eye, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { sectionCopy, socials } from '../data/portfolio.js';

export default function Hero() {
  const assetBase = import.meta.env.BASE_URL;
  const profileImage = `${assetBase}Profile_P.png`;
  const resumeUrl = `${assetBase}AbhishekResume.pdf`;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-5 pt-28 sm:px-8 lg:px-12">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/25" />
      <div className="absolute bottom-16 right-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/25" />

      <div className="container-max relative grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
            <Sparkles size={16} />
            Backend-focused Java engineer
          </div>
          <h1 className="text-5xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Abhishek Kumar
          </h1>
          <p className="mt-5 text-2xl font-semibold text-blue-600 dark:text-blue-400 sm:text-3xl">
            Full Stack Developer & Backend Engineer
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {sectionCopy.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-blue-500"
            >
              <Download size={19} />
              Download Resume
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-blue-300"
            >
              <Eye size={19} />
              View Resume
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                className="grid h-12 w-12 place-items-center rounded-2xl border border-gray-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:text-blue-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto grid w-full max-w-[460px] place-items-center"
        >
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.04 }}
            className="relative aspect-square w-full rounded-full border border-white/20 bg-gradient-to-br from-blue-500/25 to-indigo-500/20 p-5 shadow-glow dark:from-blue-500/20 dark:to-indigo-500/20"
          >
            <div className="absolute inset-5 rounded-full bg-blue-500/20 blur-2xl" />
            <img
              src={profileImage}
              alt="Abhishek Kumar profile"
              className="relative h-50 w-50 rounded-full border border-white/30 bg-slate-900 object-cover shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      <a

        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 rounded-full border border-gray-200 bg-white/80 p-3 text-slate-700 shadow-sm backdrop-blur transition hover:text-blue-600 md:grid dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-blue-300"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
