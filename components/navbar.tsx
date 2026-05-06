'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Events', href: '#events', id: 'events' },
    { name: 'Themes', href: '#themes', id: 'themes' },
    { name: 'Register', href: '#register', id: 'register' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass transition-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
              InnovateX
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === link.id ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  activeSection === link.id ? 'w-full' : ''
                }`}></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold btn-hover btn-glow-primary">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay & Menu */}
        <div 
          className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        <div 
          className={`fixed top-0 right-0 h-full w-[280px] bg-card border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <span className="font-bold text-lg gradient-text">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-primary transition-colors p-2 rounded-md bg-white/5"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 ${
                  activeSection === link.id 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-foreground/80 hover:bg-white/5 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="p-4 border-t border-white/10">
            <button className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold btn-hover btn-glow-primary">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
