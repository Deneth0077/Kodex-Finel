import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, LayoutGrid, Lightbulb, PenTool, Server, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { fadeIn, staggerContainer } from '../utils/animation';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Enterprise Solutions",
      description: "Custom software solutions that drive business growth",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Digital Innovation",
      description: "Cutting-edge technology for tomorrow's challenges",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for modern businesses",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        {/* Slider */}
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.1
              }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <div 
                className="absolute inset-0 bg-center bg-cover"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  filter: 'brightness(0.3)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Slider Navigation */}
        <div className="absolute z-20 flex space-x-2 transform -translate-x-1/2 bottom-8 left-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="container relative z-10 flex items-center h-full">
          <div className="max-w-3xl">
            <motion.div
              variants={fadeIn('down', 0.1)}
              initial="hidden"
              animate="show"
              className="flex items-center mb-4"
            >
              <Code size={32} className="mr-2 text-white" />
              <span className="text-2xl font-bold text-white">Kodex99</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 font-bold text-white"
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p 
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-xl mb-8 text-xl text-white/90"
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4"
            >
              <Link to="/services" className="bg-white btn btn-primary text-primary-white hover:text-black">
                Explore Services
              </Link>
              <Link to="/contact" className="text-white border-white btn btn-outline hover:text-primary-dark hover:bg-white hover:border-white">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Our Services"
            subtitle="Delivering innovative solutions to meet your complex business challenges."
          />
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Custom Software Development"
              description="Bespoke software solutions tailored to your specific business needs and objectives."
              icon={<Code size={24} />}
              delay={0.1}
            />
            <ServiceCard
              title="Web & Mobile App Development"
              description="Responsive web and mobile applications built with modern frameworks and technologies."
              icon={<LayoutGrid size={24} />}
              delay={0.2}
            />
            <ServiceCard
              title="Cloud & DevOps Solutions"
              description="Seamless cloud integration and DevOps practices for efficient software delivery."
              icon={<Server size={24} />}
              delay={0.3}
            />
            <ServiceCard
              title="UI/UX Design & Prototyping"
              description="User-centric design solutions that enhance user experience and interface aesthetics."
              icon={<PenTool size={24} />}
              delay={0.4}
            />
            <ServiceCard
              title="IT Strategy & Consulting"
              description="Expert guidance on technology decisions aligned with your business goals."
              icon={<Lightbulb size={24} />}
              delay={0.5}
            />
            <ServiceCard
              title="Team Augmentation"
              description="Skilled professionals to complement your in-house team and accelerate project delivery."
              icon={<Users size={24} />}
              delay={0.6}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Team collaboration" 
                className="shadow-xl rounded-2xl"
              />
            </motion.div>
            
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                variants={fadeIn('left', 0.1)}
                className="mb-6 text-3xl font-bold md:text-4xl"
              >
                Who We Are
              </motion.h2>
              
              <motion.p 
                variants={fadeIn('left', 0.2)}
                className="mb-6 text-gray-600"
              >
                Kodex99 is a team of passionate software engineers, designers, and strategists 
                dedicated to creating innovative digital solutions that solve complex problems.
              </motion.p>
              
              <motion.p 
                variants={fadeIn('left', 0.3)}
                className="mb-8 text-gray-600"
              >
                Our mission is to simplify complexity through innovative software. We believe 
                technology should serve people, not the other way around.
              </motion.p>
              
              <motion.div variants={fadeIn('up', 0.4)}>
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container text-center">
          <motion.h2 
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-6 text-3xl font-bold text-white md:text-4xl"
          >
            Ready to transform your business with custom software solutions?
          </motion.h2>
          
          <motion.p 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-8 text-white/90"
          >
            Let's discuss how we can help you achieve your business goals with our expert team and innovative approach.
          </motion.p>
          
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link to="/contact" className="bg-white btn text-primary-dark hover:bg-white/90">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;