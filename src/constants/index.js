import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  cns,
  mpac,
  carrent,
  jobit,
  tripguide,
  threejs,
  C,
  Cpp,
  python,
  sql_server,
  chess_thumbnail,
  weather_thumbnail,
  grade_calculator_thumbnail,
  pl_thumbnail,
  map_thumbnail,
  wall_breaker_thumbnail,
  brain_tumour_detector,
  PyTorch,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "C++",
    icon: Cpp,
  },
  {
    name: "Sql Server",
    icon: sql_server,
  },
  {
    name: "PyTorch",
    icon: PyTorch,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Junior Systems Developer",
    company_name: "Muncipal Property Assessment Corporation",
    icon: mpac,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Extended Python-based ETL pipelines to support new data sources and schema updates, enabling loading of data into PostgreSQL.",
      "Managed CI/CD pipeline using GitHub Actions and AWS to automate tests and deployment.",
      "Worked with FastAPI to extend backend functionality by updating endpoints and integrating API logic",
      "Developed unit tests in Python to achieve over 80% code coverage for new features",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "CNS Engineering",
    icon: cns,
    iconBg: "#E6DEDD",
    date: "June 2024 - Aug 2024",
    points: [
      "Developed and optimized SQL Server stored procedures for efficient data manipulation and business logic execution using Azure Data Studio.",
      "Implemented various SQL functions to enhance data querying and processing capabilities.",
      "Designed and managed database tables, ensuring data integrity and performance.",
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
    name: "Brain Tumour Detector",
    description:
      "This project uses deeplearning and AlexNet to classify brain tumors from MRI scans into four categories: non-tumorous, glioma, meningioma, and pituitary tumors, enabling accurate medical diagnosis",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
    ],
    image: brain_tumour_detector,
    source_code_link: "https://github.com/SalehMousavi/TumorClassifier",
  },
  {
    name: "Xplore-Maps",
    description:
      "Designed and implemented a GIS software in C++ for visualizing and solving city travel problems, featuring an intuitive interface and advanced algorithms for optimal route computation.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "openweathermap",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: map_thumbnail,
    source_code_link: "https://github.com/tahakh03/ECE297-Xplore-Maps",
  },
  {
    name: "Chess Engine",
    description:
      "Developed a JavaScript Chess Engine with a user-friendly HTML/CSS interface, an AI opponent using Minimax with alpha-beta pruning, and conducted testing for smooth, high-performance gameplay.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascropt",
        color: "green-text-gradient",
      },
      {
        name: "chess.js",
        color: "pink-text-gradient",
      },
    ],
    image: chess_thumbnail,
    source_code_link: "https://github.com/tahakh03/Chess-Engine",
  },
  {
    name: "Weather Application",
    description:
      "Developed a Python Weather App with Tkinter, integrating OpenWeatherMap API for real-time data and a user-friendly interface displaying comprehensive weather conditions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "openweathermap",
        color: "pink-text-gradient",
      },
    ],
    image: weather_thumbnail,
    source_code_link: "https://github.com/tahakh03/Weather-Application",
  },
  {
    name: "Premier League Match Predictor",
    description:
      "Scraped and cleaned English Premier League match data using Python, then developed predictive models with scikit-learn to forecast match winners accurately.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "beautifulsoup",
        color: "pink-text-gradient",
      },
    ],
    image: pl_thumbnail,
    source_code_link: "https://github.com/tahakh03/Premier-League-Match-Predictor",
  },
  {
    name: "Wallbreaker",
    description:
      "Developed a classic Brick Breaker game in C for the NIOS II system, where players control a paddle to bounce a ball and break bricks, featuring power-ups, scoring, and game-over mechanics.",
    tags: [
      {
        name: "c",
        color: "blue-text-gradient",
      },
      {
        name: "fpga",
        color: "green-text-gradient",
      },
      {
        name: "niosII",
        color: "pink-text-gradient",
      },
    ],
    image: wall_breaker_thumbnail,
    source_code_link: "https://github.com/ZohairZaidi/Wallbreaker-FPGA",
  },
  {
    name: "Grade Calculator",
    description:
      "Developed a dynamic web application for managing course grades, allowing users to add courses and assignments, and automatically calculating weighted average grades using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: grade_calculator_thumbnail,
    source_code_link: "https://github.com/tahakh03/Course-Grade-Calculator",
  },
];

export { services, technologies, experiences, testimonials, projects };