import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-line-color md:hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-display font-bold bg-gradient-to-r from-white/20 to-white bg-clip-text text-transparent hover:bg-none hover:text-accent transition-colors duration-300">
              V
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;