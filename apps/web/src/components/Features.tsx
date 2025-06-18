import React from 'react';

type FeaturesProps = {
  isVisible: boolean;
};

export default function Features({ isVisible }: FeaturesProps) {
  return (
    <div id="features" className="min-h-screen pt-16 pb-16 sm:pt-32 md:py-16 bg-light-200 dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col items-center mb-16">
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
  );
} 