"use client";
import { useParams, useRouter } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";

export default function ProjectDetails() {
  const { slug } = useParams();
  const router = useRouter();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-slate-950">
        <p className="text-xl">Project not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => router.back()}
          className="flex items-center text-slate-400 hover:text-emerald-400 mb-6 transition-colors text-sm"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
        </button>

        <div className="h-64 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-900 mb-8 border border-slate-800">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.name}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-emerald-500/10 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4 mb-10">
          <a
            href={project.liveLink}
            target="_blank"
            className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-all shadow-md"
          >
            Live Preview <ExternalLink size={16} className="ml-2" />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all"
          >
            GitHub Repository <Code size={16} className="ml-2" />
          </a>
        </div>

        <div className="space-y-8 border-t border-slate-900 pt-8">
          <div>
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">
              Description
            </h3>
            <p className="text-slate-300 text-justify leading-relaxed">
              {project.description}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-amber-400 mb-2">
              Challenges Faced
            </h3>
            <p className="text-slate-300 text-justify leading-relaxed">
              {project.challenges}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              Future Scope & Improvements
            </h3>
            <p className="text-slate-300 text-justify leading-relaxed">
              {project.improvements}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
