

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const media_links = [
  {
    name: "Instagram",
    img:"https://i.ibb.co/TgPFFwv/instagram.png",
    link: "https://www.instagram.com/jayesh_wankhede_/",
    id: 1,
  },
  {
    name: "Github",
    img:"https://i.ibb.co/zscMCcz/Github-Logo-1-Streamline-Ultimate-svg.png",
    link: "https://github.com/jayeshw28",
    id: 2,
  },
  {
    name: "Linkedin",
    img:"https://i.ibb.co/yW34JQN/Linkdin.png",
    link: "https://www.linkedin.com/in/jayesh-wankhede-5b494a22a/",
    id: 3,
  },
  {
    name: "Coding Ninjas",
    img:"https://i.ibb.co/TtF84T4/codingninjas-svgrepo-com-1.png",
    link: "https://www.naukri.com/code360/profile/c2c5bab9-1c22-473c-909e-d05118d7f1a9",
    id: 4,
  },
  {
    name: "figma",
    img:"https://i.ibb.co/gvzWx0N/Figma.png",
    link: "https://www.figma.com/@JayeshW28",
    id: 5,
  },
  {
    name: "LeetCode",
    img:"https://i.ibb.co/4S0WJRH/leetcode-1.png",
    link: "https://leetcode.com/jayeshw28/",
    id: 6,
  },
] as const;

export const contact_links = [
  {
    name: "Instagram",
    img:"https://i.ibb.co/TgPFFwv/instagram.png",
    link: "https://www.instagram.com/jayesh_wankhede_/",
  },
  {
    name: "Github",
    img:"https://i.ibb.co/zscMCcz/Github-Logo-1-Streamline-Ultimate-svg.png",
    link: "https://github.com/jayeshw28",
  },
  {
    name: "Linkedin",
    img:"https://i.ibb.co/yW34JQN/Linkdin.png",
    link: "https://www.linkedin.com/in/jayesh-wankhede-5b494a22a/",
  },
  {
    name: "figma",
    img:"https://i.ibb.co/gvzWx0N/Figma.png",
    link: "https://www.figma.com/@JayeshW28",
  },
] as const;

export const works = [
  {
    title: "IIIT Kota official website",
    position: "Core Web Team Member",
    location: "Remote/Hybrid",
    time: "2023-current",
  },
  {
    title: "IIITians Network",
    position: "Lead Designer & Senior Executive",
    location: "Remote",
    time: "2023(8months)",
  },
  {
    title: "Web3nest Technologies",
    position: "UI/UX Design Intern",
    location: "Remote",
    time: "2023(July-Aug)",
  },
  {
    title: "CACS IIIT Kota",
    position: "Web Team - UI Designer",
    location: "MNIT, Jaipur, Rajasthan, India",
    time: "2023(Jan-March)",
  },
] as const;

export const stack = [
  {
    name: "React",
    img:"https://i.ibb.co/NSDYkwX/react.png",
  },
  {
    name: "Next.js",
    img:"https://i.ibb.co/2MDRz18/nextjs7685-logowik-1.png",
  },
  {
    name: "Figma",
    img:"https://i.ibb.co/kMCVFby/Figma.png",
  },
  {
    name: "Three js",
    img:"https://i.ibb.co/X8vWT1X/Frame-43.png",
  },
  {
    name: "Tailwind",
    img:"https://i.ibb.co/CQK5xrq/Tailwind-Css.png",
  },
  {
    name: "MongoDB",
    img:"https://i.ibb.co/XbcP7Nq/pngwing-1.png",
  },
  {
    name: "Redux",
    img:"https://i.ibb.co/2qwNRdH/Redux.png",
  },
  {
    name: "Express",
    img:"https://i.ibb.co/zm9vLPM/Java-Script-logo-1.png",
  },
  {
    name: "Python",
    img:"https://i.ibb.co/BNJp28W/icon-Python.png",
  },
  {
    name: "Framer Motion",
    img:"https://i.ibb.co/LdXZhnY/icon-framer.png",
  },
] as const;


export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: '🎓',
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: '🎨',
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: '🚀',
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CineTix",
    description:
      "A movie ticket booking platform with role-based dashboards, ensuring type safety, scalability, and optimized user experience.",
    tags: ["Next.Js", "tRPC", "ShadCN UI", "Prisma", "Stripe", "MapBox", "Docker"],
    link: "https://github.com/jayeshw28/CineTix",
  },
  {
    title: "iphone-three-js",
    description:
      "This is an single page iPhone 14 pro preview website with 3D preview model using Three.Js, WebGi & GSAP. ",
    tags: ["React", "Three.Js", "WebGi", "GSAP"],
    link: "https://jayeshiphone14.netlify.app/",
  },
  {
    title: "College Fest Website UI Design",
    description:
      "User Interface Design of College fest website, all responsive design layout,wireframes with appropriate color pallet and functionality broad design feature.",
    tags: ["Figma","FigJam", "Adobe XD", "Adobe Illustrator"],
    link: "https://www.figma.com/community/file/1362923553384078489/music-fest-ui-website",
  },
] as const;

export const roles = [
  {titles:'UI/UX Designer'},
  {titles:'Web Developer'},
  {titles:'Programmer'},
  {titles:'Graphic Designer'},
  {titles:'Sketch Artist'},
] as const;

export const skillsData = [
  {title:'Data Structures & Algorithms',percent: 90,},
  {title:'UI/UX Design',percent: 92,},
  {title:'Web Development',percent: 88,},
  {title:'Programming',percent: 94,},
  {title:'Graphic Designing',percent: 85,},
  {title:'Logo Designing',percent: 86,},
  {title:'Sketching',percent: 81,},
] as const;

export const languagesData = [
  {title:'C/C++',percent: 88,},
  {title:'Python',percent: 67,},
  {title:'Java',percent: 60,},
  {title:'JavaScript',percent: 82,},
  {title:'TypeScript',percent: 87,},
  {title:'HTML',percent: 96,},
  {title:'CSS/SASS/SCSS',percent: 91,},
  {title:'SQL',percent: 80,},
] as const;

 export const toolsData = [
  {title:'ReactJs',percent: 90,},
  {title:'NodeJs',percent: 95,},
  {title:'Docker',percent: 75,},
  {title:'Git',percent: 80,},
  {title:'GitHub',percent: 80,},
  {title:'Express',percent: 45,},
  {title:'Spline',percent: 35,},
  {title:'Blender',percent: 28,},
  {title:'Figma',percent: 96,},
  {title:'Canva',percent: 98,},
  {title:'Web Flow',percent: 33,},
  {title:'Adobe Photoshop',percent: 45,},
  {title:'Adobe Lightroom',percent: 30,},
 ] as const;
