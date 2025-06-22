export interface BlogContent {
  type: "paragraph" | "image" | "code";
  content: string;
  language?: string; // for code blocks
  alt?: string; // for images
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
  contents: BlogContent[];
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building a Music Player with Python and PySide6",
    slug: "building-music-player-python-pyside6",
    excerpt:
      "Learn how I created April Music Player with advanced features like synced lyrics and dictionary building.",
    date: "2023-10-15",
    readTime: "8 min read",
    coverImage: "/blogs/april-music-player-cover.jpg",
    tags: ["Python", "PySide6", "GUI Development"],
    contents: [
      {
        type: "paragraph",
        content:
          "When I set out to build April Music Player, I wanted to create something more than just another media player. My goal was to combine music playback with language learning tools in an elegant interface.",
      },
      {
        type: "image",
        content: "/blogs/april-player-screenshot-1.jpg",
        alt: "April Music Player main interface",
      },
      {
        type: "paragraph",
        content:
          "The core challenge was implementing synchronized lyrics that would highlight in real-time. I used a custom timestamp parsing system that could handle various LRC file formats.",
      },
      {
        type: "code",
        content: `def parse_lrc_timestamp(lrc_time):
    """Parse LRC timestamp into milliseconds"""
    try:
        min, sec = lrc_time.split(':')
        sec, ms = sec.split('.')
        return (int(min) * 60000) + (int(sec) * 1000) + int(ms)
    except:
        return 0`,
        language: "python",
      },
      {
        type: "paragraph",
        content:
          "The dictionary building feature analyzes lyrics to extract vocabulary words, then fetches definitions and examples automatically. This required careful handling of API rate limits and local caching.",
      },
    ],
  },
  {
    id: "2",
    title: "Creating Interactive E-commerce Animations with React",
    slug: "ecommerce-animations-react",
    excerpt:
      "How I implemented the bubble cart animation for Hygiene Nerds that increased engagement by 40%.",
    date: "2023-08-22",
    readTime: "6 min read",
    coverImage: "/blogs/hygiene-nerds-cover.jpg",
    tags: ["React", "Animations", "E-commerce"],
    contents: [
      {
        type: "paragraph",
        content:
          "The Hygiene Nerds project needed a fun, interactive way to showcase products and encourage cart additions. I designed a bubble animation system that would respond to user actions.",
      },
      {
        type: "image",
        content: "/blogs/bubble-animation-demo.gif",
        alt: "Bubble cart animation demo",
      },
      {
        type: "paragraph",
        content:
          "Using Framer Motion with React, I created physics-based animations that felt natural. The key was balancing performance with visual appeal, especially for mobile users.",
      },
      {
        type: "code",
        content: `const Bubble = ({ product }) => {
  const controls = useAnimation()

  const handleAddToCart = () => {
    controls.start({
      x: [0, -20, 20, 0],
      y: [0, -30, 0],
      transition: { duration: 0.6 }
    })
    // Cart logic...
  }

  return (
    <motion.div
      animate={controls}
      whileHover={{ scale: 1.05 }}
      className="bubble"
    >
      {/* Bubble content */}
    </motion.div>
  )
}`,
        language: "javascript",
      },
    ],
  },
];
