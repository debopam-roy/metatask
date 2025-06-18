import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 text-light-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-600/5 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.1),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(255,110,120,0.1),_transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-Optimized Layout */}
        <div className="py-6 md:py-12">
          
          {/* Mobile Header - Same Layout as Desktop */}
          <div className="md:hidden mb-6">
            {/* Brand with Social Icons Inline - Matching Desktop */}
            <div className="flex items-center mb-4">
              <div className="relative">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-700 flex items-center justify-center shadow-lg">
                  <span className="text-lg font-bold text-light-100">M</span>
                </div>
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-secondary-400 rounded-full animate-pulse"></div>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-light-100 to-light-300 bg-clip-text text-transparent">MetaTask</span>
              
              {/* Social Icons beside MetaTask - Matching Desktop */}
              <div className="flex space-x-3 ml-6">
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

            {/* Brief Description */}
            <p className="text-light-300 text-sm leading-relaxed mb-4">
              Revolutionizing freelancing with <span className="text-secondary-400 font-semibold">blockchain security</span> and <span className="text-secondary-400 font-semibold">AI-powered matching</span>.
            </p>
            
            {/* Compact Stats Row */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { number: "10K+", label: "Users" },
                { number: "98%", label: "Success" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-2 rounded-md bg-primary-700/30 border border-primary-600/20">
                  <div className="text-xs font-bold text-secondary-400">{stat.number}</div>
                  <div className="text-xs text-light-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation - 3 Columns Side by Side */}
          <div className="md:hidden mb-6">
            <div className="grid grid-cols-3 gap-3 text-left">
              {/* Platform Links */}
              <div>
                  <h3 className="text-xs font-bold mb-4 text-light-100 relative uppercase tracking-wider">
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
                  <h3 className="text-xs font-bold mb-4 text-light-100 relative uppercase tracking-wider">
                    Support
                    <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-gradient-to-r from-secondary-500 to-secondary-700"></div>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { text: "Help Center", href: "#" },
                      { text: "Community", href: "#" },
                      { text: "Documentation", href: "#" },
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

          {/* Mobile Newsletter - Sleek Design */}
          <div className="md:hidden mb-6">
            <div className="bg-gradient-to-r from-primary-700/30 to-secondary-600/20 rounded-lg p-5 border border-primary-600/30 shadow-lg">
              <h3 className="text-sm font-bold mb-2 text-light-100 uppercase tracking-wider">
                Stay Updated
              </h3>
              <p className="text-light-300 text-sm mb-4 leading-relaxed">
                Get regular insights on latest innovations and AI developments.
              </p>
              <div className="flex space-x-3 mb-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2.5 text-sm rounded-lg bg-light-100/10 border border-primary-600/30 text-light-100 placeholder-light-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                />
                <button 
                  onClick={(e) => {
                    const emailInput = e.currentTarget.previousElementSibling as HTMLInputElement;
                    if (emailInput && emailInput.value) {
                      emailInput.disabled = true;
                      e.currentTarget.textContent = "Joined";
                      e.currentTarget.disabled = true;
                      e.currentTarget.classList.add("opacity-75");
                    }
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-light-100 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm shadow-md">
                  Join
                </button>
              </div>
              <div className="flex items-center justify-evenly text-xs text-light-400">
                <span>✓ Weekly updates</span>
                <span>✓ No spam</span>
                <span>✓ Easy opt-out</span>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Improved Structure */}
          <div className="hidden md:block">
            {/* Top Section - Brand, Stats, and Navigation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
              {/* Company Info */}
              <div className="lg:col-span-4">
                {/* Brand with Social Icons Inline */}
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-700 flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-light-100">M</span>
                    </div>
                    <div className="absolute -top-1 -right-1 h-3 w-3 bg-secondary-400 rounded-full animate-pulse"></div>
                  </div>
                  <span className="ml-3 text-xl font-bold bg-gradient-to-r from-light-100 to-light-300 bg-clip-text text-transparent">MetaTask</span>
                  
                  {/* Social Icons beside MetaTask */}
                  <div className="flex space-x-3 ml-6">
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
                
                <p className="text-light-300 mb-4 leading-relaxed max-w-sm">
                  Revolutionizing freelancing with <span className="text-secondary-400 font-semibold">blockchain security</span> and <span className="text-secondary-400 font-semibold">AI-powered matching</span>.
                </p>

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

              {/* Navigation Links - Desktop */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            </div>

            {/* Newsletter Section - Full Width Below Navigation */}
            <div className="w-full">
              <div className="bg-gradient-to-r from-primary-700/30 to-secondary-600/20 rounded-lg p-6 border border-primary-600/30 shadow-lg">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold mb-3 text-light-100 uppercase tracking-wider">
                      Stay Updated
                    </h3>
                    <p className="text-light-300 text-base leading-relaxed max-w-2xl mx-auto">
                      Get regular insights on latest innovations and AI developments.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full sm:w-auto sm:flex-1 max-w-md px-6 py-4 text-base rounded-lg bg-light-100/10 border border-primary-600/30 text-light-100 placeholder-light-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                    />
                    <button 
                      onClick={(e) => {
                        const emailInput = e.currentTarget.previousElementSibling as HTMLInputElement;
                        if (emailInput && emailInput.value) {
                          emailInput.disabled = true;
                          e.currentTarget.disabled = true;
                          e.currentTarget.textContent = "Subscribed";
                          e.currentTarget.classList.add("opacity-75");
                        }
                      }}
                      className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-light-100 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-base shadow-lg"
                    >
                      Subscribe Now
                    </button>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-light-400">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Weekly updates
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      No spam
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Easy opt-out
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Compact for Mobile */}
        <div className="py-4 md:py-8 border-t border-primary-700/30">
          {/* Mobile Bottom */}
          <div className="md:hidden">
            <div className="text-center items-center space-y-3">
              <p className="text-light-300 text-xs">
                © 2024 MetaTask. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4 text-xs justify-center">
                {["Privacy", "Terms", "Security"].map((link) => (
                  <a key={link} href="#" className="text-light-400 hover:text-secondary-400 transition-colors duration-300">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Bottom - Original */}
          <div className="hidden md:flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
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
          </div>
        </div>
      </div>
    </footer>
  );
} 