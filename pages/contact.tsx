import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };
  
  if (submitted) {
    return (
        <div className="text-center py-20 max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <h1 className="text-4xl font-display font-bold text-accent mb-4">Thank You!</h1>
                <p className="text-lg text-muted-text">Your message has been sent successfully. I'll get back to you as soon as possible.</p>
            </motion.div>
        </div>
    )
  }

  return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-display font-bold text-center mb-4 text-text">Let's Work Together</h1>
        <p className="text-lg text-center text-muted-text mb-12">
          Have a project in mind or just want to say hello? Drop me a line.
        </p>

        <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6 bg-surface p-8 rounded-lg shadow-lg border border-line-color"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-muted-text">Name</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full bg-background border border-line-color rounded-md py-2 px-3 text-text shadow-sm focus:outline-none focus:ring-accent focus:border-accent" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-text">Email</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full bg-background border border-line-color rounded-md py-2 px-3 text-text shadow-sm focus:outline-none focus:ring-accent focus:border-accent" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-muted-text">Message</label>
            <textarea name="message" id="message" rows={4} required className="mt-1 block w-full bg-background border border-line-color rounded-md py-2 px-3 text-text shadow-sm focus:outline-none focus:ring-accent focus:border-accent"></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-background bg-accent hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-300 disabled:bg-muted-text disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </motion.form>
      </div>
  );
};

export default Contact;
