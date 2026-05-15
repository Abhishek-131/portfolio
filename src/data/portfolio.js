import {
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  GraduationCap,
  Laptop,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Server,
  TerminalSquare,
  Wrench,
} from 'lucide-react';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/abhishek-131', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishekkumar131', icon: Linkedin },
  { label: 'Email', href: 'mailto:nitbabhishek131@gmail.com', icon: Mail },
];

export const skills = [
  {
    title: 'Languages',
    icon: Code2,
    description: 'Java-first engineering with strong fundamentals in JavaScript and C.',
    items: ['Java', 'JavaScript', 'C','SQL'],
  },
  {
    title: 'Frontend',
    icon: Laptop,
    description: 'Responsive interfaces with React, Tailwind CSS, and modern component patterns.',
    items: ['HTML','CSS','JavaScript','React', 'Tailwind'],
  },
  {
    title: 'Backend',
    icon: Server,
    description: 'REST APIs, services, authentication flows, and scalable backend foundations.',
    items: ['Node.js', 'Express', 'RestAPI'],
  },
  {
    title: 'Database',
    icon: Database,
    description: 'Schema design, querying, indexing basics, and practical persistence layers.',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    description: 'Developer workflow with version control, containers, and deployment readiness.',
    items: ['Git/GitHub', 'Docker' , 'Postman'],
  },
];

export const timeline = [
  {
    type: 'Education',
    icon: GraduationCap,
    title: 'Bachelor Of Computer Applications',
    institution: 'Agra University',
    logo: 'UG',
    meta: 'Graduation ',
    year: '2018 - 2021',
  },
   {
    type: 'Education',
    icon: GraduationCap,
    title: 'MCA - MANIT Bhopal',
    institution: 'Maulana Azad National Institute of Technology',
    logo: 'MANIT',
    meta: 'Post Graduation',
    year: '2022 - 2025',
  },
  {
    type: 'Experience',
    icon: BriefcaseBusiness,
    title: 'MATRIX Web Development Team Member',
    institution: 'MANIT Bhopal',
    logo: 'Agra',
    meta: 'Built and supported event-focused web experiences with a collaborative engineering team.',
    year: '2024',
  },
  {
    type: 'Experience',
    icon: BriefcaseBusiness,
    title: 'Specialist Programmer Trainee',
    institution: 'Infosys',
    logo: 'INFOSYS',
    meta: 'Worked on REST endpoints, database integrations, and API testing workflows.',
    year: 'Aug (2025) - Dec (2025)',
  },
];

export const projects = [
  {
    title: 'Contact Manager API',
    description: 'Secure contact management backend with authentication, CRUD APIs, and structured persistence.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    code: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'URL Shortener',
    description: 'Fast URL shortening service with custom aliases, redirect tracking, and clean API contracts.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    stack: ['Node.js', 'Express', 'MongoDB'],
    code: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Portfolio Dashboard',
    description: 'Responsive analytics-style dashboard showcasing polished UI systems and reusable components.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    code: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Text To Image Generator',
    description: 'AI-inspired interface for prompt-based image generation with history and preview workflows.',
    image: 'https://plus.unsplash.com/premium_photo-1726493430978-f8f151b26531?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stack: ['JavaScript', 'API', 'React'],
    code: 'https://github.com/Abhishek-131/Imagify',
    demo: 'https://imagify-teal-delta.vercel.app/',
  },
];

export const certifications = [
  {
    name: 'Java Programming',
    issuer: 'Oracle / Online Program',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Backend Development',
    issuer: 'Developer Training',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Database Management',
    issuer: 'Technical Certification',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
  },
];

export const contactItems = [
  { label: 'nitbabhishek131@gmail.com', href: 'mailto:nitbabhishek131@gmail.com', icon: Mail },
  { label: 'Noida, India', href: 'https://maps.google.com/?q=Noida', icon: MapPin },
  { label: 'Open to Full Stack role', href: '#contact', icon: Layers3 },
  { label: 'GitHub Projects', href: 'https://github.com/abhishek-131', icon: TerminalSquare },
];

export const achievements = [
  'MCA Graduate - MANIT Bhopal',
  'Strong in Java, DSA, Backend Systems',
  'Passion for scalable systems',
  'Career objective: build reliable products that solve real user problems',
];

export const sectionCopy = {
  tagline:
    'I build reliable backend systems and polished web experiences with Node, Express, APIs, data structures, and clean engineering habits.',
  about:
    'I am Abhishek Kumar, a Full Stack Developer and Backend Developer focused on writing dependable, maintainable software. My core interests sit around backend architecture, API design, database-backed applications, and solving problems with strong fundamentals in data structures and algorithms.',
};

export const certificateIcon = Award;
