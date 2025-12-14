// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";


// Education Section Logo's
import sdsuvLogo from "./assets/education_logo/sdsuv.jpg";
import atalLogo from "./assets/education_logo/atal.png";
import dpsLogo from "./assets/education_logo/dps.jpg";

// Project Section Logo's
import studyLogo from "./assets/work_logo/study.png";
import ecommerceLogo from "./assets/work_logo/ecommerce.png";
import jobPortalLogo from "./assets/work_logo/job.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];


export const education = [
  {
    id: 0,
    img: sdsuvLogo,
    school: "Sri Dev Suman Uttarakhand University",
    date: "Aug 2023 - June 2026",
    grade: "8.5 CGPA",
    desc: "I have completed my Bachelor's degree (BCA) in Computer Applications from SDSUV University, Tehri Garhwal. During my time at SDSUV, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at SDSUV University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor Of Computer Application - (BCA)",
  },
  {
    id: 1,
    img: atalLogo,
    school: "Atal Utkrisht Sri Dev Suman GIC Inter College",
    date: "Apr 2021 - March 2023",
    grade: "81%",
    desc: "I completed my class 12 education from Atal Utkrisht Sri Dev Suman GIC School, Chamba, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE(XII) - PCM ",
  },
  {
    id: 2,
    img: dpsLogo,
    school: "Banjarawala, Dehra Public School",
    date: "Apr 2019 - March 2021",
    grade: "78%",
    desc: "I completed my class 10 education from Dehra Public School, Banjarawal Dehradun, under the Uttarakhand State board, where I studied Science with Humanities.",
    degree: "UK-State(X), Science with Humanities",
  },
];

export const projects = [
  {
    id: 0,
    title: "Study Mantra",
    description:
      "Study Mantra is a full-stack MERN web application designed to help college students access, upload, and share academic study materials such as notes, previous year papers, and AI-generated answers. The platform integrates secure authentication, real-time AI chat assistance, and a scalable document management system.",
    image: studyLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Mongo DB",
      "Express JS",
      "API",
    ],
    github: "https://github.com/Shivam9627/study-mantra",
    webapp: "https://study-mantra-frontend.vercel.app/",
  },
  {
    id: 1,
    title: "E-Commerce Fullstack App",
    description:
      "E-COMMERCE-FULLSTACK is a complete MERN-stack shopping platform designed with a real-world architecture. Users can browse products, add items to the cart, place orders, and manage their profiles. The admin panel allows product creation, order tracking, and inventory updates. The system is powered by secure REST APIs, JWT auth, MongoDB models, and Cloudinary image storage, with a clean, responsive React UI.",
    image: ecommerceLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Mongo DB",
      "Express JS",
      "API",
    ],
    github: "https://github.com/Shivam9627/mern-ecommerce",
    webapp: "https://mern-ecommerce-frontend-six-psi.vercel.app/",
  },
  {
    id: 2,
    title: "Job Portal App",
    description:
      "A full-stack job portal web application that connects job seekers with recruiters. Users can create profiles, upload resumes, search and apply for jobs, while employers can post job listings and manage applications. The platform features secure authentication, role-based access, and a clean, user-friendly interface for a smooth hiring experience.",
    image: jobPortalLogo,
    tags: [
      "React JS",
      "Next JS",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Shivam9627/Job-Portal-Shivam",
    webapp: "https://job-portal-shivam.vercel.app/",
  },

];
