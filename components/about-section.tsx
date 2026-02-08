"use client"

import { useEffect, useState, useRef } from "react"
import { Award, Users, Building2, CheckCircle2, TrendingUp, Shield, Home, Sparkles, Star, MapPin, Zap, ArrowRight, Calendar, Trophy, Heart } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, sqft: 0 })
  const sectionRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true)
            hasAnimated.current = true
            animateCounters()
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { projects: 70, clients: 17000, years: 13, sqft: 500 }
    const duration = 1500 // Reduced from 2000ms
    const steps = 30 // Reduced from 60 for better performance
    const increment = duration / steps

    let current = { projects: 0, clients: 0, years: 0, sqft: 0 }

    const timer = setInterval(() => {
      current.projects = Math.min(current.projects + targets.projects / steps, targets.projects)
      current.clients = Math.min(current.clients + targets.clients / steps, targets.clients)
      current.years = Math.min(current.years + targets.years / steps, targets.years)
      current.sqft = Math.min(current.sqft + targets.sqft / steps, targets.sqft)

      setCounters({
        projects: Math.floor(current.projects),
        clients: Math.floor(current.clients),
        years: Math.floor(current.years),
        sqft: Math.floor(current.sqft)
      })

      if (
        current.projects >= targets.projects &&
        current.clients >= targets.clients &&
        current.years >= targets.years &&
        current.sqft >= targets.sqft
      ) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, increment)
  }

  return (
    <section ref={sectionRef} id="about" className="relative py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Simplified animations - removed excessive keyframes */}
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>

      {/* Decorative Background - Static (removed blur for performance) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9862b]/5 rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#30534A]/5 rounded-full" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 relative z-10">

        {/* Header Section */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-white rounded-full shadow-md border border-[#C9862b]/20">
            <Trophy className="w-4 h-4 text-[#C9862b]" />
            <span className="text-xs font-bold text-[#30534A] tracking-wider">EXCELLENCE SINCE 2004</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#30534A] mb-3 leading-tight">
            Crafting <span className="bg-gradient-to-r from-[#C9862b] to-[#30534A] bg-clip-text text-transparent">Premium Spaces</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nagpur's most trusted real estate developer with a legacy of excellence
          </p>
        </div>

        {/* Stats Cards - Simplified animations */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {[
            { icon: Building2, value: counters.projects, label: "Projects", suffix: "+", gradient: "from-[#30534A] to-[#30534A]/80" },
            { icon: Users, value: counters.clients, label: "Happy Families", suffix: "+", gradient: "from-[#C9862b] to-[#C9862b]/80" },
            { icon: Calendar, value: counters.years, label: "Years Legacy", suffix: "+", gradient: "from-[#30534A] to-[#30534A]/80" },
            { icon: TrendingUp, value: counters.sqft, label: "Sq.Ft", suffix: "K+", gradient: "from-[#C9862b] to-[#C9862b]/80" }
          ].map((stat, i) => (
            <div 
              key={i} 
              className={`relative bg-gradient-to-br ${stat.gradient} rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden`}
            >
              {/* Removed animate-pulse-ring for performance */}
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white/80 mb-1 sm:mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}{stat.suffix}</div>
              <div className="text-[10px] sm:text-xs text-white/90 font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          
          {/* Large Feature Card - Optimized image loading */}
          <div className={`lg:col-span-2 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#30534A] via-[#30534A]/95 to-[#C9862b] opacity-95" />
            {/* Added loading="lazy" and optimized image */}
            <img 
              src="/aboutUs.webp" 
              alt="Mahalaxmi Infra" 
              loading="lazy"
              width="800"
              height="600"
              className="w-full h-72 sm:h-96 object-cover mix-blend-overlay transition-transform duration-700 group-hover:scale-110" 
            />
            
            <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9862b]" />
                    <span className="text-xs sm:text-sm font-black text-[#30534A]">Premium Quality</span>
                  </div>
                </div>
                <div className="bg-[#C9862b]/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>

              <div>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
                  <h3 className="text-xl sm:text-3xl font-black text-[#30534A] mb-2">13+ Years of Excellence</h3>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                    Building dreams and creating landmarks across Nagpur with unmatched quality and commitment
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#30534A] text-white text-[10px] sm:text-xs rounded-full font-semibold">RERA Certified</span>
                    <span className="px-3 py-1 bg-[#C9862b] text-white text-[10px] sm:text-xs rounded-full font-semibold">ISO Certified</span>
                    <span className="px-3 py-1 bg-[#30534A] text-white text-[10px] sm:text-xs rounded-full font-semibold">Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Info Cards */}
          <div className={`space-y-3 sm:space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg border-2 border-[#30534A]/10 hover:border-[#30534A]/30 transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#30534A] to-[#C9862b] flex items-center justify-center">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-bold text-[#30534A]">Trust & Integrity</h4>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#C9862b] text-[#C9862b]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Complete transparency in every transaction with legal compliance and quality assurance
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg border-2 border-[#C9862b]/10 hover:border-[#C9862b]/30 transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#C9862b] to-[#30534A] flex items-center justify-center">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-bold text-[#30534A]">Prime Locations</h4>
                  <p className="text-[10px] sm:text-xs text-[#C9862b] font-semibold">Across Nagpur</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Strategic developments in the city's most desirable neighborhoods with modern amenities
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#30534A] to-[#C9862b] rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-white" />
                <h4 className="text-sm sm:text-base font-bold text-white">Customer First</h4>
              </div>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                17000+ satisfied families call our projects home
              </p>
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-3 px-3">
          <div className="flex gap-2 sm:grid sm:grid-cols-4 min-w-max sm:min-w-0">
            {[
              { icon: Award, label: "Premium Quality", color: "bg-[#30534A]" },
              { icon: Shield, label: "100% Legal", color: "bg-[#C9862b]" },
              { icon: Home, label: "Modern Designs", color: "bg-[#30534A]" },
              { icon: CheckCircle2, label: "RERA Approved", color: "bg-[#C9862b]" }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`${item.color} rounded-xl sm:rounded-2xl px-4 py-3 sm:p-4 flex items-center gap-2 sm:flex-col sm:text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 flex-shrink-0`}
              >
                <item.icon className="w-5 h-5 sm:w-8 sm:h-8 text-white flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white whitespace-nowrap sm:whitespace-normal">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Removed heavy gradient animation */}
        <div className={`bg-gradient-to-r from-[#30534A] via-[#C9862b] to-[#30534A] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center sm:text-left flex-1">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <h3 className="text-lg sm:text-2xl font-black text-white">Discover Your Perfect Home</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/90">Explore premium residential and commercial projects</p>
            </div>
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#30534A] rounded-xl sm:rounded-2xl text-sm sm:text-base font-black shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}