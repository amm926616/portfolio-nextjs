const AboutPage = () => {
  // Data moved to constants for better organization
  const skills = [
    { name: "Python", level: "90%", icon: "🐍" },
    { name: "Java", level: "85%", icon: "☕" },
    { name: "JavaScript", level: "80%", icon: "📜" },
    { name: "Spring Boot", level: "75%", icon: "🌱" },
    { name: "React", level: "70%", icon: "⚛️" },
    { name: "PyQt6", level: "85%", icon: "🖥️" },
    { name: "MySQL", level: "80%", icon: "🗃️" },
    { name: "Linux", level: "75%", icon: "🐧" },
  ];

  const journey = [
    {
      year: "2019",
      title: "The Spark",
      description:
        "Discovered programming through Java, solving math problems algorithmically",
      icon: "💡",
      color: "bg-yellow-500",
    },
    {
      year: "2021",
      title: "First Creation",
      description: "Built a Burmese-English dictionary app for local students",
      icon: "🛠️",
      color: "bg-blue-500",
    },
    {
      year: "2023",
      title: "Systems Thinking",
      description: "Started CS degree while developing full-stack applications",
      icon: "🧠",
      color: "bg-purple-500",
    },
    {
      year: "Now",
      title: "Crafting Solutions",
      description: "Building tools that blend utility with elegant design",
      icon: "🚀",
      color: "bg-red-500",
    },
  ];

  const projects = [
    {
      name: "April Music Player",
      description:
        "For language learners who need precise lyric synchronization",
      tech: ["Python", "PyQt6", "SQLite"],
      link: "#",
      icon: "🎵",
    },
    {
      name: "Hygiene Nerds",
      description: "Full-stack e-commerce with custom analytics dashboard",
      tech: ["Java", "Spring Boot", "React"],
      link: "#",
      icon: "🛒",
    },
    {
      name: "EasyPaste",
      description: "Clipboard manager for developers with snippet organization",
      tech: ["JavaFX", "Bash"],
      link: "#",
      icon: "📋",
    },
    {
      name: "Chessboard Trainer",
      description: "Interactive chess visualization for pattern recognition",
      tech: ["JavaScript", "Canvas API"],
      link: "#",
      icon: "♟️",
    },
  ];

  const philosophy = [
    {
      principle: "Elegant Systems",
      explanation:
        "The most beautiful code disappears, letting the solution shine through",
      icon: "✨",
    },
    {
      principle: "Continuous Deconstruction",
      explanation:
        "I learn by taking apart and reassembling systems to understand their essence",
      icon: "🧩",
    },
    {
      principle: "Practical First",
      explanation:
        "Build something that works, then refine it toward perfection",
      icon: "⚡",
    },
    {
      principle: "Cross-Pollination",
      explanation:
        "Jewelry design taught me precision; banking taught me systems - all knowledge connects",
      icon: "🌉",
    },
  ];

  const hobbies = [
    { name: "Analyzing chess endgames", icon: "♟️" },
    { name: "Collecting mental models", icon: "🧠" },
    { name: "Tweaking my Arch Linux setup", icon: "🔧" },
    { name: "Reading physics philosophy", icon: "📚" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 font-sans">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Animated Header */}
        <div className="border-b-2 border-red-500 pb-2 mb-12 relative group">
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-transparent w-1/3 group-hover:w-full transition-all duration-1000 ease-out"></div>
          <h1 className="text-5xl font-bold text-red-400 mb-2 text-center font-mono hover:text-red-300 transition-colors duration-300">
            &lt;My Odyssey/&gt;
          </h1>
          <p className="text-center text-gray-300 italic hover:text-gray-200 transition-colors duration-300">
            &quot;Where logic meets creativity in the pursuit of
            understanding&quot;
          </p>
        </div>

        {/* Main Content Container */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl shadow-red-900/30 border border-gray-700 space-y-16">
          {/* Introduction Narrative */}
          <section className="space-y-6">
            <div className="flex items-start group">
              <span className="text-red-400 text-2xl mr-3 transition-transform duration-500 group-hover:rotate-12">
                ⎈
              </span>
              <p className="text-gray-300 leading-relaxed">
                My journey began in{" "}
                <span className="text-red-300 font-medium">
                  Yangon`&apos;`s jewelry workshops
                </span>
                , where I watched my father transform raw gold into intricate
                designs. This early exposure to
                <span className="text-red-300 font-medium">
                  {" "}
                  precise craftsmanship
                </span>{" "}
                and
                <span className="text-red-300 font-medium">
                  {" "}
                  systematic creation
                </span>{" "}
                became the foundation for how I approach code—as both an{" "}
                <span className="text-red-300 font-medium">art</span> and
                <span className="text-red-300 font-medium">
                  {" "}
                  engineering
                </span>{" "}
                discipline.
              </p>
            </div>

            <div className="flex items-start group">
              <span className="text-red-400 text-2xl mr-3 transition-transform duration-700 group-hover:rotate-180">
                ⟳
              </span>
              <p className="text-gray-300 leading-relaxed">
                At 16, a battered Java textbook revealed that{" "}
                <span className="text-red-300 font-medium">software</span>
                was the ultimate{" "}
                <span className="text-red-300 font-medium">
                  creative medium
                </span>
                —where
                <span className="text-red-300 font-medium">
                  {" "}
                  logic
                </span> and{" "}
                <span className="text-red-300 font-medium">imagination</span>
                collide. My INTP mind found its playground in{" "}
                <span className="text-red-300 font-medium">
                  abstract architectures
                </span>
                , where I could build and rebuild systems to understand their
                essence.
              </p>
            </div>
          </section>

          {/* Skills Showcase */}
          <section>
            <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2 animate-pulse duration-2000"></span>
              My Toolkit
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group transform hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-red-300 font-mono flex items-center">
                      <span className="mr-1">{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-gray-400 group-hover:text-red-400 transition-colors duration-300">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Journey Timeline */}
          <section>
            <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2 animate-pulse duration-2000"></span>
              My Evolution
            </h2>
            <div className="relative pl-8 border-l-2 border-red-500/30 space-y-8">
              {journey.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div
                    className={`absolute -left-4 top-1 w-4 h-4 ${item.color} rounded-full border-2 border-gray-800 transform group-hover:scale-125 transition-transform duration-300`}
                  />
                  <div className="transform transition-all duration-300 group-hover:-translate-x-1">
                    <p className="text-sm text-gray-400 font-mono mb-1">
                      {item.year}
                    </p>
                    <h3 className="text-lg text-red-300 font-medium mb-1 flex items-center">
                      <span className="mr-2">{item.icon}</span> {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Project Showcase */}
          <section>
            <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2 animate-pulse duration-2000"></span>
              Projects That Define Me
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-gray-700/30 hover:bg-red-900/20 transition-all duration-300 p-5 rounded-lg border border-gray-600/50 group transform hover:-translate-y-1"
                >
                  <div className="flex items-start mb-2">
                    <span className="text-2xl mr-2 text-red-400">
                      {project.icon}
                    </span>
                    <h3 className="text-red-300 font-medium text-lg group-hover:text-red-200 transition-colors duration-300">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3 pl-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pl-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-600/50 text-red-200 px-2 py-1 rounded hover:bg-red-900/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 pl-8">
                    <a
                      href={project.link}
                      className="text-red-400 hover:text-red-300 transition-colors duration-300 text-sm italic flex items-center"
                    >
                      Explore project <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Philosophy */}
          <section>
            <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2 animate-pulse duration-2000"></span>
              My Coding Philosophy
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {philosophy.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-gray-600/30 rounded-lg hover:border-red-500/50 transition-colors duration-300 group transform hover:-translate-y-1 bg-gradient-to-br from-gray-800/30 to-gray-900/30"
                >
                  <div className="text-2xl text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {item.icon}
                  </div>
                  <h3 className="text-red-300 font-medium mb-1 group-hover:text-red-200 transition-colors duration-300">
                    {item.principle}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.explanation}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Personal Touch */}
          <section>
            <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2 animate-pulse duration-2000"></span>
              Beyond Code
            </h2>
            <div className="bg-gray-700/20 p-5 rounded-lg border border-gray-600/30 hover:border-red-500/30 transition-colors duration-300">
              <p className="text-gray-300 italic mb-3">
                &quot;When I&apos;m not coding, you&apos;ll find me:&quot;
              </p>
              <ul className="grid grid-cols-2 gap-3 text-sm">
                {hobbies.map((hobby, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-300 hover:text-red-300 transition-colors duration-300"
                  >
                    <span className="text-red-400 mr-2">{hobby.icon}</span>
                    <span>{hobby.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
