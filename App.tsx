import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectData } from './types';

const PROJECTS: ProjectData[] = [
  {
    key: 'opentube',
    displayName: 'OpenTube',
    repoName: 'Open-Tech-Project/OpenTube',
    iconUrl: 'https://raw.githubusercontent.com/Open-Tech-Project/OpenTech_files/main/179259430.png',
    customDescription: 'A versatile and lightweight open-source video platform client. Experience content without compromise.',
    features: ['Video Streaming', 'Privacy Focused', 'Ad-free Experience'],
    platforms: ['Android', 'iOS', 'HarmonyOS']
  },
  {
    key: 'openboard',
    displayName: 'OpenBoard',
    repoName: 'Open-Tech-Project/OpenBoard',
    iconUrl: 'https://raw.githubusercontent.com/Open-Tech-Project/OpenTech_files/main/Group%20335.png',
    customDescription: 'An intuitive, open-source keyboard application designed for customization and efficiency.',
    features: ['Custom Layouts', 'High Performance'],
    platforms: ['HarmonyOS 6+'],
    customLanguage: 'ArkTS'
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-100 selection:bg-purple-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="projects" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Projects</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Explore our core open-source initiatives. Check out the code, download the latest releases, or contribute on GitHub.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
              {PROJECTS.map((project) => (
                <ProjectCard key={project.key} project={project} />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
