"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const nickname = "Aiden";
  const fullName = "Aung Myint Myat";
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const systemStats = [
    { label: "Knowledge Base", value: "∞ TB" },
    { label: "Mental Models", value: "247+" },
    { label: "Coffee Consumed", value: "1.21 GW" },
    { label: "Systems Analyzed", value: "4D" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 border-t border-red-900/30 w-full mt-auto">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* System Status Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {systemStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-red-500/50 transition-colors duration-300 group"
            >
              <p className="text-xs text-gray-400 font-mono group-hover:text-red-300 transition-colors duration-300">
                {stat.label}
              </p>
              <p className="text-xl font-bold text-red-400 font-mono mt-1">
                {stat.value}
                <span className="ml-1 text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {index % 2 === 0 ? "↑" : "↓"}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Signature Section */}
        <div className="relative">
          {/* Binary Decoration */}
          <div className="absolute -top-6 left-0 right-0 text-center opacity-10">
            <p className="font-mono text-xs whitespace-nowrap overflow-hidden">
              01101000 01110101 01101101 01100001 01101110 00100000 01110011
              01111001 01110011 01110100 01100101 01101101 00100000 01101111
              01110101 01110100 01110000 01110101 01110100
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="mb-4 md:mb-0">
              <p className="font-mono text-sm text-gray-400 hover:text-red-300 transition-colors duration-300">
                © {currentYear} {fullName}
                <span className="text-red-400">
                  (User alias: {nickname}, origin: romantic subroutines)
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Last system update: {lastUpdated}
              </p>
            </div>

            {/* Interactive Elements */}
            <div className="flex space-x-6">
              <a
                href="mailto:amm334788@gmail.com"
                className="text-gray-400 hover:text-red-300 transition-colors duration-300 relative group"
              >
                <span className="relative">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-red-400 group-hover:w-full transition-all duration-500"></span>
                </span>
              </a>
              <a
                href="https://github.com/amm926616"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-300 transition-colors duration-300 relative group"
              >
                <span className="relative">
                  GitHub
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-red-400 group-hover:w-full transition-all duration-500 delay-100"></span>
                </span>
              </a>
              <button
                className="text-gray-400 hover:text-red-300 transition-colors duration-300 relative group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="relative">
                  Return ↑
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-red-400 group-hover:w-full transition-all duration-500 delay-200"></span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Philosophical Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 font-mono mb-1">
            SYSTEM STATUS: <span className="text-green-400">OPERATIONAL</span>
          </p>
          <p className="text-xs text-red-400/70 italic max-w-2xl mx-auto">
            "Knowledge is the only resource that grows when shared. This system
            will continue evolving until heat death of the universe."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
