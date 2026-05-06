'use client';

import { useState } from 'react';
import { Brain, Heart, TrendingUp, Leaf, ArrowRight } from 'lucide-react';

export default function Themes() {
  const [expandedTheme, setExpandedTheme] = useState<number | null>(0);

  const themes = [
    {
      id: 0,
      name: 'AI & Machine Learning',
      icon: Brain,
      shortDescription: 'Transform industries with intelligent algorithms',
      fullDescription: 'Dive deep into artificial intelligence, machine learning models, neural networks, and cutting-edge AI applications. Learn how AI is reshaping businesses and society.',
      accentColor: '#00d4ff',
      glowColor: 'cyan-500',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderGradient: 'from-cyan-500 to-blue-500',
      topics: ['Neural Networks', 'Deep Learning', 'NLP', 'Computer Vision'],
    },
    {
      id: 1,
      name: 'Healthcare Innovation',
      icon: Heart,
      shortDescription: 'Revolutionize patient care with tech',
      fullDescription: 'Explore how technology is transforming healthcare through telemedicine, AI diagnostics, wearable devices, and personalized medicine solutions.',
      accentColor: '#ec4899',
      glowColor: 'pink-500',
      gradient: 'from-pink-500/20 to-rose-500/20',
      borderGradient: 'from-pink-500 to-rose-500',
      topics: ['Telemedicine', 'Diagnostics AI', 'Wearables', 'Data Privacy'],
    },
    {
      id: 2,
      name: 'FinTech Solutions',
      icon: TrendingUp,
      shortDescription: 'Reimagine financial services',
      fullDescription: 'Master blockchain, cryptocurrencies, decentralized finance, payment systems, and how fintech is disrupting traditional banking.',
      accentColor: '#a855f7',
      glowColor: 'purple-500',
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderGradient: 'from-purple-500 to-pink-500',
      topics: ['Blockchain', 'Crypto', 'DeFi', 'Payments'],
    },
    {
      id: 3,
      name: 'Sustainability',
      icon: Leaf,
      shortDescription: 'Build a greener future',
      fullDescription: 'Create sustainable solutions using green tech, renewable energy, IoT monitoring, and environmental data analytics to combat climate change.',
      accentColor: '#06b6d4',
      glowColor: 'cyan-500',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      borderGradient: 'from-teal-500 to-cyan-500',
      topics: ['Green Tech', 'Renewables', 'IoT', 'Carbon Tracking'],
    },
  ];

  return (
    <section
      id="themes"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-balance">
            Event <span className="gradient-text">Themes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose your innovation path and explore topics that shape the future
          </p>
        </div>

        {/* Theme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            const isExpanded = expandedTheme === theme.id;

            return (
              <div
                key={theme.id}
                className="group relative reveal"
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setExpandedTheme(theme.id)}
                onMouseLeave={() => setExpandedTheme(null)}
              >
                {/* Neon glow background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${theme.borderGradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                />

                {/* Card */}
                <div
                  className={`relative glass rounded-2xl border-2 overflow-hidden transition-all duration-500 card-hover ${
                    isExpanded
                      ? `border-cyan-500 shadow-lg shadow-${theme.glowColor}/30`
                      : 'border-white/10'
                  }`}
                  style={{
                    borderColor: isExpanded ? theme.accentColor : undefined,
                    boxShadow: isExpanded ? `0 0 30px ${theme.accentColor}40` : undefined,
                  }}
                >
                  <div className="p-8">
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className="w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `${theme.accentColor}20`,
                        }}
                      >
                        <Icon
                          size={28}
                          style={{ color: theme.accentColor }}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                      style={{
                        backgroundImage: isExpanded ? `linear-gradient(135deg, ${theme.accentColor}, #a855f7)` : undefined,
                      }}>
                      {theme.name}
                    </h3>

                    {/* Short description (always visible) */}
                    <p className="text-gray-400 text-sm mb-6 h-10 overflow-hidden transition-all duration-300">
                      {theme.shortDescription}
                    </p>

                    {/* Expanded content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {theme.fullDescription}
                      </p>

                      {/* Topics */}
                      <div className="space-y-3">
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
                          Key Topics
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {theme.topics.map((topic) => (
                            <div
                              key={topic}
                              className="px-3 py-2 rounded-lg text-xs font-medium text-gray-300 transition-all duration-300 hover:scale-105"
                              style={{
                                background: `${theme.accentColor}15`,
                                border: `1px solid ${theme.accentColor}30`,
                              }}
                            >
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* View More button */}
                      <button
                        className="w-full mt-6 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn btn-hover"
                        style={{
                          background: `linear-gradient(135deg, ${theme.accentColor}, #a855f7)`,
                        }}
                      >
                        View More
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Collapsed state CTA hint */}
                    {!isExpanded && (
                      <div className="flex items-center text-cyan-400 text-sm group-hover:text-white transition-colors duration-300">
                        <span className="font-medium">Hover to explore</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 glass rounded-2xl border border-white/10 p-8 md:p-12 text-center reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to choose your innovation path?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Register now and unlock access to all themes, expert-led workshops, networking opportunities, and exclusive resources.
          </p>
          <button
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold btn-hover btn-glow-primary"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
