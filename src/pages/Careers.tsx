import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MapPin, Clock, Laptop, ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { fadeIn } from '../utils/animation';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobs: Job[] = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced Full Stack Developer to build and maintain scalable web applications. You'll work with a cross-functional team to create innovative solutions for our clients.",
      requirements: [
        "5+ years of professional software development experience",
        "Strong proficiency with React and Node.js",
        "Experience with cloud infrastructure (AWS, Azure, or GCP)",
        "Familiarity with DevOps practices and CI/CD pipelines",
        "Bachelor's degree in Computer Science or related field (or equivalent experience)"
      ]
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Join our design team to create intuitive, visually appealing user experiences for web and mobile applications. You'll collaborate with developers and product managers to bring designs to life.",
      requirements: [
        "3+ years of UX/UI design experience for digital products",
        "Proficiency with design tools (Figma, Adobe XD, Sketch)",
        "Portfolio demonstrating user-centered design process",
        "Experience with usability testing and user research",
        "Strong communication and collaboration skills"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're seeking a DevOps Engineer to improve our development and deployment processes. You'll design and implement infrastructure as code and automate our CI/CD pipelines.",
      requirements: [
        "3+ years of experience in a DevOps role",
        "Strong knowledge of cloud platforms (AWS, Azure, GCP)",
        "Experience with containerization (Docker, Kubernetes)",
        "Proficiency with infrastructure as code (Terraform, CloudFormation)",
        "Familiarity with monitoring and logging tools"
      ]
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build the Future With Us</h1>
            <p className="text-xl opacity-90">
              Join our team of innovators and problem-solvers creating tomorrow's technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Why Join Kodex99"
            subtitle="Be part of a team that values innovation, growth, and work-life balance."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Innovative Work",
                description: "Work on cutting-edge projects using the latest technologies to solve real-world problems.",
                icon: <Laptop size={32} className="text-primary-dark" />
              },
              {
                title: "Remote-First Culture",
                description: "Enjoy the flexibility of working from anywhere with our distributed team approach.",
                icon: <MapPin size={32} className="text-primary-dark" />
              },
              {
                title: "Work-Life Balance",
                description: "We prioritize well-being with flexible hours and generous time off policies.",
                icon: <Clock size={32} className="text-primary-dark" />
              },
              {
                title: "Professional Growth",
                description: "Continuous learning opportunities, conference stipends, and career advancement paths.",
                icon: <Check size={32} className="text-primary-dark" />
              },
              {
                title: "Inclusive Environment",
                description: "A diverse team where all perspectives are valued and respected.",
                icon: <Users size={32} className="text-primary-dark" />
              },
              {
                title: "Competitive Benefits",
                description: "Comprehensive health coverage, retirement plans, and performance bonuses.",
                icon: <Heart size={32} className="text-primary-dark" />
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-gray-200 rounded-xl hover:border-primary-light transition-colors"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Open Positions"
            subtitle="Explore our current job openings and find your perfect role."
          />
          
          <div className="max-w-4xl mx-auto">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-6 bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div 
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExpand(job.id)}
                >
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-sm text-gray-600 flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        {job.department}
                      </span>
                      <span className="text-sm text-gray-600 flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {job.location}
                      </span>
                      <span className="text-sm text-gray-600 flex items-center">
                        <Clock size={16} className="mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  {expandedJob === job.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                
                {expandedJob === job.id && (
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <div className="mb-6">
                      <h4 className="font-bold mb-2">Job Description</h4>
                      <p className="text-gray-600">{job.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold mb-2">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={18} className="text-primary-dark mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="btn btn-primary">
                      Apply Now
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Our team culture" 
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
                Our Team Culture
              </motion.h2>
              
              <motion.p 
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-gray-600 mb-6"
              >
                At Kodex99, we believe in creating an environment where creativity thrives and every 
                team member can do their best work. We value collaboration, continuous learning, and 
                maintaining a healthy balance between work and personal life.
              </motion.p>
              
              <motion.p 
                variants={fadeIn('left', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-gray-600 mb-6"
              >
                We're proud of our remote-first approach, which allows us to build a diverse team of 
                talented professionals from around the world. Our inclusive culture encourages open 
                communication, mutual respect, and celebrating our differences.
              </motion.p>
              
              <motion.div 
                variants={fadeIn('left', 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-primary-dark font-medium">
                  Join us and be part of a team that's shaping the future of technology!
                </p>
              </motion.div>
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
            No open positions that match your skills?
          </motion.h2>
          
          <motion.p 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white/90 mb-8 max-w-2xl mx-auto"
          >
            We're always looking for talented individuals to join our team. Send us your resume, 
            and we'll keep you in mind for future opportunities.
          </motion.p>
          
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-block"
          >
            <a href="/contact" className="btn bg-white text-primary-dark hover:bg-white/90">
              Submit Your Resume
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Missing imports
import { Users, Heart, Briefcase } from 'lucide-react';

export default Careers;