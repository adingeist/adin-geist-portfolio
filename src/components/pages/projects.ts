export type Skill =
  | 'React Native'
  | 'TypeScript'
  | 'Node.js'
  | 'Express.js'
  | 'PostgreSQL'
  | 'GitHub Actions'
  | 'Google Cloud Platform'
  | 'eslint'
  | 'JavaScript'
  | 'Java'
  | 'Spring'
  | 'Python'
  | 'Kivy'
  | 'C'
  | 'Assembly'
  | 'Chartboost'
  | 'GameSalad'
  | 'iOS'
  | 'HTML5'
  | 'Android'
  | 'React';

export type Project = {
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
  showMoreLink: string;
  skills?: Skill[];
};

export const projects: Project[] = [
  {
    imgSrc: '/images/nibl.png',
    title: 'Nibl',
    subtitle: 'Recipe Social Networking App',
    description:
      "Created a social aimed at providing a niche audience with a space to share and react to recipes. Creators have a streamlined means of delivering engaging short-form video with detailed nutritional information. The app exceeds the necessities of a social app by including push notifications, liking, commenting, nib'ing, following, video editing and much more.",
    showMoreLink: '/projects/nibl',
    skills: [
      'TypeScript',
      'React Native',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'GitHub Actions',
      'Google Cloud Platform',
      'eslint',
      'iOS',
      'Android',
    ],
  },
  {
    imgSrc: '/images/steeps.png',
    title: 'Steeps',
    subtitle: 'Tea e-Commerce Store',
    description:
      'Developed an e-commerce site using React and integrated it with Stripe for processing order checkouts, adding and removing items from the cart, and managing listings. The website allowed users to easily browse and purchase products, with a streamlined checkout process. I leveraged React to create an intuitive and user-friendly interface, making it easy for customers to navigate and find products.',
    showMoreLink: '/projects/steeps',
    skills: ['JavaScript', 'React'],
  },
  {
    imgSrc: '/images/the-conversation.png',
    title: 'The Conversation',
    subtitle: 'Twitter-like Message Board',
    description:
      "Developed a chat message board that allowed users to create an account, securely login, and then view and make posts. The posts were persisted in a SQL database, ensuring that users could access the message board and their posts whenever they logged in. I utilized a RESTful API architecture with JSON Web Tokens for authentication, ensuring that users could securely login and access the message board's features.",
    showMoreLink: '/projects/the-conversation',
    skills: ['Java', 'Spring', 'PostgreSQL', 'JavaScript', 'React'],
  },
  {
    imgSrc: '/images/algorithm-visualizer.png',
    title: 'Algorithm Visualizer',
    subtitle: 'Watch time complexity in action',
    description:
      'Collaboratively designed a webpage that visualizes insertion, bubble, selection, and quick sort algorithms. The vertical bars represent the size of an element in the array to sort. Users can change the size of the array and how fast the animation occurs.',
    showMoreLink: '/projects/algorithm-visualizer',
    skills: ['JavaScript', 'React'],
  },
  {
    imgSrc: '/images/chat-app.png',
    title: 'Chat App',
    subtitle: 'Socket-based live chat rooms',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/chat-app',
    skills: ['Java'],
  },
  {
    imgSrc: '/images/popper-pig.png',
    title: 'Popper Pig',
    subtitle: 'Mobile game for iOS and Android devices',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/popper-pig',
    skills: ['Python', 'Kivy', 'Android'],
  },
  {
    imgSrc: '/images/yahtzee.png',
    title: 'Yahtzee',
    subtitle: 'Entire dice game made with C and assembly',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/yahtzee',
    skills: ['C', 'Assembly'],
  },
  {
    imgSrc: '/images/shape-fall.png',
    title: 'Shape Fall',
    subtitle: 'Cross-platform mobile arcade-puzzle game',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/shape-fall',
    skills: ['GameSalad', 'Chartboost', 'iOS', 'Android'],
  },
  {
    imgSrc: '/images/goldcrest.png',
    title: 'Goldcrest',
    subtitle: '1st place winning role playing game',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/goldcrest',
    skills: ['GameSalad', 'HTML5'],
  },
  {
    imgSrc: '/images/binkos-dragstrip.png',
    title: "Binko's Dragstrip",
    subtitle: '3rd place upgrade-racing game',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/binkos-dragstrip',
    skills: ['GameSalad', 'HTML5'],
  },
  {
    imgSrc: '/images/the-golden-peach.png',
    title: 'The Golden Peach',
    subtitle: 'State qualifying adventure platformer',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/the-golden-peach',
    skills: ['GameSalad', 'HTML5'],
  },
];
