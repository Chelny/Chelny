export type Project = {
  title: string;
  description: string;
  stack: string;
  href: string;
  image: string;
  imageAlt: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "META.DEV",
    description:
      "A developer tool for inspecting SEO, Open Graph, Twitter Cards, JSON-LD and technical metadata.",
    stack: "Next.js · TypeScript · React · Tailwind CSS",
    href: "https://meta-dev-zeta.vercel.app",
    image: "/images/project-meta-dev.webp",
    imageAlt: "META.DEV screenshot",
    year: "2026",
  },
  {
    title: "Youpi! Towers",
    description:
      "Youpi!: Clone of the 90's multiplayer game Yahoo! Towers* built with Next.js and Postgres.",
    stack: "Next.js · React · TypeScript · Tailwind CSS · Prisma · Postgres · Socket.io",
    href: "https://github.com/Chelny/youpi",
    image: "/images/project-youpi-towers.webp",
    imageAlt: "Youpi! Towers screenshot",
    year: "2025",
  },
  {
    title: "Nintendo Switch UI",
    description:
      "A responsive recreation of the Nintendo Switch interface, focused on interaction, animation and visual detail.",
    stack: "React · TypeScript · Webpack · SCSS",
    href: "https://nintendo-switch-ui.vercel.app",
    image: "/images/project-nintendo-switch-ui.webp",
    imageAlt: "Nintendo Switch UI screenshot",
    year: "2021",
  },
];