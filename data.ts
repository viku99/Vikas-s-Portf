import { Project, Skill, Testimonial } from './types';

export const personalInfo = {
  name: "VIKAS",
  title: "Creative Frontend Developer",
  subtitle: "Visual Development & Motion Design",
  bio: "I'm a passionate frontend developer with a knack for creating beautiful, functional, and user-centric web applications. With a strong foundation in React, TypeScript, and modern web technologies, I specialize in bringing ideas to life with clean code and elegant design. My journey in web development started with a fascination for how things work on the internet, and it has evolved into a career where I continuously learn and innovate. I thrive in collaborative environments and am always eager to take on new challenges.",
  longBio: "From a young age, I was captivated by the intersection of technology and creativity. This passion led me to pursue a degree in Computer Science, where I discovered my love for web development. Over the past five years, I've honed my skills in building responsive, high-performance websites and applications. I'm proficient in the entire frontend stack and have a keen eye for UI/UX, ensuring that every project I work on is not only technically sound but also provides an intuitive and enjoyable experience for the end-user. \n\n When I'm not coding, you can find me exploring the latest design trends, contributing to open-source projects, or hiking in the great outdoors. I believe in lifelong learning and am constantly experimenting with new frameworks and tools to stay at the forefront of the ever-evolving tech landscape.",
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
};

export const skills: Skill[] = [
  { name: "React & Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 98 },
  { name: "Framer Motion", level: 85 },
  { name: "Node.js & Express", level: 75 },
  { name: "UI/UX Design (Figma)", level: 80 },
  { name: "GraphQL", level: 70 },
];

export const projects: Project[] = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Interactive",
    description: "A full-featured e-commerce site with a modern UI.",
    longDescription: "This project is a complete e-commerce solution built with Next.js and Tailwind CSS. It features product listings, a shopping cart, user authentication, and a Stripe-integrated checkout process. State management is handled with Zustand for a lightweight and efficient experience.",
    imageUrl: "https://picsum.photos/seed/ecom/800/600",
    heroImage: "https://picsum.photos/seed/ecom-hero/1200/600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Zustand"],
    liveUrl: "#",
    repoUrl: "#",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    galleryImages: [
        "https://picsum.photos/seed/ecom-gal1/800/600",
        "https://picsum.photos/seed/ecom-gal2/800/600",
        "https://picsum.photos/seed/ecom-gal3/800/600",
    ],
  },
  {
    id: "project-management-tool",
    title: "KanbanFlow",
    category: "UI Animation",
    description: "A collaborative project management tool with a Kanban board.",
    longDescription: "KanbanFlow is a Trello-like application that allows teams to manage their projects using a drag-and-drop Kanban board interface. Built with React and Firebase for real-time data synchronization, it offers features like task creation, user assignments, and progress tracking.",
    imageUrl: "https://picsum.photos/seed/kanban/800/600",
    heroImage: "https://picsum.photos/seed/kanban-hero/1200/600",
    technologies: ["React", "Firebase", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
    galleryImages: [
        "https://picsum.photos/seed/kanban-gal1/800/600",
        "https://picsum.photos/seed/kanban-gal2/800/600",
    ],
  },
  {
    id: "design-agency-portfolio",
    title: "Aperture Studios",
    category: "Motion Graphics",
    description: "A visually stunning portfolio for a creative design agency.",
    longDescription: "Aperture Studios' portfolio website is designed to showcase their work through bold visuals and fluid animations. Built using React and Framer Motion, the site features a project gallery, a team page, and a contact form, all wrapped in a sleek, modern design.",
    imageUrl: "https://picsum.photos/seed/design/800/600",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
  },
  {
    id: "fitness-tracker-app",
    title: "FitTrack",
    category: "UI Animation",
    description: "A web app to track workouts and monitor fitness progress.",
    longDescription: "FitTrack helps users log their workouts, track their progress over time with charts and graphs (using Recharts), and set fitness goals. The app is built with Vue.js and uses LocalStorage to save user data, making it a fast and client-side-only application.",
    imageUrl: "https://picsum.photos/seed/fitness/800/600",
    heroImage: "https://picsum.photos/seed/fitness-hero/1200/600",
    technologies: ["Vue.js", "Recharts", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "recipe-sharing-platform",
    title: "RecipeBook",
    category: "Interactive",
    description: "A social platform for sharing and discovering new recipes.",
    longDescription: "RecipeBook is a community-driven platform where users can post their own recipes, save favorites from others, and create shopping lists. The backend is powered by Node.js and MongoDB, with a React frontend.",
    imageUrl: "https://picsum.photos/seed/recipe/800/600",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "corporate-landing-page",
    title: "SaaS Corp",
    category: "Experimental",
    description: "A professional landing page for a B2B SaaS company.",
    longDescription: "This project involved creating a high-converting, responsive landing page for a new SaaS product. The design is clean and professional, focusing on clear calls-to-action and showcasing the product's key features and benefits.",
    imageUrl: "https://picsum.photos/seed/saas/800/600",
    technologies: ["HTML5", "JavaScript", "Tailwind CSS", "AOS"],
    liveUrl: "#",
    repoUrl: "#",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U"
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Working with Vikas was an absolute pleasure. Their attention to detail and creative problem-solving skills brought our vision to life exactly as we imagined. The final product exceeded all our expectations.",
    author: "Jane Smith",
    company: "CEO of Aperture Studios",
  },
  {
    quote: "The level of professionalism and technical expertise is unmatched. They delivered a robust and scalable application on time and on budget. I would highly recommend them for any frontend development needs.",
    author: "John Peterson",
    company: "Product Manager at KanbanFlow",
  },
];