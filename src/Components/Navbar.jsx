"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/70 backdrop-blur-md border-b border-slate-900/80 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        <Link
          href="/"
          className="text-lg font-black text-white tracking-wider group"
        >
          MUYEDUR
          <span className="text-emerald-400 group-hover:text-white transition-colors">
            .IO
          </span>
        </Link>

        
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-semibold tracking-widest text-slate-400 hover:text-white uppercase transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        
        <div>
          <Link
            href="#contact"
            className="text-xs font-bold uppercase tracking-widest border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-5 py-2.5 rounded-lg transition-all duration-300"
          >
            Let,s Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}