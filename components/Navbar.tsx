import React from 'react';
import { Github, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              OpenTech
            </span>
          </div>
          
          <div className="-mr-2 flex">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#projects" 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a 
              href="https://github.com/Open-Tech-Project" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
