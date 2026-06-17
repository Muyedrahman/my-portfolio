// ProjectCard.jsx
"use client";
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:scale-[1.02] transition-all flex flex-col h-full">
      <div className="h-48 bg-slate-800 relative">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-slate-400 text-sm line-clamp-3 mb-4 flex-grow">{project.description}</p>
        <Link href={`/projects/${project.slug}`} className="w-full text-center inline-flex justify-center items-center bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-medium py-2 rounded-lg transition-colors text-sm">
          View Details <ExternalLink size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

// Projects.jsx
import { projectsData } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-emerald-400">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}