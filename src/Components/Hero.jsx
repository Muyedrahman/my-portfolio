// "use client";
// import { motion } from "framer-motion";
// import {
//   Github,
//   Linkedin,
//   Twitter,
//   Facebook,
//   ArrowDownCircle,
// } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-slate-950 pt-16"
//     >
//       <div className="max-w-5xl mx-auto px-4 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-6 flex justify-center"
//         >
//           <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-500 shadow-xl shadow-emerald-500/20">
//             <img
//               src="/images/profile.jpg"
//               alt="Muyedur Rahman"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight"
//         >
//           Hi, I'm <span className="text-emerald-400">Muyedur Rahman</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-xl sm:text-2xl text-slate-400 font-medium mb-4"
//         >
//           Full Stack & Frontend Developer
//         </motion.p>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="text-sm text-slate-500 max-w-xl mx-auto mb-8"
//         >
//           ডিজিটাল এসেন্স এবং কোডিংয়ের মেলবন্ধনে তৈরি করি আধুনিক, স্কেলেবল এবং
//           ইউজার-ফ্রেন্ডলি ওয়েব এক্সপেরিয়েন্স। মাল্টিডিসিপ্লিনারি নলেজ শেয়ারিং ও
//           টেকনোলজির মাধ্যমে বাস্তব সমস্যা সমাধান করাই আমার লক্ষ্য।
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="flex justify-center space-x-4 mb-10"
//         >
//           <a
//             href="/resume.pdf"
//             download
//             className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-emerald-500/30"
//           >
//             Download Resume <ArrowDownCircle className="ml-2" size={18} />
//           </a>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//           className="flex justify-center space-x-6 text-slate-400"
//         >
//           <a
//             href="https://github.com"
//             target="_blank"
//             className="hover:text-emerald-400 transition-colors"
//           >
//             <Github size={24} />
//           </a>
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             className="hover:text-emerald-400 transition-colors"
//           >
//             <Linkedin size={24} />
//           </a>
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             className="hover:text-emerald-400 transition-colors"
//           >
//             <Twitter size={24} />
//           </a>
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             className="hover:text-emerald-400 transition-colors"
//           >
//             <Facebook size={24} />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // 2
// "use client";
// import { motion } from "framer-motion";
// import {
//   Github,
//   Linkedin,
//   Twitter,
//   Facebook, // এখানে FacebookIcon এর বদলে শুধু Facebook ইমপোর্ট করুন
//   ArrowDownCircle,
// } from "lucide-react";

// export default function Hero() {
//   // প্যারেন্ট কন্টেইনারের জন্য ভ্যারিয়েন্ট
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   // টেক্সট এবং ইমেজ রিভিলের জন্য কমন ভ্যারিয়েন্ট
//   const itemVariants = {
//     hidden: { opacity: 0, y: 25 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100, damping: 15 },
//     },
//   };

//   // সোশ্যাল আইকন ও বাটনের জন্য মাইক্রো-ইন্টারঅ্যাকশন ইফেক্টস
//   const hoverEffects = {
//     hover: {
//       scale: 1.1,
//       color: "#34d399", // Emerald 400
//       y: -3,
//       transition: { type: "spring", stiffness: 300, damping: 10 },
//     },
//     tap: { scale: 0.95 },
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-slate-950 pt-16 overflow-hidden"
//     >
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="max-w-5xl mx-auto px-4 text-center"
//       >
//         {/* প্রোফাইল ইমেজ কন্টেইনার */}
//         <motion.div
//           variants={itemVariants}
//           className="mb-6 flex justify-center"
//         >
//           <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-500 shadow-xl shadow-emerald-500/10 relative group">
//             <img
//               src="/images/profile.jpg"
//               alt="Muyedur Rahman"
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//           </div>
//         </motion.div>

//         {/* মেইন নাম/হেডিং */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight select-none"
//         >
//           Hi, I'm <span className="text-emerald-400">Muyedur Rahman</span>
//         </motion.h1>

//         {/* ডেজিগনেশন */}
//         <motion.p
//           variants={itemVariants}
//           className="text-xl sm:text-2xl text-slate-400 font-medium mb-4"
//         >
//           Full Stack & Frontend Developer
//         </motion.p>

//         {/* ইন্ট্রোডাকশন */}
//         <motion.p
//           variants={itemVariants}
//           className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mb-8 leading-relaxed text-center"
//         >
//           ডিজিটাল এসেন্স এবং কোডিংয়ের মেলবন্ধনে তৈরি করি আধুনিক, স্কেলেবল এবং
//           ইউজার-ফ্রেন্ডলি ওয়েব এক্সপেরিয়েন্স। মাল্টিডিসিপ্লিনারি নলেজ শেয়ারিং
//           ও টেকনোলজির মাধ্যমে বাস্তব সমস্যা সমাধান করাই আমার লক্ষ্য।
//         </motion.p>

//         {/* রিজিউমে ডাউনলোড বাটন */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-center space-x-4 mb-10"
//         >
//           <motion.a
//             href="/resume.pdf"
//             download
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 0px 20px rgba(16, 185, 129, 0.4)",
//             }}
//             whileTap={{ scale: 0.98 }}
//             className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-7 py-3.5 rounded-full transition-colors cursor-pointer shadow-lg"
//           >
//             Download Resume <ArrowDownCircle className="ml-2" size={18} />
//           </motion.a>
//         </motion.div>

//         {/* সোশ্যাল লিংকস - শুধুমাত্র একবার রাখুন */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-center space-x-6 text-slate-400"
//         >
//           <motion.a
//             href="https://github.com/your-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             variants={hoverEffects}
//             whileHover="hover"
//             whileTap="tap"
//           >
//             <Github size={24} />
//           </motion.a>

//           <motion.a
//             href="https://linkedin.com/in/your-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             variants={hoverEffects}
//             whileHover="hover"
//             whileTap="tap"
//           >
//             <Linkedin size={24} />
//           </motion.a>

//           <motion.a
//             href="https://twitter.com/your-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             variants={hoverEffects}
//             whileHover="hover"
//             whileTap="tap"
//           >
//             <Twitter size={24} />
//           </motion.a>

//           <motion.a
//             href="https://facebook.com/your-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             variants={hoverEffects}
//             whileHover="hover"
//             whileTap="tap"
//           >
//             <Facebook size={24} />
//           </motion.a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// 3

// "use client";
// import { motion } from "framer-motion";
// import { ArrowDownCircle } from "lucide-react";

// export default function Hero() {
//   // প্যারেন্ট কন্টেইনারের জন্য ভ্যারিয়েন্ট
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   // টেক্সট এবং ইমেজ রিভিলের জন্য কমন ভ্যারিয়েন্ট
//   const itemVariants = {
//     hidden: { opacity: 0, y: 25 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100, damping: 15 },
//     },
//   };

//   // সোশ্যাল আইকন ও বাটনের জন্য মাইক্রো-ইন্টারঅ্যাকশন ইফেক্টস
//   const hoverEffects = {
//     hover: {
//       scale: 1.1,
//       fill: "#34d399", // Emerald 400
//       y: -3,
//       transition: { type: "spring", stiffness: 300, damping: 10 },
//     },
//     tap: { scale: 0.95 },
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-slate-950 pt-16 overflow-hidden"
//     >
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="max-w-5xl mx-auto px-4 text-center"
//       >
//         {/* প্রোফাইল ইমেজ কন্টেইনার */}
//         <motion.div
//           variants={itemVariants}
//           className="mb-6 flex justify-center"
//         >
//           <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-500 shadow-xl shadow-emerald-500/10 relative group">
//             <img
//               src="/images/profile.jpg"
//               alt="Muyedur Rahman"
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//           </div>
//         </motion.div>

//         {/* মেইন নাম/হেডিং */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight select-none"
//         >
//           Hi, I'm <span className="text-emerald-400">Muyedur Rahman</span>
//         </motion.h1>

//         {/* ডেজিগনেশন */}
//         <motion.p
//           variants={itemVariants}
//           className="text-xl sm:text-2xl text-slate-400 font-medium mb-4"
//         >
//           Full Stack & Frontend Developer
//         </motion.p>

//         {/* ইন্ট্রোডাকশন */}
//         <motion.p
//           variants={itemVariants}
//           className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mb-8 leading-relaxed text-center"
//         >
//           ডিজিটাল এসেন্স এবং কোডিংয়ের মেলবন্ধনে তৈরি করি আধুনিক, স্কেলেবল এবং
//           ইউজার-ফ্রেন্ডলি ওয়েব এক্সপেরিয়েন্স। মাল্টিডিসিপ্লিনারি নলেজ শেয়ারিং
//           ও টেকনোলজির মাধ্যমে বাস্তব সমস্যা সমাধান করাই আমার লক্ষ্য।
//         </motion.p>

//         {/* রিজিউমে ডাউনলোড বাটন */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-center space-x-4 mb-10"
//         >
//           <motion.a
//             href="/resume.pdf"
//             download
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 0px 20px rgba(16, 185, 129, 0.4)",
//             }}
//             whileTap={{ scale: 0.98 }}
//             className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-7 py-3.5 rounded-full transition-colors cursor-pointer shadow-lg"
//           >
//             Download Resume <ArrowDownCircle className="ml-2" size={18} />
//           </motion.a>
//         </motion.div>

//         {/* বুলেটপ্রুফ SVG সোশ্যাল লিংকস */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-center space-x-6 text-slate-400"
//         >
//           {/* GitHub */}
//           <motion.a
//             href="https://github.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             variants={hoverEffects}
//             whileHover="hover"
//             whileTap="tap"
//             className="hover:text-emerald-400 transition-colors"
//           >
//             <svg
//               role="img"
//               viewBox="0 0 24 24"
//               className="w-6 h-6 fill-current"
//             >
//               <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
//             </svg>
//           </motion.a>

//           {/* LinkedIn */}
//           <motion.a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             variants={hoverEffects}
//             whileHover="hover"
//             whileTap="tap"
//             className="hover:text-emerald-400 transition-colors"
//           >
//             <svg
//               role="img"
//               viewBox="0 0 24 24"
//               className="w-6 h-6 fill-current"
//             >
//               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
//             </svg>
//           </motion.a>

//           {/* Twitter / X */}
//           <motion.a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             variants={hoverEffects}
//             whileHover="hover"
//             whileTap="tap"
//             className="hover:text-emerald-400 transition-colors"
//           >
//             <svg
//               role="img"
//               viewBox="0 0 24 24"
//               className="w-6 h-6 fill-current"
//             >
//               <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//             </svg>
//           </motion.a>

//           {/* Facebook */}
//           <motion.a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             variants={hoverEffects}
//             whileHover="hover"
//             whileTap="tap"
//             className="hover:text-emerald-400 transition-colors"
//           >
//             <svg
//               role="img"
//               viewBox="0 0 24 24"
//               className="w-6 h-6 fill-current"
//             >
//               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//             </svg>
//           </motion.a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// 4

// "use client";
// import { motion } from "framer-motion";
// import { ArrowDownCircle } from "lucide-react";

// export default function Hero() {
//   // প্যারেন্ট কন্টেইনারের জন্য ভ্যারিয়েন্ট
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   // টেক্সট এবং ইমেজ রিভিলের জন্য কমন ভ্যারিয়েন্ট
//   const itemVariants = {
//     hidden: { opacity: 0, y: 25 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100, damping: 15 },
//     },
//   };

//   // সোশ্যাল আইকন ও বাটনের জন্য মাইক্রো-ইন্টারঅ্যাকশন ইফেক্টস
//   const hoverEffects = {
//     hover: {
//       scale: 1.12,
//       color: "#34d399", // Emerald 400
//       y: -4,
//       transition: { type: "spring", stiffness: 300, damping: 10 },
//     },
//     tap: { scale: 0.95 },
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-slate-950 pt-20 overflow-hidden relative"
//     >
//       {/* ব্যাকগ্রাউন্ডে প্রিমিয়াম সাইবারপাঙ্ক গ্লো ইফেক্ট */}
//       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none" />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="max-w-5xl mx-auto px-6 text-center relative z-10"
//       >
//         {/* প্রোফাইল ইমেজ কন্টেইনার */}
//         <motion.div
//           variants={itemVariants}
//           className="mb-8 flex justify-center"
//         >
//           <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-500 shadow-2xl shadow-emerald-500/20 relative group">
//             <img
//               src="/images/profile.jpg"
//               alt="Muyedur Rahman"
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//           </div>
//         </motion.div>

//         {/* মেইন নাম/হেডিং */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight select-none"
//         >
//           Hi, I'm{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
//             Muyedur Rahman
//           </span>
//         </motion.h1>

//         {/* ডেজিগনেশন */}
//         <motion.p
//           variants={itemVariants}
//           className="text-lg sm:text-2xl text-slate-400 font-bold mb-6 tracking-wide"
//         >
//           Full Stack & Frontend Developer
//         </motion.p>

//         {/* ইংরেজি অনুবাদকৃত ইন্ট্রোডাকশন / ফিলোসফি */}
//         <motion.p
//           variants={itemVariants}
//           className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-center font-medium"
//         >
//           Blending digital essence with clean code to craft modern, scalable,
//           and user-friendly web experiences. Driven by multidisciplinary
//           knowledge sharing and leveraging technology to solve real-world
//           problems.
//         </motion.p>

//         {/* রিজিউমে ডাউনলোড বাটন */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-center space-x-4 mb-12"
//         >
//           <motion.a
//             href="/resume.pdf"
//             download
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 0px 25px rgba(16, 185, 129, 0.4)",
//             }}
//             whileTap={{ scale: 0.98 }}
//             className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold px-8 py-4 rounded-xl transition-colors cursor-pointer shadow-lg tracking-wide text-sm"
//           >
//             Download Resume <ArrowDownCircle className="ml-2" size={18} />
//           </motion.a>
//         </motion.div>

//         {/* আপডেট করা সঠিক সোশ্যাল লিংকস */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-center space-x-6 text-slate-500"
//         >
//           {/* GitHub */}
//           <motion.a
//             href="https://github.com/Muyedrahman"
//             target="_blank"
//             rel="noopener noreferrer"
//             variants={hoverEffects}
//             whileHover="hover"
//             whileTap="tap"
//             className="hover:text-emerald-400 transition-colors"
//           >
//             <svg
//               role="img"
//               viewBox="0 0 24 24"
//               className="w-6 h-6 fill-current"
//             >
//               <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
//             </svg>
//           </motion.a>

//           {/* LinkedIn */}
//           <motion.a
//             href="https://www.linkedin.com/in/muyedur-rahman-315a74344?utm_source=share_via&utm_content=profile&utm_medium=member_android"
//             target="_blank"
//             rel="noopener noreferrer"
//             variants={hoverEffects}
//             whileHover="hover"
//             whileTap="tap"
//             className="hover:text-emerald-400 transition-colors"
//           >
//             <svg
//               role="img"
//               viewBox="0 0 24 24"
//               className="w-6 h-6 fill-current"
//             >
//               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
//             </svg>
//           </motion.a>

//           {/* X (Twitter) */}
//           <motion.a
//             href="https://x.com/home"
//             target="_blank"
//             rel="noopener noreferrer"
//             variants={hoverEffects}
//             whileHover="hover"
//             whileTap="tap"
//             className="hover:text-emerald-400 transition-colors"
//           >
//             <svg
//               role="img"
//               viewBox="0 0 24 24"
//               className="w-6 h-6 fill-current"
//             >
//               <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//             </svg>
//           </motion.a>

//           {/* Facebook */}
//           <motion.a
//             href="https://www.facebook.com/share/18XPs8zAaE/"
//             target="_blank"
//             rel="noopener noreferrer"
//             variants={hoverEffects}
//             whileHover="hover"
//             whileTap="tap"
//             className="hover:text-emerald-400 transition-colors"
//           >
//             <svg
//               role="img"
//               viewBox="0 0 24 24"
//               className="w-6 h-6 fill-current"
//             >
//               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//             </svg>
//           </motion.a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// 5

"use client";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

export default function Hero() {
  // প্যারেন্ট কন্টেইনারের জন্য ভ্যারিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  // টেক্সট এবং ইমেজ রিভিলের জন্য কমন ভ্যারিয়েন্ট
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  // সোশ্যাল আইকন ও বাটনের জন্য মাইক্রো-ইন্টারঅ্যাকশন ইফেক্টস
  const hoverEffects = {
    hover: {
      scale: 1.1,
      color: "#34d399", // Emerald 400
      y: -3,
      transition: { type: "spring", stiffness: 300, damping: 12 },
    },
    tap: { scale: 0.95 },
  };

  // Dynamic mouse position tracker for glass spotlighting
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 pt-32 pb-20 overflow-hidden relative"
    >
      {/* 2026 Premium background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <div className="relative">
          {/* Glowing aura under the glass card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 blur-3xl rounded-3xl -z-10" />

          {/* Floating Avatar Container (Z-axis overlap) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative group cursor-pointer"
            >
              {/* Outer glowing ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500" />

              {/* Profile Image Frame */}
              <div className="w-36 h-36 rounded-full p-[3px] bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-400 shadow-2xl relative z-10">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
                  <img
                    src="/images/profile.jpg"
                    alt="Muyedur Rahman"
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Floating Realistic Glow Shadow */}
              <motion.div
                animate={{ scale: [1, 0.85, 1], opacity: [0.6, 0.3, 0.6] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-3 bg-cyan-500/30 blur-md rounded-full -z-10"
              />
            </motion.div>
          </div>

          {/* Main Hero Glass Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onMouseMove={handleMouseMove}
            className="pt-24 pb-12 px-6 sm:px-12 md:px-16 bg-slate-900/[0.22] backdrop-blur-2xl border border-white/[0.08] rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] relative overflow-hidden group hover:border-white/[0.15] transition-all duration-500 text-center"
            style={{
              backgroundImage: `radial-gradient(600px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(16, 185, 129, 0.05), transparent 70%), radial-gradient(400px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(6, 182, 212, 0.04), transparent 70%)`,
            }}
          >
            {/* Organic Glass Noise Texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.015%22/%3E%3C/svg%3E')] opacity-30 pointer-events-none mix-blend-overlay" />

            {/* মেইন নাম/হেডিং */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight select-none relative z-10"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Muyedur Rahman
              </span>
            </motion.h1>

            {/* ডেজিগনেশন (Glowing glass tag) */}
            <motion.div variants={itemVariants} className="mb-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 uppercase backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Full Stack & Frontend Developer
              </div>
            </motion.div>

            {/* ইংরেজি অনুবাদকৃত ইন্ট্রোডাকশন / ফিলোসফি */}
            <motion.p
              variants={itemVariants}
              className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-medium hover:text-slate-200 transition-colors duration-300 relative z-10"
            >
              Blending digital essence with clean code to craft modern,
              scalable, and user-friendly web experiences. Driven by
              multidisciplinary knowledge sharing and leveraging technology to
              solve real-world problems.
            </motion.p>

            {/* রিজিউমে ডাউনলোড বাটন */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-12 relative z-10"
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0px 0px 25px rgba(16, 185, 129, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold px-8 py-4 rounded-xl cursor-pointer shadow-lg tracking-wide text-sm transition-all duration-300"
              >
                Download Resume <ArrowDownCircle className="ml-2" size={18} />
              </motion.a>
            </motion.div>

            {/* আপডেট করা সঠিক সোশ্যাল লিংকস */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4 text-slate-400 border-t border-white/[0.05] pt-8 relative z-10"
            >
              {/* GitHub */}
              <motion.a
                href="https://github.com/Muyedrahman"
                target="_blank"
                rel="noopener noreferrer"
                variants={hoverEffects}
                whileHover="hover"
                whileTap="tap"
                className="w-11 h-11 flex items-center justify-center bg-white/[0.02] border border-white/[0.06] rounded-xl hover:border-emerald-500/30 hover:bg-emerald-500/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/muyedur-rahman-315a74344?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                variants={hoverEffects}
                whileHover="hover"
                whileTap="tap"
                className="w-11 h-11 flex items-center justify-center bg-white/[0.02] border border-white/[0.06] rounded-xl hover:border-emerald-500/30 hover:bg-emerald-500/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                </svg>
              </motion.a>

              {/* X (Twitter) */}
              <motion.a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                variants={hoverEffects}
                whileHover="hover"
                whileTap="tap"
                className="w-11 h-11 flex items-center justify-center bg-white/[0.02] border border-white/[0.06] rounded-xl hover:border-emerald-500/30 hover:bg-emerald-500/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/share/18XPs8zAaE/"
                target="_blank"
                rel="noopener noreferrer"
                variants={hoverEffects}
                whileHover="hover"
                whileTap="tap"
                className="w-11 h-11 flex items-center justify-center bg-white/[0.02] border border-white/[0.06] rounded-xl hover:border-emerald-500/30 hover:bg-emerald-500/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}