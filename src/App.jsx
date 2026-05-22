import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Certifications from './sections/Certifications.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import CursorEffects from './components/CursorEffects.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-slate-900 antialiased transition-colors duration-500 dark:from-[#0f172a] dark:via-[#0b1120] dark:to-[#020617] dark:text-white">
      <CursorEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
