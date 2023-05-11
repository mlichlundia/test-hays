import { ProfileInterface } from '../interfaces/profile.interface'

export const Profile: ProfileInterface = {
  name: 'Kseniya',
  lastName: 'Sychova',
  title: 'frontend developer',
  imgName: 'avatar',
  contacts: [
    {label: 'LinkedIn', value: '/in/kseniyasychova', src: 'https://www.linkedin.com/in/kseniyasychova/'},
    {label: 'GitHub', value: '/mlichlundia', src: 'https://github.com/mlichlundia'},
    {label: 'Web-site', value: 'mlichlundia.com', src: 'https://my-cv-flame.vercel.app/home'},
    {label: 'Phone', value: '+48 571 380 901'}
  ],
  summary: 'I\'m experienced frontend developer with 2 years of commercial experience completing meaningful projects. Currently, enhancing app functionality and user experience via new framework migration. Passionate about clean, readable code and mentoring new developers. Committed to producing high-quality work and achieving goals with a focus on teamwork.',
  skills: ['JavaScript', 'OOP', 'HTML5', 'CSS3', 'SASS/SCSS', 'BEM', 'TypeScript', 'Angular', 'RxJS', 'Angular Material', 'RxJS', 'Karma / Jasmine', 'Design patterns', 'REST API', 'Git', 'GitLab', 'axios', 'npm', 'Agile', 'Scrum', 'Figma'],
  languages: [
    {label: 'English', lvl: 'Professional Working Proficiency — B2'},
    {label: 'Polish', lvl: 'Basic'},
    {label: 'Russian', lvl: 'Native'}
  ],
  workExperience: [
    {
      title: 'Middle Frontend Developer',
      company: 'Textura Agency',
      achievements: [
        'Led a team of 3 devs during the most demanding period of the project',
        'Delivered four fully completed complex modules of SPA  within a month',
        'Refactored and debugged large parts of code, solved  performance issues, enhanced app reusability and scalability',
        'Improved Junior’s skills through code review process and weekly calls'
      ]
    },
    {
      title: 'Trainee Frontend Developer',
      company: 'Andersen Lab',
      achievements: [
        'Headed the frontend team of 4 developers helping team members in resolving issues and optimizing solutions',
        'Collaborating with the backend team to determine endpoints and data formats',
        'Delivered complex tasks with high test coverage',
        'Conducted large-scale refactoring of codebase for improved performance and scalability',
        'Collaborating with the back-end team to integrate the user interface with back-end'
      ]
    }
  ]
}