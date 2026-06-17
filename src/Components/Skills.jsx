"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "HTML5/CSS3",
      ],
    },
    {
      title: "Backend & DB",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools & Others",
      skills: ["Git & GitHub", "DaVinci Resolve", "Framer Motion", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-emerald-400">
          My Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-emerald-300 border-b border-slate-800 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-slate-800 text-slate-300 text-sm px-3 py-1.5 rounded-md border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
