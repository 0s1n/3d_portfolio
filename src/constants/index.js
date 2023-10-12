import {
  backend,
  redteam,
  frontend,
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
  futtec,
  twitter,
  threads,
  carShowcase,
  threejs,
  reactQuiz,
  danD,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'CyberSegurity',
    icon: redteam,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Fut-Tec',
    icon: futtec,
    iconBg: '#E6DEDD',
    date: 'November 2021 - June 2023',
    points: [
      'Developing and maintaining a Monolith web application',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'The technologies used were: React.js, React Router DOM, I18n, MUI, Redux, Firebase, React Hook Form and Sweet Alert',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Gentleman Programming',
    icon: twitter,
    iconBg: '#383E56',
    date: 'June 2023 - December 2023',
    points: [
      'Developing and maintaining web applications using Next.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Juan does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    id: 1,
    name: 'React Quiz with Firebase',
    description:
      'Web-based platform that allows users to play a quiz game saving score.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'orange-text-gradient',
      },
    ],
    image: reactQuiz,
    source_code_link: 'https://github.com/0s1n/react-quiz-with-firebase',
  },
  {
    id: 2,
    name: 'Car Showcase',
    description:
      'Web application that enables users to Find, book or rent a car — quickly and easily',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'rapidApi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carShowcase,
    source_code_link: 'https://github.com/0s1n/car_showcase',
  },
  {
    id: 3,
    name: 'Threads Clone',
    description: 'A clone of Threads plathform.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'clerk',
        color: 'pink-text-gradient',
      },
      {
        name: 'uploadthing',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'blue-text-gradient',
      },
      {
        name: 'zod',
        color: 'green-text-gradient',
      },
    ],
    image: threads,
    source_code_link: 'https://github.com/0s1n/threads',
  },
  {
    id: 4,
    name: 'Dan D. Repairs',
    description:
      'A fullstack MERN web platform that is used for internal use by the company to organize and control the repairs that are carried out.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
      {
        name: 'node',
        color: 'orange-text-gradient',
      },
      {
        name: 'jwt',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'cors',
        color: 'green-text-gradient',
      },
      {
        name: 'bcrypt',
        color: 'green-text-gradient',
      },
    ],
    image: danD,
    source_code_link: 'https://github.com/0s1n/mernStack',
  },
];

export { services, technologies, experiences, testimonials, projects };
