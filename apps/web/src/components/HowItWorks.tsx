import Link from 'next/link';

type HowItWorksProps = {
  isVisible: boolean;
};

export default function HowItWorks({ isVisible }: HowItWorksProps) {
  return (
    <div id="how-it-works" className="py-16 bg-light-100 dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center mb-16">
          <h2 className="text-center text-base text-secondary-600 font-semibold tracking-wide uppercase">How it Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-primary-800 dark:text-light-100 sm:text-4xl">
            Simple, transparent process
          </p>
          <p className="mt-4 max-w-2xl text-xl text-primary-600 dark:text-light-300 lg:mx-auto">
            From AI-powered matching to smart contract escrow, experience the future of freelancing with our secure and automated process.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Only on Large Desktop */}
          <div className="hidden xl:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 dark:bg-dark-600 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
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
  );
} 