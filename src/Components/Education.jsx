// Education.jsx
export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">Educational Qualification</h2>
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
          <h3 className="text-xl font-bold text-white">B.S.S. (Honours) in Political Science</h3>
          <p className="text-emerald-400 mt-1">Current Degree Program</p>
          <p className="text-slate-400 mt-3 text-sm leading-relaxed">
            রাষ্ট্রবিজ্ঞান নিয়ে পড়ার পাশাপাশি টেকনোলজি ও ডেটার সমন্বয়ে বৈশ্বিক সিস্টেম এবং মানুষের আচরণগত পরিবর্তন নিয়ে পড়াশোনা ও গবেষণা করছি।
          </p>
        </div>
      </div>
    </section>
  );
}

// Experience.jsx
export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">Professional Experience</h2>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 border-l-4 border-l-emerald-500">
          <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full font-medium">Feb 2026 - Present</span>
          <h3 className="text-xl font-bold text-white mt-3">Frontend Web Developer (Intern)</h3>
          <p className="text-slate-400 text-sm mt-2">
            বিগত ৩ মাস ধরে ফ্রন্টএন্ড টিমম্যান্টেন্যান্স, রেসপন্সিভ ইউজার ইন্টারফেস এবং ডাইনামিক কম্পোনেন্ট অপ্টিমাইজেশন নিয়ে কাজ করছি।
          </p>
        </div>
      </div>
    </section>
  );
}