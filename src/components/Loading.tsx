import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="w-4 h-4 rounded-full gradient-bg"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: 0,
          }}
        />
        <motion.div
          className="w-4 h-4 rounded-full gradient-bg"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-4 h-4 rounded-full gradient-bg"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: 0.4,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loading;