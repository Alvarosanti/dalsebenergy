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
  docker,
  info,
  medicion,
  propuesta,
  gestion,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Nosotros",
  },
  {
    id: "work",
    title: "Servicio",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Instalacion",
    icon: web,
  },
  {
    title: "Paneles fotovoltaicos",
    icon: mobile,
  },
  {
    title: "...",
    icon: backend,
  },
  {
    title: "...",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Informacion del servicio",
    company_name: "...",
    icon: info,
    iconBg: "#E6DEDD",
    date: "Paso No. 1",
    points: [
      "1...",
      "2...",
      "3...",
      "4..."
    ],
  },
  {
    title: "Medir area y consumo",
    company_name: "...",
    icon: medicion,
    iconBg: "#E6DEDD",
    date: "Paso No. 2",
    points: [
      "1...",
      "2...",
      "3...",
      "4..."
    ],
  },
  {
    title: "Propuesta de instalacion",
    company_name: "...",
    icon: propuesta,
    iconBg: "#E6DEDD",
    date: "Paso No. 3",
    points: [
      "1...",
      "2...",
      "3...",
      "4..."
    ],
  },
  {
    title: "Gestion administrativa",
    company_name: "...",
    icon: gestion,
    iconBg: "#E6DEDD",
    date: "Paso No. 4",
    points: [
      "1...",
      "2...",
      "3...",
      "4..."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "...",
    name: "Sara Lee",
    designation: "CTO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "...",
    name: "Chris Brown",
    designation: "CEO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "...",
    name: "Lisa Wang",
    designation: "TPO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences, testimonials };