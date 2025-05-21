import { motion } from 'framer-motion';
import { 
  Code, 
  LayoutGrid, 
  Server, 
  PenTool, 
  Lightbulb, 
  Users, 
  ShieldCheck, 
  BarChart3 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { fadeIn } from '../utils/animation';

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your unique business challenges and requirements.",
      icon: <Code size={24} />,
      details: [
        "Enterprise application development",
        "Legacy system modernization",
        "Software integration solutions",
        "Custom CRM and ERP systems"
      ]
    },
    {
      title: "Web & Mobile App Development",
      description: "Responsive, user-friendly applications that deliver exceptional experiences across all devices.",
      icon: <LayoutGrid size={24} />,
      details: [
        "Progressive web applications (PWA)",
        "Native mobile app development",
        "Cross-platform mobile solutions",
        "eCommerce platforms"
      ]
    },
    {
      title: "Cloud & DevOps Solutions",
      description: "Optimize your infrastructure and development workflows for maximum efficiency and scalability.",
      icon: <Server size={24} />,
      details: [
        "Cloud migration & optimization",
        "CI/CD pipeline implementation",
        "Infrastructure as code",
        "Container orchestration"
      ]
    },
    {
      title: "UI/UX Design & Prototyping",
      description: "User-centric design that combines aesthetics with functionality to create intuitive experiences.",
      icon: <PenTool size={24} />,
      details: [
        "User research & testing",
        "Interface design",
        "Interactive prototyping",
        "Design systems creation"
      ]
    },
    {
      title: "IT Strategy & Consulting",
      description: "Strategic guidance to align technology initiatives with your business objectives.",
      icon: <Lightbulb size={24} />,
      details: [
        "Digital transformation roadmaps",
        "Technology stack selection",
        "IT infrastructure assessment",
        "Software architecture consulting"
      ]
    },
    {
      title: "Team Augmentation",
      description: "Extend your team with our skilled professionals to accelerate project delivery.",
      icon: <Users size={24} />,
      details: [
        "Technical skill gap filling",
        "Scalable team extension",
        "Project-based augmentation",
        "Knowledge transfer"
      ]
    },
    {
      title: "Cybersecurity Services",
      description: "Protect your business with comprehensive security solutions for your software and systems.",
      icon: <ShieldCheck size={24} />,
      details: [
        "Security code reviews",
        "Vulnerability assessment",
        "Secure development practices",
        "Authentication & authorization systems"
      ]
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights to drive informed business decisions.",
      icon: <BarChart3 size={24} />,
      details: [
        "Data visualization dashboards",
        "Business intelligence solutions",
        "Predictive analytics",
        "Custom reporting systems"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gray-50">
        <div className="container">
          <motion.div 
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive software solutions to drive your business forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="What We Offer"
            subtitle="Our range of services designed to transform your business with technology."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Custom Software Development" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <div>
              <motion.h2 
                variants={fadeIn('left', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl font-bold mb-6"
              >
                {services[0].title}
              </motion.h2>
              
              <motion.p 
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-gray-600 mb-6"
              >
                {services[0].description} Our expert team works closely with you to 
                understand your specific needs and develop tailored solutions that 
                deliver real business value.
              </motion.p>
              
              <motion.div 
                variants={fadeIn('left', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4">Our approach includes:</h3>
                <ul className="space-y-3">
                  {services[0].details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-white mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Our Development Process"
            subtitle="A streamlined approach to deliver solutions efficiently and effectively."
          />
          
          <div className="relative">
            {/* Process line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {[
                { title: "Discovery & Planning", description: "We work closely with you to understand your business goals, challenges, and requirements to create a comprehensive project plan." },
                { title: "Design & Prototyping", description: "Our design team creates intuitive interfaces and experiences, with iterative prototyping to ensure we're aligned with your vision." },
                { title: "Development", description: "Using agile methodologies, we build your solution with clean, maintainable code and regular progress updates." },
                { title: "Testing & Quality Assurance", description: "Rigorous testing ensures your solution is robust, secure, and performs optimally across all platforms." },
                { title: "Deployment & Integration", description: "We handle the smooth deployment of your solution, ensuring seamless integration with existing systems." },
                { title: "Support & Maintenance", description: "Our relationship continues after launch with ongoing support, updates, and enhancements to keep your solution running at its best." }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="w-full md:w-1/2 p-6">
                    <div className={`text-right ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="mx-auto md:mx-0 relative">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold relative z-10">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 p-6"></div>
                </motion.div>
              ))}
            </div>
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
            Ready to discuss your project needs?
          </motion.h2>
          
          <motion.p 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Contact us today to schedule a consultation with our expert team and discover 
            how we can help you achieve your business goals.
          </motion.p>
          
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-block"
          >
            <a href="/contact" className="btn bg-white text-primary-dark hover:bg-white/90">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;