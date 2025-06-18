import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('#hamburger-btn')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`w-full py-3 sm:py-4 px-4 sm:px-6 md:px-12 flex items-center justify-between bg-light-100 dark:bg-dark-800 transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'shadow-md backdrop-blur-sm bg-light-100/95 dark:bg-dark-800/95' : ''
      }`}
    >
      <div className="flex items-center">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold text-primary-800 dark:text-light-100">MetaTask</span>
        </a>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        <a href="#features" className="font-medium text-primary-700 dark:text-light-300 hover:text-primary-800 dark:hover:text-light-100 transition-colors">Features</a>
        <a href="#how-it-works" className="font-medium text-primary-700 dark:text-light-300 hover:text-primary-800 dark:hover:text-light-100 transition-colors">Process</a>
        <a href="#testimonials" className="font-medium text-primary-700 dark:text-light-300 hover:text-primary-800 dark:hover:text-light-100 transition-colors">Testimonials</a>
        <a href="#pricing" className="font-medium text-primary-700 dark:text-light-300 hover:text-primary-800 dark:hover:text-light-100 transition-colors">Pricing</a>
      </nav>
      
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        
        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/login" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-primary-800 dark:text-light-100 bg-light-200 dark:bg-dark-600 hover:bg-light-300 dark:hover:bg-dark-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Sign In
          </Link>
          <Link href="/signup" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-light-100 bg-secondary-600 hover:bg-secondary-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Sign Up
          </Link>
        </div>
        
        {/* Hamburger Button */}
        <button 
          id="hamburger-btn"
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md focus:outline-none group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-primary-800 dark:bg-light-100 transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'}`}></div>
          <div className={`w-6 h-0.5 bg-primary-800 dark:bg-light-100 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></div>
          <div className={`w-6 h-0.5 bg-primary-800 dark:bg-light-100 transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-light-100 dark:bg-dark-800 transition-all duration-300 lg:hidden ${
          isMenuOpen 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full px-6 py-24">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-6 items-center text-center mb-10">
            <a 
              href="#features" 
              className="text-xl font-medium text-primary-700 dark:text-light-300 hover:text-primary-800 dark:hover:text-light-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-xl font-medium text-primary-700 dark:text-light-300 hover:text-primary-800 dark:hover:text-light-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#testimonials" 
              className="text-xl font-medium text-primary-700 dark:text-light-300 hover:text-primary-800 dark:hover:text-light-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-xl font-medium text-primary-700 dark:text-light-300 hover:text-primary-800 dark:hover:text-light-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
          </nav>
          
          {/* Mobile Auth Buttons */}
          <div className="flex flex-col space-y-4 items-center">
            <Link 
              href="/login" 
              className="w-full sm:w-64 flex items-center justify-center px-4 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-primary-800 dark:text-light-100 bg-light-200 dark:bg-dark-600 hover:bg-light-300 dark:hover:bg-dark-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="w-full sm:w-64 flex items-center justify-center px-4 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-light-100 bg-secondary-600 hover:bg-secondary-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Sign Up
            </Link>
          </div>
          
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 p-2 text-primary-800 dark:text-light-100"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 