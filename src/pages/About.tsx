import { motion } from 'framer-motion';
import { Briefcase, Check, Heart, Lightbulb, Rocket, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ValueCard from '../components/ValueCard';
import { fadeIn } from '../utils/animation';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 text-white bg-gradient-to-r from-primary-dark/90 to-secondary-dark/90">
        <div className="container">
          <motion.div 
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">About Kodex99</h1>
            <p className="text-xl opacity-90">
              Our journey, mission, and the people making it all happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
                src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Our mission" 
                className="shadow-xl rounded-2xl"
              />
            </motion.div>
            
            <div>
              <motion.h2 
                variants={fadeIn('left', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-6 text-3xl font-bold"
              >
                Our Mission
              </motion.h2>
              
              <motion.p 
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-6 text-gray-600"
              >
                To simplify complexity through innovative software. We create technology that 
                empowers businesses to achieve their goals, drive growth, and adapt to changing markets.
              </motion.p>
              
              <motion.p 
                variants={fadeIn('left', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-6 text-gray-600"
              >
                We believe that the right technology solutions should be accessible to all businesses, 
                regardless of size or sector. Our approach combines technical excellence with creative 
                thinking to deliver solutions that are not just functional, but transformational.
              </motion.p>
              
              <motion.div 
                variants={fadeIn('left', 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="mb-4 text-xl font-bold">What sets us apart:</h3>
                <ul className="space-y-3">
                  {['Human-centered design approach', 'Technical excellence', 'Agile development methodology', 'Long-term partnerships'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="flex-shrink-0 mt-1 mr-2 text-primary-dark" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do."
          />
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              title="Flexibility"
              description="We adapt quickly to changing technologies and business needs to deliver the best solutions."
              icon={<Zap size={32} />}
              delay={0.1}
            />
            <ValueCard
              title="Trust"
              description="We build relationships based on transparency, honesty, and delivering on our promises."
              icon={<Heart size={32} />}
              delay={0.2}
            />
            <ValueCard
              title="Innovation"
              description="We embrace creative thinking and cutting-edge technologies to solve complex problems."
              icon={<Lightbulb size={32} />}
              delay={0.3}
            />
            <ValueCard
              title="Growth"
              description="We are committed to continuous learning and improvement, both for our team and clients."
              icon={<Rocket size={32} />}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="section">
        <div className="container">
          <SectionHeading
            title="Our Team"
            subtitle="Meet the talented people behind Kodex99."
          />
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Alex Johnson', role: 'CEO & Founder', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
              { name: 'Maria Rivera', role: 'CTO', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
              { name: 'David Chen', role: 'Lead Developer', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
              { name: 'Sarah Patel', role: 'UI/UX Designer', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
              { name: 'James Wilson', role: 'DevOps Engineer', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
              { name: 'Emma Thompson', role: 'Project Manager', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden card"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover w-full h-full" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary-dark">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Culture Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <motion.h2 
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-6 text-3xl font-bold"
              >
                Our Workplace Culture
              </motion.h2>
              
              <motion.p 
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-6 text-gray-600"
              >
                At Kodex99, we've created a workplace where innovation thrives, collaboration is celebrated, 
                and personal growth is encouraged. We believe that the best solutions come from diverse 
                perspectives and an environment where everyone feels valued and empowered.
              </motion.p>
              
              <motion.p 
                variants={fadeIn('right', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-6 text-gray-600"
              >
                Our team members are encouraged to experiment, learn continuously, and bring their unique 
                talents to the table. We prioritize work-life balance, knowing that creativity and 
                productivity flourish when people are at their best.
              </motion.p>
              
              <motion.div 
                variants={fadeIn('right', 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-center font-medium text-primary-dark"
              >
                <Briefcase size={20} className="mr-2" />
                <span>Join our team and be part of something exceptional.</span>
              </motion.div>
            </div>
            
            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Workplace culture" 
                className="shadow-xl rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;