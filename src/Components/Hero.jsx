"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  ArrowDownCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 pt-16"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-500 shadow-xl shadow-emerald-500/20">
            <img
              src="/images/profile.jpg"
              alt="Muyedur Rahman"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight"
        >
          Hi, I'm <span className="text-emerald-400">Muyedur Rahman</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl text-slate-400 font-medium mb-4"
        >
          Full Stack & Frontend Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-slate-500 max-w-xl mx-auto mb-8"
        >
          ডিজিটাল এসেন্স এবং কোডিংয়ের মেলবন্ধনে তৈরি করি আধুনিক, স্কেলেবল এবং
          ইউজার-ফ্রেন্ডলি ওয়েব এক্সপেরিয়েন্স। মাল্টিডিসিপ্লিনারি নলেজ শেয়ারিং ও
          টেকনোলজির মাধ্যমে বাস্তব সমস্যা সমাধান করাই আমার লক্ষ্য।
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-4 mb-10"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-emerald-500/30"
          >
            Download Resume <ArrowDownCircle className="ml-2" size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center space-x-6 text-slate-400"
        >
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-emerald-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-emerald-400 transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-emerald-400 transition-colors"
          >
            <Facebook size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
