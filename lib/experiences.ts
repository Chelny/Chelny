export type Experience = {
  period: string;
  company: string;
  role: string;
  industry: string;
  description: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    period: "2024 — 2026",
    company: "GoCreator Group",
    role: "Senior Frontend Developer",
    industry: "E-commerce / Digital Media Marketplace",
    description:
      "Developed an entertainment website with React, Remix, TypeScript and Tailwind CSS. Built reusable components, implemented HLS video streaming, improved SEO and performance, and contributed to A/B testing and AI-assisted development workflows.",
    technologies: [
      "React",
      "Remix",
      "TypeScript",
      "Tailwind CSS",
      "HLS",
      "Jest",
      "Vitest",
    ],
  },
  {
    period: "2022 — 2024",
    company: "Centrall",
    role: "Mobile Application Developer · Full-stack Developer",
    industry: "E-commerce / Sneaker Marketplace",
    description:
      "Built a sneaker resale mobile application with Angular, Ionic, Capacitor and NgRx, including end-to-end testing and iOS/Android deployments. Also developed a real-time messaging microservice and a Google Cloud Function for automated product updates.",
    technologies: [
      "Angular",
      "Ionic",
      "Capacitor",
      "NgRx",
      "Sass",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Go",
    ],
  },
  {
    period: "2021 — 2022",
    company: "OXIO",
    role: "Frontend Developer",
    industry: "Telecommunications",
    description:
      "Developed a telecommunications platform that enables businesses and mobile operators to offer connectivity services using Angular and TypeScript. Built responsive application features, improved usability and consistency, implemented end-to-end tests with Cypress, and supported development and staging deployments.",
    technologies: ["Angular", "TypeScript", "Redux", "Less", "Cypress"],
  },
  {
    period: "2020 — 2021",
    company: "Global Eagle",
    role: "Web Developer",
    industry: "Aviation / Media",
    description:
      "Developed web application features for in-flight entertainment, satellite connectivity and digital media services in the aviation industry using Angular and TypeScript. Built responsive interfaces with a mobile-first approach and implemented end-to-end and unit tests to ensure a consistent user experience across devices.",
    technologies: ["Angular", "TypeScript", "Sass", "Cypress", "Jasmine", "Karma"],
  },
  {
    period: "2018 — 2020",
    company: "ODOTRACK",
    role: "Web Developer",
    industry: "Tax / SaaS",
    description:
      "Modernized a mileage tracking and travel management application designed to simplify expense tracking and tax optimization by migrating its frontend from ActionScript to Angular. Developed interfaces with Angular and TypeScript and integrated features with PHP-based backend services.",
    technologies: ["Angular", "TypeScript", "Sass"],
  },
  {
    period: "2015 — 2018",
    company: "bciti",
    role: "Programmer",
    industry: "Civic Technology / SaaS",
    description:
      "Built the frontend of a civic SaaS application connecting residents with municipal services, information and communications, initially using CakePHP, JavaScript, HTML and CSS before migrating to AngularJS. Developed user administration features and supported QA deployments.",
    technologies: [
      "CakePHP",
      "AngularJS",
      "JavaScript",
      "Sass",
      "PHP",
    ],
  },
];