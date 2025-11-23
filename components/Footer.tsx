import React from 'react';
import { Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-12 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">OpenTech</span>
            <span className="text-slate-500">© {new Date().getFullYear()}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://x.com/_OpenTec" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="X (Twitter)">
               <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
               </svg>
            </a>
            <a href="https://github.com/Open-Tech-Project" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center md:text-left text-sm text-slate-600">
          <p>OpenTube and OpenBoard are open source projects maintained by the OpenTech Project community.</p>
        </div>
      </div>
    </footer>
  );
};