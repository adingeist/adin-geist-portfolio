export type Project = {
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
  showMoreLink: string;
};

export const projects: Project[] = [
  {
    imgSrc: 'https://dummyimage.com/400x300/ded/aaa',
    title: 'Nibl',
    subtitle: 'Recipe Social Networking App',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/nibl',
  },
  {
    imgSrc: 'https://dummyimage.com/400x300/dee/aaa',
    title: 'Steeps',
    subtitle: 'Tea e-Commerce Store',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/steeps',
  },
  {
    imgSrc: 'https://dummyimage.com/400x300/ede/aaa',
    title: 'The Conversation',
    subtitle: 'Twitter-like Message Board',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/the-conversation',
  },
  {
    imgSrc: '/images/algorithm-visualizer.png',
    title: 'Algorithm Visualizer',
    subtitle: 'Watch time complexity in action',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/algorithm-visualizer',
  },
  {
    imgSrc: '/images/chat-app.png',
    title: 'Chat App',
    subtitle: 'Socket-based live chat rooms',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/chat-app',
  },
  {
    imgSrc: '/images/popper-pig.png',
    title: 'Popper Pig',
    subtitle: 'Mobile game for iOS and Android devices',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/popper-pig',
  },
  {
    imgSrc: '/images/yahtzee.png',
    title: 'Yahtzee',
    subtitle: 'Entire dice game made with C and assembly',
    description: 'Created a space where people can share recipes!',
    showMoreLink: '/projects/yahtzee',
  },
];
