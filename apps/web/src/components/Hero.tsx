import Image from 'next/image';
import { useState, useEffect } from 'react';

type HeroProps = {
  scrollToSection: (sectionId: string) => void;
};

export default function Hero({ scrollToSection }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Animation on page load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      {/* Mobile & Tablet: Image on top, Text below */}
      <div className="flex flex-col lg:hidden w-full h-full">
        {/* Image Section - Mobile/Tablet */}
        <div className={`w-full flex-1 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
          <Image 
            src="/images/hero_image.png" 
            alt="MetaTask Platform" 
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          
        </div>

        {/* Text Section - Mobile/Tablet */}
        <div className={`w-full flex flex-1 flox-col bg-light-100 dark:bg-dark-800 p-6 sm:p-10 flex items-center justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-lg mx-auto text-left px-4">
            <h1 className="text-5xl xl:text-6xl font-bold text-primary-800 dark:text-light-100 leading-tight">
              Freelancing <span className="text-secondary-600">Reimagined</span> with AI
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-primary-600 dark:text-light-300">
              We connect talented professionals with innovative projects worldwide through a secure, transparent, and efficient platform powered by blockchain technology and artificial intelligence.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="px-6 sm:px-8 py-3 rounded-full bg-primary-800 dark:bg-primary-700 text-light-100 font-medium text-center hover:bg-primary-700 dark:hover:bg-primary-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Started
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="px-6 sm:px-8 py-3 rounded-full bg-light-300 dark:bg-dark-600 text-primary-800 dark:text-light-100 font-medium text-center hover:bg-light-400 dark:hover:bg-dark-500 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Side by side layout */}
      <div className="hidden lg:flex flex-row w-full h-full">
        {/* Left Side - Text */}
        <div className={`w-1/2 bg-light-100 dark:bg-dark-800 p-12 xl:p-16 flex items-center justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="max-w-lg">
            <h1 className="text-5xl xl:text-6xl font-bold text-primary-800 dark:text-light-100 leading-tight">
              Freelancing <span className="text-secondary-600">Reimagined</span> with AI
            </h1>
            <p className="mt-6 text-lg xl:text-xl text-primary-600 dark:text-light-300">
              We connect talented professionals with innovative projects worldwide through a secure, transparent, and efficient platform powered by blockchain technology and artificial intelligence.
            </p>
            <div className="mt-8 xl:mt-10 flex flex-row space-x-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="px-8 py-3 rounded-full bg-primary-800 dark:bg-primary-700 text-light-100 font-medium text-center hover:bg-primary-700 dark:hover:bg-primary-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Started
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="px-8 py-3 rounded-full bg-light-300 dark:bg-dark-600 text-primary-800 dark:text-light-100 font-medium text-center hover:bg-light-400 dark:hover:bg-dark-500 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className={`w-1/2 bg-primary-800 dark:bg-dark-900 flex items-center justify-center transition-all duration-700 relative overflow-hidden ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/images/hero_image.png" 
              alt="MetaTask Platform" 
              fill
              sizes="50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 