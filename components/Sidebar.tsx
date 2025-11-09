import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'PORTFOLIO', path: '/portfolio' },
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACT', path: '/contact' },
];

const Sidebar: React.FC = () => {
  const router = useRouter();
  
  const getNavLinkClasses = (path: string, exact: boolean = false) => {
    const isActive = exact ? router.pathname === path : router.pathname.startsWith(path);
    return `transition-colors duration-300 ${
      isActive ? 'text-accent' : 'text-muted-text hover:text-text'
    }`;
  }

  return (
    <aside className="hidden md:flex flex-col items-center justify-between fixed top-0 left-0 h-screen w-24 py-8 bg-background border-r border-line-color z-40">
      <Link href="/" className="text-4xl font-display font-bold bg-gradient-to-r from-white/20 to-white bg-clip-text text-transparent hover:bg-none hover:text-accent transition-colors duration-300">
        V
      </Link>
      
      <nav className="flex flex-col items-center justify-center gap-12">
        {navLinks.map(link => (
          <Link 
            key={link.name} 
            href={link.path} 
            className={getNavLinkClasses(link.path, link.path === '/')}
          >
            <span className="[writing-mode:vertical-rl] transform rotate-180 tracking-[0.2em] text-sm font-medium">
              {link.name}
            </span>
          </Link>
        ))}
      </nav>

      {/* This empty div helps with the justify-between alignment */}
      <div />
    </aside>
  );
};

export default Sidebar;
