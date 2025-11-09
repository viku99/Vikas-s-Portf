import React from 'react';
import { motion, Variants } from 'framer-motion';
import { personalInfo, skills, testimonials } from '../data';
import SkillBar from '../components/SkillBar';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Quote Icon for Testimonials
const QuoteIcon = () => (
    <svg className="w-10 h-10 text-accent/20 absolute top-4 left-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.333 22.667h4L16 17.333V9.333H6.667v8L9.333 22.667zM22.667 22.667h4L29.333 17.333V9.333H20v8l2.667 5.334z" />
    </svg>
);


const About: React.FC = () => {
  return (
      <motion.div 
        className="space-y-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Bio Section - Redesigned */}
        <motion.section variants={itemVariants} aria-labelledby="about-me-heading">
          <h1 id="about-me-heading" className="text-4xl font-display font-bold text-center mb-12 tracking-wide text-text">
            About Me
          </h1>
          <div className="flex flex-col md:flex-row items-start gap-12">
            <motion.div 
              className="md:w-1/3 flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <img
                src="https://picsum.photos/seed/profile/400/400"
                alt={personalInfo.name}
                className="rounded-lg w-full object-cover shadow-lg border-2 border-line-color"
              />
            </motion.div>
            <motion.div 
              className="md:w-2/3 text-lg text-muted-text space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-2xl font-display font-semibold text-accent -mt-2">{personalInfo.title}</h2>
              {personalInfo.longBio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section - Redesigned with Progress Bars */}
        <motion.section variants={itemVariants} aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-3xl font-display font-bold text-center mb-10 tracking-wide text-text">
            My Technical Toolkit
          </h2>
          <div className="max-w-3xl mx-auto">
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section - Redesigned */}
        <motion.section variants={itemVariants} aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="text-3xl font-display font-bold text-center mb-10 tracking-wide text-text">
            What Others Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-surface border border-line-color p-8 rounded-lg shadow-md relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <QuoteIcon />
                <p className="text-muted-text mb-6 italic relative z-10">"{testimonial.quote}"</p>
                <div className="text-right not-italic relative z-10">
                    <p className="text-accent font-semibold">{testimonial.author}</p>
                    <p className="text-muted-text text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
  );
};

export default About;
