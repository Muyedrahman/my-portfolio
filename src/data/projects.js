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