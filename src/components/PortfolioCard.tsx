import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  imageSrc: string;
  delay?: number;
}

const PortfolioCard = ({ 
  title, 
  description, 
  imageSrc, 
  delay = 0 
}: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card group overflow-hidden"
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white">
            <p className="mb-2">{description}</p>
            <button className="flex items-center text-white font-medium mt-2">
              <span>View Case Study</span>
              <ExternalLink size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;