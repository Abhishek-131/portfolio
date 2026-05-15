import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks } from '../data/portfolio.js';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') !== 'light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/70 bg-white/75 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#020617]/70">
      <nav className="container-max flex h-16 items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#hero" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-600 text-sm font-black text-white shadow-glow transition-transform group-hover:scale-105">
            AK
          </span>
          <span className="hidden text-sm font-semibold text-slate-800 dark:text-slate-100 sm:inline">
            Abhishek Kumar
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-gray-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:text-blue-300"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-gray-200 bg-white text-slate-700 lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-[#020617]/95">
          <div className="container-max grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-blue-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
