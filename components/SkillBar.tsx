import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
    
  const barVariants: Variants = {
    hidden: { width: 0 },
    visible: { 
      width: `${skill.level}%`,
      transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 } 
    },
  };

  return (
    <motion.div 
        className="mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-secondary font-medium text-lg">{skill.name}</span>
        <span className="text-sm font-mono text-muted-text">{skill.level}%</span>
      </div>
      <div className="w-full bg-surface rounded-full h-2 border border-line-color overflow-hidden">
        <motion.div
          className="bg-accent h-full rounded-full"
          variants={barVariants}
          style={{
              boxShadow: '0 0 8px #EDEDED, 0 0 4px #EDEDED'
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;