import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import PortfolioCard from '../components/PortfolioCard';
import { fadeIn } from '../utils/animation';

const Portfolio = () => {
  const projects = [
    {
      title: "FinTrack Dashboard",
      description: "Financial analytics platform for SMEs with real-time reporting and forecasting capabilities.",
      image: "https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "Web Application"
    },
    {
      title: "MediConnect",
      description: "Telehealth platform connecting patients with healthcare providers for virtual consultations.",
      image: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "Healthcare"
    },
    {
      title: "EcoTrack IoT",
      description: "Environmental monitoring system using IoT sensors for sustainable agriculture and conservation.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "IoT Solution"
    },
    {
      title: "RetailFlow",
      description: "Omnichannel retail management system with inventory tracking and sales analytics.",
      image: "https://images.pexels.com/photos/1546901/pexels-photo-1546901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "E-commerce"
    },
    {
      title: "BuildRight",
      description: "Construction project management platform with real-time collaboration and resource tracking.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "Project Management"
    },
    {
      title: "TravelEase",
      description: "AI-powered travel planning application with personalized recommendations and itinerary building.",
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "Mobile App"
    }
  ];

  const categories = [
    "All",
    ...new Set(projects.map(project => project.category))
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-r from-primary-dark/90 to-secondary-dark/90 text-white">
        <div className="container">
          <motion.div 
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl opacity-90">
              Explore our wide range of successful projects across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Featured Projects"
            subtitle="Discover how we've helped businesses transform their operations with custom software solutions."
          />
          
          {/* Category Filter */}
          <motion.div 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-colors text-sm font-medium ${
                  index === 0 
                    ? 'gradient-bg text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="order-2 lg:order-1"
            >
              <span className="text-sm font-medium text-primary-dark mb-2 block">Featured Case Study</span>
              <h2 className="text-3xl font-bold mb-6">FinTrack Dashboard</h2>
              <p className="text-gray-600 mb-6">
                A comprehensive financial analytics platform developed for small and medium enterprises, 
                providing real-time reporting, cash flow forecasting, and business intelligence capabilities.
              </p>
              
              <div className="mb-6 space-y-4">
                <div>
                  <h3 className="font-bold mb-2">The Challenge</h3>
                  <p className="text-gray-600">
                    Our client needed a centralized platform to manage financial data across multiple 
                    business units, with intuitive visualization and predictive analytics.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">Our Solution</h3>
                  <p className="text-gray-600">
                    We built a cloud-based dashboard with real-time data integration, custom reporting, 
                    and machine learning-powered forecasting capabilities.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">The Results</h3>
                  <p className="text-gray-600">
                    The platform reduced financial reporting time by 67%, improved forecast accuracy by 
                    45%, and enabled data-driven decision making across the organization.
                  </p>
                </div>
              </div>
              
              <button className="btn btn-primary">
                View Full Case Study
              </button>
            </motion.div>
            
            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="order-1 lg:order-2"
            >
              <img 
                src={projects[0].image} 
                alt={projects[0].title} 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Hear what our clients have to say about working with us."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Kodex99 delivered a solution that exceeded our expectations. Their team's technical expertise and commitment to understanding our business needs resulted in a platform that has transformed our operations.",
                name: "Michael Chen",
                position: "CTO, FinTech Innovations",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              },
              {
                quote: "Working with Kodex99 was a game-changer for our business. Their ability to translate complex requirements into an intuitive, powerful solution has given us a significant competitive advantage.",
                name: "Sarah Rodriguez",
                position: "CEO, MediConnect",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg relative"
              >
                <div className="mb-6">
                  <svg className="text-primary-light w-12 h-12 absolute -top-4 -left-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic relative z-10">{testimonial.quote}</p>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-3xl mx-auto"
          >
            Let's build something amazing together
          </motion.h2>
          
          <motion.p 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Start your project with Kodex99 and turn your vision into reality with our expert team.
          </motion.p>
          
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-block"
          >
            <a href="/contact" className="btn bg-white text-primary-dark hover:bg-white/90">
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;