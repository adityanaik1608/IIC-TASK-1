'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@eventhub.com',
      link: 'mailto:hello@eventhub.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '123 Tech Street, San Francisco, CA',
      link: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-[#0f1436] to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6 reveal" style={{ transitionDelay: '200ms' }}>
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link}
                className="block glass rounded-xl p-6 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all group-hover:scale-110 duration-300">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {info.details}
                    </p>
                  </div>
                </div>
              </a>
            ))}

            {/* Quick Response Info */}
            <div className="glass rounded-xl p-6 border-2 border-purple-500/30 card-hover">
              <h3 className="text-lg font-bold text-white mb-3">
                Response Time
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">During business hours:</span>
                  <span className="text-primary font-semibold">1-2 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">After hours:</span>
                  <span className="text-cyan-400 font-semibold">Next business day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 border-2 border-white/10 reveal" style={{ transitionDelay: '400ms' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold btn-hover btn-glow-primary flex items-center justify-center gap-2 group/btn"
                >
                  <Send className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-12 animate-in zoom-in duration-500">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center animate-bounce">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
    </section>
  );
}
