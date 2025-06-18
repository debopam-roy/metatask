import Link from 'next/link';

type PricingProps = {
  isVisible: boolean;
};

export default function Pricing({ isVisible }: PricingProps) {
  return (
    <div id="pricing" className="min-h-screen py-16 bg-light-100 dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col items-center mb-16">
      <h2 className="text-base text-secondary-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-primary-800 dark:text-light-100 sm:text-4xl">
            Transparent, blockchain-powered payments
          </p>
          <p className="mt-4 max-w-2xl text-xl text-primary-600 dark:text-light-300 lg:mx-auto">
            Our decentralized platform ensures secure transactions with minimal fees and instant payments.
          </p>
        </div>

        {/* Payment Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {[
            {
              title: "Smart Contracts",
              description: "Automated escrow ensures funds are only released when work is completed",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              title: "Instant Payments",
              description: "Receive payments immediately upon project completion and approval",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            },
            {
              title: "Multi-Currency",
              description: "Accept payments in major cryptocurrencies and fiat currencies",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Low Fees",
              description: "Minimal platform fees compared to traditional freelancing platforms",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`text-center p-6 md:p-8 rounded-lg bg-light-200 dark:bg-dark-700 shadow-md hover:shadow-lg transform transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:scale-105`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-md bg-primary-800 dark:bg-primary-700 text-light-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-primary-800 dark:text-light-100 mb-2">{feature.title}</h3>
              <p className="text-sm text-primary-600 dark:text-light-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
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
  );
} 