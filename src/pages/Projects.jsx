import React from 'react';
import Reveal from '../components/Reveal';
import { ExternalLinkIcon, GithubIcon } from '../components/Icons';


function Projects() {
  const projectData = [
        { 
            title: "Tournament Generator", 
            description: "Modern build Footboll tournament web site", 
            image: "https://placehold.co/600x400/1e293b/38bdf8?text=Project+1", 
            tags: ["Html", "Tailwind CSS", "Javascript", "Javascript-dom"],
            liveLink: "https://tournamentgenerator.netlify.app/ ", 
            repoLink: "#" 
        },
        { 
            title: "The Kitchen project", 
            description: "A collaborative kitchen tool with drag-and-drop functionality and real-time updates.", 
            image: "https://placehold.co/600x400/1e293b/38bdf8?text=Project+2", 
            tags: ["React", "Firebase", "daisyui"],
            liveLink: "#",
            repoLink: "#"
        },
        { 
            title: "QrCode Generator", 
            description: "IF you need qr-code use this web site for free", 
            image: "https://placehold.co/600x400/1e293b/38bdf8?text=Project+3", 
            tags: ["Html", "Tailwind CSS", "Javascript"],
            liveLink: "#",
            repoLink: "#"
        },
    ];
    return (
        <section id="projects" className="py-20 bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <Reveal><h2 className="text-4xl font-bold text-center text-white mb-2">My Projects</h2><div className="w-24 h-1 bg-cyan-500 mx-auto mb-12"></div></Reveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <Reveal key={index} delay={index * 150}>
                            <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                                <div className="relative overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                        {/* Havolalar shu yerda yangilandi */}
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-all duration-300 transform hover:scale-110 flex items-center gap-2"><ExternalLinkIcon className="w-5 h-5"/> Live Demo</a>
                                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-slate-600 text-white py-2 px-4 rounded-md hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 flex items-center gap-2"><GithubIcon className="w-5 h-5"/> Source</a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4 h-20">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">{project.tags.map(tag => (<span key={tag} className="text-xs font-semibold bg-slate-700 text-cyan-300 py-1 px-3 rounded-full">{tag}</span>))}</div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
