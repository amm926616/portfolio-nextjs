import { motion } from "framer-motion";

type TechStackVisualizerProps = {
  technologies: string[];
};

const TechStackVisualizer = ({ technologies }: TechStackVisualizerProps) => {
  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  return (
    <div className="mb-4">
      <h4 className="text-xs text-gray-400 mb-2 font-mono">TECH STACK</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className={`${colors[index % colors.length]} text-white text-xs px-2 py-1 rounded-md flex items-center`}
          >
            <span className="h-2 w-2 bg-white rounded-full mr-2 opacity-70"></span>
            {tech}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStackVisualizer;
