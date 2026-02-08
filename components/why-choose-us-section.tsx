"use client"

import { Check, Zap, Trophy, Users, Heart, Lightbulb, Star, Award, Sparkles, ArrowRight, Shield, TrendingUp } from "lucide-react"
import { useState } from "react"

const reasons = [
  {
    icon: Trophy,
    title: "13+ Years Legacy",
    description: "Two decades of trust and excellence in Nagpur real estate"
  },
  {
    icon: Shield,
    title: "Legal Compliance",
    description: "NMRDA approved with complete documentation transparency"
  },
  {
    icon: Users,
    title: "17000+ Families",
    description: "Trusted by over a thousand happy homeowners"
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction and trust is our foundation"
  },
  {
    icon: TrendingUp,
    title: "Prime Locations",
    description: "Strategic developments in Nagpur's best neighborhoods"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Premium construction with world-class amenities"
  },
]

export function WhyChooseUsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-orbit { animation: orbit 20s linear infinite; }
        .animate-pulse-ring { animation: pulse-ring 2s ease-in-out infinite; }
        .animate-slide-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-fade-up { animation: fadeInUp 0.7s ease-out forwards; }
      `}</style>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20">
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#C9862b] rounded-full animate-orbit" />
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#30534A] rounded-full animate-orbit" style={{animationDelay: '5s', animationDuration: '15s'}} />
      </div>

      {/* Floating Background Shapes */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-[#C9862b]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#30534A]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Creative Header with Circular Stats */}
        <div className="mb-16 sm:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
            
            {/* Left - Title */}
            <div className="lg:flex-1 animate-slide-left">
              <div className="inline-flex items-center gap-3 mb-5 px-5 py-2 bg-gradient-to-r from-[#30534A]/10 via-[#C9862b]/10 to-[#30534A]/10 rounded-full">
                <Star className="w-5 h-5 text-[#C9862b]" />
                <span className="text-sm font-black text-[#30534A] tracking-widest">WHY MAHALAXMI</span>
                <div className="w-2 h-2 rounded-full bg-[#C9862b] animate-pulse" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#30534A] mb-5 leading-tight">
                Why Choose
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#C9862b]">Mahalaxmi Infra?</span>
                  <div className="absolute bottom-2 left-0 w-full h-4 bg-[#C9862b]/20 -rotate-1 rounded" />
                </span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                Two decades of excellence, trust, and innovation in Nagpur's real estate landscape
              </p>
            </div>

            {/* Right - Circular Floating Stats */}
            <div className="relative w-full lg:w-auto animate-slide-right">
              <div className="flex justify-center items-center gap-6 sm:gap-8">
                
                {/* Stat 1 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#30534A] to-[#C9862b] rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity animate-pulse-ring" />
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#30534A] to-[#30534A]/90 flex flex-col items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-all">
                    <div className="text-3xl sm:text-4xl font-black text-white">13+</div>
                    <div className="text-xs sm:text-sm text-white/80 font-bold">Years</div>
                  </div>
                </div>

                {/* Stat 2 - Center, Larger */}
                <div className="relative group -mt-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9862b] to-[#30534A] rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity animate-pulse-ring" style={{animationDelay: '0.5s'}} />
                  <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#C9862b] to-[#C9862b]/90 flex flex-col items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-all">
                    <div className="text-4xl sm:text-5xl font-black text-white">17000+</div>
                    <div className="text-xs sm:text-sm text-white/80 font-bold">Families</div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#30534A] to-[#C9862b] rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity animate-pulse-ring" style={{animationDelay: '1s'}} />
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#30534A] to-[#30534A]/90 flex flex-col items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-all">
                    <div className="text-3xl sm:text-4xl font-black text-white">70+</div>
                    <div className="text-xs sm:text-sm text-white/80 font-bold">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hexagonal Grid of Reasons */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative animate-fade-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br from-[#30534A] to-[#C9862b] rounded-3xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                
                <div className={`relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                  isHovered ? 'border-[#C9862b] scale-105' : 'border-gray-100'
                }`}>
                  
                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${
                    index % 2 === 0 ? 'from-[#30534A]/10' : 'from-[#C9862b]/10'
                  } to-transparent rounded-bl-[3rem] transition-opacity ${isHovered ? 'opacity-100' : 'opacity-50'}`} />
                  
                  <div className="relative z-10">
                    {/* Floating Icon */}
                    <div className="mb-4 sm:mb-5">
                      <div className={`relative inline-block transition-all duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${
                          index % 2 === 0 ? 'from-[#30534A] to-[#C9862b]' : 'from-[#C9862b] to-[#30534A]'
                        } rounded-2xl blur opacity-40`} />
                        <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${
                          index % 2 === 0 ? 'from-[#30534A] to-[#C9862b]' : 'from-[#C9862b] to-[#30534A]'
                        } flex items-center justify-center shadow-xl`}>
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className={`text-base sm:text-xl font-black mb-2 sm:mb-3 transition-all ${
                      isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#30534A] to-[#C9862b]' : 'text-[#30534A]'
                    }`}>
                      {reason.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                      {reason.description}
                    </p>

                    {/* Animated Bar */}
                    <div className={`h-1 rounded-full bg-gradient-to-r ${
                      index % 2 === 0 ? 'from-[#30534A] to-[#C9862b]' : 'from-[#C9862b] to-[#30534A]'
                    } transition-all duration-500 ${isHovered ? 'w-full' : 'w-12'}`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Split Features Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 animate-fade-up" style={{animationDelay: '600ms'}}>
          
          {/* Feature 1 - Stacked Design */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#30534A] to-[#C9862b] rounded-3xl blur opacity-20" />
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#30534A] to-[#C9862b] flex items-center justify-center shadow-lg">
                  <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#30534A]">
                  Proven Track Record
                </h3>
              </div>
              
              {/* List */}
              <ul className="space-y-4">
                {[
                  "13+ years of excellence in real estate",
                  "70+ successfully completed projects",
                  "NMRDA & RERA approved developments"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#30534A] to-[#C9862b] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover/item:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 font-semibold group-hover/item:text-[#30534A] transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C9862b] to-[#30534A] rounded-3xl blur opacity-20" />
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#C9862b] to-[#30534A] flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#30534A]">
                  Customer Commitment
                </h3>
              </div>
              
              {/* List */}
              <ul className="space-y-4">
                {[
                  "Transparent pricing & documentation",
                  "90% bank finance assistance available",
                  "Dedicated support throughout journey"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C9862b] to-[#30534A] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover/item:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 font-semibold group-hover/item:text-[#30534A] transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section - Diagonal Split Design */}
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] animate-fade-up" style={{animationDelay: '800ms'}}>
          
          {/* Background with Diagonal Split */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#30534A] to-[#C9862b]" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C9862b] transform skew-x-12 origin-top-right" />
          
          {/* Dot Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="text-center max-w-3xl mx-auto">
              
              {/* Icon */}
              <div className="inline-flex items-center gap-3 mb-5 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-sm font-black text-white tracking-wider">EXCLUSIVE OFFER</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
                Ready to Own Your
                <br />Dream Property?
              </h3>
              
              <p className="text-white/90 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
                Join 17000+ happy families who trusted Mahalaxmi Infra for their dream homes
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-[#30534A] rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C9862b]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}