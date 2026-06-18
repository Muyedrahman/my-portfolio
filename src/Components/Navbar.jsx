// "use client";
// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Education", href: "#education" },
//     { name: "Experience", href: "#experience" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md text-white border-b border-slate-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="text-xl font-bold tracking-wider text-emerald-400">
//             MUYEDUR.
//           </div>
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="hover:text-emerald-400 transition-colors text-sm font-medium"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-slate-300 hover:text-white"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-emerald-400"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }



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
        {/* লোগো */}
        <Link
          href="/"
          className="text-lg font-black text-white tracking-wider group"
        >
          MUYEDUR
          <span className="text-emerald-400 group-hover:text-white transition-colors">
            .IO
          </span>
        </Link>

        {/* নেভ লিংকস */}
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

        {/* রাইট সাইড অ্যাকশন বাটন */}
        <div>
          <Link
            href="#contact"
            className="text-xs font-bold uppercase tracking-widest border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-5 py-2.5 rounded-lg transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}