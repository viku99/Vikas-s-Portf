import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// A smoother, more deliberate easing curve for a premium feel
const gateEasing: [number, number, number, number] = [0.85, 0, 0.15, 1];

// Parent container to orchestrate the pause before opening
const loaderVariants: Variants = {
    exit: {
        transition: {
            // Increased delay for a more dramatic pause
            delay: 0.5, 
        }
    }
};

// Variants for the individual gate panels (top and bottom)
const gateVariants: Variants = {
    initial: {
        scaleY: 0,
    },
    animate: {
        scaleY: 1,
        // Slower duration for a smoother, more grand motion
        transition: { duration: 1, ease: gateEasing } 
    },
    exit: {
        scaleY: 0,
        transition: { duration: 1, ease: gateEasing }
    }
};

// Variants for the glowing seam to add a touch of realism
const seamVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 0.7, // Reduced max opacity for a more subtle effect
        // Fade in just before the gates fully close
        transition: { delay: 0.8, duration: 0.4 } 
    },
    exit: {
        opacity: 0,
        // Fade out as the gates begin to open
        transition: { duration: 0.2 } 
    }
};


const InitialLoader: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // The closing animation now takes 1s.
        const timer = setTimeout(() => setIsVisible(false), 1000); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[1000] pointer-events-none"
                    variants={loaderVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {/* Top Gate */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-background origin-top"
                        variants={gateVariants}
                    />
                    {/* Bottom Gate */}
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-1/2 bg-background origin-bottom"
                        variants={gateVariants}
                    >
                        {/* Glowing seam for a premium finish */}
                        <motion.div 
                            className="absolute top-0 w-full h-[1px] bg-accent"
                            style={{
                                // Toned down the glow significantly for a more refined look
                                boxShadow: '0 0 6px #EDEDED'
                            }}
                            variants={seamVariants}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default InitialLoader;