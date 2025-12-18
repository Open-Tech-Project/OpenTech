import React from 'react';
import { ArrowRight, Code2, Globe, Shield, Github } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl mix-blend-screen animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in opacity-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Building the future of open software
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          Open<span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Tech</span> Project
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          Empowering users with open-source tools designed for privacy, performance, and transparency.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          <a href="#projects" className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2 transform hover:-translate-y-0.5">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="https://github.com/Open-Tech-Project" target="_blank" rel="noreferrer" className="px-8 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm text-white font-semibold rounded-lg border border-slate-700 transition-all flex items-center gap-2 transform hover:-translate-y-0.5">
            <Github size={18} />
            Our GitHub page
          </a>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-800/50 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col items-center gap-3 group">
             <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform duration-300">
               <Shield size={24} />
             </div>
             <h3 className="text-lg font-semibold text-white">Privacy First</h3>
             <p className="text-slate-400 text-sm">Built with user privacy as a core principle, no hidden tracking.</p>
          </div>
          <div className="flex flex-col items-center gap-3 group">
             <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:scale-110 transition-transform duration-300">
               <Code2 size={24} />
             </div>
             <h3 className="text-lg font-semibold text-white">Open Source</h3>
             <p className="text-slate-400 text-sm">Fully transparent codebases available for community audit and contribution.</p>
          </div>
          <div className="flex flex-col items-center gap-3 group">
             <div className="p-3 bg-fuchsia-500/10 rounded-lg text-fuchsia-400 group-hover:scale-110 transition-transform duration-300">
               <Globe size={24} />
             </div>
             <h3 className="text-lg font-semibold text-white">Community Driven</h3>
             <p className="text-slate-400 text-sm">Developed by the community, for the community.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
