// ProjectCard.jsx
"use client";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:scale-[1.02] transition-all flex flex-col h-full">
      <div className="h-48 bg-slate-800 relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-slate-400 text-sm line-clamp-3 mb-4 flex-grow">
          {project.description}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className="w-full text-center inline-flex justify-center items-center bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-medium py-2 rounded-lg transition-colors text-sm"
        >
          View Details <ExternalLink size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
