'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div id="home" className='flex flex-col h-screen'>
        <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-light-100 dark:bg-dark-800 transition-colors duration-300">
          <div className="flex items-center">
          <a href="#"><span className="ml-3 text-xl font-bold text-primary-800 dark:text-light-100">MetaTask</span></a>
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
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="px-8 py-3 rounded-full bg-primary-800 dark:bg-primary-700 text-light-100 font-medium text-center hover:bg-primary-700 dark:hover:bg-primary-600 transform hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="px-8 py-3 rounded-full bg-light-300 dark:bg-dark-600 text-primary-800 dark:text-light-100 font-medium text-center hover:bg-light-400 dark:hover:bg-dark-500 transform hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </button>
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
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="min-h-screen py-16 bg-light-200 dark:bg-dark-900 transition-colors duration-300">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {[
                {
                  title: "Blockchain Security",
                  description: "Smart contracts ensure secure payments and protect both clients and freelancers with transparent transactions.",
                  highlight: "99.9% Secure",
                  stats: "256-bit encryption",
                  color: "from-blue-500 to-indigo-600",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "AI-Powered Matching",
                  description: "Our advanced AI algorithms match freelancers with projects that perfectly align with their skills and experience.",
                  highlight: "95% Match Rate",
                  stats: "Neural networks",
                  color: "from-purple-500 to-pink-600",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Instant Payments",
                  description: "Get paid instantly upon project completion with our blockchain-based payment system, eliminating delays.",
                  highlight: "< 30 seconds",
                  stats: "Average payout time",
                  color: "from-green-500 to-emerald-600",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Decentralized Reviews",
                  description: "Transparent and tamper-proof review system ensures honest feedback and builds trust in the community.",
                  highlight: "100% Transparent",
                  stats: "Immutable records",
                  color: "from-orange-500 to-red-600",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-light-50 to-light-100 dark:from-dark-800 dark:to-dark-700 border border-light-300 dark:border-dark-600 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  </div>
                  
                  <div className="relative p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </div>
                      
                      {/* Stats Badge */}
                      <div className="text-right">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.color} text-white shadow-md`}>
                          {feature.highlight}
                        </div>
                        <p className="text-xs text-primary-500 dark:text-light-400 mt-1">{feature.stats}</p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-primary-800 dark:text-light-100 group-hover:text-primary-900 dark:group-hover:text-white transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-primary-600 dark:text-light-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1">
                      <div className={`w-full h-full bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile App Section */}
            <div className="mt-16">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-light-50 to-light-100 dark:from-dark-800 dark:to-dark-700 border border-light-300 dark:border-dark-600 shadow-xl p-8 md:p-12 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/5 via-transparent to-primary-500/5"></div>
                <div className="absolute top-0 right-0 w-64 h-64 transform translate-x-32 -translate-y-32">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary-400/10 to-primary-400/10"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-800 dark:text-light-100 mb-4">
                    Take MetaTask <span className="text-secondary-600">Everywhere</span>
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-light-300 mb-8 max-w-2xl mx-auto">
                    You can also download our mobile application for seamless freelancing on the go. 
                    It is available on both iOS and Android platforms.
                  </p>
                  
                  {/* App Store Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="group flex items-center px-6 py-3 bg-light-200 hover:bg-light-300 dark:bg-gray-900 dark:hover:bg-black text-primary-800 dark:text-light-100 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[180px]">

                      <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs opacity-75">Download on the</div>
                        <div className="text-sm font-semibold">App Store</div>
                      </div>
                      <div className="ml-2 text-xs bg-secondary-600 hover:bg-secondary-700 text-white px-2 py-1 rounded-full opacity-75 group-hover:opacity-100 transition-all duration-300">
                        Soon
                      </div>
                    </button>
                    
                    <button className="group flex items-center px-6 py-3 bg-light-200 hover:bg-light-300 dark:bg-gray-900 dark:hover:bg-black text-primary-800 dark:text-light-100 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[180px]">
                      <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs opacity-75">Get it on</div>
                        <div className="text-sm font-semibold">Google Play</div>
                      </div>
                      <div className="ml-2 text-xs bg-secondary-600 hover:bg-secondary-700 text-white px-2 py-1 rounded-full opacity-75 group-hover:opacity-100 transition-all duration-300">
                        Soon
                      </div>
                    </button>
                  </div>
                  
                  
                </div>
              </div>
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

          {/* Testimonial Carousel */}
          <div className="mt-12 relative testimonial-carousel">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-secondary-600 !opacity-70',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-secondary-600 !opacity-100',
                el: '.testimonial-pagination'
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="pb-0"
            >
              {[{
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "/images/testimonial1.png",
    quote: "MetaTask has revolutionized my approach to freelance projects. Its precise AI matching has consistently connected me with clients who value high-quality design.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Full Stack Developer",
    image: "/images/testimonial2.png",
    quote: "The blockchain-based payment system at MetaTask is exceptional. Payments are secure, prompt, and transparent, removing typical freelancing payment hassles entirely.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Content Strategist",
    image: "/images/testimonial3.png",
    quote: "MetaTask's robust review mechanism has greatly enhanced my professional credibility, fostering mutual trust with clients in a uniquely transparent freelance environment.",
    rating: 4
  },
  {
    name: "David Rodriguez",
    role: "Blockchain Developer",
    image: "/images/testimonial4.jpg", // Temporary reuse
    quote: "MetaTask’s smart contract infrastructure is outstanding. It seamlessly integrates with wallets and maintains rigorous security standards, perfectly aligning with blockchain development needs.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Marketing Consultant",
    image: "/images/testimonial5.jpg", // Temporary reuse
    quote: "MetaTask transformed my freelancing experience by matching me with ideal marketing clients through intuitive AI recommendations, significantly expanding my business opportunities.",
    rating: 5
  },
  {
    name: "Alex Tanaka",
    role: "Data Scientist",
    image: "/images/testimonial6.jpg", // Temporary reuse
    quote: "The freelancer analytics dashboard is a game changer—comprehensive, insightful, and essential for tracking performance metrics and optimizing client satisfaction effectively.",
    rating: 4
  }].map((testimonial, index) => (
                <SwiperSlide key={index} className="pb-2">
                  <div 
                    className={`bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg relative transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-xl h-full mb-8`}
                  >
                    {/* Quote Icon - Made smaller and positioned to avoid text overlap */}
                    <div className="absolute top-6 right-6 text-primary-200/30 dark:text-dark-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    {/* Card with fixed height and consistent layout */}
                    <div className="flex flex-col h-[320px]">
                      {/* Testimonial Content - With fixed height and overflow handling */}
                      <div className="flex-grow pr-12 overflow-hidden">
                        <p className="text-primary-600 dark:text-light-300 leading-relaxed line-clamp-[8]">"{testimonial.quote}"</p>
                      </div>
                      
                      {/* Bottom section with user info and rating - Always at bottom */}
                      <div className="mt-auto pt-4">
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
                        
                        {/* User Info - Always at bottom with border */}
                        <div className="flex items-center pt-4 border-t border-light-300 dark:border-dark-600">
                          <div className="h-12 w-12 rounded-full bg-light-200 dark:bg-dark-600 overflow-hidden flex items-center justify-center shadow-sm">
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
                            <h4 className="text-lg font-semibold text-primary-800 dark:text-light-100">{testimonial.name}</h4>
                            <p className="text-sm text-primary-600 dark:text-light-400">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !text-secondary-600 !opacity-70 hover:!opacity-100 !left-0 md:!left-[-20px] !after:text-lg"></div>
            <div className="swiper-button-next !text-secondary-600 !opacity-70 hover:!opacity-100 !right-0 md:!right-[-20px] !after:text-lg"></div>
            
            {/* Custom pagination container outside of cards */}
            <div className="testimonial-pagination !flex !justify-center !items-center !gap-2 !mt-4 !mb-2"></div>
          </div>
          
          {/* Custom styles for Swiper */}
          <style jsx global>{`
            .testimonial-pagination {
              position: relative;
              bottom: 0 !important;
              width: 100%;
              display: flex;
              justify-content: center;
              padding-top: 16px;
            }
            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              margin: 0 4px;
              background-color: #cbd5e1;
              opacity: 0.7;
              transition: all 0.3s ease;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
              width: 12px;
              height: 12px;
            }
            .swiper-button-prev, .swiper-button-next {
              width: 40px !important;
              height: 40px !important;
              background-color: rgba(255, 255, 255, 0.9);
              border-radius: 50%;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              z-index: 10;
            }
            .dark .swiper-button-prev, .dark .swiper-button-next {
              background-color: rgba(30, 41, 59, 0.9);
            }
            .swiper-button-prev:after, .swiper-button-next:after {
              font-size: 18px !important;
              font-weight: bold;
            }
            .swiper-wrapper {
              padding-bottom: 20px;
            }
          `}</style>
          
          {/* Testimonial CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-primary-600 dark:text-light-300 mb-6">
              Join thousands of satisfied freelancers and clients on our platform.
            </p>
            <Link href="/signup" className="px-8 py-4 bg-secondary-600 hover:bg-secondary-700 text-light-100 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              Join Our Community
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
                description: "Accept payments in major cryptocurrencies and fiat currencies",
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
                color: "from-blue-500 to-indigo-600"
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
                color: "from-secondary-500 to-pink-600"
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
                color: "from-primary-500 to-secondary-500"
              }
            ].map((tier, index) => (
                            <div 
                key={index}
                className={`relative rounded-xl border border-light-400 dark:border-dark-600 bg-white dark:bg-dark-700 shadow-lg transform transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-xl overflow-hidden flex flex-col`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Decorative elements for all cards */}
                <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 opacity-10">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${tier.color}`}></div>
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 transform -translate-x-12 translate-y-12 opacity-10">
                  <div className={`w-full h-full rounded-full bg-gradient-to-tr ${tier.color}`}></div>
                </div>
                
                {/* Card content */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-center relative z-1">
                    <h3 className="text-xl font-bold text-primary-800 dark:text-light-100 mb-2">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-secondary-600">{tier.price}</span>
                      <span className="text-primary-600 dark:text-light-400 ml-2">{tier.period}</span>
                    </div>
                    <p className="text-primary-600 dark:text-light-300 mb-6">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-auto">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-600 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-primary-600 dark:text-light-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Button section - fixed at bottom */}
                <div className="p-8 pt-0 mt-4">
                  <Link 
                    href="/signup" 
                    className={`w-full inline-flex justify-center py-4 px-6 border border-transparent rounded-full shadow-md text-base font-medium ${
                        index === 0
                          ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                          : index === 1
                            ? 'text-white bg-gradient-to-r from-secondary-600 to-pink-600 hover:from-secondary-700 hover:to-pink-700'
                            : 'text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700'
                        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500 transform transition-all duration-300 hover:scale-105`}
                  >
                    {tier.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 text-light-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-600/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.1),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(255,110,120,0.1),_transparent_50%)]"></div>
        
        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-10 group bg-secondary-600 hover:bg-secondary-700 text-light-100 p-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-primary-900"
          aria-label="Back to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 transform group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
        
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
                  <div className="flex items-center justify-evenly text-xs text-light-400 gap-x-2">
                    <span>✓ Weekly updates</span>
                    <span>✓ No spam</span>
                    <span>✓ Easy opt-out</span>
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