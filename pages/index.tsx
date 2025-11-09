import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { personalInfo } from '../data';

// Parent container to stagger the h1, p, and div
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// Variants for the name container to stagger letters
const nameContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

// Variants for each individual letter
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  },
};

// Variants for the subtitle
const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Variants for the accent line
const lineVariants: Variants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
        opacity: 1,
        width: '4rem', // Shortened to better match the reference image
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
}

// Variants for the call-to-action button
const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };


const Home: React.FC = () => {
  const nameChars = Array.from(personalInfo.name);

  return (
      <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-16rem)] relative">
        <div 
            className="absolute inset-0 z-0 opacity-30" 
            style={{
                background: 'radial-gradient(circle at center, rgba(237, 237, 237, 0.05), transparent 60%)'
            }}
        />
        <motion.div 
            className="relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-text mb-4 tracking-wider"
              variants={nameContainerVariants}
              aria-label={personalInfo.name}
            >
              {nameChars.map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block" aria-hidden="true">
                  {/* Fix: Use non-breaking space to prevent layout shift during animation. */}
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-text uppercase tracking-widest"
              variants={subtitleVariants}
            >
              {personalInfo.subtitle}
            </motion.p>
            <motion.div
              className="mt-6 h-[2px] w-16 bg-accent mx-auto" // Shortened beam
              variants={lineVariants}
              style={{
                  boxShadow: '0 0 8px #EDEDED, 0 0 12px #EDEDED'
              }}
            />
            <motion.div variants={buttonVariants} className="mt-6"> {/* Reduced space to button */}
                <Link 
                    href="/portfolio" 
                    className="inline-block px-6 py-2 bg-accent text-background text-sm font-medium rounded-sm hover:bg-accent/80 transition-colors duration-300"
                >
                    View Portfolio
                </Link>
            </motion.div>
        </motion.div>
      </div>
  );
};

export default Home;
