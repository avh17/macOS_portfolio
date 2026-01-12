const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  // {
  //   id: "gallery",
  //   name: "Gallery", // was "Photos"
  //   icon: "photos.png",
  //   canOpen: true,
  // },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 2,
    date: "Jan 4, 2026",
    title: "LLM Context Management",
    image: "/images/blog1.jpg",
    link: "https://www.linkedin.com/posts/anirudhherady_youve-reached-the-maximum-length-for-this-activity-7413784839528755200-q4Ea?utm_source=share&utm_medium=member_desktop&rcm=ACoAADE8AZIBuMKFlFuyZ17i7YwF0QUJQYJcncg",
  },
  {
    id: 1,
    date: "Jan 3, 2026",
    title:
      "Prompting 101",
    image: "/images/blog2.png",
    link: "https://www.linkedin.com/posts/anirudhherady_when-i-prompt-aii-aim-a-i-m-actor-activity-7413306851804774400--cqr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADE8AZIBuMKFlFuyZ17i7YwF0QUJQYJcncg",
  },
  {
    id: 3,
    date: "July 5, 2025",
    title: "FastAPI for Scalable AI Microservices",
    image: "/images/blog3.png",
    link: "https://www.linkedin.com/posts/anirudhherady_fastapi-for-scalable-ai-microservices-building-activity-7352985348257275905-v5NW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADE8AZIBuMKFlFuyZ17i7YwF0QUJQYJcncg",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Shadcn UI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Django", "FastAPI"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "Terraform"],
  },
  {
    category: "AI/ML",
    items: ["PyTorch", "TensorFlow", "OpenAI API", "LangChain", "Hugging Face"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Jira"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/avh17",
  },
  // {
  //   id: 2,
  //   text: "Email",
  //   icon: "/icons/atom.svg",
  //   bg: "#4bcb63",
  //   link: "aherady@asu.edu",
  // },
  // {
  //   id: 3,
  //   text: "Phone",
  //   icon: "/icons/twitter.svg",
  //   bg: "#ff866b",
  //   link: "(602) 793-8590",
  // },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/anirudhherady/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "My Store-Cloud Storage",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "My Store Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The my store cloud storage application is a secure and reliable platform for storing and managing files in the cloud.",
            "It is a modern Next.js + TypeScript web application using Tailwind CSS, App Router, and custom components for authentication, file management, and dashboard features.",
          ],
        },
        {
          id: 2,
          name: "mystore.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://mystore-brown.vercel.app/sign-in",
          position: "top-10 right-0",
        },
        {
          id: 3,
          name: "github/mystore",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/avh17/mystore",
          position: "top-50 right-20",
        },
      ],
    },

    // ▶ Project 2
    
    {
      id: 6,
      name: "aws-serverless-facerecognition",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 right-10",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "aws-serverless-facerecognition.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This project implements a serverless face recognition service using AWS Lambda, SQS, and ECR. The application provides face recognition as a service on video frames streamed from clients (e.g., security cameras) using a multi-stage pipeline.",
          ],
        },
        {
          id: 2,
          name: "github/aws-serverless-facerecognition",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/avh17/aws-serverless-facerecognition",
          position: "top-10 right-20",
        }
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "aws-serverful-facerecognition",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[50vh] left-1",
      children: [
        {
          id: 1,
          name: "aws-serverful-facerecognition.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This project implements an elastic face recognition application leveraging Amazon Web Services (AWS) Infrastructure as a Service (IaaS) resources. The application is designed to dynamically scale based on demand, processing face recognition requests from users efficiently.",
          ],
        },
        {
          id: 2,
          name: "github/aws-serverful-facerecognition",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/avh17/aws-serverful-facerecognition",
          position: "top-10 right-20",
        }
      ],
    },
    {
      id: 8,
      name: "RockyBot: News Research Tool",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-70",
      windowPosition: "top-[20vh] right-7",
      children: [
        {
          id: 1,
          name: "RockyBot: News Research Tool.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "RockyBot is an AI-powered news research tool that allows you to extract information and get answers from multiple news articles using Google's Gemini models. Simply provide URLs to news articles, and RockyBot will process them to create a searchable knowledge base, then answer your questions based on the content of those articles.",
          ],
        },
        {
          id: 2,
          name: "github/rockybot",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/avh17/equityResearch",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "rockybot.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://equityresearch-evti.onrender.com",
          position: "top-40 left-50",
        }
      ],
    },
    {
      id: 9,
      name: "Work Experience",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-72 right-40",
      windowPosition: "top-[50vh] right-7",
      children: [
        {
          id: 1,
          name: "Work Experience.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Software Intern, Potters Tech (Jul. 2025 – Aug. 2025)",
            "During my internship at Potters Tech, I engineered and shipped a full-stack Location Intelligence Chatbot that enabled non-technical users to query complex geospatial data without requiring analyst support. I architected a Retrieval-Augmented Generation pipeline that combined database retrieval with LLM synthesis, significantly improving response relevance through fine-tuned context injection strategies. The system integrated OpenStreetMap data and location APIs to power real-time Point of Interest search capabilities across extensive geographic coverage.",
            "Associate Software Developer, Valtech India (Aug. 2022 – Sept. 2023)",
            "At Valtech India, I designed and deployed multiple FastAPI microservices and numerous REST/GraphQL endpoints to support a multi-tenant video streaming platform with high availability for concurrent media consumption. I optimized deployment pipelines by implementing Docker multi-stage builds, substantially reducing container image sizes and accelerating build velocity. My work included designing normalized PostgreSQL schemas and MongoDB collections with compound indexes for optimal query performance, implementing robust role-based access control using JWT and OAuth2, and conducting code reviews while leading onboarding sessions for junior developers to maintain code quality standards."
          ],
        },

      ],
    }
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/anirudh.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/anirudh.jpeg",
    },
    {
      id: 2,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/anirudh.jpeg",
      description: [
        "Hey! I’m Anirudh 👋",
        "A Software engineer who loves building systems that turn complex problems into seamless user experiences.",
        "What excites me most is solving real problems end-to-end. I thrive at the intersection of full stack development, cloud infrastructure and intelligent AI solutions.",
        "Currently completing my M.S. in Computer Science at Arizona State University (May 2026), I'm eager to bring my full-stack and AI/ML expertise to a team tackling ambitious technical challenges. I'm particularly drawn to backend systems, cloud architecture, and building AI-powered products that create genuine user impact.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    // {
    //   id: 1,
    //   name: "trash1.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-10 left-10",
    //   imageUrl: "/images/trash-1.png",
    // },
    // {
    //   id: 2,
    //   name: "trash2.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-40 left-80",
    //   imageUrl: "/images/trash-2.png",
    // },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  gallery: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };