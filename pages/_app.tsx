import React from 'react';
import type { AppProps } from 'next/app';
import { AnimatePresence, motion, Transition, Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';

import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';
import InitialLoader from '../components/InitialLoader';
import BottomNav from '../components/BottomNav';
import Sidebar from '../components/Sidebar';

const transition: Transition = { duration: 0.8, ease: [0.85, 0, 0.15, 1] };

const gateVariants: Variants = {
    initial: { scaleY: 1 },
    animate: { scaleY: 0, transition: { ...transition, delay: 0.3 } },
    exit: { scaleY: 1, transition: transition }
};

const contentVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Dynamic React Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <InitialLoader />
      <div className="min-h-screen bg-background">
        <Header />
        <Sidebar />
        <div className="md:pl-24">
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pb-24 md:pb-12">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={router.asPath}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.div variants={contentVariants}>
                  <Component {...pageProps} />
                </motion.div>
                <motion.div
                    className="fixed top-0 left-0 w-full h-1/2 bg-background origin-bottom z-[90]"
                    variants={gateVariants}
                    aria-hidden="true"
                />
                <motion.div
                    className="fixed bottom-0 left-0 w-full h-1/2 bg-background origin-top z-[90]"
                    variants={gateVariants}
                    aria-hidden="true"
                />
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
        <BackToTopButton />
        <BottomNav />
      </div>
    </>
  );
}

export default MyApp;
