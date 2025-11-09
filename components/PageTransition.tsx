import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, Transition, Variants } from 'framer-motion';

import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import ProjectDetail from '../pages/ProjectDetail';
import Contact from '../pages/Contact';

// A smoother, more refined easing curve for a premium feel
const transition: Transition = { duration: 0.8, ease: [0.85, 0, 0.15, 1] };

// Variants for the gate panels that expand from the center
const gateVariants: Variants = {
    // Initial state on the *new* page: gates are closed, ready to open
    initial: {
        scaleY: 1,
    },
    // Animation to reveal the new page: gates retract to the center
    animate: {
        scaleY: 0,
        transition: { ...transition, delay: 0.3 } // Increased delay for a more deliberate reveal
    },
    // Animation to hide the old page: gates expand from the center
    exit: {
        scaleY: 1,
        transition: transition // Close immediately
    }
};

// Variants for the page content itself
const contentVariants: Variants = {
    initial: { opacity: 0 },
    // Fade in as the gates open, with a slightly longer duration
    animate: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } }, 
    // Fade out just before the gates close, slightly faster
    exit: { opacity: 0, transition: { duration: 0.4 } },
};

const PageTransition: React.FC = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={location.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {/* Page Content */}
                <motion.div variants={contentVariants}>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </motion.div>
                
                {/* Center-Out Gate Transition Layer */}
                {/* Top Half */}
                <motion.div
                    className="fixed top-0 left-0 w-full h-1/2 bg-background origin-bottom z-[90]"
                    variants={gateVariants}
                    aria-hidden="true"
                />
                {/* Bottom Half */}
                <motion.div
                    className="fixed bottom-0 left-0 w-full h-1/2 bg-background origin-top z-[90]"
                    variants={gateVariants}
                    aria-hidden="true"
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;