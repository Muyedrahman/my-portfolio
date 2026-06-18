// export const projectsData = [
//   {
//     slug: "e-commerce-platform",
//     name: "Scalable E-Commerce Platform",
//     image: "/images/projects/project1.png",
//     techStack: [
//       "Next.js",
//       "Node.js",
//       "MongoDB",
//       "Tailwind CSS",
//       "Framer Motion",
//     ],
//     description:
//       "দীর্ঘমেয়াদী স্কেলেবিলিটি মাথায় রেখে তৈরি একটি আধুনিক ই-কমার্স প্ল্যাটফর্ম। এতে রয়েছে ডাইনামিক কার্ট, পেমেন্ট গেটওয়ে এবং অ্যাডমিন ড্যাশবোর্ড।",
//     liveLink: "https://your-live-link.com",
//     githubLink: "https://github.com/your-username/repo-name",
//     challenges:
//       "স্টেট ম্যানেজমেন্ট এবং বড় ডেটাসেটের ক্ষেত্রে ইমেজ অপ্টিমাইজেশন ও লোডিং স্পিড বজায় রাখা বেশ চ্যালেঞ্জিং ছিল।",
//     improvements:
//       "ভবিষ্যতে এতে এআই-বেসড প্রোডাক্ট রেকমেন্ডেশন সিস্টেম এবং ফুল গ্লোবাল সার্চ যোগ করার পরিকল্পনা রয়েছে।",
//   },
//   {
//     slug: "geopolitical-data-analyzer",
//     name: "Global Insight Portal",
//     image: "/images/projects/project2.png",
//     techStack: ["React.js", "D3.js", "Express.js", "MongoDB"],
//     description:
//       "বিভিন্ন দেশের অর্থনৈতিক মডেল এবং ভূ-রাজনৈতিক ডেটা ভিজ্যুয়ালাইজ করার জন্য একটি ইন্টারেক্টিভ ড্যাশবোর্ড।",
//     liveLink: "https://your-insight-link.com",
//     githubLink: "https://github.com/your-username/insight-repo",
//     challenges:
//       "D3.js এর সাথে রিয়েল-টাইম ডেটা রেন্ডারিং এবং কমপ্লেক্স গ্রাফগুলোকে রেসপন্সিভ করা কঠিন ছিল।",
//     improvements:
//       "ভবিষ্যতে প্যারালাল ইকোনমিক সিস্টেম এবং গ্লোবাল ডেভেলপমেন্ট ট্রেন্ড প্রেডিকশনের জন্য ডেটা সায়েন্স মডেল যুক্ত করা হবে।",
//   },
//   {
//     slug: "creative-video-portfolio",
//     name: "CineStream Studio",
//     image: "/images/projects/project3.png",
//     techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
//     description:
//       "ভিডিও এডিটর এবং কন্টেন্ট ক্রিয়েটরদের জন্য তৈরি একটি প্রিমিয়াম সিনেমাটিক পোর্টফোলিও ওয়েবসাইট।",
//     liveLink: "https://your-video-link.com",
//     githubLink: "https://github.com/your-username/video-repo",
//     challenges:
//       "হাই-কোয়ালিটি ভিডিও থাম্বনেইল ব্যাকগ্রাউন্ডে প্লে করার সময় পারফরম্যান্স ঠিক রাখা এবং স্মুথ স্ক্রলিং অ্যানিমেশন তৈরি করা।",
//     improvements:
//       "সরাসরি ইউটিউব এপিআই ইন্টিগ্রেশন এবং স্বয়ংক্রিয় ভিডিও অ্যানালিটিক্স ট্র্যাক করার ফিচার আনা হবে।",
//   },
// ];

export const projectsData = [
  {
    slug: "blood-donation-app",
    name: "Blood Donation Application",
    image: "/images/projects/project1.png",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "DaisyUI",
      "TanStack Query",
      "Stripe",
      "JWT",
      "ImageBB",
      "Axios",
      "React Hook Form",
      "SweetAlert2",
      "React Hot Toast",
      "Framer Motion",
    ],
    description:
      "A comprehensive full-stack blood donation platform engineered to bridge the gap between donors and recipients. Features a robust role-based access control system for Admins, Donors, and Volunteers. Users can dynamically generate donation requests, track donor locations, and process financial contributions via Stripe. Secured with Firebase Authentication and JSON Web Tokens (JWT).",
    liveLink: "https://blood-donar-client.web.app",
    githubLink: "https://github.com/Muyedrahman/client",
    challenges:
      "Architecting a secure role-based access control (RBAC) matrix for three discrete user roles (Admin, Donor, Volunteer) with varying dashboard privileges. Synchronizing cross-platform authentication state between Firebase and JWT while ensuring real-time UI updates for urgent donation requests was highly complex.",
    improvements:
      "Integrating real-time push notifications for instant response to critical donation requests, engineering a secure peer-to-peer chat system, and building a dedicated hospital blood inventory tracking terminal.",
  },
  {
    slug: "technest-gadget-shop",
    name: "TechNest - Futuristic E-Commerce Terminal",
    image: "/images/projects/project2.png",
    techStack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Firebase Auth",
      "Context API",
    ],
    description:
      "A high-end, fully responsive digital storefront engineered for browsing elite computing hardware. Developed as part of the Revenio Next.js Assessment Task, this platform integrates sophisticated state-driven spec grids, seamless user authentication pipelines, and isolated, protected inventory terminal views.",
    liveLink: "https://my-gadget-shop-ten.vercel.app",
    githubLink: "https://github.com/Muyedrahman/my-gadget-shop",
    challenges:
      "Preserving and managing global application state across complex route redirects without relying on a traditional persistent backend database. Resolved by building a synchronized client-side LocalStorage data pipeline to retain state on deep browser refreshes.",
    improvements:
      "Migrating the client-side state pipeline into a cloud-native MongoDB Atlas cluster, integrating automated digital asset uploads using Cloudinary, and deploying role-based dynamic admin route guards.",
  },
  {
    slug: "krishilink-agro-platform",
    name: "KrishiLink - Farmer’s Growth & Connection Platform",
    image: "/images/projects/project3.png",
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Auth",
    ],
    description:
      "A decentralized full-stack agricultural ecosystem designed to eliminate middlemen by facilitating direct commerce between farmers, independent traders, and corporate buyers. Empowers producers to showcase crops, review inquiries, and seamlessly accept/reject collaboration requests.",
    liveLink: "https://krishilink-client.vercel.app",
    githubLink: "https://github.com/Muyedrahman/client-krishilink-project",
    challenges:
      "Enforcing structural data isolation between buyers and sellers, managing peer-to-peer interest request pipelines utilizing nested MongoDB sub-arrays, and maintaining dynamic reactive state updates in the UI following array transactions.",
    improvements:
      "Deploying a WebSocket-powered live chat engine, developing an AI-driven predictive crop pricing index model, and establishing a geolocation-based crop discovery protocol to optimize local trade.",
  },
];