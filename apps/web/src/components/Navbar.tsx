'use client';

import Link from 'next/link';
import Icon from './Icon';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="w-full py-3 sm:py-4 px-4 sm:px-6 md:px-12 flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-light-100/95 dark:bg-dark-800/95 backdrop-blur-sm border-b border-light-300 dark:border-dark-600 transition-all duration-300">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="MetaTask Logo" 
            className="h-8 w-8 mr-2"
          />
          <span className="text-xl font-bold text-primary-800 dark:text-light-100 transition-colors">MetaTask</span>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        <Link href="#features" className="font-medium text-primary-700 dark:text-dark-100 hover:text-primary-800 dark:hover:text-light-100 transition-colors duration-200">Features</Link>
        <Link href="#how-it-works" className="font-medium text-primary-700 dark:text-dark-100 hover:text-primary-800 dark:hover:text-light-100 transition-colors duration-200">Process</Link>
        <Link href="#testimonials" className="font-medium text-primary-700 dark:text-dark-100 hover:text-primary-800 dark:hover:text-light-100 transition-colors duration-200">Testimonials</Link>
        <Link href="#pricing" className="font-medium text-primary-700 dark:text-dark-100 hover:text-primary-800 dark:hover:text-light-100 transition-colors duration-200">Pricing</Link>
      </nav>
      
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        
        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/login" className="flex items-center justify-center px-4 py-2 border border-light-300 dark:border-dark-500 rounded-full shadow-sm text-sm font-medium text-primary-800 dark:text-light-100 bg-light-200 dark:bg-dark-600 hover:bg-light-300 dark:hover:bg-dark-500 transition-all duration-200">
            <Icon name="login" className="h-5 w-5 mr-2" />
            Sign In
          </Link>
          <Link href="/register" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-light-100 bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-700 dark:hover:bg-secondary-600 transition-all duration-200">
            <Icon name="user-plus" className="h-5 w-5 mr-2" />
            Sign Up
          </Link>
        </div>
        
        {/* Hamburger Button */}
        <button 
          id="hamburger-btn"
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md focus:outline-none group hover:bg-light-200 dark:hover:bg-dark-600 transition-colors duration-200"
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
        className={`fixed inset-0 z-40 bg-light-100 dark:bg-dark-800 lg:hidden transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full px-6 py-24">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-6 items-center text-center mb-10">
            <Link 
              href="#features" 
              className="text-xl font-medium text-primary-700 dark:text-dark-100 hover:text-primary-800 dark:hover:text-light-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-xl font-medium text-primary-700 dark:text-dark-100 hover:text-primary-800 dark:hover:text-light-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Link>
            <Link 
              href="#testimonials" 
              className="text-xl font-medium text-primary-700 dark:text-dark-100 hover:text-primary-800 dark:hover:text-light-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#pricing" 
              className="text-xl font-medium text-primary-700 dark:text-dark-100 hover:text-primary-800 dark:hover:text-light-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
          </nav>
          
          {/* Mobile Auth Buttons */}
          <div className="flex flex-col space-y-4 items-center">
            <Link 
              href="/login" 
              className="w-full sm:w-64 flex items-center justify-center px-4 py-3 border border-light-300 dark:border-dark-500 rounded-full shadow-sm text-base font-medium text-primary-800 dark:text-light-100 bg-light-200 dark:bg-dark-600 hover:bg-light-300 dark:hover:bg-dark-500 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon name="login" className="h-5 w-5 mr-2" />
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="w-full sm:w-64 flex items-center justify-center px-4 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-light-100 bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-700 dark:hover:bg-secondary-600 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon name="user-plus" className="h-5 w-5 mr-2" />
              Sign Up
            </Link>
          </div>
          
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 p-2 text-primary-800 dark:text-light-100 hover:bg-light-200 dark:hover:bg-dark-600 rounded-full transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <Icon name="x-mark" className="h-8 w-8" />
          </button>
        </div>
      </div>
    </header>
  );
} 