import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { fadeIn } from '../utils/animation';

const Contact = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl opacity-90">
              Have a question or want to discuss a project? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.div
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us using any of the following methods. We're here to 
                  help and will respond as quickly as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <a href="mailto:contact@kodex99.com" className="text-gray-600 hover:text-primary-dark transition-colors">
                        contact@kodex99.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <a href="tel:+15551234567" className="text-gray-600 hover:text-primary-dark transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Location</h3>
                      <p className="text-gray-600">
                        Remote-first company with team members worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white transition-transform hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white transition-transform hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about working with us."
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What types of projects does Kodex99 typically work on?",
                answer: "We specialize in custom software development, web and mobile applications, cloud solutions, and UI/UX design. Our team has experience across diverse industries including finance, healthcare, retail, and education."
              },
              {
                question: "How long does a typical software development project take?",
                answer: "Project timelines vary based on scope and complexity. Simple applications may take 2-3 months, while more complex enterprise solutions can take 6+ months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
              },
              {
                question: "Do you offer ongoing maintenance and support?",
                answer: "Yes, we provide ongoing maintenance and support services for all our solutions. We offer different support tiers to match your needs, from basic bug fixes to comprehensive managed services with 24/7 monitoring."
              },
              {
                question: "How do you handle project management and communication?",
                answer: "We follow agile methodologies with regular sprints and check-ins. You'll have a dedicated project manager who will be your main point of contact. We use tools like Jira, Slack, and regular video meetings to ensure transparent communication throughout the project."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-80 relative">
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <p className="text-gray-600">Google Map would be displayed here</p>
        </div>
      </section>
    </>
  );
};

export default Contact;