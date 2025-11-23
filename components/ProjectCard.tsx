import React, { useEffect, useState } from 'react';
import { Github, Star, ExternalLink, Download, Clock, AlertCircle, Smartphone, Monitor, Globe, TabletSmartphone } from 'lucide-react';
import { ProjectData, RepoDetails } from '../types';
import { fetchRepoDetails, fetchLatestRelease } from '../services/githubService';

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [data, setData] = useState<RepoDetails>({
    repo: null,
    latestRelease: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const [repoData, releaseData] = await Promise.all([
          fetchRepoDetails(project.repoName),
          fetchLatestRelease(project.repoName)
        ]);
        
        if (isMounted) {
          setData({
            repo: repoData,
            latestRelease: releaseData,
            loading: false,
            error: null,
          });
        }
      } catch (err) {
        if (isMounted) {
          setData(prev => ({ ...prev, loading: false, error: 'Failed to fetch data' }));
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [project.repoName]);

  const { repo, latestRelease, loading, error } = data;

  const getPlatformIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('android')) return <Smartphone size={14} />;
    if (p.includes('ios')) return <Smartphone size={14} />;
    if (p.includes('harmony')) return <Smartphone size={14} />;
    if (p.includes('web')) return <Globe size={14} />;
    if (p.includes('desktop')) return <Monitor size={14} />;
    return <ExternalLink size={14} />;
  };

  // Determine language to display (custom or fetched)
  const language = project.customLanguage || repo?.language;

  return (
    <div className="bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group flex flex-col h-full">
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-20 rounded-full group-hover:opacity-30 transition-opacity"></div>
            <img 
              src={project.iconUrl} 
              alt={`${project.displayName} Icon`} 
              className="relative w-20 h-20 object-contain drop-shadow-lg rounded-[22px] bg-slate-800/50 transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col items-end gap-2">
             {loading ? (
                 <div className="h-6 w-16 bg-slate-700 rounded animate-pulse"></div>
             ) : (
                <div className="flex items-center gap-1 text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full text-xs font-medium border border-yellow-400/20">
                  <Star size={12} fill="currentColor" />
                  <span>{repo?.stargazers_count ?? 0}</span>
                </div>
             )}
             
             {/* Platform Badges */}
             <div className="flex flex-wrap justify-end gap-1 max-w-[150px]">
                {project.platforms.map(p => (
                    <div key={p} className="flex items-center gap-1 text-blue-300 bg-blue-950/40 px-2 py-1 rounded-full text-xs border border-blue-800/50 whitespace-nowrap">
                        {getPlatformIcon(p)}
                        <span>{p}</span>
                    </div>
                ))}
             </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {project.displayName}
        </h3>
        
        <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3 text-sm">
          {project.customDescription || repo?.description || "Loading description..."}
        </p>

        {loading ? (
            <div className="space-y-2 mb-6">
                <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-slate-700 rounded w-1/2 animate-pulse"></div>
            </div>
        ) : (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.features.map((feature, idx) => (
                <span key={idx} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg border border-slate-700">
                  {feature}
                </span>
              ))}
              {language && (
                 <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-lg border border-purple-800/50">
                    {language}
                 </span>
              )}
            </div>
        )}
      </div>

      <div className="bg-slate-950/30 p-4 border-t border-slate-800/50 flex items-center justify-between">
         {loading ? (
             <div className="h-8 w-full bg-slate-700 rounded animate-pulse"></div>
         ) : error ? (
            <div className="flex items-center text-red-400 text-xs gap-1">
                <AlertCircle size={14} />
                <span>Could not load details</span>
            </div>
         ) : (
            <>
               <div className="flex flex-col">
                  {latestRelease ? (
                     <a href={latestRelease.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-400 text-sm hover:underline hover:text-blue-300 transition-colors">
                        <Download size={14} />
                        <span className="font-mono">{latestRelease.tag_name}</span>
                     </a>
                  ) : (
                     <span className="text-slate-500 text-xs flex items-center gap-1">
                        <Clock size={12} /> No releases yet
                     </span>
                  )}
                  <span className="text-slate-500 text-xs mt-0.5">Latest Release</span>
               </div>

               <div className="flex gap-3">
                  <a 
                    href={repo?.html_url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    <Github size={18} />
                    <span>Source</span>
                  </a>
               </div>
            </>
         )}
      </div>
    </div>
  );
};
