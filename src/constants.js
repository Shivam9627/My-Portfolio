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
import studyLogo from "./assets/work_logo/study-mantra-new.png";
import jobHubLogo from "./assets/work_logo/jobhub-new.png";
import askKrishnaLogo from "./assets/work_logo/ask-krishna-new.png";
import fitnessLogo from "./assets/work_logo/fitness-tracker-new.png";
import novaLogo from "./assets/work_logo/nova-nector-new.png";
import travelLogo from "./assets/work_logo/travel-website-new.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
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
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
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
    title: "JobHub FullStack Job Portal",
    description:
      "JobHub is a full-stack job portal that connects candidates and recruiters with secure login, advanced job search, resume uploads, job posting, and application tracking. It features role-based access, smart filters, and a polished responsive interface.",
    image: jobHubLogo,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "JWT", "HTML", "CSS"],
    github: "https://github.com/Shivam9627/JobHub-FullStack-JobPortal",
    webapp: "https://job-hub-full-stack-job-portal-front.vercel.app/",
  },
  {
    id: 1,
    title: "Study Mantra",
    description:
      "Study Mantra is a full-stack MERN platform for college students to access notes, previous year papers, and AI-assisted study content in one place. The app supports secure user authentication, resource uploads, and responsive document browsing.",
    image: studyLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "MongoDB", "Express JS"],
    github: "https://github.com/Shivam9627/study-mantra",
    webapp: "https://study-mantra-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Ask Krishna Fullstack",
    description:
      "Ask Krishna is a knowledge-sharing portal where users can ask questions, browse answers, and interact with content through a smooth modern UI. The app includes authenticated posting and responsive layouts for learning on any device.",
    image: askKrishnaLogo,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "JavaScript", "Responsive"],
    github: "https://github.com/Shivam9627/Ask_Krishna_Fullstack",
    webapp: "https://ask-krishna-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description:
      "Fitness Tracker is a wellness dashboard for tracking workouts, progress, and routine planning. It offers a sleek dashboard, motivational UI, and clean fitness summaries that adapt beautifully to mobile and desktop screens.",
    image: fitnessLogo,
    tags: ["React JS", "JavaScript", "CSS", "Responsive", "UI"],
    github: "https://github.com/Shivam9627/Fitness-Tracker",
    webapp: "https://fitness-tracker-frontend-chi-seven.vercel.app/",
  },
  {
    id: 4,
    title: "NovaNector Weather App",
    description:
      "NovaNector is a weather dashboard delivering fast forecasts with city search, live condition cards, and weather-themed visuals. The interface is designed for clarity, speed, and responsive display on all screen sizes.",
    image: novaLogo,
    tags: ["HTML", "CSS", "JavaScript", "Weather API", "Responsive"],
    github: "https://github.com/Shivam9627/NovaNector_Weather_App",
    webapp: "https://nova-nector-weather-app-frontend.vercel.app/",
  },
  {
    id: 5,
    title: "Travel Website",
    description:
      "Travel Website is a destination landing page with vivid travel visuals, itinerary highlights, and a modern layout designed to inspire exploration. It is built for fast loading and seamless navigation across desktop and mobile.",
    image: travelLogo,
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "Landing Page"],
    github: "https://github.com/Shivam9627/Travel-Website",
    webapp: "https://github.com/Shivam9627/Travel-Website",
  },
];
