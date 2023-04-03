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
    subtitle: 'Recipe social networking app',
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
    subtitle: 'Tea e-commerce store',
    description:
      'Developed an e-commerce site using React and integrated it with Stripe for processing order checkouts, adding and removing items from the cart, and managing listings. The website allowed users to easily browse and purchase products, with a streamlined checkout process. I leveraged React to create an intuitive and user-friendly interface, making it easy for customers to navigate and find products.',
    showMoreLink: '/projects/steeps',
    skills: ['JavaScript', 'React'],
  },
  {
    imgSrc: '/images/the-conversation.png',
    title: 'The Conversation',
    subtitle: 'Twitter-like message board',
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
    description:
      'Crafted a multithreaded server catering to the needs of numerous users joining a chat room. An accompanying user interface facilitating a seamless live socket connection. The application enables users to effortlessly access real-time information on other online users and messages by seamlessly communicating with the server.',
    showMoreLink: '/projects/chat-app',
    skills: ['Java'],
  },
  {
    imgSrc: '/images/popper-pig.png',
    title: 'Popper Pig',
    subtitle: 'Mobile game for iOS and Android devices',
    description:
      "An exhilarating hyper-casual arcade game. The player takes control over their pig soaring through the sky that's determined to pop as many balloons as possible. The game has intuitive controls where the player can easily raise or lower the pig by holding or releasing the screen. As the game progresses, the game intensifies, getting faster and more challenging. Be careful not to let too many balloons escape or it's game over! ",
    showMoreLink: '/projects/popper-pig',
    skills: ['Python', 'Kivy', 'Android'],
  },
  {
    imgSrc: '/images/yahtzee.png',
    title: 'Yahtzee',
    subtitle: 'Entire dice game made with C and assembly',
    description:
      'Recreation of one of my favorite games! Just like the real game, players have five dice they roll three times and can hold dice between turns. Players gain points for rolling all the same or specific dice combinations. Having five dice show the same number earns the beloved Yahtzee! Users can associate their high score with their name on a leaderboard to recreate the real-life competition.',
    showMoreLink: '/projects/yahtzee',
    skills: ['C', 'Assembly'],
  },
  {
    imgSrc: '/images/shape-fall.png',
    title: 'Shape Fall',
    subtitle: 'Cross-platform mobile arcade-puzzle game',
    description:
      'Guide the precious golden square to the bottom of each tower. Carefully tap away the blocks of the tower while avoiding the collapse of the structure and keeping the golden block safe. As players progress through levels, they unlock new tower blocks and discover their special abilities. With each new world, a new block and a range of challenging levels await players.',
    showMoreLink: '/projects/shape-fall',
    skills: ['GameSalad', 'Chartboost', 'iOS', 'Android'],
  },
  {
    imgSrc: '/images/goldcrest.png',
    title: 'Goldcrest',
    subtitle: '1st place winning role playing game',
    description:
      "Won 1st place in the 2019 Technology Student Association Pennsylvania state-wide Video Game Design competition. Step into the shoes of Gilbert, the hero destined to save Goldcrest from an unprecedented drought. The believed-to-be mythical gobblers are real and devastating the village's crops. Interact people in the village to obtain tasks and figure out how to save Goldcrest.",
    showMoreLink: '/projects/goldcrest',
    skills: ['GameSalad', 'HTML5'],
  },
  {
    imgSrc: '/images/binkos-dragstrip.png',
    title: "Binko's Dragstrip",
    subtitle: '3rd place upgrade-racing game',
    description:
      "Won 3rd place in the 2018 Technology Student Association Pennsylvania state-wide Video Game Design competition. Binko wants to create a legacy for himself. He wants to be the world's best racer. Collect power-ups and coins as you progress through each arena where the stakes continue to rise.",
    showMoreLink: '/projects/binkos-dragstrip',
    skills: ['GameSalad', 'HTML5'],
  },
  {
    imgSrc: '/images/the-golden-peach.png',
    title: 'The Golden Peach',
    subtitle: 'State qualifying adventure platformer',
    description:
      "One of my favorite and most nostalgic works that made me love coding. Won 7th place in the 2017 Technology Student Association Pennsylvania state-wide Video Game Design competition. The once prosperous Critterville had their Golden Peach stolen by the orcs in Orc Valley. The peach has magical powers, brining life to where it's present. The hero must fight their way through the orcs to retrieve the peach and save Critterville.",
    showMoreLink: '/projects/the-golden-peach',
    skills: ['GameSalad', 'HTML5'],
  },
];
