import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import HiiveHealthProject from "@/public/HiiveHealthProject.png";
import attLogo from "@/public/attLogo.png";
import ciscoLogo from "@/public/ciscoLogo.png";
import hiiveHealthLogo from "@/public/hiiveHealthLogo.png";
import onescreen_aiLog from "@/public/onescreen_aiLogo.png";
import pnc_bankLogo from "@/public/pnc_bankLogo.png";
import primeTherapeuticsLogo from "@/public/primeTherapeuticsLogo.png";
import pruitthealthLogo from "@/public/pruitthealthLogo.png";
import trilliantLogo from "@/public/trilliantLogo.png";
import kronsysLogo from "@/public/kronsysLogo.png";
import hh1 from "@/public/hh1.png";
import hh2 from "@/public/hh2.png";
import hh3 from "@/public/hh3.png";
import hh4 from "@/public/hh4.png";
import hh5 from "@/public/hh5.png";
import hh6 from "@/public/hh6.png";
import hh7 from "@/public/hh7.png";
import hh8 from "@/public/hh8.png";
import hh9 from "@/public/hh9.png";
import hh10 from "@/public/hh10.png";
import hh11 from "@/public/hh11.png";
import hh12 from "@/public/hh12.png";
import pt1 from "@/public/pt1.png";
import pt2 from "@/public/pt2.png";
import pt3 from "@/public/pt3.png";
import pt4 from "@/public/pt4.png";
import pt5 from "@/public/pt5.png";
import pt6 from "@/public/pt6.png";
import pt7 from "@/public/pt7.png";
import os1 from "@/public/os1.png";
import os2 from "@/public/os2.png";
import os3 from "@/public/os3.png";
import os4 from "@/public/os4.png";
import os5 from "@/public/os5.png";
import os6 from "@/public/os6.png";
import os7 from "@/public/os7.png";
import os8 from "@/public/os8.png";
import tn1 from "@/public/tn1.png";
import tn2 from "@/public/tn2.png";
import pnc1 from "@/public/pnc1.png";
import pnc2 from "@/public/pnc2.png";
import pnc3 from "@/public/pnc3.png";
import pnc4 from "@/public/pnc4.png";
import cs1 from "@/public/cs1.png";
import cs2 from "@/public/cs2.png";
import cs3 from "@/public/cs3.png";
import cs4 from "@/public/cs4.png";
import cs5 from "@/public/cs5.png";
import cs6 from "@/public/cs6.png";
import cs7 from "@/public/cs7.png";
import cs8 from "@/public/cs8.png";
import cs9 from "@/public/cs9.png";
import cs10 from "@/public/cs10.png";
import cs11 from "@/public/cs11.png";
import cs12 from "@/public/cs12.png";
import cs13 from "@/public/cs13.png";
import cs14 from "@/public/cs14.png";
import cs15 from "@/public/cs15.png";
import cs16 from "@/public/cs16.png";
// import cs17 from "@/public/cs17.png";
import cs18 from "@/public/cs18.png";
import at1 from "@/public/at1.png";
import at2 from "@/public/at2.png";
import at3 from "@/public/at3.png";
import at4 from "@/public/at4.png";
import at5 from "@/public/at5.png";
import at6 from "@/public/at6.png";
import ks1 from "@/public/ks1.png";
import ks2 from "@/public/ks2.png";
import ks3 from "@/public/ks3.png";
import ks4 from "@/public/ks4.png";
import ks5 from "@/public/ks5.png";
import ks6 from "@/public/ks6.png";
import ks7 from "@/public/ks7.png";
import cy1 from "@/public/cy1.png";
import cy2 from "@/public/cy2.png";
import cy3 from "@/public/cy3.png";
import cy4 from "@/public/cy4.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Sr. Software Engineer",
    location: "Hiive Health",
    description:
      "Built clinical workflows for medication ordering and telehealth using React, Next.js, TypeScript, GraphQL, and Python/Django with HIPAA-compliant data handling.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2024 - Present",
    logo: hiiveHealthLogo,
  },
  {
    title: "Sr. React Developer",
    location: "Prime Therapeutics",
    description:
      "Developed pharmacy benefit workflows and medication management UIs, improving performance and RxNorm/NDC search accuracy using React and GraphQL.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - March 2024",
    logo: primeTherapeuticsLogo,
  },
  {
    title: "Full Stack (MERN) Developer",
    location: "OneScreen.ai",
    description:
      "Built scalable marketing platform dashboards with React, Redux, Node.js, and MongoDB, improving usability and component reusability.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 - April 2023",
    logo: onescreen_aiLog,
  },
  {
    title: "Sr. Software Developer",
    location: "Trilliant Networks",
    description:
      "Modernized enterprise UI systems using React and TypeScript, implementing large-scale AG-Grid/Kendo components for data-heavy workflows.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2021 - April 2022",
    logo: trilliantLogo,
  },
  {
    title: "Full Stack Developer",
    location: "PNC",
    description:
      "Developed secure financial dashboards using React and Angular, integrating REST APIs and enhancing user flow across banking applications.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2020 - February 2021",
    logo: pnc_bankLogo,
  },
  {
    title: "Front End Developer",
    location: "Pruitt Health",
    description:
      "Built clinical applications supporting patient encounters, medication records, and ICD-10 workflows for long-term care facilities.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2018 - April 2020",
    logo: pruitthealthLogo,
  },
  {
    title: "UI Developer",
    location: "CISCO",
    description:
      "Developed Angular and TypeScript UI components to improve dashboard interactivity and internal tool efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2017 - February 2018",
    logo: ciscoLogo,
  },
  {
    title: "Front End Developer",
    location: "AT&T",
    description:
      "Built responsive UI pages and reusable components using JavaScript, jQuery, HTML5, and CSS3 for large-scale telecom applications.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2016 - February 2017",
    logo: attLogo,
  },
  {
    title: "Front End Developer Intern",
    location: "Kronsy's",
    description:
      "Front-end development for a variety of Shopify stores such as FitazFK, Rider Collective, Masseuse Massage, Francesca Jewellery and Salty Captain. Developed high quality landing pages and front end features using HTML, CSS, SCSS, JavaScript and Liquid.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2016 - May 2016",
    logo: kronsysLogo,
  },
] as const;

export const projectsData = [
  {
    title: "Sr. Software Engineer",
    description:
      "HIPAA-compliant medication ordering and virtual visit workflows built with React, Next.js, TypeScript, GraphQL, and Django; streamlined encounter/diagnosis flows and added accessibility + automated tests.",
    tags: ["React", "Next.js", "TypeScript", "GraphQL", "Django", "Healthcare"],
    icons: [
      "logos:react",
      "vscode-icons:file-type-next",
      "logos:typescript-icon",
      "logos:graphql",
      "logos:django",
    ],
    imageUrl: HiiveHealthProject,
    images: [hh3, hh4, hh5, hh6, hh7, hh8, hh9, hh10, hh11, hh12, hh1, hh2],
  },
  {
    title: "Sr. React Developer",
    description:
      "Enhanced Rx workflows (eligibility, claims, PA) for 5M+ members; improved medication search accuracy using RxNorm/NDC and optimized React + TypeScript UI performance.",
    tags: ["React", "TypeScript", "Redux", "GraphQL", "RxNorm", "NDC"],
    icons: [
      "logos:react",
      "logos:typescript-icon",
      "logos:redux",
      "logos:graphql",
    ],
    imageUrl: pt1,
    images: [pt1, pt2, pt3, pt4, pt5, pt6, pt7],
  },
  {
    title: "Full Stack (MERN) Developer",
    description:
      "Built scalable dashboards and reusable components across React/Redux + Node/Express + MongoDB; delivered pixel-perfect UIs and improved developer velocity.",
    tags: ["React", "Redux", "Node.js", "Express.js", "MongoDB"],
    icons: [
      "logos:react",
      "logos:redux",
      "logos:nodejs-icon",
      "logos:express",
      "logos:mongodb-icon",
    ],
    imageUrl: os1,
    images: [os1, os2, os3, os4, os5, os6, os7, os8],
  },
  {
    title: "Sr. Software Developer",
    description:
      "Modernized large SPA with TypeScript and advanced data tables (AG-Grid/Kendo); implemented filtering/sorting on 100K+ records and migrated legacy JS to TS.",
    tags: ["React", "TypeScript", "AG-Grid", "Kendo React", "Redux"],
    icons: [
      "logos:react",
      "logos:typescript-icon",
      "simple-icons:aggrid",
      "simple-icons:kendo-react",
      "logos:redux",
    ],
    imageUrl: tn1,
    images: [tn1, tn2],
  },
  {
    title: "Full Stack Developer",
    description:
      "Delivered Angular/React features for financial web apps; integrated REST APIs and strengthened performance and security across multiple releases.",
    tags: ["Angular", "React", "TypeScript", "REST APIs"],
    icons: [
      "logos:angular-icon",
      "logos:react",
      "logos:typescript-icon",
      "material-symbols:api-outline",
    ],
    imageUrl: pnc1,
    images: [pnc1, pnc2, pnc3, pnc4],
  },
  {
    title: "UI Developer",
    description:
      "Developed reusable Angular components with RxJS and Bootstrap to improve internal tool efficiency and responsiveness.",
    tags: ["Angular", "TypeScript", "RxJS", "Bootstrap"],
    icons: [
      "logos:angular-icon",
      "logos:typescript-icon",
      "logos:rxjs",
      "logos:bootstrap",
    ],
    imageUrl: cs1,
    images: [
      cs1,
      cs2,
      cs3,
      cs4,
      cs5,
      cs6,
      cs7,
      cs8,
      cs9,
      cs10,
      cs11,
      cs12,
      cs13,
      cs14,
      cs15,
      cs16,
      cs18,
    ],
  },
  {
    title: "Front End Developer",
    description:
      "Created reusable UI patterns for large telecom apps using HTML5, CSS3, JavaScript, and jQuery; improved cross-browser compatibility.",
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    icons: ["logos:html-5", "logos:css-3", "logos:javascript", "logos:jquery"],
    imageUrl: at1,
    images: [at1, at2, at3, at4, at5, at6],
  },
  {
    title: "Front End Developer",
    description:
      "Implemented high-quality landing pages and front-end features for multiple Shopify stores using HTML/CSS/SCSS and JavaScript.",
    tags: ["HTML", "CSS/SCSS", "JavaScript", "Shopify"],
    icons: ["logos:html-5", "logos:sass", "logos:javascript"],
    imageUrl: ks1,
    images: [ks1, ks2, ks3, ks4, ks5, ks6, ks7],
  },
  {
    title: "Freelancer",
    description:
      "Built front-end UI screens and reusable layout components using HTML, CSS, and JavaScript for enterprise applications.",
    tags: ["HTML", "CSS", "JavaScript"],
    icons: ["logos:html-5", "logos:css-3", "logos:javascript"],
    imageUrl: cy1,
    images: [cy1, cy2, cy3, cy4],
  },
] as const;

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "vscode-icons:file-type-next" },
      { name: "Redux", icon: "logos:redux" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Webpack", icon: "logos:webpack" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React-Bootstrap", icon: "simple-icons:reactbootstrap" },
      { name: "Chakra-UI", icon: "simple-icons:chakraui" },
      { name: "Material-UI", icon: "simple-icons:mui" },
      { name: "Figma", icon: "logos:figma" },
      { name: "AG-Grid", icon: "simple-icons:aggrid" },
      { name: "D3", icon: "simple-icons:d3dotjs" },
      { name: "Kendo React", icon: "simple-icons:kendo-react" },
      { name: "SCSS", icon: "logos:sass" },
      { name: "jQuery", icon: "logos:jquery" },
      { name: "Single Page Applications" },
      { name: "Responsive Design" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", icon: "logos:python" },
      { name: "Django", icon: "logos:django" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express.js", icon: "logos:express" },
      { name: "Nest.js", icon: "logos:nestjs" },
      { name: "Java", icon: "logos:java" },
      { name: "REST APIs", icon: "material-symbols:api-outline" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "AWS (EC2, S3)", icon: "logos:aws" },
      { name: "Firebase", icon: "logos:firebase" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Jenkins", icon: "logos:jenkins" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "Bitbucket Pipelines", icon: "simple-icons:bitbucket" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "CI/CD" },
      { name: "Infrastructure as Code" },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Agile" },
      { name: "Scrum" },
      { name: "Amazon Chime SDK" },
      { name: "JIRA", icon: "simple-icons:jira" },
      { name: "HIPAA Compliance" },
      { name: "PHI Handling" },
      { name: "EHR / EMR" },
      { name: "Clinical Decision Support (CDS)" },
      { name: "Medication Ordering" },
      { name: "Medication Reconciliation" },
      { name: "Pharmacology" },
      { name: "Drug-Drug Interactions (DDI)" },
      { name: "ICD-10" },
      { name: "RxNorm" },
      { name: "NDC Codes" },
      { name: "SNOMED CT" },
      { name: "Long-Term Care" },
      { name: "Skilled Nursing Facilities" },
      { name: "Healthcare IT" },
      { name: "Object Oriented Programming (OOP)" },
      { name: "Test Driven Development (TDD)" },
      { name: "Database design" },
      { name: "Event‑driven architecture" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Cypress", icon: "simple-icons:cypress" },
      { name: "Jest", icon: "logos:jest" },
      { name: "Enzyme", icon: "simple-icons:enzyme" },
      { name: "Pytest", icon: "simple-icons:pytest" },
      { name: "Storybook", icon: "simple-icons:storybook" },
      { name: "React Hook Form", icon: "simple-icons:reacthookform" },
      { name: "Sentry", icon: "logos:sentry-icon" },
      { name: "New Relic", icon: "logos:new-relic-icon" },
      { name: "Grafana", icon: "logos:grafana" },
    ],
  },
];
