"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, Users, Heart, MessageCircle, Play, Pause } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Investing in a by Maha Laxmi Infra transparent process made effortless experience. The best decision I ever made. The local transparent process made it an effortless experience.",
    name: "Rajkumar Gharjale",
    location: "Nagpur",
    image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/1-9.png",
    rating: 5,
    role: "Property Owner"
  },
  {
    id: 2,
    content:
      "I wanted to invest in a growing area, and plots in Nagpur Besa seemed perfect. Maha Laxmi Infra exceeded my expectations. Highly recommended!",
    name: "Priya Shah",
    location: "Mumbai",
    image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/3-4.png",
    rating: 5,
    role: "Investor"
  },
  {
    id: 3,
    content:
      "Investing in residential plots with Mahalaxmi Infra was one of my best decisions. Their transparency, clear titles, and prompt assistance gave me peace of mind.",
    name: "Karan Akojwar",
    location: "Pune",
    image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/4-2.png",
    rating: 5,
    role: "Homeowner"
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true)
            hasAnimated.current = true
          }
        })
      },
      { threshold: 0.1, rootMargin: '100px' }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Autoplay
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection('right')
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay])

  const goToPrevious = () => {
    setDirection('left')
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setDirection('right')
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-white via-[#30534A]/5 to-white">
      
      {/* Simplified animations */}
      <style>{`
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .slide-right { animation: slideFromRight 0.5s ease-out; }
        .slide-left { animation: slideFromLeft 0.5s ease-out; }
      `}</style>

      {/* Static decorative elements - removed animations */}
      <div className="absolute top-10 right-10 w-64 h-64 border-4 border-[#C9862b]/10 rounded-full opacity-50" />
      <div className="absolute bottom-10 left-10 w-80 h-80 border-4 border-[#30534A]/10 rounded-full opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 sm:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="lg:flex-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#C9862b]" />
              <div className="w-2 h-2 rounded-full bg-[#30534A]" />
              <div className="w-2 h-2 rounded-full bg-[#C9862b]" />
              <span className="text-sm font-black text-[#30534A] tracking-[0.3em] uppercase">Testimonials</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight mb-4">
              <span className="text-[#30534A]">Stories of</span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#C9862b] via-[#30534A] to-[#C9862b] bg-clip-text text-transparent">
                  Trust & Dreams
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                  <path d="M0 6 Q75 0, 150 6 T300 6" stroke="#C9862b" strokeWidth="3" fill="none" opacity="0.3"/>
                </svg>
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-xl">
              Real voices from families who chose Mahalaxmi Infra
            </p>
          </div>

          {/* Stats circles - simplified */}
          <div className="flex gap-4">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="50%" cy="50%" r="45%" stroke="#30534A" strokeWidth="3" fill="none" opacity="0.1"/>
                <circle cx="50%" cy="50%" r="45%" stroke="#30534A" strokeWidth="3" fill="none" strokeDasharray="283" strokeDashoffset="70" strokeLinecap="round"/>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-2xl sm:text-3xl font-black text-[#30534A]">1K+</div>
                <div className="text-[10px] text-gray-500 font-bold">Clients</div>
              </div>
            </div>
            
            <div className="relative w-24 h-24 sm:w-28 sm:h-28">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="50%" cy="50%" r="45%" stroke="#C9862b" strokeWidth="3" fill="none" opacity="0.1"/>
                <circle cx="50%" cy="50%" r="45%" stroke="#C9862b" strokeWidth="3" fill="none" strokeDasharray="283" strokeDashoffset="20" strokeLinecap="round"/>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-2xl sm:text-3xl font-black text-[#C9862b]">4.9</div>
                <div className="text-[10px] text-gray-500 font-bold">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Carousel - Simplified 3D effect */}
        <div className="relative max-w-5xl mx-auto mb-16">
          
          <div className="relative h-[500px] sm:h-[450px]">
            {testimonials.map((testimonial, index) => {
              const offset = (index - current + testimonials.length) % testimonials.length
              const isActive = offset === 0
              const isPrev = offset === testimonials.length - 1
              const isNext = offset === 1
              
              return (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive ? 'z-30 opacity-100' : 
                    isNext ? 'z-20 opacity-40 pointer-events-none' : 
                    isPrev ? 'z-10 opacity-20 pointer-events-none' : 'z-0 opacity-0 pointer-events-none'
                  }`}
                  style={{
                    transform: isActive ? 'translateX(0) scale(1)' :
                               isNext ? 'translateX(50%) scale(0.9)' :
                               isPrev ? 'translateX(-50%) scale(0.9)' : 'scale(0.8)',
                  }}
                >
                  {isActive && (
                    <div className={direction === 'right' ? 'slide-right' : 'slide-left'}>
                      
                      <div className="relative bg-white rounded-[3rem] p-8 sm:p-12 shadow-2xl border-l-8 border-[#C9862b]">
                        
                        {/* Simplified corner decoration */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#30534A] to-[#C9862b] rounded-full opacity-20 blur-xl" />
                        
                        <div className="flex justify-between items-start mb-6">
                          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#30534A] to-[#C9862b] flex items-center justify-center transform -rotate-12 shadow-xl">
                            <Quote className="w-10 h-10 text-white" />
                          </div>
                          
                          {/* Star rating */}
                          <div className="flex gap-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <div key={i} className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                                <Star className="w-5 h-5 text-white fill-white" />
                              </div>
                            ))}
                          </div>
                        </div>

                        <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                          "{testimonial.content}"
                        </p>

                        {/* Author card */}
                        <div className="flex items-center gap-5 p-5 bg-gradient-to-r from-[#30534A]/5 to-[#C9862b]/5 rounded-2xl border-2 border-[#30534A]/10">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#30534A] to-[#C9862b] rounded-2xl blur-md" />
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              loading="lazy"
                              width="80"
                              height="80"
                              className="relative w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <p className="font-black text-[#30534A] text-2xl mb-1">
                              {testimonial.name}
                            </p>
                            <p className="text-gray-600 text-sm font-bold mb-1">{testimonial.role}</p>
                            <p className="text-gray-500 text-sm flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C9862b]" />
                              {testimonial.location}
                            </p>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-4xl font-black bg-gradient-to-r from-[#30534A] to-[#C9862b] bg-clip-text text-transparent">
                              {String(testimonial.id).padStart(2, '0')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform border-4 border-[#30534A] z-40"
          >
            <ChevronLeft className="w-8 h-8 text-[#30534A]" />
          </button>
          
          <button
            onClick={goToNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform border-4 border-[#C9862b] z-40"
          >
            <ChevronRight className="w-8 h-8 text-[#C9862b]" />
          </button>

          {/* Progress controls */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={() => setAutoplay(!autoplay)}
              aria-label={autoplay ? "Pause autoplay" : "Play autoplay"}
              className="w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform border-2 border-[#30534A]/20"
            >
              {autoplay ? <Pause className="w-5 h-5 text-[#30534A]" /> : <Play className="w-5 h-5 text-[#30534A]" />}
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className="group relative"
                >
                  <div className={`h-2 rounded-full transition-all ${
                    index === current 
                      ? "bg-gradient-to-r from-[#30534A] to-[#C9862b] w-16 shadow-lg" 
                      : "bg-gray-300 w-2 hover:w-8 hover:bg-[#30534A]/50"
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className={`grid grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto pt-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { icon: Users, value: "17000+", label: "Happy Families", color: "from-[#30534A] to-[#C9862b]" },
            { icon: Heart, value: "98%", label: "Satisfaction", color: "from-[#C9862b] to-[#30534A]" },
            { icon: MessageCircle, value: "500+", label: "Reviews", color: "from-[#30534A] to-[#C9862b]" }
          ].map((stat, i) => (
            <div key={i} className="group relative">
              <div className={`absolute -inset-1 bg-gradient-to-br ${stat.color} rounded-3xl blur opacity-25 group-hover:opacity-50 transition-opacity`} />
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-transparent">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className={`text-3xl sm:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-bold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}