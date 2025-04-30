export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  image: string;
  screenshots?: {
    url: string;
    caption: string;
  }[];
  videoDemo?: string;
  technologies: {
    name: string;
    purpose: string;
  }[];
  challenges: string[];
  solutions: string[];
  liveUrl?: string;
  githubUrl: string;
  systemArchitecture?: string;
  lessonsLearned: string[];
};

export const projects: Project[] = [
  {
    id: "all-in-one-scanlation",
    title: "All in One Scanlation Tools",
    tagline: "Automating manga scanlation workflow",
    description: "Python toolkit for automating manga scanlation processes",
    detailedDescription: `
      My very first programming project created to streamline my scanlation freelancing work.
      Features:
      - Image manipulation (cutting, cropping, splitting)
      - Webtoon image downloader from multiple sites
      - EasyPaste tool for manhwa typesetting automation
      - Automatically copies next line when user presses Ctrl+V
    `,
    image: "/images/projects/scanlation-tools.png",
    technologies: [
      { name: "Python", purpose: "Core application" },
      { name: "Tkinter", purpose: "GUI framework" },
      { name: "JSON", purpose: "Configuration storage" },
    ],
    challenges: [
      "Handling different image formats and qualities",
      "Creating a smooth workflow for non-technical users",
      "Web scraping various webtoon sites",
    ],
    solutions: [
      "Implemented flexible image processing algorithms",
      "Created intuitive keyboard shortcuts",
      "Developed site-specific download adapters",
    ],
    githubUrl: "https://github.com/amm926616/scanlation-tools",
    lessonsLearned: [
      "Importance of user experience in tools",
      "Basic principles of image processing",
      "How to structure a complex desktop application",
    ],
  },
  {
    id: "easypaste-python",
    title: "EasyPaste (Python Standalone)",
    tagline: "Streamlined version of the typesetting tool",
    description: "Standalone version of the EasyPaste typesetting assistant",
    detailedDescription: `
      A focused version of the EasyPaste tool from my scanlation toolkit.
      Improvements:
      - Cleaner interface
      - More reliable text line tracking
      - Reduced memory usage
    `,
    image: "/images/projects/easypaste-python.png",
    technologies: [
      { name: "Python", purpose: "Core application" },
      { name: "Tkinter", purpose: "GUI framework" },
      { name: "JSON", purpose: "Configuration storage" },
    ],
    challenges: [
      "Maintaining functionality while simplifying the UI",
      "Improving performance over the bundled version",
    ],
    solutions: [
      "Removed unused features from the original",
      "Optimized text processing algorithms",
    ],
    githubUrl: "https://github.com/amm926616/easypaste-python",
    lessonsLearned: [
      "Value of focused applications",
      "Performance optimization techniques",
    ],
  },
  {
    id: "easypaste-java",
    title: "EasyPaste (Java Version)",
    tagline: "JavaFX implementation of typesetting tool",
    description: "Java port of the EasyPaste tool with improved UI",
    detailedDescription: `
      My first Java desktop application, created during university.
      Features:
      - JavaFX modern interface
      - Same core functionality as Python version
      - Three times larger file size than Python version
    `,
    image: "/images/projects/easypaste-java.png",
    technologies: [
      { name: "Java", purpose: "Core application" },
      { name: "JavaFX", purpose: "GUI framework" },
      { name: "Jackson", purpose: "JSON processing" },
    ],
    challenges: [
      "Java's larger memory footprint",
      "Learning JavaFX while developing",
    ],
    solutions: [
      "Implemented efficient memory management",
      "Studied JavaFX documentation thoroughly",
    ],
    githubUrl: "https://github.com/amm926616/easypaste-java",
    lessonsLearned: [
      "Comparing programming language performance",
      "JavaFX UI design principles",
      "When not to rewrite working software",
    ],
  },
  {
    id: "tasktails",
    title: "TaskTails",
    tagline: "Pomodoro-based task management system",
    description: "Collaborative study timer and task manager",
    detailedDescription: `
      Developed with a friend during university.
      Features:
      - Pomodoro timer (25/5 minute cycles)
      - Task management system
      - Alarm notifications
      - Basic UI with Tkinter
    `,
    image: "/images/projects/tasktails.png",
    technologies: [
      { name: "Python", purpose: "Core application" },
      { name: "Tkinter", purpose: "GUI framework" },
      { name: "SQLite", purpose: "Data persistence" },
      { name: "JSON", purpose: "Configuration" },
    ],
    challenges: [
      "Coordinating with a teammate",
      "Creating reliable timer functionality",
      "Making Tkinter look decent",
    ],
    solutions: [
      "Used Git for collaboration",
      "Implemented system-level timing",
      "Customized Tkinter widgets",
    ],
    githubUrl: "https://github.com/amm926616/tasktails",
    lessonsLearned: [
      "Collaborative development basics",
      "Time management in applications",
      "Limitations of Tkinter",
    ],
  },
  {
    id: "automation-scripts",
    title: "Automation Scripts",
    tagline: "Various productivity scripts",
    description: "Collection of Python and Bash automation scripts",
    detailedDescription: `
      Various scripts created to improve daily productivity:
      - KPay amount tracking
      - File/folder renaming utilities
      - Image resolution fixing
      - Other workflow automation
    `,
    image: "/images/projects/automation-scripts.png",
    technologies: [
      { name: "Python", purpose: "Complex automations" },
      { name: "Bash", purpose: "System-level scripts" },
    ],
    challenges: [
      "Handling edge cases in file operations",
      "Making scripts user-friendly",
    ],
    solutions: [
      "Added comprehensive error handling",
      "Created simple configuration systems",
    ],
    githubUrl: "https://github.com/amm926616/automation-scripts",
    lessonsLearned: [
      "Power of automation",
      "Importance of documentation",
      "Shell scripting techniques",
    ],
  },
  {
    id: "chess-web",
    title: "Chess in JavaScript",
    tagline: "Pure web implementation of chess",
    description: "Browser-based chess game with no libraries",
    detailedDescription: `
      My first web development project, completed in one week.
      Features:
      - Complete chess rules implementation
      - Basic AI opponent
      - Responsive design
    `,
    image: "/images/projects/chess-web.png",
    technologies: [
      { name: "HTML", purpose: "Structure" },
      { name: "CSS", purpose: "Styling" },
      { name: "JavaScript", purpose: "Game logic" },
    ],
    challenges: [
      "Learning web development from scratch",
      "Implementing complex chess rules",
    ],
    solutions: [
      "Studied chess algorithms",
      "Built incrementally from simple to complex",
    ],
    githubUrl: "https://github.com/amm926616/chess-web",
    lessonsLearned: [
      "Web development fundamentals",
      "Game state management",
      "Algorithm implementation",
    ],
  },
  {
    id: "no-skip-player",
    title: "No Skip Video Player",
    tagline: "Forces you to watch videos properly",
    description: "Video player that prevents skipping content",
    detailedDescription: `
      Created to combat my own impatience when watching films.
      Features:
      - No skip controls
      - Saves progress automatically
      - Minimal distraction interface
    `,
    image: "/images/projects/no-skip-player.png",
    technologies: [
      { name: "Python", purpose: "Core application" },
      { name: "PyQt", purpose: "GUI framework" },
      { name: "JSON", purpose: "Progress storage" },
    ],
    challenges: [
      "Removing standard player controls",
      "Reliable progress tracking",
    ],
    solutions: [
      "Customized video player widget",
      "Frequent autosave functionality",
    ],
    githubUrl: "https://github.com/amm926616/no-skip-player",
    lessonsLearned: [
      "Video processing basics",
      "Building constrained UIs",
      "Behavioral design patterns",
    ],
  },
  {
    id: "personal-dictionary",
    title: "Personal Dictionary",
    tagline: "Korean vocabulary learning system",
    description: "Custom dictionary for language learning",
    detailedDescription: `
      Created to help with Korean vocabulary memorization.
      Features:
      - Syllable-based word connections
      - Custom vocabulary building
      - Advanced search by components
    `,
    image: "/images/projects/personal-dictionary.png",
    technologies: [
      { name: "Python", purpose: "Core application" },
      { name: "PyQt", purpose: "GUI framework" },
      { name: "SQLite", purpose: "Data storage" },
      { name: "JSON", purpose: "Configuration" },
    ],
    challenges: [
      "Handling Korean text processing",
      "Creating meaningful word connections",
    ],
    solutions: [
      "Implemented syllable decomposition",
      "Developed relational word mapping",
    ],
    githubUrl: "https://github.com/amm926616/personal-dictionary",
    lessonsLearned: [
      "Text processing in non-Latin scripts",
      "Creating educational tools",
      "Database design for language learning",
    ],
  },
  {
    id: "april-music",
    title: "April Music Player",
    tagline: "Music player for language learners",
    description: "Feature-rich music player with lyric utilities",
    detailedDescription: `
      My proudest project - a full-featured music player.
      Features:
      - Precise lyric synchronization
      - Note-taking tied to lyrics
      - Vocabulary tracking
      - Custom waveform visualization
    `,
    image: "/images/projects/april-music.png",
    screenshots: [
      {
        url: "/images/projects/april/player-view.png",
        caption: "Main player interface with synchronized lyrics",
      },
      {
        url: "/images/projects/april/note-taking.png",
        caption: "Note-taking feature with timestamped comments",
      },
    ],
    technologies: [
      { name: "Python", purpose: "Core application" },
      { name: "PyQt", purpose: "GUI framework" },
      { name: "SQLite", purpose: "Local storage" },
      { name: "FFmpeg", purpose: "Audio processing" },
    ],
    challenges: [
      "Millisecond-precise lyric sync",
      "Memory management for large libraries",
      "Cross-platform compatibility",
    ],
    solutions: [
      "Custom timing algorithms",
      "Lazy-loading system",
      "Platform abstraction layers",
    ],
    githubUrl: "https://github.com/amm926616/april-music-player",
    systemArchitecture: `
      1. Presentation Layer (PyQt UI)
      2. Application Layer (Core logic)
      3. Service Layer (Audio processing)
      4. Data Access Layer (SQLite)
    `,
    lessonsLearned: [
      "Separation of UI and business logic",
      "Python performance optimization",
      "Cross-platform development",
    ],
  },
  {
    id: "tasks-of-kaiden",
    title: "Tasks of Kaiden",
    tagline: "Couple's shared todo app",
    description: "Mobile todo app for relationship productivity",
    detailedDescription: `
      Created for me and my girlfriend to stay connected.
      Features:
      - Local task management
      - Shared task viewing
      - Comment and reaction system
      - Cloud sync
    `,
    image: "/images/projects/tasks-of-kaiden.png",
    technologies: [
      { name: "Flutter", purpose: "Cross-platform app" },
      { name: "Dart", purpose: "Application logic" },
      { name: "Firebase", purpose: "Cloud sync" },
    ],
    challenges: [
      "Learning mobile development",
      "Creating intuitive sharing system",
    ],
    solutions: [
      "Used Flutter for cross-platform",
      "Designed simple permission system",
    ],
    githubUrl: "https://github.com/amm926616/tasks-of-kaiden",
    lessonsLearned: [
      "Mobile app development",
      "Real-time data sync",
      "Relationship-centered design",
    ],
  },
  {
    id: "hygiene-nerds",
    title: "Hygiene Nerds",
    tagline: "E-commerce with analytics",
    description: "Full-stack e-commerce platform",
    detailedDescription: `
      Final project for JDC bootcamp.
      Features:
      - JWT authentication
      - Real-time inventory
      - Analytics dashboard
      - Automated reporting
    `,
    image: "/images/projects/hygiene-nerds.png",
    screenshots: [
      {
        url: "/images/projects/hygiene/storefront.png",
        caption: "Product storefront with animated bubbles",
      },
      {
        url: "/images/projects/hygiene/dashboard.png",
        caption: "Analytics dashboard with visualizations",
      },
    ],
    technologies: [
      { name: "Java", purpose: "Backend services" },
      { name: "Spring Boot", purpose: "Application framework" },
      { name: "React", purpose: "Frontend framework" },
      { name: "MySQL", purpose: "Database" },
      { name: "Axios", purpose: "API communication" },
    ],
    challenges: [
      "Secure payment processing",
      "High-volume inventory",
      "Meaningful data viz",
    ],
    solutions: [
      "Integrated Stripe API",
      "Event-sourcing pattern",
      "Custom D3.js visualizations",
    ],
    githubUrl: "https://github.com/amm926616/hygiene-nerds",
    systemArchitecture: `
      1. Client Layer (React Frontend)
      2. API Gateway (Spring Cloud)
      3. Microservices (Products, Orders, Users)
      4. Data Storage (MySQL + Redis)
    `,
    lessonsLearned: [
      "Microservices architecture",
      "Frontend performance",
      "E-commerce security",
    ],
  },
];
