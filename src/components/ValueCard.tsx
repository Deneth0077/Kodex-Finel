import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ValueCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

const ValueCard = ({ title, description, icon, delay = 0 }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="p-6 border border-gray-200 rounded-xl hover:border-primary-light transition-colors"
    >
      <div className="text-primary-dark mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ValueCard;