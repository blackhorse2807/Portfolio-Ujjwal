import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  nextjs,
  reactjs,
  cpp,
  python,
  nodejs,
  mongodb,
  figma,
  docker,
  illustrator,
  interiittech,
  pandas,
  matplot,
  gyws,
  kdag,
  neatcode,
  res,
  project,
  kmeans,
  ml,
  rapid,
  tailwindcss,
  firebase,
  videosurveillance,
  instagram,
  facebook,
  twitter,
  leetcode,
  codeforces,
  linkedin,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Graphics Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Adobe Illustrator",
    icon: illustrator,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "Pandas",
  //   icon: pandas,
  // },
  // {
  //   name: "Matplot",
  //   icon: matplot,
  // }
];

const experiences = [
  {
    title: "Inter-IIT Tech Contingent Member",
    company_name: "Inter IIT-Tech Meet 13.0",
    icon: interiittech,
    iconBg: "#383E56",
    date: "October 2024 - Current",
    points: [
      "Led a team of 20+ designers to manage all design submissions for Inter-IIT Tech events, aligning resources with project needs.",
      "Collaborated with event captains to ensure timely, high-quality design deliverables by strategically allocating team members based on skills.",
    ],
  },
  {
    title: "Public Relation Officer - Governing Body",
    company_name: "Gopali Youth Welfare Society",
    icon: gyws,
    iconBg: "#E6DEDD",
    date: "May 2024 - Current",
    points: [
      "Led a team of 25+ students, raising 4+ Lakhs INR for the Yogdaan donation drive and coordinating hall collections across campus.",

      "Directed 10+ designers in creating reports, newsletters, and essential assets, and managed a media team to produce content and publicize events.",
    ],
  },
  {
    title: "Design Head",
    company_name: "Gopali Youth Welfare Society",
    icon: gyws,
    iconBg: "#383E56",
    date: "May 2023 - May 2024",
    points: [
      "Raised a fund of more than 4 Lacs INR, for the donation drive of the organization, named Yogdaan, by visiting different halls",
      " Designed multiple posters, reports and newletters for activities & events of the organization on Adobe Illustrator and Canva",
    ],
  },
  {
    title: "Student Member - Design Team",
    company_name: "Kharagpur Data Analytics Group",
    icon: kdag,
    iconBg: "#E6DEDD",
    date: "September 2022 - May 2023",
    points: [
      "Coordinated in organising Kharagpur Data Science Hackathon which received a total of 3K+ registrations across the nation",
      "Conducted a Python Workshop at IIT Kharagpur with more than 200 attendance and made required posters for the event",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Neat-Code",
    description:
      "NeatCode is a Next.js and Firebase app for DSA practice, offering user authentication, categorized problems, a JavaScript code editor with interactive features, and celebratory animations upon problem completion.",
    tags: [
      {
        name : "nextjs",
        icon : nextjs,
      },
      {
        name: "firebase",
        icon : firebase,
      },
      {
        name: "typescript",
        icon : tailwindcss,
      }
    ],
    image: neatcode,
    source_code_link: "https://github.com/blackhorse2807/NeatCode",
  },
  {
    name: "Real Estate Hub",
    description:
      "Real Estate Hub, built with Next.js and Rapid API, provides real-time access to 150+ property listings, featuring responsive Chakra UI, server-side filtering by price, rooms, location, and dynamic updates for seamless browsing.",
    tags: [
      {
        name : "nextjs",
        icon : nextjs,
      },
      {
        name: "rapidapi",
        icon : rapid,
      },
      {
        name: "javascript",
        icon : javascript,
      }
    ],
    image: res,
    source_code_link: "https://github.com/blackhorse2807/Real-Estate-Hub",
  },
  {
    name: "Dashboard Authentication System",
    description:
      "Dashboard Authentication is a secure React and Node.js system with MongoDB, featuring intuitive UI components, OTP-based recovery, and optimized backend operations for enhanced user authentication.",
    tags : [
      {
        name : "reactjs",
        icon : reactjs,
      },
      {
        name : "nodejs",
        icon : nodejs,
      },
      {
        name : "mongodb",
        icon : mongodb,
      }
    ],
    image: project,
    source_code_link: "https://github.com/blackhorse2807/Dashboard-Authentication",
  },
  {
    name: "Advanced Video Surveillance",
    description:
      "Advanced Video Surveillance is a computer vision program with Prof. Sudeep Mishra at IIT Kharagpur, using YOLO for real-time tracking, heatmap generation, and advanced algorithms to analyze human movement patterns in video data.",

    tags : [
      {
        name : "ml",
        icon : ml,
      },
      {
        name : "kmeans",
        icon : kmeans,
      },
    ],
    image: videosurveillance,
    source_code_link: "https://github.com/blackhorse2807/Advanced-Video-Surveillance",
  },
  {
    name: "Induction Motor RUL Prediction",
    description:
      "Induction Motor RUL Prediction is a predictive maintenance solution leveraging sensor data to forecast motor lifespan. It includes automated scheduling for RUL calculations and seamless integration into existing systems.",
    tags: [
      {
        name : "reactjs",
        icon : reactjs,
      },
      {
        name : "nodejs",
        icon : nodejs,
      },
      {
        name: "ml",
        icon: ml,
      },
    ],
    image: project,
    source_code_link: "https://github.com/blackhorse2807/Induction-Motor-RUL-Prediction",
  },
  {
    name: "Fashion Recommendation System",
    description:
      "Fashion Recommendation System was developed to analyze 380+ records to identify factors in online food ordering, utilizing Scatter plots and Heatmaps. Achieved 94.87% accuracy with a Random Forest model and 92% cross-validation accuracy with low deviation.",
    tags : [
      {
        name: "ml",
        icon : ml,
      },
    ],
    image: project,
    source_code_link: "https://github.com/blackhorse2807/Fashion-Recommendation-System",
  },
];
const socials = [
  {
    name : "instagram",
    icon : instagram,
    link : "https://www.instagram.com/i_am_uks_/",
  },
  {
    name: "facebook",
    icon: facebook,
    link : "https://www.facebook.com/profile.php?id=100074018137550",
  },
  {
    name : "twitter",
    icon : twitter,
    link : "https://www.x.com/blackhorse2807",
  },
  {
    name : "linkedin",
    icon : linkedin,
    link : "https://www.linkedin.com/in/ujjwalkumarsingh",
  },
  {
    name : "github",
    icon : github,
    link : "https://github.com/blackhorse2807",
  },
  {
    name : "leetcode",
    icon : leetcode,
    link : "https://leetcode.com/u/blackhorse_/",
  },
  {
    name : "codeforces",
    icon : codeforces,
    link : "https://codeforces.com/profile/blackhorse_",
  },
];
export { services, technologies, experiences, testimonials, projects, socials };
