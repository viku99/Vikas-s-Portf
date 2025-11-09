import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data';
import ProjectCard from '../../components/ProjectCard';

const Portfolio: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Hardcoded categories to match the design screenshot
  const displayCategories = ['All', 'Motion Graphics', 'Title Sequence', 'UI Animation', 'VFX', 'Interactive', 'Experimental'];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.technologies.join(' ').toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
      <div className="space-y-12">
        <header>
          <h1 className="text-7xl lg:text-8xl font-display font-bold text-text">WORK</h1>
          <p className="mt-4 text-lg text-muted-text max-w-3xl">
            A curated selection of projects demonstrating a blend of artistic vision and technical skill in motion design, VFX, and visual storytelling.
          </p>
          <p className="mt-2 text-sm text-muted-text">
            Last Updated: July 26, 2024
          </p>
        </header>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-start gap-2">
            {displayCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-background'
                    : 'bg-surface text-secondary hover:bg-surface/80 hover:text-text'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-auto">
             <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 bg-transparent border-0 border-b border-line-color focus:outline-none focus:ring-0 focus:border-accent py-2 placeholder:text-muted-text"
             />
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
               <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center text-muted-text text-lg py-16"
               >
                 No projects found matching your criteria.
               </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
  );
};

export default Portfolio;
