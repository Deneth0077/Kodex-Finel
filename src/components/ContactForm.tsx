import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.form
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      onSubmit={handleSubmit}
      className="p-8 bg-white rounded-2xl shadow-xl"
    >
      <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
      
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
          placeholder="Your name"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
          placeholder="Your email"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
          placeholder="Tell us about your project or inquiry"
          required
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="btn btn-primary w-full"
      >
        Send Message
      </button>
    </motion.form>
  );
};

export default ContactForm;