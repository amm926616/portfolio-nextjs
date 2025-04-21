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
    id: "1",
    title: "April Music Player",
    tagline: "Language learning through synchronized lyrics",
    description:
      "Desktop music player with precise lyric synchronization for language learners",
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
    videoDemo: "https://www.youtube.com/embed/your-video-id",
    detailedDescription: `
      A PyQt6-based music player designed specifically for language learners, featuring:
      - Millisecond-precise lyric synchronization
      - Note-taking system tied to song timestamps
      - Vocabulary extraction and tracking
      - Custom audio waveform visualization

      The system uses SQLite for local storage and implements a custom tagging system
      to organize learning materials by difficulty and language concepts.
    `,
    image: "/images/projects/april-music-player.png",
    technologies: [
      { name: "Python", purpose: "Core application logic" },
      { name: "PyQt6", purpose: "GUI framework" },
      { name: "SQLite", purpose: "Local data persistence" },
      { name: "FFmpeg", purpose: "Audio processing" },
    ],
    challenges: [
      "Achieving frame-perfect lyric synchronization",
      "Memory management with large audio libraries",
      "Cross-platform compatibility issues",
    ],
    solutions: [
      "Implemented custom timing algorithms with sub-millisecond precision",
      "Developed a lazy-loading system for audio files",
      "Created platform-specific abstraction layers",
    ],
    githubUrl: "https://github.com/amm926616/april-music-player",
    systemArchitecture: `
      1. Presentation Layer (PyQt6 UI)
      2. Application Layer (Core logic)
      3. Service Layer (Audio processing)
      4. Data Access Layer (SQLite)
    `,
    lessonsLearned: [
      "The importance of separation between UI and business logic",
      "How to optimize Python applications for performance",
      "Cross-platform development challenges",
    ],
  },
  {
    id: "2",
    title: "Hygiene Nerds",
    tagline: "E-commerce with analytical insights",
    description:
      "Full-stack e-commerce platform with custom analytics dashboard",
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
    videoDemo: "https://www.youtube.com/embed/your-video-id",
    detailedDescription: `
      A complete e-commerce solution featuring:
      - JWT authentication system
      - Real-time inventory management
      - Custom analytics dashboard with data visualization
      - Automated reporting system

      The backend implements a microservices architecture with Spring Boot,
      while the frontend uses React with TailwindCSS for responsive design.
    `,
    image: "/images/projects/hygiene-nerds.png",
    technologies: [
      { name: "Java", purpose: "Backend services" },
      { name: "Spring Boot", purpose: "Application framework" },
      { name: "React", purpose: "Frontend framework" },
      { name: "MySQL", purpose: "Primary database" },
    ],
    challenges: [
      "Implementing secure payment processing",
      "Handling high-volume inventory updates",
      "Creating meaningful data visualizations",
    ],
    solutions: [
      "Integrated Stripe API with proper PCI compliance",
      "Developed an event-sourcing pattern for inventory",
      "Built custom D3.js visualizations for business metrics",
    ],
    githubUrl: "https://github.com/amm926616/hygiene-nerds",
    systemArchitecture: `
      1. Client Layer (React Frontend)
      2. API Gateway (Spring Cloud)
      3. Microservices (Products, Orders, Users)
      4. Data Storage (MySQL + Redis cache)
    `,
    lessonsLearned: [
      "Microservices communication patterns",
      "Frontend performance optimization",
      "Security best practices for e-commerce",
    ],
  },
];
