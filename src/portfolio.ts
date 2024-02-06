import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Mujahid Shaik",
  title: "Hi Geeks, I'm Mujahid",
  description:
    "I'm a Passionate Blockchain and Web Developer with expertise in Next.js, React.js, Node.js, Ethereum, Solidity, ethers.js, and the Hardhat Framework. Proven experience in crafting dynamic and responsive web applications, contributing to Blockchain. Eager to leverage skills in innovative projects and contribute to the dynamic field of technology.",
  resumeLink:
    "https://drive.google.com/file/d/1xCRdKO8-PjoEohdfaq6dt-iBU63IF1_r/view?usp=sharing",
};

export const openSource = {
  githubUserName: "mujahid002",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: "https://www.linkedin.com/in/mujahidshaik/",
  github: "https://github.com/mujahid002",
  twitter: "https://twitter.com/muja002",
  discord: "https://discordapp.com/users/1091433159050137660",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "LEARNING, RESEARCHING AND DEVELOPING",
  data: [
    {
      title: "Front-End Development",
      lottieAnimationFile: "/lottie/skills/web.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA)"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs using Node.js with REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Git",
          iconifyTag: "devicon:git",
        },
        {
          skillName: "Linux",
          iconifyTag: "devicon:linux",
        },
        {
          skillName: "Typescript",
          iconifyTag: "skill-icons:typescript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },

        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
        },
        {
          skillName: "NPM",
          iconifyTag: "logos:npm-icon",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "Tailwind",
          iconifyTag: "devicon:tailwindcss",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "devicon:nodejs",
        },
      ],
    },
    {
      title: "Blockchain Development",
      lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
        ),
        emoji(
          "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Hardhat & Alchemy"
        ),
        emoji(
          "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
        ),
        emoji(
          "⚡ Developing Smart Contracts using ERC Token Standards and Gas optimization"
        ),
        emoji(
          "⚡ Building Dapps with React.js & Solidity using ethers.js & IPFS"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          iconifyTag: "logos:ethereum",
        },
        {
          skillName: "Solidity",
          iconifyTag: "logos:solidity",
        },
        {
          skillName: "ethersjs",
          iconifyTag: "logos:ethers",
        },
        {
          skillName: "Metamask",
          iconifyTag: "logos:metamask-icon",
        },
        {
          skillName: "Truffle",
          iconifyTag: "logos:truffle-icon",
        },
        {
          skillName: "Ganache",
          iconifyTag: "logos:ganache-icon",
        },
        {
          skillName: "Hardhat",
          iconifyTag: "devicon:hardhat",
        },
        {
          skillName: "IPFS",
          iconifyTag: "skill-icons:ipfs-light",
        },
        {
          skillName: "Alchemy",
          iconifyTag: "simple-icons:alchemy",
        },
      ],
    },
    {
      title: "Backend and Cloud",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working with cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on AWS virtual machine instances from cloud resourses"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Gitlab",
          iconifyTag: "logos:gitlab",
        },
        {
          skillName: "YAML",
          iconifyTag: "devicon:yaml",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          iconifyTag: "logos:github-actions",
        },
        {
          skillName: "Nginx",
          iconifyTag: "logos:nginx",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Expressjs",
          iconifyTag: "skill-icons:expressjs-dark",
        },
      ],
    },
  ],
};

export const educationInfo: EducationType[] = [
  {
    schoolName: "Chaitanya Bharathi Institute of Technology (C.B.I.T)",
    subHeader: "Free Seat through TS-EAMCET",
    duration: "October 2019 - June 2023",
    // desc: 'Participated in the research of XXX and published 3 papers.',
    grade: "CGPA: 7.83",
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
  {
    schoolName: "Hyderabad Institute of Excellence (H.I.E)",
    subHeader: "Free Seat from BabuKhan's Charitable Trust College",
    duration: "August 2017 - August 2019",
    // desc: 'Participated in the research of XXX and published 3 papers.',
    grade: "PERCENTAGE: 94.8%",
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
  {
    schoolName: "Narayana Best Foundation School (N.B.S)",
    subHeader: "Telangana State Board",
    duration: "September 2016 - June 2017",
    // desc: 'Participated in the research of XXX and published 3 papers.',
    grade: "CGPA: 9.5",
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Application Developer Intern - Blockchain",
    company: "GetBoarded",
    companyLogo: "/img/icons/common/getboarded.png",
    date: "Sept 2023 - Present",
    desc: "I worked as Blockchain Intern at GetBoarded, An opportunity platform for those who are willing to take the detour in career. We offer work-travel opportunities with a unique personality driven approach to matching you with a work experience. Contributed to GetBoarded Application Development with Tech Stack of NEXT.JS, Solidity",
    descBullets: [
      "Conducted in-depth research and provided recommendations for migrating Video-Wiki from Azure to ICP blockchain, and then researched server virtualization and its application within VideoWiki, enabling data-driven decisions to avoid ICP.",
      "Developed the front-end of GetBoarded application using Next.js with Know-Mechanism, showcasing web development skills, Blockchain101 methods for an application. Worked on protocols called KNOW & FORK.",
      "Worked on Monetary KNOW-Mechanism as well as Non-Monetary KNOW-Mechanism and integrated with VideoWiki",
      "Implemented ERC-20 Contracts for FORK & KNOW Protocols and well tested",
    ],
  },
  {
    role: "Web Developement Intern",
    company: "PHN Technology Pvt Ltd",
    companyLogo: "/img/icons/common/phn.jpeg",
    date: "Apr 2023 - May 2023",
    desc: "I worked as frontend web developer to develop web pages, dashboards for mulitple purposes using HTML5, CSS3, JAVASCRIPT and some other libraries.",
    descBullets: [
      "Developed responsive user interfaces using HTML, CSS, and JavaScript for various web pages including registration booking form, college home page, landing page, and e-commerce home page on a weekly basis.",
      "Tested web applications, identified areas for improvement, and provided recommendations for future enhancements.",
    ],
  },
  {
    role: "Volunteer",
    company: "BabuKhan's Charitable Trust, HYDDAO, Social3.Club",
    companyLogo: "/img/icons/common/volunteer.jpeg",
    date: "Apr 2018 - Present",
    desc: "I'm working as a Volunteer for non-profitable organisations to support Community ",
    descBullets: [
      "Volunteer in Babu Khan’s Charitable Trust, helping 10+ students from Khammam District who are 10th pass outs and not financially stable enough for higher education (for 2 Years).",
      "Building connections and volunteering for HYDDAO every weekend with amazing Blockchain events.",
      "Working as Hyderabad Degen for Social3.Club, the revolutionary web3-based platform that's redefining recruitment.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Decentralized-File-System",
    desc: "Developed and implemented a decentralized file sharing system using blockchain and IPFS, with Solidity for smart contracts and React.js for the UI. Ethers.js connects the UI and smart contracts, ensuring user control over file sharing. The project is deployed on Netlify for accessibility and security.",
    github: ["https://github.com/mujahid002/Decentralized-Box"],
    link: "https://decentralized-box.netlify.app/",
  },
  {
    name: "Crypto-Tracker",
    desc: "I developed a responsive Crypto Tracker web app with React and the Coingecko API, offering real-time data, search, and detailed charts. It is hosted on the decentralized cloud platform Spheron for accessibility and reliability..This project aims to those who are willing to trade and make passive income through Arbitrage method.",
    github: ["https://github.com/mujahid002/CryptoTracker"],
    link: "https://cryptotracker-86ed75.spheron.app/",
  },
  {
    name: "Solidity Contracts",
    desc: "Have hands-on experience in writing Smart Contracts using Solidity",
    github: [
      "https://github.com/mujahid002/Solidity_Challenges",
      "https://github.com/mujahid002/solidity_codes",
      "https://github.com/mujahid002/30daysOfSolidity",
    ],
  },
  {
    name: "NFT-MarketPlace",
    desc: "Developed two simple NFT MarketPlaces like Opensea, Rarible and etc on Ethereum Sepolia Testnet.",
    github: [
      "https://github.com/mujahid002/AppA-NFTMarketplace",
      "https://github.com/mujahid002/dreamcatcher-nft-marketplace",
    ],
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Mujahid Shaik",
  description: "A passionate Web Developer and Blockchain Developer.",
  author: "Mujahid Shaik",
  image:
    "https://drive.google.com/file/d/1cs4OPKH6L95IXrCPPZialoS81IWn9IWt/view?usp=sharing",
  keywords: [
    "Mujahid",
    "Mujahid Shaik",
    "mujahid002",
    "muja002",
    "Portfolio",
    "Mujahid Portfolio ",
    "Mujahid Shaik Portfolio",
  ],
};
