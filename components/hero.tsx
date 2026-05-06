'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [floatingShapes, setFloatingShapes] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    // Generate floating shapes for subtle animations
    setFloatingShapes(
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }))
    );
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden bg-gradient-to-b from-background via-background to-background"
    >
      {/* Animated gradient glowing background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary glow orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-500 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-32 right-0 w-96 h-96 bg-gradient-to-tl from-purple-600 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-gradient-to-b from-pink-500 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-bounce"></div>

        {/* Floating shapes */}
        {floatingShapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute rounded-full mix-blend-screen filter blur-2xl opacity-15 animate-pulse"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${150 + shape.id * 30}px`,
              height: `${150 + shape.id * 30}px`,
              background: `linear-gradient(135deg, ${
                shape.id % 2 === 0
                  ? 'rgba(0, 212, 255, 0.4), rgba(167, 139, 250, 0.2)'
                  : 'rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.2)'
              })`,
              animation: `float ${8 + shape.id * 2}s ease-in-out infinite`,
            }}
          ></div>
        ))}

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-30px) translateX(20px); }
          50% { transform: translateY(-60px) translateX(-20px); }
          75% { transform: translateY(-30px) translateX(30px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.25); }
          50% { box-shadow: 0 0 30px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 212, 255, 0.4); }
        }

        .btn-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
        {/* Event badge */}
        <div className="mb-6 inline-block reveal">
          <span className="glass px-4 py-2 rounded-full text-sm font-semibold text-cyan-400 border border-cyan-500/30">
            ✨ Tech Innovation Summit 2026
          </span>
        </div>

        {/* Main heading */}
        <div className="mb-8 reveal" style={{ transitionDelay: '200ms' }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight text-balance">
            InnovateX <span className="gradient-text">2026</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">
            Build the Future with Innovation
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of innovators, technologists, and visionaries as we push the boundaries of what&apos;s possible. Experience cutting-edge tech, connect with industry leaders, and shape tomorrow&apos;s innovations.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 reveal" style={{ transitionDelay: '400ms' }}>
          <button 
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 md:px-10 py-4 md:py-5 rounded-lg bg-primary text-primary-foreground font-bold text-lg md:text-xl btn-hover btn-glow-primary"
          >
            <span className="relative flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Register Now
            </span>
          </button>
          <button 
            onClick={() => document.getElementById('themes')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 md:px-10 py-4 md:py-5 rounded-lg border-2 border-purple-500 text-purple-300 font-bold text-lg md:text-xl hover:bg-purple-500/15 hover:border-purple-400 transition-all duration-300 btn-hover"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Explore Themes
            </span>
          </button>
        </div>

        {/* Event stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center reveal" style={{ transitionDelay: '600ms' }}>
          <div className="glass rounded-xl p-4 card-hover">
            <p className="text-cyan-400 font-bold text-2xl md:text-3xl">Jun 15-17</p>
            <p className="text-gray-400 text-xs md:text-sm mt-2">Event Dates</p>
          </div>
          <div className="glass rounded-xl p-4 card-hover">
            <p className="text-purple-400 font-bold text-2xl md:text-3xl">5K+</p>
            <p className="text-gray-400 text-xs md:text-sm mt-2">Global Attendees</p>
          </div>
          <div className="glass rounded-xl p-4 card-hover">
            <p className="text-pink-400 font-bold text-2xl md:text-3xl">100+</p>
            <p className="text-gray-400 text-xs md:text-sm mt-2">Expert Speakers</p>
          </div>
          <div className="glass rounded-xl p-4 card-hover">
            <p className="text-cyan-400 font-bold text-2xl md:text-3xl">Live</p>
            <p className="text-gray-400 text-xs md:text-sm mt-2">Online & In-person</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
          <span className="text-sm">Discover more</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
