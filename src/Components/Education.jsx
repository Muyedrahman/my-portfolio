export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-emerald-400">
          Education
        </h2>

        {/* Main Education Card */}
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 shadow-lg">
          <h3 className="text-xl font-bold text-white">
            B.S.S. (Honours) in Political Science
          </h3>

          <p className="text-emerald-400 mt-1">
            National University, Bangladesh 
          </p>

          <p className="text-slate-400 mt-4 text-sm leading-relaxed">
            Studying Political Science with a strong focus on governance,
            international relations, and economic systems. Alongside my degree,
            I am actively developing skills in Web Development, AI, and
            Blockchain to understand how technology is reshaping global
            politics, economy, and human behavior.
          </p>

          {/* Extra highlights */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
              Web Development
            </span>
            <span className="text-xs px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
              AI & Machine Learning
            </span>
            <span className="text-xs px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
              Blockchain Basics
            </span>
            <span className="text-xs px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
              Economics & Geopolitics
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}