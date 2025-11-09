import React from 'react';
import { motion, AnimatePresence, Transition } from 'framer-motion';

interface YouTubeModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

// Enhanced variants for a more dramatic "focus pull" effect
const modalVariants = {
  hidden: { filter: 'blur(30px)', scale: 0.85, opacity: 0 },
  visible: { filter: 'blur(0px)', scale: 1, opacity: 1 },
};

// Adjusted transition to feel smooth with the more intense effect
const modalTransition: Transition = { duration: 0.8, ease: [0.65, 0, 0.35, 1] };

const YouTubeModal: React.FC<YouTubeModalProps> = ({ isOpen, onClose, videoUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100] flex justify-center items-center p-4"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-xl"
            variants={modalVariants}
            transition={modalTransition}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on video
          >
            <button onClick={onClose} className="absolute -top-3 -right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold z-10">&times;</button>
            <iframe
                className="w-full h-full rounded-lg"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default YouTubeModal;