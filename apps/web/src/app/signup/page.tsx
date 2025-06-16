'use client';

import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';

export default function Signup() {
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left panel - dark navy */}
      <div className="hidden md:flex md:w-1/2 bg-primary-800 dark:bg-dark-900 text-light-100 p-12 flex-col justify-between relative transition-colors duration-300">
        <div>
          <div className="flex items-center mb-12">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
              <span className="text-xl font-bold text-primary-800 dark:text-dark-900">M</span>
            </div>
            <span className="ml-3 text-2xl font-bold">MetaTask</span>
          </div>
          
          <p className="text-light-300 mt-12 mb-8 max-w-sm">
            Join thousands of professionals on the leading blockchain-powered freelancing platform. Create your account and start your journey today.
          </p>
          
          <button className="mt-4 bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-8 rounded-full transition duration-150">
            Learn More
          </button>
        </div>
        
        {/* Circular navigation button */}
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
          <div className="h-16 w-16 rounded-full bg-secondary-600 flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Right panel - white signup form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 relative bg-light-100 dark:bg-dark-800 transition-colors duration-300">
        <Link href="/" className="absolute top-4 left-4 text-primary-800 dark:text-light-100 hover:text-primary-600 dark:hover:text-light-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        
        <button className="absolute top-4 right-4 text-primary-800 dark:text-light-300 hover:text-primary-600 dark:hover:text-light-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-primary-800 dark:text-light-100 mb-2">Create Account</h1>
          <p className="text-primary-600 dark:text-light-300 mb-10">Join our community of professionals</p>
          
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-2 w-2 rounded-full bg-light-400 dark:bg-dark-500"></div>
            <div className="h-2 w-2 rounded-full bg-primary-800 dark:bg-light-100"></div>
            <div className="h-2 w-2 rounded-full bg-light-400 dark:bg-dark-500"></div>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="off"
                  required
                  suppressHydrationWarning
                  className="appearance-none block w-full px-4 py-4 border border-light-400 dark:border-dark-600 rounded-full shadow-sm placeholder-light-600 dark:placeholder-dark-400 bg-light-100 dark:bg-dark-700 text-primary-800 dark:text-light-100 focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:border-transparent transition-colors"
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="off"
                  required
                  suppressHydrationWarning
                  className="appearance-none block w-full px-4 py-4 border border-light-400 dark:border-dark-600 rounded-full shadow-sm placeholder-light-600 dark:placeholder-dark-400 bg-light-100 dark:bg-dark-700 text-primary-800 dark:text-light-100 focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:border-transparent transition-colors"
                  placeholder="Last Name"
                />
              </div>
            </div>
            
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                required
                suppressHydrationWarning
                className="appearance-none block w-full px-4 py-4 border border-light-400 dark:border-dark-600 rounded-full shadow-sm placeholder-light-600 dark:placeholder-dark-400 bg-light-100 dark:bg-dark-700 text-primary-800 dark:text-light-100 focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:border-transparent transition-colors"
                placeholder="Email"
              />
            </div>
            
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                required
                suppressHydrationWarning
                className="appearance-none block w-full px-4 py-4 border border-light-400 dark:border-dark-600 rounded-full shadow-sm placeholder-light-600 dark:placeholder-dark-400 bg-light-100 dark:bg-dark-700 text-primary-800 dark:text-light-100 focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:border-transparent transition-colors"
                placeholder="Password"
              />
            </div>
            
            <div>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="off"
                required
                suppressHydrationWarning
                className="appearance-none block w-full px-4 py-4 border border-light-400 dark:border-dark-600 rounded-full shadow-sm placeholder-light-600 dark:placeholder-dark-400 bg-light-100 dark:bg-dark-700 text-primary-800 dark:text-light-100 focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:border-transparent transition-colors"
                placeholder="Confirm Password"
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                suppressHydrationWarning
                className="h-4 w-4 text-secondary-600 focus:ring-secondary-600 border-light-400 dark:border-dark-500 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-primary-700 dark:text-light-300">
                I agree to the <a href="#" className="text-secondary-600 hover:text-secondary-500">Terms of Service</a> and <a href="#" className="text-secondary-600 hover:text-secondary-500">Privacy Policy</a>
              </label>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-secondary-600 hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-600 transition-all duration-300 transform hover:scale-105"
              >
                Sign Up
              </button>
            </div>
          </form>
          
          <p className="mt-10 text-center text-sm text-primary-600 dark:text-light-300">
            Already have an account? <Link href="/login" className="font-medium text-primary-800 dark:text-light-100 hover:text-secondary-600 dark:hover:text-secondary-500 transition-colors">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 