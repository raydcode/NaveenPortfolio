import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Star, Trophy } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [messagesSent, setMessagesSent] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setMessagesSent(prev => prev + 1);
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to elevate your brand's social media presence? Let's discuss how we can work together.
          </p>
          
          {/* Gamification Element */}
          {messagesSent > 0 && (
            <div className="mt-6 flex justify-center">
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl px-4 py-2 rounded-full border border-orange-400/30 flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-orange-400" />
                <span className="text-orange-300 text-sm font-semibold">
                  Communication Streak: {messagesSent} message{messagesSent > 1 ? 's' : ''} sent!
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 bg-slate-900/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on innovative campaigns, 
                or share insights about social media strategy. Whether you're looking to boost your 
                brand's digital presence or need expert guidance on sports marketing, I'm here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-cyan-500/20 backdrop-blur-sm rounded-lg border border-cyan-400/30 hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-white/70">naveenbalaji786@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-teal-500/20 backdrop-blur-sm rounded-lg border border-teal-400/30 hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-white/70">+91 87786 46349</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-400/30 hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-white/70">India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
        href="https://in.linkedin.com/in/naveenbalaji8"
                  className="p-3 bg-slate-900/50 backdrop-blur-xl rounded-lg border border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/30 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 text-cyan-400 group-hover:text-white" />
                </a>
                <a
                  href="https://twitter.com/monknaveen"
                  className="p-3 bg-slate-900/50 backdrop-blur-xl rounded-lg border border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/30 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 group"
                >
                  <Twitter className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </a>
                <a
          href="https://www.instagram.com/naveen_monk/"
                  className="p-3 bg-slate-900/50 backdrop-blur-xl rounded-lg border border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/30 hover:bg-orange-500/20 transition-all duration-300 hover:scale-110 group"
                >
                  <Instagram className="w-6 h-6 text-orange-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/30 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-8 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 text-white placeholder-white/50 hover:border-cyan-400/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 text-white placeholder-white/50 hover:border-cyan-400/50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 text-white placeholder-white/50 hover:border-cyan-400/50"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 resize-none text-white placeholder-white/50 hover:border-cyan-400/50"
                  placeholder="Tell me about your project or how I can help..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 backdrop-blur-sm border border-cyan-400/30 hover:from-cyan-400 hover:to-blue-500"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;