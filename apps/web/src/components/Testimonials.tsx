import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

type TestimonialsProps = {
  isVisible: boolean;
};

export default function Testimonials({ isVisible }: TestimonialsProps) {
  return (
    <div id="testimonials" className="min-h-screen py-16 bg-light-200 dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col items-center mb-16">
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
  quote: "MetaTask's smart contract infrastructure is outstanding. It seamlessly integrates with wallets and maintains rigorous security standards, perfectly aligning with blockchain development needs.",
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
  );
} 