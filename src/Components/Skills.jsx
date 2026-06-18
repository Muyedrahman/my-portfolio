// "use client";
// import { motion } from "framer-motion";

// export default function Skills() {
//   const skillCategories = [
//     {
//       title: "Frontend",
//       skills: [
//         "React.js",
//         "Next.js",
//         "Tailwind CSS",
//         "JavaScript (ES6+)",
//         "HTML5/CSS3",
//       ],
//     },
//     {
//       title: "Backend & DB",
//       skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
//     },
//     {
//       title: "Tools & Others",
//       skills: ["Git & GitHub", "DaVinci Resolve", "Framer Motion", "VS Code"],
//     },
//   ];

//   return (
//     <section id="skills" className="py-20 bg-slate-950 text-white">
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center text-emerald-400">
//           My Skills
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {skillCategories.map((category, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all"
//             >
//               <h3 className="text-xl font-semibold mb-4 text-emerald-300 border-b border-slate-800 pb-2">
//                 {category.title}
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {category.skills.map((skill, sIdx) => (
//                   <span
//                     key={sIdx}
//                     className="bg-slate-800 text-slate-300 text-sm px-3 py-1.5 rounded-md border border-slate-700/50"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// 2

// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function Skills() {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef([]);

//   const skillCategories = [
//     {
//       title: "Frontend",
//       skills: [
//         "React.js",
//         "Next.js",
//         "Tailwind CSS",
//         "JavaScript (ES6+)",
//         "HTML5/CSS3",
//       ],
//     },
//     {
//       title: "Backend & DB",
//       skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
//     },
//     {
//       title: "Tools & Others",
//       skills: ["Git & GitHub", "DaVinci Resolve", "Framer Motion", "VS Code"],
//     },
//   ];

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // প্রতিটি কার্ড নিচ থেকে উপরে স্মুথলি স্ট্যাগারড হয়ে রিভিল হবে
//     gsap.fromTo(
//       cardsRef.current,
//       { opacity: 0, y: 40 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.2, // একটি কার্ড আসার ০.২ সেকেন্ড পর আরেকটি আসবে
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%", // সেকশনটি স্ক্রিনের ৭৫% এ আসলেই অ্যানিমেশন ট্রিগার হবে
//           toggleActions: "play none none reverse",
//         },
//       },
//     );
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="skills"
//       className="py-20 bg-slate-950 text-white overflow-hidden"
//     >
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center text-emerald-400 tracking-wide">
//           My Skills
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {skillCategories.map((category, idx) => (
//             <div
//               key={idx}
//               ref={(el) => (cardsRef.current[idx] = el)}
//               className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 shadow-xl"
//             >
//               <h3 className="text-xl font-semibold mb-4 text-emerald-300 border-b border-slate-800 pb-2">
//                 {category.title}
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {category.skills.map((skill, sIdx) => (
//                   <span
//                     key={sIdx}
//                     className="bg-slate-800 text-slate-300 text-sm px-3 py-1.5 rounded-md border border-slate-700/50 hover:text-emerald-400 hover:border-emerald-500/20 transition-colors duration-200"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import {
  Atom,
  Layers,
  Wind,
  Code2,
  Globe,
  Server,
  Terminal,
  Database,
  Network,
  GitBranch,
  Video,
  Zap,
  Box,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React.js",
          icon: Atom,
          color: "text-cyan-400",
          bg: "bg-cyan-500/10 border-cyan-500/20",
        },
        {
          name: "Next.js",
          icon: Layers,
          color: "text-slate-200",
          bg: "bg-slate-500/10 border-slate-500/20",
        },
        {
          name: "Tailwind CSS",
          icon: Wind,
          color: "text-sky-400",
          bg: "bg-sky-500/10 border-sky-500/20",
        },
        {
          name: "JavaScript (ES6+)",
          icon: Code2,
          color: "text-yellow-400",
          bg: "bg-yellow-500/10 border-yellow-500/20",
        },
        {
          name: "HTML5/CSS3",
          icon: Globe,
          color: "text-orange-400",
          bg: "bg-orange-500/10 border-orange-500/20",
        },
      ],
    },
    {
      title: "Backend & DB",
      skills: [
        {
          name: "Node.js",
          icon: Server,
          color: "text-green-400",
          bg: "bg-green-500/10 border-green-500/20",
        },
        {
          name: "Express.js",
          icon: Terminal,
          color: "text-slate-400",
          bg: "bg-slate-500/10 border-slate-500/20",
        },
        {
          name: "MongoDB",
          icon: Database,
          color: "text-emerald-400",
          bg: "bg-emerald-500/10 border-emerald-500/20",
        },
        {
          name: "REST APIs",
          icon: Network,
          color: "text-purple-400",
          bg: "bg-purple-500/10 border-purple-500/20",
        },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        {
          name: "Git & GitHub",
          icon: GitBranch,
          color: "text-red-400",
          bg: "bg-red-500/10 border-red-500/20",
        },
        {
          name: "DaVinci Resolve",
          icon: Video,
          color: "text-violet-400",
          bg: "bg-violet-500/10 border-violet-500/20",
        },
        {
          name: "Framer Motion",
          icon: Zap,
          color: "text-fuchsia-400",
          bg: "bg-fuchsia-500/10 border-fuchsia-500/20",
        },
        {
          name: "VS Code",
          icon: Box,
          color: "text-blue-400",
          bg: "bg-blue-500/10 border-blue-500/20",
        },
      ],
    },
  ];

  // Dynamic mouse position tracker for glass spotlighting (JS native)
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  // Staggered reveal animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-32 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title Header */}
        <div className="mb-20 text-center relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 uppercase mb-4 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Skills
            </span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2 tracking-wide">
            A curated stack of technologies I use to build robust, scalable, and
            beautifully animated products.
          </p>
          <div className="h-[3px] w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-6 mx-auto" />
        </div>

        {/* Categories Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              className="p-8 bg-slate-900/[0.22] backdrop-blur-2xl border border-white/[0.08] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-white/[0.18] hover:shadow-[0_25px_55px_rgba(0,0,0,0.55),_inset_0_1px_0_0_rgba(255,255,255,0.25)] hover:bg-slate-900/40 -translate-y-0 hover:-translate-y-1.5 transition-all duration-500 ease-out relative overflow-hidden group"
              style={{
                backgroundImage: `radial-gradient(350px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(16, 185, 129, 0.05), transparent 70%), radial-gradient(200px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(255, 255, 255, 0.05), transparent 60%)`,
              }}
            >
              {/* Organic Glass Noise Texture */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.015%22/%3E%3C/svg%3E')] opacity-30 pointer-events-none mix-blend-overlay" />

              <h3 className="text-xl font-bold mb-6 text-white tracking-wide border-b border-white/[0.06] pb-4 flex items-center justify-between relative z-10">
                {category.title}
                <span className="text-[10px] tracking-widest text-slate-500 font-mono">
                  // CATEGORY_{idx + 1}
                </span>
              </h3>

              <div className="space-y-3 relative z-10">
                {category.skills.map((skill, sIdx) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={sIdx}
                      className="flex items-center gap-4 p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-0.5 transition-all duration-300 group/item"
                    >
                      <div
                        className={`p-2 rounded-lg border transition-all duration-300 group-hover/item:scale-105 ${skill.bg} ${skill.color}`}
                      >
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 group-hover/item:text-white transition-colors duration-200">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}