"use client";
import { motion } from "framer-motion";
import { User, Cpu, Compass, Video } from "lucide-react";

export default function About() {
 
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
    }),
  };

  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      id="about"
      className="py-32 bg-slate-950 text-white relative overflow-hidden"
    >
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      
      <div
        className="absolute top-10 left-10 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none mix-blend-screen animate-pulse"
        style={{ animationDuration: "10s" }}
      />
      <div
        className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none mix-blend-screen animate-pulse"
        style={{ animationDuration: "14s" }}
      />
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-purple-500/5 blur-[110px] rounded-full pointer-events-none mix-blend-screen" />

      
      <motion.div
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: [0, -12, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[5%] w-16 h-16 rounded-full border border-white/[0.08] bg-white/[0.01] backdrop-blur-[6px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] pointer-events-none hidden md:block"
      />
      <motion.div
        initial={{ y: 0, scale: 1 }}
        animate={{ y: [0, 15, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[5%] w-24 h-24 rounded-full border border-white/[0.06] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-[8px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.6)] pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[30%] w-3 h-3 rounded-full bg-cyan-400 opacity-20 blur-[2px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="mb-20 text-center md:text-left relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 uppercase mb-4 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Biography
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400">
              Me
            </span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-2 tracking-wide">
            Synthesizing code structures, polymathic thinking, and cinematic
            digital products.
          </p>
          <div className="h-[3px] w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-6 mx-auto md:mx-0" />
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          <div
            onMouseMove={handleMouseMove}
            className="lg:col-span-7 p-8 md:p-10 bg-slate-900/[0.22] backdrop-blur-2xl border border-white/[0.08] rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] relative overflow-hidden group hover:border-white/[0.18] transition-all duration-500 flex flex-col justify-center"
            style={{
              backgroundImage: `radial-gradient(600px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(16, 185, 129, 0.05), transparent 70%), radial-gradient(400px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(6, 182, 212, 0.04), transparent 70%)`,
            }}
          >
           
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.015%22/%3E%3C/svg%3E')] opacity-30 pointer-events-none mix-blend-overlay" />

            
            <div className="absolute top-6 right-8 flex items-center gap-2 text-[9px] tracking-widest text-slate-500 font-mono pointer-events-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              GRAVITY INDUCTION: OFF
            </div>

            <div className="space-y-6 text-slate-300/95 leading-relaxed text-base md:text-[1.05rem] relative z-10">
              <p className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-transparent first-letter:bg-clip-text first-letter:bg-gradient-to-br first-letter:from-emerald-400 first-letter:to-cyan-400 first-letter:mr-3 first-letter:float-left hover:text-slate-100 transition-colors duration-300">
                My programming journey sparkled from a deep curiosity about how
                web technologies shape our world. I find true fulfillment in
                writing exceptionally clean code, crafting pixel-perfect
                interfaces, and architecting complex systems that feel simple to
                the end-user.
              </p>
              <p className="hover:text-slate-100 transition-colors duration-300">
                Driven by a multi-disciplinary mindset, I identify as a{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-extrabold tracking-wide">
                  Polymath
                </strong>
                . Beyond frontend and full-stack development, my intellect
                thrives at the intersection of Political Science, global
                development models, and geopolitical strategies. I love
                analyzing how global macro-systems and human behavior
                intertwine, utilizing data science and psychology as my lenses.
              </p>
              <p className="hover:text-slate-100 transition-colors duration-300">
                In my creative downtime, I immerse myself in advanced video
                production, possessing a deep passion for crafting premium,
                cinematic video essays.{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                  DaVinci Resolve
                </strong>{" "}
                is my playground. Merging cutting-edge technology with cinematic
                storytelling to create high-value digital products is what truly
                defines my passion.
              </p>
            </div>

            {/* Bottom metadata tag layout */}
            <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-wrap gap-6 text-[10px] text-slate-500 font-mono relative z-10 pointer-events-none">
              <div>// LOC: GLOBAL / REMOTE</div>
              <div>// MINDSET: MULTI-DISCIPLINARY</div>
              <div>// CODE: CLEAN & STRUCTURAL</div>
            </div>
          </div>

        
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full content-between">
        
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              className="p-6 bg-slate-900/[0.22] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.3)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:border-white/[0.2] hover:shadow-[0_20px_50px_rgba(0,0,0,0.55),_inset_0_1px_0_0_rgba(255,255,255,0.25)] hover:bg-slate-900/40 -translate-y-0 hover:-translate-y-1.5 transition-all duration-500 ease-out relative overflow-hidden group"
              style={{
                backgroundImage: `radial-gradient(300px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(16, 185, 129, 0.08), transparent 70%), radial-gradient(150px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(255, 255, 255, 0.08), transparent 60%)`,
              }}
            >
              
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.015%22/%3E%3C/svg%3E')] opacity-30 pointer-events-none mix-blend-overlay" />

              
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.05] to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />

              <div className="p-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-emerald-400 w-fit mb-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] group-hover:scale-105 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-all duration-500 relative z-10">
                <Cpu size={20} />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider relative z-10">
                Core Tech
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-medium group-hover:text-slate-200 transition-colors duration-300 relative z-10">
                {" "}
                React, Next.js, Tailwind CSS, JavaScript & Firebase.
              </p>
            </motion.div>

           
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              className="p-6 bg-slate-900/[0.22] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.3)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:border-white/[0.2] hover:shadow-[0_20px_50px_rgba(0,0,0,0.55),_inset_0_1px_0_0_rgba(255,255,255,0.25)] hover:bg-slate-900/40 -translate-y-0 hover:-translate-y-1.5 transition-all duration-500 ease-out relative overflow-hidden group"
              style={{
                backgroundImage: `radial-gradient(300px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(6, 182, 212, 0.08), transparent 70%), radial-gradient(150px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(255, 255, 255, 0.08), transparent 60%)`,
              }}
            >
              {/* Organic Glass Noise Texture */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.015%22/%3E%3C/svg%3E')] opacity-30 pointer-events-none mix-blend-overlay" />

              {/* Glass sheen sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.05] to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />

              <div className="p-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-cyan-400 w-fit mb-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] group-hover:scale-105 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-all duration-500 relative z-10">
                <Compass size={20} />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider relative z-10">
                Polymathy
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-medium group-hover:text-slate-200 transition-colors duration-300 relative z-10">
                Political Science, Geopolitics & Global Systems.
              </p>
            </motion.div>

            
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              className="p-6 bg-slate-900/[0.22] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.3)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:border-white/[0.2] hover:shadow-[0_20px_50px_rgba(0,0,0,0.55),_inset_0_1px_0_0_rgba(255,255,255,0.25)] hover:bg-slate-900/40 -translate-y-0 hover:-translate-y-1.5 transition-all duration-500 ease-out relative overflow-hidden group"
              style={{
                backgroundImage: `radial-gradient(300px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(139, 92, 246, 0.08), transparent 70%), radial-gradient(150px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(255, 255, 255, 0.08), transparent 60%)`,
              }}
            >
              {/* Organic Glass Noise Texture */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.015%22/%3E%3C/svg%3E')] opacity-30 pointer-events-none mix-blend-overlay" />

              {/* Glass sheen sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.05] to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />

              <div className="p-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-purple-400 w-fit mb-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] group-hover:scale-105 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all duration-500 relative z-10">
                <Video size={20} />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider relative z-10">
                Video Essays
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-medium group-hover:text-slate-200 transition-colors duration-300 relative z-10">
                Cinematic editing in DaVinci Resolve & Storytelling.
              </p>
            </motion.div>

     
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              className="p-6 bg-slate-900/[0.22] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.3)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:border-white/[0.2] hover:shadow-[0_20px_50px_rgba(0,0,0,0.55),_inset_0_1px_0_0_rgba(255,255,255,0.25)] hover:bg-slate-900/40 -translate-y-0 hover:-translate-y-1.5 transition-all duration-500 ease-out relative overflow-hidden group"
              style={{
                backgroundImage: `radial-gradient(300px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(16, 185, 129, 0.08), transparent 70%), radial-gradient(150px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(255, 255, 255, 0.08), transparent 60%)`,
              }}
            >
              {/* Organic Glass Noise Texture */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.015%22/%3E%3C/svg%3E')] opacity-30 pointer-events-none mix-blend-overlay" />

              {/* Glass sheen sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.05] to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />

              <div className="p-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-emerald-400 w-fit mb-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] group-hover:scale-105 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-all duration-500 relative z-10">
                <User size={20} />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider relative z-10">
                Entrepreneur
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-medium group-hover:text-slate-200 transition-colors duration-300 relative z-10">
                Building modern digital products with real-world value.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}