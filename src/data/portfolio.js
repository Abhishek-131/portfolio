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

export const codingProfiles = [
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/abhisheksdot/',
    icon: Code2,
    description: 'Problem solving, DSA practice, and coding interview preparation.',
    accent: 'from-yellow-500 to-orange-500',
  },
  {
    label: 'GeeksforGeeks',
    href: 'https://www.geeksforgeeks.org/user/abhisheksdot/',
    icon: TerminalSquare,
    description: 'Data structures, algorithms, Java practice, and learning milestones.',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    label: 'HackerRank',
    href: 'https://www.hackerrank.com/profile/abhisheksdot',
    icon: Award,
    description: 'Verified coding skills, SQL, Java, and programming certifications.',
    accent: 'from-blue-500 to-indigo-500',
  },
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
    items: ['Git', 'GitHub', 'Docker' , 'Postman'],
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
    title: 'Food Delivery Application',
    description: 'Tomato is a full-stack Food Delivery Web Application built using the MERN stack. The platform allows users to browse food items, add products to cart, place orders, and make secure online payments.',
    image: 'https://i.pinimg.com/1200x/6e/9a/3a/6e9a3adbe787f677e9d219b9812c7ecb.jpg',
    stack: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe Payment Gateway'],
    code: 'https://github.com/Abhishek-131/Projects',
    demo: 'https://github.com/Abhishek-131/Projects',
  },
  {
    title: 'Movie Watch',
    description: 'Movie Watch is full stack web application. User can entertain by watching movies and web series ...',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TMDB API', 'Bcrypt', 'JWT'],
    code: 'https://github.com/Abhishek-131/Movie-Watch',
    demo: 'https://github.com/Abhishek-131/Movie-Watch',
  },
  {
    title: 'URL Shortner {WORKING}',
    description: 'Woking ON URL Shortner, Make the URL short and Show how many times it click and Many more features',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    stack: ['React.js', 'Java'],
    code: 'https://github.com/Abhishek-131/Movie-Watch',
    demo: 'https://github.com/Abhishek-131/Movie-Watch',
  },
  {
    title: 'Text To Image Generator',
    description: 'AI-inspired interface for prompt-based image generation with history and preview workflows.',
    image: 'https://i.pinimg.com/1200x/6e/f7/ec/6ef7eca7ec612789ffa731b478a7e094.jpg',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Clipdrop API', 'Bcrypt', 'RazorPay', 'JWT'],
    code: 'https://github.com/Abhishek-131/Imagify',
    demo: 'https://imagify-teal-delta.vercel.app/',
  },
];

export const certifications = [
  {
    name: 'Basic SQL',
    issuer: 'Hacker Rank',
    year: 'Aug 2024',
    date: 'Aug 2024',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQFpIqUbl3WQ4g/profile-treasury-image-shrink_800_800/B56Z5Faf3AGgAI-/0/1779281034926?e=1780128000&v=beta&t=zuUeNcrM6VvTOucac3EExzuQ0Cs16ErMIKL-ITeTcsc',
    credentialUrl: 'https://media.licdn.com/dms/image/v2/D562DAQFpIqUbl3WQ4g/profile-treasury-image-shrink_800_800/B56Z5Faf3AGgAI-/0/1779281034926?e=1780128000&v=beta&t=zuUeNcrM6VvTOucac3EExzuQ0Cs16ErMIKL-ITeTcsc',
  },
  {
    name: 'Basic Java',
    issuer: 'Hacker Rank',
    year: 'Sep 2024',
    date: 'Sep 2024',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQEoc2pE_hoNBQ/profile-treasury-image-shrink_800_800/B56Z5Fa.FKHsAI-/0/1779281158698?e=1780128000&v=beta&t=vtbA-oYbvCsfnVtVHmNV-NxKzdvA0m_gXAJ3VGSsV-M',
    credentialUrl: 'https://media.licdn.com/dms/image/v2/D562DAQEoc2pE_hoNBQ/profile-treasury-image-shrink_800_800/B56Z5Fa.FKHsAI-/0/1779281158698?e=1780128000&v=beta&t=vtbA-oYbvCsfnVtVHmNV-NxKzdvA0m_gXAJ3VGSsV-M',
  },
  {
    name: 'API Development using Node and Express',
    issuer: 'Infosys ',
    year: '2025',
    date: '2025',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQF7E0YhTUEVtg/profile-treasury-document-images_1280/B56Zq8bMdKHYAU-/1/1764097842108?e=1779926400&v=beta&t=pNgi4CClp4sGHV90XggoijME99uJiR5Y-UanvYAk2mk',
    credentialUrl: 'https://media.licdn.com/dms/image/v2/D562DAQF7E0YhTUEVtg/profile-treasury-document-images_1280/B56Zq8bMdKHYAU-/1/1764097842108?e=1779926400&v=beta&t=pNgi4CClp4sGHV90XggoijME99uJiR5Y-UanvYAk2mk',
  },
  {
    name: 'React With TypeScript',
    issuer: 'Infosys ',
    year: '2025',
    date: '2025',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQHxmevp4SMFFg/profile-treasury-document-cover-images_1920/B56Zq8aU7ZHIBM-/0/1764097616045?e=1780128000&v=beta&t=VXmdgx0i5iVTXKjaSOJKz_B-w7aheg6lwy3XF7F-_rQ',
    credentialUrl: 'https://media.licdn.com/dms/image/v2/D562DAQHxmevp4SMFFg/profile-treasury-document-cover-images_1920/B56Zq8aU7ZHIBM-/0/1764097616045?e=1780128000&v=beta&t=VXmdgx0i5iVTXKjaSOJKz_B-w7aheg6lwy3XF7F-_rQ',
  },
  {
    name: 'Basic Of MongoDB',
    issuer: 'Infosys ',
    year: '2025',
    date: '2025',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQFCo3sElxgR2g/profile-treasury-document-cover-images_800/B56Zq8blULJQBE-/0/1764097943626?e=1780128000&v=beta&t=NgHUhutSxIleA5vxBDpyv3nsExt198BIh_5wn-lxRU0',
    credentialUrl: 'https://media.licdn.com/dms/image/v2/D562DAQFCo3sElxgR2g/profile-treasury-document-cover-images_800/B56Zq8blULJQBE-/0/1764097943626?e=1780128000&v=beta&t=NgHUhutSxIleA5vxBDpyv3nsExt198BIh_5wn-lxRU0',
  },
  {
    name: 'Prompt Engineering',
    issuer: 'Infosys ',
    year: '2025',
    date: '2025',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQGCx9diHe0WFA/profile-treasury-document-cover-images_1920/B56ZtrEHcyJcBQ-/0/1767027805055?e=1779886800&v=beta&t=0C-ykqD4gbAzK0eEVb2dyRbCRL6PpG-WQ808QiYTv0w',
    credentialUrl: 'https://media.licdn.com/dms/image/v2/D562DAQGCx9diHe0WFA/profile-treasury-document-cover-images_1920/B56ZtrEHcyJcBQ-/0/1767027805055?e=1779886800&v=beta&t=0C-ykqD4gbAzK0eEVb2dyRbCRL6PpG-WQ808QiYTv0w',
  },
  {
    name: 'Generative AI Landscape',
    issuer: 'Infosys ',
    year: '2025',
    date: '2025',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQH2U7lqX-f4mg/profile-treasury-document-cover-images_1920/B56ZtrEmUVJsBQ-/0/1767027931245?e=1780128000&v=beta&t=DipQci_AN8bF4_F644BVg4xDmAUE_196mtRDlENYBOI',
    credentialUrl: 'https://media.licdn.com/dms/image/v2/D562DAQH2U7lqX-f4mg/profile-treasury-document-cover-images_1920/B56ZtrEmUVJsBQ-/0/1767027931245?e=1780128000&v=beta&t=DipQci_AN8bF4_F644BVg4xDmAUE_196mtRDlENYBOI',
  },
    {
    name: 'Modern JavaScript',
    issuer: 'Infosys ',
    year: '2025',
    date: '2025',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQFLGWqyiMpo_A/profile-treasury-document-images_800/B56ZtrF2a5GsAc-/1/1767028258730?e=1780531200&v=beta&t=SrxMKpXDu5VtmGBLeMtx9VzKehEIa5k4IEo9aFnt8YI',
    credentialUrl: 'https://media.licdn.com/dms/image/v2/D562DAQFLGWqyiMpo_A/profile-treasury-document-images_800/B56ZtrF2a5GsAc-/1/1767028258730?e=1780531200&v=beta&t=SrxMKpXDu5VtmGBLeMtx9VzKehEIa5k4IEo9aFnt8YI',
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
