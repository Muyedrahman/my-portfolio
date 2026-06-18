import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-400">
          Get In Touch
        </h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto">
          Feel free to reach out for building new projects, sharing ideas, or
          any kind of collaboration.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center space-x-3 bg-slate-900 px-6 py-4 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all w-full sm:w-auto"
          >
            <Mail className="text-emerald-400" />
            <span className="text-slate-200 text-sm">
              muyedrahman732@gmail.com
            </span>
          </a>
          <a
            href="tel:+880123456789"
            className="flex items-center space-x-3 bg-slate-900 px-6 py-4 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all w-full sm:w-auto"
          >
            <Phone className="text-emerald-400" />
            <span className="text-slate-200 text-sm">+880 1712984119</span>
          </a>
        </div>
      </div>
    </section>
  );
}
