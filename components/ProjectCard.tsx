import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const cardVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: 'easeIn' } },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
        layout
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="group"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <Link to={`/portfolio/${project.id}`} className="block bg-surface rounded-lg overflow-hidden border border-line-color hover:border-accent/50 transition-colors duration-300 h-full shadow-md">
        <div className="relative">
          <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <span className="text-text text-lg font-bold border-2 border-text py-2 px-4 rounded">View Project</span>
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs text-accent font-semibold uppercase tracking-wider">{project.category}</p>
          <h3 className="text-xl font-bold text-text mt-1 mb-2">{project.title}</h3>
          <p className="text-muted-text text-sm">{project.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;