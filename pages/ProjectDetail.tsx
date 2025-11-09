import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';
import { Project } from '../types';
import YouTubeModal from '../components/YouTubeModal';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === projectId) || null;
    setProject(foundProject);
  }, [projectId]);

  if (!project) {
    return (
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-accent">Project Not Found</h1>
          <p className="text-muted-text mt-4">The project you are looking for does not exist.</p>
          <Link to="/portfolio" className="mt-8 inline-block px-6 py-3 bg-accent text-background font-bold rounded-lg shadow-lg hover:bg-accent/80 transition-colors duration-300">
            Back to Portfolio
          </Link>
        </div>
    );
  }

  return (
      <div className="max-w-5xl mx-auto">
        <Link to="/portfolio" className="text-accent hover:underline mb-8 inline-block">&larr; Back to Portfolio</Link>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold text-text mb-2">{project.title}</h1>
        <p className="text-lg text-muted-text uppercase tracking-widest mb-8">{project.category}</p>
        
        <img src={project.heroImage || project.imageUrl} alt={project.title} className="w-full h-auto object-cover rounded-lg shadow-lg mb-12 border border-line-color" />

        <div className="prose prose-invert lg:prose-xl max-w-none text-muted-text mb-12">
            <p>{project.longDescription}</p>
        </div>

        <div className="bg-surface p-6 rounded-lg mb-12 border border-line-color">
            <h3 className="text-2xl font-display font-bold text-text mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
                {project.technologies.map(tech => (
                    <span key={tech} className="bg-background text-secondary px-3 py-1 rounded-full text-sm border border-line-color">{tech}</span>
                ))}
            </div>
        </div>

        {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="mb-12">
                <h3 className="text-2xl font-display font-bold text-text mb-4">Project Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {project.galleryImages.map((imgUrl, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-md group border border-line-color">
                            <img 
                                src={imgUrl} 
                                alt={`${project.title} screenshot ${index + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>
        )}

        <div className="flex flex-wrap gap-4">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-accent text-background font-bold rounded-lg shadow-lg hover:bg-accent/80 transition-colors duration-300">Live Demo</a>}
            {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-surface text-text font-bold rounded-lg shadow-lg hover:bg-surface/80 transition-colors duration-300 border border-line-color">Source Code</a>}
            {project.videoUrl && <button onClick={() => setIsModalOpen(true)} className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300">Watch Video</button>}
        </div>
      
      {project.videoUrl && <YouTubeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={project.videoUrl} />}
      </div>
  );
};

export default ProjectDetail;