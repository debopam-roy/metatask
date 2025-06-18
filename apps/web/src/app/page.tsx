'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Animation on page load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="flex flex-col ">
      {/* Home section with Header and Hero */}
      <div id="home" className='flex flex-col h-screen'>
        <Header />
        <Hero scrollToSection={scrollToSection} />
      </div>

      {/* Features Section */}
      <Features isVisible={isVisible} />

      {/* How It Works Section */}
      <HowItWorks isVisible={isVisible} />

      {/* Testimonials Section */}
      <Testimonials isVisible={isVisible} />

      {/* Pricing Section */}
      <Pricing isVisible={isVisible} />

      {/* Footer */}
      <Footer />

    </div>
  );
} 