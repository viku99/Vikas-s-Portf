import React from 'react';
import { HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import InitialLoader from './components/InitialLoader';
import PageTransition from './components/PageTransition';
import BottomNav from './components/BottomNav';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <HashRouter>
      <InitialLoader />
      <div className="min-h-screen bg-background">
        <Header />
        <Sidebar />
        <div className="md:pl-24">
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pb-24 md:pb-12">
              <PageTransition />
          </main>
          <Footer />
        </div>
        <BackToTopButton />
        <BottomNav />
      </div>
    </HashRouter>
  );
};

export default App;
