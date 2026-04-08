// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import docker from './assets/tech_logo/docker.png';

import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import laravel from './assets/tech_logo/laravel.png'
import php from './assets/tech_logo/php.png'

import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's

import bsaLogo from './assets/education_logo/simt.png';
import vpsLogo from './assets/education_logo/sps.jpg';

// Project Section Logo's
import ats from './assets/work_logo/ats2.png';
import cloud from './assets/work_logo/cloud3.png';
import news from './assets/work_logo/news.png';
import resume from './assets/work_logo/resume.jpeg';
import chatbot from './assets/work_logo/chatbot.jpg';
import weather from './assets/work_logo/weather.jpg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      {name:'Laravel', logo:laravel}
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Php', logo: php },
     
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Docker', logo: docker },
     
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
   
    {
      id: 1,
      img: bsaLogo,
      school: "Shri ram institue of management and technology",
      date: "Sept 2022 - Aug 2025",
      grade: "63.2%",
      desc: "I completed my Bachelor of Computer Applications (BCA) from Shri Ram Institute of Management and Technology, Kashipur. During my undergraduate studies, I built a strong foundation in computer science through comprehensive coursework in Data Structures and Algorithms, Web Development, Database Management Systems, Software Engineering, and related technologies.My academic journey emphasized both theoretical knowledge and practical application, allowing me to work on multiple projects that bridged classroom concepts with real-world problem-solving. This experience significantly enhanced my technical skills, analytical thinking, and ability to develop efficient software solutions.",
      degree: "Bachelor of Computer Science - BCA",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Sai public school",
      date: "Apr 2021 - March 2022",
      grade: "78%",
      desc: "I completed my class 12 education from Sai Public School, kashipur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics .",
      degree: "CBSE(XII) ",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Sai public school",
      date: "Apr 2019 - March 2020",
      grade: "90.02%",
      desc: "I completed my class 10 education from Sai Public School, kashipur, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), ",
    },
  ];
  
export const projects = [
 
  {
    id: 0,
    title: "AI Resume ATS Scorer",
    description:
      "An intelligent AI-powered resume analyzer that scores resumes against ATS (Applicant Tracking System) standards. Provides detailed feedback, preict interview questions ,roadmap to gain desired skills and improvement tips to help candidates pass ATS filters and land more interviews.",
    image: ats,
    tags: ["React JS", "Node.js", "AI", "OpenAI", "Tailwind CSS","genai","zod"],
    github: "https://github.com/viveksingh0005/genai-mern-project-from-shreyians-coding",
  
  },
 {
    id: 1,
    title: "cloud Image Storage Platform",
    description:
      "A fast and secure cloud-based image storage application with upload, organize, and share features. Built with modern frontend and backend technologies, allowing users to store and manage thousands of images efficiently with secure access control.",
    image: cloud,       
    tags: ["React JS", "Node.js", "MongoDB", "AWS S3", "Express"],
    github: "https://github.com/viveksingh0005/frontend-project-formy-backend-based-on-cloud-storage",
   
  },
  {
    id: 2,
    title: "  Resume Builder",
    description:
      "A beautiful and fast  resume builder with multiple professional templates. Users can create, edit, and download ATS-friendly resumes in minutes with smart suggestions and real-time preview.",
    image: resume,
    tags: ["React JS", "Tailwind CSS", "Node.js", "PDF Generation","docker","aws","ec2","googleAuth"],
    github: "https://github.com/viveksingh0005/Resume",
   
  },
   {
    id: 3,
    title: "ai chatbot",
    description:
      "I created an ai based catbot whcih answers all your questions just like chagpt this was my first slef made ai project where I learned how I can implement ai in an application",
    image: chatbot,
    tags: ["React JS", "express.js", "Tailwind CSS", "Framer Motion","genai","openai"],
    github: "https://github.com/viveksingh0005/ai-chatbot-vivek",
  
  },
  {
    id: 4,
    title: " Modern Weather App",
    description:
      "A clean and responsive weather application with real-time updates  and beautiful visualizations. Supports location detection and multiple cities.",
    image: weather,
    tags: ["React JS", "Weather API", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/viveksingh0005/weather-app",
  
  },
  {
    id: 5,
    title: "News Aggregator",
    description:
      "A fast and intelligent news app that aggregates headlines from multiple sources with A summarization, personalized recommendations.Along with that it is responsive to different devices",
    image: news,
    tags: ["React JS", "News API", "Node.js", "Tailwind CSS"],
    github: "https://github.com/viveksingh0005/newsapp",

  },

];