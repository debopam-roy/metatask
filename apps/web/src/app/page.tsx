'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Animation on page load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className='flex flex-col h-screen'>
        <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-light-100 dark:bg-dark-800 transition-colors duration-300">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-primary-800 dark:bg-primary-700 flex items-center justify-center">
              <span className="text-lg font-bold text-light-100">M</span>
            </div>
            <span className="ml-3 text-xl font-bold text-primary-800 dark:text-light-100">MetaTask</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-medium text-primary-700 dark:text-light-300 hover:text-primary-800 dark:hover:text-light-100 transition-colors">Features</a>
            <a href="#how-it-works" className="font-medium text-primary-700 dark:text-light-300 hover:text-primary-800 dark:hover:text-light-100 transition-colors">Process</a>
            <a href="#testimonials" className="font-medium text-primary-700 dark:text-light-300 hover:text-primary-800 dark:hover:text-light-100 transition-colors">Testimonials</a>
            <a href="#pricing" className="font-medium text-primary-700 dark:text-light-300 hover:text-primary-800 dark:hover:text-light-100 transition-colors">Pricing</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden md:flex items-center space-x-4">
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
          </div>
        </header>

        {/* Hero Section with Split Design */}
        <div className="flex flex-col md:flex-row flex-grow ">
          {/* Left Side */}
          <div className={`w-full md:w-1/2 bg-light-100 dark:bg-dark-800 p-6 md:p-12 flex items-center justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 dark:text-light-100 leading-tight">
                Freelancing <span className="text-secondary-600">Reimagined</span> with AI
              </h1>
              <p className="mt-6 text-lg text-primary-600 dark:text-light-300">
                We connect talented professionals with innovative projects worldwide through a secure, transparent, and efficient platform powered by blockchain technology and artificial intelligence.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#how-it-works" 
                  className="px-8 py-3 rounded-full bg-primary-800 dark:bg-primary-700 text-light-100 font-medium text-center hover:bg-primary-700 dark:hover:bg-primary-600 transform hover:scale-105 transition-all duration-300"
                >
            Get Started
                </a>
                <a 
                  href="#features" 
                  className="px-8 py-3 rounded-full bg-light-300 dark:bg-dark-600 text-primary-800 dark:text-light-100 font-medium text-center hover:bg-light-400 dark:hover:bg-dark-500 transform hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className={`w-full md:w-1/2 bg-primary-800 dark:bg-dark-900 flex items-center justify-center transition-all duration-700 relative overflow-hidden ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src="/images/hero_image.png" 
                alt="MetaTask Platform" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="h-screen py-16 bg-light-200 dark:bg-dark-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-secondary-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold text-primary-800 dark:text-light-100 sm:text-4xl">
              A better way to freelance
            </p>
            <p className="mt-4 max-w-2xl text-xl text-primary-600 dark:text-light-300 lg:mx-auto">
              Powered by blockchain technology and AI, MetaTask ensures secure transactions, intelligent matching, and transparent operations.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: "Blockchain Security",
                  description: "Smart contracts ensure secure payments and protect both clients and freelancers with transparent transactions.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                },
                {
                  title: "AI-Powered Matching",
                  description: "Our advanced AI algorithms match freelancers with projects that perfectly align with their skills and experience.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Instant Payments",
                  description: "Get paid instantly upon project completion with our blockchain-based payment system, eliminating delays.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Decentralized Reviews",
                  description: "Transparent and tamper-proof review system ensures honest feedback and builds trust in the community.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={`relative p-6 rounded-lg border border-light-400 dark:border-dark-600 bg-light-100 dark:bg-dark-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-800 dark:bg-primary-700 text-light-100">
                    {feature.icon}
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-primary-800 dark:text-light-100">{feature.title}</h3>
                    <p className="mt-2 text-base text-primary-600 dark:text-light-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-16 bg-light-100 dark:bg-dark-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-secondary-600 font-semibold tracking-wide uppercase">How it Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold text-primary-800 dark:text-light-100 sm:text-4xl">
              Simple, transparent process
            </p>
            <p className="mt-4 max-w-2xl text-xl text-primary-600 dark:text-light-300 lg:mx-auto">
              From AI-powered matching to smart contract escrow, experience the future of freelancing with our secure and automated process.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 dark:bg-dark-600 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Create Profile",
                  description: "Sign up and create your professional profile showcasing your skills and experience.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )
                },
                {
                  step: 2,
                  title: "AI Matching",
                  description: "Our advanced AI algorithms analyze your skills and experience to automatically match you with the perfect projects.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )
                },
                {
                  step: 3,
                  title: "Complete Work",
                  description: "Deliver high-quality work through our secure collaboration platform.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  )
                },
                {
                  step: 4,
                  title: "Get Paid",
                  description: "Receive instant payment upon project approval through our blockchain system.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className={`bg-light-200 dark:bg-dark-700 rounded-lg p-6 shadow-lg relative z-10 transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-xl hover:-translate-y-2`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary-800 dark:bg-primary-700 text-light-100 mb-6 relative">
                    <span className="absolute -top-2 -right-2 bg-secondary-600 text-light-100 rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold">{step.step}</span>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 dark:text-light-100 text-center mb-4">{step.title}</h3>
                  <p className="text-primary-600 dark:text-light-300 text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 flex justify-center">
            <Link href="/signup" className="px-8 py-4 bg-secondary-600 hover:bg-secondary-700 text-light-100 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              Start Your Journey Today
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-16 bg-light-200 dark:bg-dark-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-secondary-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold text-primary-800 dark:text-light-100 sm:text-4xl">
              What our users are saying
            </p>
            <p className="mt-4 max-w-2xl text-xl text-primary-600 dark:text-light-300 lg:mx-auto">
              Don't just take our word for it — hear from some of our satisfied users.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "UI/UX Designer",
                image: "/images/testimonial1.png",
                quote: "MetaTask has completely transformed how I find and manage freelance projects. The AI matching is spot-on, connecting me with clients who truly value my design expertise.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Full Stack Developer",
                image: "/images/testimonial2.png",
                quote: "As a developer, I appreciate the blockchain payment system. It's fast, secure, and I never have to chase clients for payments anymore. The platform's transparency is unmatched.",
                rating: 5
              },
              {
                name: "Priya Patel",
                role: "Content Strategist",
                image: "/images/testimonial3.png",
                quote: "The review system on MetaTask has helped me build credibility quickly. Clients can see my track record, and I can see theirs. It creates a level of trust that's rare in freelancing.",
                rating: 4
              },
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-light-100 dark:bg-dark-700 rounded-xl p-8 shadow-lg relative transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-xl`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-primary-200 dark:text-dark-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                {/* Testimonial Content */}
                <div className="mb-6">
                  <p className="text-primary-600 dark:text-light-300 italic">"{testimonial.quote}"</p>
                </div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-secondary-600' : 'text-light-400 dark:text-dark-500'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* User Info */}
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-dark-600 overflow-hidden flex items-center justify-center">
                    {testimonial.image ? (
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        width={48} 
                        height={48} 
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-xl font-bold text-primary-800 dark:text-light-100">
                        {testimonial.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-primary-800 dark:text-light-100">{testimonial.name}</h4>
                    <p className="text-sm text-primary-600 dark:text-light-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonial CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-primary-600 dark:text-light-300 mb-6">
              Join thousands of satisfied freelancers and clients on our platform.
            </p>
            <Link href="/signup" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-secondary-600 hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500 transform transition-all duration-300 hover:scale-105">
              Join Our Community
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-16 bg-light-100 dark:bg-dark-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-secondary-600 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold text-primary-800 dark:text-light-100 sm:text-4xl">
              Transparent, blockchain-powered payments
            </p>
            <p className="mt-4 max-w-2xl text-xl text-primary-600 dark:text-light-300 lg:mx-auto">
              Our decentralized platform ensures secure transactions with minimal fees and instant payments.
            </p>
          </div>

          {/* Payment Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Smart Contracts",
                description: "Automated escrow ensures funds are only released when work is completed",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Instant Payments",
                description: "Receive payments immediately upon project completion and approval",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Multi-Currency",
                description: "Accept payments in ETH, USDC, and other major cryptocurrencies",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Low Fees",
                description: "Minimal platform fees compared to traditional freelancing platforms",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-lg bg-light-200 dark:bg-dark-700 shadow-md hover:shadow-lg transform transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:scale-105`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-primary-800 dark:bg-primary-700 text-light-100 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-primary-800 dark:text-light-100 mb-2">{feature.title}</h3>
                <p className="text-sm text-primary-600 dark:text-light-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Freelancer",
                price: "2.5%",
                period: "per transaction",
                description: "Perfect for individual freelancers starting their journey",
                features: [
                  "Smart contract escrow",
                  "AI-powered job matching",
                  "Basic profile analytics",
                  "Standard dispute resolution",
                  "Community support"
                ],
                buttonText: "Start Freelancing",
                popular: false
              },
              {
                name: "Professional",
                price: "2.0%",
                period: "per transaction",
                description: "Ideal for experienced freelancers and agencies",
                features: [
                  "All Freelancer features",
                  "Priority job matching",
                  "Advanced analytics dashboard",
                  "Expedited dispute resolution",
                  "Verified badge eligibility",
                  "Custom portfolio showcase"
                ],
                buttonText: "Go Professional",
                popular: true
              },
              {
                name: "Enterprise",
                price: "1.5%",
                period: "per transaction",
                description: "For large teams and organizations",
                features: [
                  "All Professional features",
                  "Dedicated account manager",
                  "Custom smart contracts",
                  "API access",
                  "White-label options",
                  "24/7 priority support"
                ],
                buttonText: "Contact Sales",
                popular: false
              }
            ].map((tier, index) => (
              <div 
                key={index}
                className={`relative rounded-xl ${tier.popular ? 'border-2 border-secondary-600' : 'border border-light-400 dark:border-dark-600'} bg-light-100 dark:bg-dark-700 p-8 shadow-lg transform transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-xl`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary-600 text-light-100 px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-light-100 mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-secondary-600">{tier.price}</span>
                    <span className="text-primary-600 dark:text-light-400 ml-2">{tier.period}</span>
                  </div>
                  <p className="text-primary-600 dark:text-light-300 mb-6">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-600 dark:text-light-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/signup" 
                  className={`w-full inline-flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-medium ${tier.popular ? 'text-light-100 bg-secondary-600 hover:bg-secondary-700' : 'text-primary-800 dark:text-light-100 bg-light-300 dark:bg-dark-600 hover:bg-light-400 dark:hover:bg-dark-500'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500 transform transition-all duration-300 hover:scale-105`}
                >
                  {tier.buttonText}
                </Link>
              </div>
            ))}
          </div>

          {/* Payment Process */}
          <div className="bg-light-200 dark:bg-dark-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary-800 dark:text-light-100 text-center mb-8">
              How Payments Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Escrow Creation",
                  description: "Client funds are automatically locked in a smart contract when project starts"
                },
                {
                  step: 2,
                  title: "Work Completion",
                  description: "Freelancer delivers work and requests payment through the platform"
                },
                {
                  step: 3,
                  title: "Automatic Release",
                  description: "Funds are instantly released to freelancer upon client approval or timeout"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-secondary-600 text-light-100 font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-medium text-primary-800 dark:text-light-100 mb-2">{step.title}</h4>
                  <p className="text-primary-600 dark:text-light-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 text-light-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-600/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.1),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(255,110,120,0.1),_transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content - Compact */}
          <div className="py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-4">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-700 flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-light-100">M</span>
                    </div>
                    <div className="absolute -top-1 -right-1 h-3 w-3 bg-secondary-400 rounded-full animate-pulse"></div>
                  </div>
                  <span className="ml-3 text-xl font-bold bg-gradient-to-r from-light-100 to-light-300 bg-clip-text text-transparent">MetaTask</span>
                </div>
                <p className="text-light-300 mb-4 leading-relaxed max-w-sm">
                  Revolutionizing freelancing with <span className="text-secondary-400 font-semibold">blockchain security</span> and <span className="text-secondary-400 font-semibold">AI-powered matching</span>.
                </p>
                
                {/* Social Media */}
                <div className="mb-6">
                  <p className="text-xs font-medium text-light-400 mb-3 uppercase tracking-wider">Connect With Us</p>
                  <div className="flex space-x-3">
                    {[
                      { icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", label: "Twitter" },
                      { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", label: "LinkedIn" },
                    ].map((social, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="group relative p-2 rounded-lg bg-primary-700/50 hover:bg-secondary-600/20 border border-primary-600/30 hover:border-secondary-500/50 transition-all duration-300 transform hover:scale-110"
                        aria-label={social.label}
                      >
                        <svg className="h-4 w-4 text-light-300 group-hover:text-secondary-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon}/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { number: "10K+", label: "Active Users" },
                    { number: "98%", label: "Success Rate" },
                    { number: "24/7", label: "Support" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-2 rounded-lg bg-primary-700/30 border border-primary-600/20">
                      <div className="text-sm font-bold text-secondary-400">{stat.number}</div>
                      <div className="text-xs text-light-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Platform Links */}
                  <div>
                    <h3 className="text-sm font-bold mb-4 text-light-100 relative uppercase tracking-wider">
                      Platform
                      <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-gradient-to-r from-secondary-500 to-secondary-700"></div>
                    </h3>
                    <ul className="space-y-2">
                      {[
                        { text: "Features", href: "#features" },
                        { text: "How it Works", href: "#how-it-works" },
                        { text: "Pricing", href: "#pricing" },
                        { text: "Testimonials", href: "#testimonials" }
                      ].map((link, index) => (
                        <li key={index}>
                          <a href={link.href} className="text-sm text-light-300 hover:text-secondary-400 transition-colors duration-300">
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Support Links */}
                  <div>
                    <h3 className="text-sm font-bold mb-4 text-light-100 relative uppercase tracking-wider">
                      Support
                      <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-gradient-to-r from-secondary-500 to-secondary-700"></div>
                    </h3>
                    <ul className="space-y-2">
                      {[
                        { text: "Help Center", href: "#" },
                        { text: "Community Forum", href: "#" },
                        { text: "API Documentation", href: "#" },
                        { text: "Bug Reports", href: "#" }
                      ].map((link, index) => (
                        <li key={index}>
                          <a href={link.href} className="text-sm text-light-300 hover:text-secondary-400 transition-colors duration-300">
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Company Links */}
                  <div>
                    <h3 className="text-sm font-bold mb-4 text-light-100 relative uppercase tracking-wider">
                      Company
                      <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-gradient-to-r from-secondary-500 to-secondary-700"></div>
                    </h3>
                    <ul className="space-y-2">
                      {[
                        { text: "About Us", href: "#" },
                        { text: "Careers", href: "#" },
                        { text: "Blog", href: "#" },
                        { text: "Partnerships", href: "#" }
                      ].map((link, index) => (
                        <li key={index}>
                          <a href={link.href} className="text-sm text-light-300 hover:text-secondary-400 transition-colors duration-300">
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Newsletter Section - Compact */}
              <div className="lg:col-span-3">
                <h3 className="text-sm font-bold mb-4 text-light-100 uppercase tracking-wider">
                  Stay Updated
                </h3>
                <p className="text-light-300 text-sm mb-4 leading-relaxed">
                  Get insights on blockchain innovations and AI developments.
                </p>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-light-100/10 border border-primary-600/30 text-light-100 placeholder-light-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-light-100 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm">
                    Subscribe Now
                  </button>
                  <div className="flex items-center justify-between text-xs text-light-400">
                    <span>✓ Weekly updates</span>
                    <span>✓ No spam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Enhanced */}
          <div className="py-8 border-t border-primary-700/30">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8">
                <p className="text-light-300 text-sm">
                  © 2024 MetaTask. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-6 text-sm">
                  {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((link) => (
                    <a key={link} href="#" className="text-light-400 hover:text-secondary-400 transition-colors duration-300 relative group">
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Security Badges */}
              <div className="flex items-center space-x-3">
                {[
                  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "SSL Secured" },
                  { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", text: "GDPR Compliant" },
                  { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", text: "SOC 2" }
                ].map((badge, index) => (
                  <div key={index} className="group flex items-center space-x-2 bg-primary-700/40 hover:bg-primary-600/40 border border-primary-600/30 hover:border-secondary-500/50 px-4 py-2 rounded-lg transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary-400 group-hover:text-secondary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
                    </svg>
                    <span className="text-xs text-light-300 group-hover:text-light-200 font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-light-100 dark:bg-dark-800 shadow-lg md:hidden transition-colors duration-300">
        <div className="flex justify-around py-3">
          <Link href="/login" className="flex flex-col items-center justify-center text-primary-800 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span className="text-xs mt-1">Sign In</span>
          </Link>
          <a href="#features" className="flex flex-col items-center justify-center text-primary-700 dark:text-light-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">Features</span>
          </a>
          <a href="#how-it-works" className="flex flex-col items-center justify-center text-primary-700 dark:text-light-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span className="text-xs mt-1">Process</span>
          </a>
          <a href="#pricing" className="flex flex-col items-center justify-center text-primary-700 dark:text-light-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">Pricing</span>
          </a>
          <Link href="/signup" className="flex flex-col items-center justify-center text-secondary-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span className="text-xs mt-1">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 