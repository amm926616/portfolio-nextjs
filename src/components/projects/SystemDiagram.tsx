import { motion } from "framer-motion";

type SystemDiagramProps = {
  architecture: string | undefined;
};

const SystemDiagram = ({ architecture }: SystemDiagramProps) => {
  if (!architecture) return null;
  const layers = architecture
    ?.split("\n")
    ?.map((line) => line.trim())
    ?.filter((line) => line.length > 0);

  return (
    <div className="mt-6">
      <h4 className="text-xs text-gray-400 mb-3 font-mono">
        ARCHITECTURE OVERVIEW
      </h4>
      <div className="space-y-2">
        {layers?.map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center"
          >
            <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center mr-3">
              <span className="text-xs text-gray-300">{i + 1}</span>
            </div>
            <div className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg p-3">
              <p className="text-gray-300 font-mono text-sm">{layer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SystemDiagram;
