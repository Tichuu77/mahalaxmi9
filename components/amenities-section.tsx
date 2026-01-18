"use client"

import { Wifi, Dumbbell, Trees, Zap, Shield, Users, Sparkles, Award, Check, ArrowRight, Star } from "lucide-react"
import { useState, useEffect, useRef, useMemo } from "react"

const amenities = [
  { icon: Wifi, title: "Smart Home", description: "IoT integration", category: "facilities" },
  { icon: Dumbbell, title: "Fitness", description: "Modern gym", category: "wellness" },
  { icon: Trees, title: "Green Spaces", description: "Lush gardens", category: "wellness" },
  { icon: Zap, title: "Power Backup", description: "24/7 supply", category: "facilities" },
  { icon: Shield, title: "Security", description: "CCTV", category: "facilities" },
  { icon: Users, title: "Community", description: "Social spaces", category: "entertainment" },
  { emoji: "🏊", title: "Pool", description: "Olympic size", category: "wellness" },
  { emoji: "🎮", title: "Gaming", description: "Entertainment", category: "entertainment" },
  { emoji: "🧘", title: "Yoga", description: "Wellness", category: "wellness" },
  { emoji: "🚗", title: "Parking", description: "Multi-level", category: "facilities" },
  { emoji: "🎪", title: "Banquet", description: "Event space", category: "entertainment" },
  { emoji: "👶", title: "Kids Area", description: "Playground", category: "entertainment" },
]

const categories = [
  { id: "all", label: "All", icon: "✨" },
  { id: "wellness", label: "Wellness", icon: "🌿" },
  { id: "entertainment", label: "Fun", icon: "🎉" },
  { id: "facilities", label: "Essentials", icon: "⚡" }
]

export function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState("all")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

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

  // Memoize filtered amenities to prevent recalculation
  const filteredAmenities = useMemo(() => {
    return amenities.filter(amenity => 
      activeTab === "all" || amenity.category === activeTab
    )
  }, [activeTab])

  return (
    <section ref={sectionRef} id="amenities" className="py-12 sm:py-16 lg:py-32 bg-gradient-to-br from-gray-900 via-[#30534A] to-black relative overflow-hidden">
      
      {/* Simplified animations - removed float */}
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
      `}</style>

      {/* Simplified Background - Static gradients, no animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9862b]/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#30534A]/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-6 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9862b]" />
            <span className="text-xs sm:text-base font-bold text-white tracking-wider">PREMIUM AMENITIES</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-3 sm:mb-6 leading-tight px-4">
            Live the
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#C9862b] via-white to-[#30534A]">
              Extraordinary Life
            </span>
          </h2>
          
          <p className="text-sm sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto px-4">
            Where luxury meets lifestyle
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-14 lg:mb-20 px-4">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 sm:px-8 lg:px-10 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base lg:text-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#C9862b] to-[#30534A] text-white shadow-xl scale-105"
                  : "bg-white/10 backdrop-blur-sm text-white/70 hover:bg-white/20 border border-white/20"
              }`}
            >
              <span className="text-base sm:text-2xl mr-1 sm:mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Amenities Grid - Optimized rendering */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5 lg:gap-6 mb-10 sm:mb-16 lg:mb-24 px-2 sm:px-0">
          {filteredAmenities.map((amenity, index) => {
            const Icon = amenity.icon
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={`${amenity.title}-${index}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{transitionDelay: `${index * 50}ms`}}
              >
                <div className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-5 lg:p-7 border border-white/20 transition-all duration-300 cursor-pointer ${
                  isHovered ? 'scale-105 shadow-2xl -translate-y-1' : ''
                }`}>
                  
                  {/* Simplified glow - only on hover */}
                  {isHovered && (
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#C9862b] to-[#30534A] opacity-10 blur-xl"></div>
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mx-auto mb-2 sm:mb-3 lg:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#C9862b] to-[#30534A] flex items-center justify-center transition-transform duration-300 ${
                      isHovered ? 'rotate-6 scale-110' : ''
                    }`}>
                      {amenity.emoji ? (
                        <span className="text-xl sm:text-2xl lg:text-5xl">{amenity.emoji}</span>
                      ) : (
                        Icon && <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-white" />
                      )}
                    </div>
                    
                    {/* Text */}
                    <h3 className="text-[10px] sm:text-sm lg:text-base font-black text-white text-center mb-0.5 sm:mb-1 leading-tight">
                      {amenity.title}
                    </h3>
                    <p className="text-[8px] sm:text-xs lg:text-sm text-white/70 text-center leading-tight">
                      {amenity.description}
                    </p>

                    {/* Hover indicator */}
                    <div className={`mt-1.5 sm:mt-3 h-0.5 sm:h-1 bg-gradient-to-r from-[#C9862b] to-[#30534A] rounded-full transition-all duration-300 mx-auto ${
                      isHovered ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-5 lg:gap-8 mb-10 sm:mb-16 lg:mb-20 px-2 sm:px-0">
          {[
            { label: "Amenities", value: "12+", icon: Award },
            { label: "Available", value: "24/7", icon: Zap },
            { label: "Premium", value: "100%", icon: Shield },
            { label: "Certified", value: "ISO", icon: Check }
          ].map((stat, i) => (
            <div key={i} className="group relative overflow-hidden">
              <div className={`relative bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-6 lg:p-8 border border-white/20 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
                style={{transitionDelay: `${i * 100}ms`}}>
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9862b] to-[#30534A] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <stat.icon className="w-6 h-6 sm:w-10 sm:h-10 lg:w-16 lg:h-16 text-white mx-auto mb-1 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-lg sm:text-3xl lg:text-5xl font-black bg-gradient-to-r from-[#C9862b] to-[#30534A] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-sm lg:text-base text-white/80 font-bold mt-0.5 sm:mt-2">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative group mx-2 sm:mx-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C9862b] to-[#30534A] rounded-2xl sm:rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          
          <div className="relative bg-gradient-to-r from-[#30534A] via-[#C9862b] to-[#30534A] rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 text-center overflow-hidden">
            
            {/* Stars - hidden on mobile for performance */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <Star className="absolute top-10 left-10 w-6 h-6 text-white/30" />
              <Star className="absolute top-20 right-20 w-4 h-4 text-white/20" />
              <Star className="absolute bottom-10 left-1/4 w-5 h-5 text-white/25" />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-3xl lg:text-5xl font-black text-white mb-3 sm:mb-6">
                Ready to Experience Luxury?
              </h3>
              <p className="text-xs sm:text-lg lg:text-xl text-white/90 mb-5 sm:mb-10 max-w-3xl mx-auto">
                Get exclusive access to premium amenities
              </p>
              
              <a href="#contact" className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-12 lg:px-16 py-3 sm:py-5 lg:py-6 bg-white text-[#30534A] rounded-xl sm:rounded-2xl lg:rounded-3xl font-black text-sm sm:text-lg lg:text-xl shadow-2xl hover:scale-105 transition-all duration-300">
                <span>Contact Us Now</span>
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}