'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingRegister() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToRegister}
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] active:scale-95 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      Register Now
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}
