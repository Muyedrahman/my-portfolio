// // Projects.jsx
// import { projectsData } from "@/data/projects";
// import ProjectCard from "./ProjectCard";

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-slate-900 text-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center text-emerald-400">
//           Featured Projects
//         </h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projectsData.map((project) => (
//             <ProjectCard key={project.slug} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// 2

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const projectCards = containerRef.current.querySelectorAll(".project-card");

    gsap.fromTo(
      projectCards,
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="py-20 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-emerald-400 tracking-wide">
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.slug}
              className="project-card bg-slate-950 rounded-2xl overflow-hidden border border-slate-800/80 hover:border-emerald-500/20 transition-all duration-300 flex flex-col h-full group shadow-2xl"
            >
              {/* ইমেজ কন্টেইনার */}
              <div className="h-48 bg-slate-900 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* কন্টেন্ট বডি */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </h3>

                {/* টেক স্ট্যাকের প্রথম ৩টি ট্যাগ হোমে দেখানোর জন্য */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* ডাইনামিক পেজের লিঙ্ক */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex justify-center items-center w-full bg-slate-900 hover:bg-emerald-500 text-slate-300 hover:text-slate-950 font-medium py-2.5 rounded-xl transition-all duration-300 text-sm border border-slate-800 hover:border-transparent gap-2"
                >
                  View Details <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}