import { socials } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="px-5 pb-8 pt-4 sm:px-8 lg:px-12">
      <div className="container-max border-t border-gray-200 pt-7 text-center dark:border-white/10">
        <div className="mb-4 flex justify-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-2xl border border-gray-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-blue-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Copyright © {new Date().getFullYear()} Abhishek Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
