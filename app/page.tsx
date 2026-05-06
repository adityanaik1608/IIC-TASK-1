'use client';

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Events from '@/components/events';
import EventDetails from '@/components/event-details';
import Themes from '@/components/themes';
import Register from '@/components/register';
import FAQ from '@/components/faq';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import FloatingRegister from '@/components/floating-register';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function Home() {
  useScrollReveal();

  return (
    <main className="w-full bg-background overflow-hidden">
      <Navbar />
      <Hero />
      <Events />
      <EventDetails />
      <Themes />
      <Register />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingRegister />
    </main>
  );
}
