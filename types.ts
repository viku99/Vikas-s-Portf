export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  videoUrl?: string;
  heroImage?: string;
  galleryImages?: string[];
}

export interface Skill {
  name: string;
  level: number; // A value from 0 to 100 for the progress bar
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}