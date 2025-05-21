import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  center = true, 
  className = '' 
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'} ${className}`}>
      <motion.h2 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold relative inline-block"
      >
        {title}
        <span className="absolute -bottom-2 left-0 right-0 h-1 gradient-bg rounded-full"></span>
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-600 mt-4 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;