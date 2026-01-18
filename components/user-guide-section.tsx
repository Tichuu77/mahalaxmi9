"use client"

import { ChevronDown, Home, Calendar, Briefcase, CheckCircle, ArrowRight, Sparkles, MapPin, Phone } from "lucide-react"
import { useState } from "react"

const guides = [
  {
    number: "01",
    title: "Discover Plots",
    description: "Explore our premium plotted developments across Nagpur's prime locations with complete transparency.",
    icon: Home,
    emoji: "🏠",
    details: [
      "Browse NMRDA approved layouts online",
      "Filter by location, size, and budget",
      "Save favorites and compare options",
    ],
  },
  {
    number: "02",
    title: "Site Visit",
    description: "Experience the location firsthand with our expert team guiding you through every detail.",
    icon: Calendar,
    emoji: "📅",
    details: [
      "Book a convenient visit time",
      "Meet our property consultants on-site",
      "Get complete project information",
    ],
  },
  {
    number: "03",
    title: "Financing Help",
    description: "Access bank loans up to 90% with our dedicated finance assistance and documentation support.",
    icon: Briefcase,
    emoji: "💼",
    details: [
      "Explore payment plan options",
      "Get bank loan pre-approval support",
      "Understand investment benefits",
    ],
  },
  {
    number: "04",
    title: "Documentation",
    description: "Complete your purchase with transparent, hassle-free legal documentation and registration.",
    icon: CheckCircle,
    emoji: "✅",
    details: [
      "Review all legal documents",
      "Complete payment formalities",
      "Receive plot possession",
    ],
  },
]

export function UserGuideSection() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section id="user-guide" className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-slide-up { animation: slideInUp 0.6s ease-out forwards; }
        .animate-scale { animation: scaleIn 0.5s ease-out forwards; }
      `}</style>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#30534A]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#C9862b]/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}} />
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-20 w-20 h-20 border-4 border-[#C9862b]/20 rounded-2xl rotate-45 animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-1/3 left-20 w-28 h-28 border-4 border-[#30534A]/20 rounded-full animate-float" style={{animationDelay: '6s'}} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Creative Header with Timeline Visual */}
        <div className="mb-16 sm:mb-20 animate-slide-up">
          
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-5 px-5 py-2 bg-gradient-to-r from-[#30534A]/10 via-[#C9862b]/10 to-[#30534A]/10 rounded-full">
              <Sparkles className="w-5 h-5 text-[#C9862b]" />
              <span className="text-sm font-black text-[#30534A] tracking-widest">SIMPLE PROCESS</span>
              <div className="w-2 h-2 rounded-full bg-[#C9862b] animate-pulse" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#30534A] mb-5 leading-tight">
              Your Journey to
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#C9862b]">Dream Plot</span>
                <div className="absolute bottom-2 left-0 w-full h-4 bg-[#C9862b]/20 transform -skew-x-12" />
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined 4-step process to find and secure your perfect property
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex justify-center gap-4 sm:gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#30534A] to-[#C9862b] rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-white rounded-2xl px-6 py-4 shadow-lg border-2 border-[#30534A]/10">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#30534A] to-[#C9862b] bg-clip-text text-transparent">04</div>
                <div className="text-xs font-bold text-gray-600 mt-1">Easy Steps</div>
              </div>
            </div>
            
            <ArrowRight className="w-6 h-6 text-[#C9862b] self-center" />
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9862b] to-[#30534A] rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-white rounded-2xl px-6 py-4 shadow-lg border-2 border-[#C9862b]/10">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#C9862b] to-[#30534A] bg-clip-text text-transparent">100%</div>
                <div className="text-xs font-bold text-gray-600 mt-1">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline View - Vertical on Mobile, Horizontal on Desktop */}
        <div className="relative mb-16 sm:mb-20">
          
          {/* Desktop Timeline Line */}
          <div className="hidden sm:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#30534A] via-[#C9862b] to-[#30534A] rounded-full mx-8" />
          
          {/* Mobile Timeline Line */}
          <div className="sm:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#30534A] via-[#C9862b] to-[#30534A] rounded-full" />

          {/* Steps Grid */}
          <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-6">
            {guides.map((guide, index) => {
              const Icon = guide.icon
              const isExpanded = expandedIndex === index
              
              return (
                <div key={index} className="relative animate-scale" style={{animationDelay: `${index * 150}ms`}}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-6 sm:top-12 w-16 h-16 rounded-full bg-gradient-to-br from-[#30534A] to-[#C9862b] flex items-center justify-center shadow-2xl border-4 border-white z-10">
                    <span className="text-white font-black text-lg">{guide.number}</span>
                  </div>

                  {/* Card */}
                  <div
                    onClick={() => setExpandedIndex(index)}
                    className={`ml-20 sm:ml-0 sm:mt-32 cursor-pointer group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                      isExpanded 
                        ? "border-[#C9862b] shadow-[#C9862b]/20 scale-105" 
                        : "border-gray-200 hover:border-[#30534A]/30"
                    }`}
                  >
                    {/* Glow Effect */}
                    {isExpanded && (
                      <div className="absolute -inset-1 bg-gradient-to-br from-[#30534A] to-[#C9862b] rounded-3xl blur opacity-50" />
                    )}
                    
                    <div className="relative">
                      {/* Icon */}
                      <div className={`mb-4 inline-flex transition-transform duration-500 ${isExpanded ? 'scale-110 rotate-12' : ''}`}>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#30534A]/10 to-[#C9862b]/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#30534A]" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`text-lg sm:text-xl font-black mb-2 transition-all ${
                        isExpanded ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#30534A] to-[#C9862b]' : 'text-[#30534A]'
                      }`}>
                        {guide.title}
                      </h3>

                      {/* Description - Desktop Only */}
                      <p className="hidden sm:block text-sm text-gray-600 mb-4 min-h-[60px]">
                        {guide.description}
                      </p>

                      {/* Progress Bar & Toggle */}
                      <div className="flex items-center justify-between">
                        <div className={`h-1 rounded-full bg-gradient-to-r from-[#30534A] to-[#C9862b] transition-all duration-500 ${
                          isExpanded ? 'w-full' : 'w-10'
                        }`} />
                        <ChevronDown className={`w-5 h-5 text-[#30534A] transition-transform duration-300 ml-2 ${
                          isExpanded ? "rotate-180" : ""
                        }`} />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <div 
                      className="ml-20 sm:ml-0 mt-4 bg-gradient-to-br from-[#30534A]/5 to-[#C9862b]/5 rounded-2xl p-5 border border-[#30534A]/20 animate-slide-up"
                    >
                      {/* Mobile Description */}
                      <p className="sm:hidden text-sm text-gray-600 mb-4">
                        {guide.description}
                      </p>
                      
                      <h4 className="text-sm font-black text-[#30534A] mb-3 flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-[#30534A] to-[#C9862b] rounded-full" />
                        ACTION STEPS
                      </h4>
                      
                      <ul className="space-y-3">
                        {guide.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 group/item">
                            <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-[#30534A] to-[#C9862b] flex items-center justify-center flex-shrink-0 shadow-md group-hover/item:scale-110 transition-transform">
                              <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Quick Tips Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20">
          <div className="relative group animate-scale" style={{animationDelay: '600ms'}}>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#30534A] to-[#C9862b] rounded-3xl blur opacity-25 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg border-2 border-[#30534A]/10 hover:border-[#30534A]/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#30534A] to-[#C9862b] flex items-center justify-center text-3xl mb-4 shadow-lg">
                💡
              </div>
              <h4 className="text-lg font-black text-[#30534A] mb-2">Pro Tip</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Visit plots during different times. Check connectivity and nearby amenities.
              </p>
            </div>
          </div>

          <div className="relative group animate-scale" style={{animationDelay: '700ms'}}>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C9862b] to-[#30534A] rounded-3xl blur opacity-25 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg border-2 border-[#C9862b]/10 hover:border-[#C9862b]/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9862b] to-[#30534A] flex items-center justify-center text-3xl mb-4 shadow-lg">
                🎯
              </div>
              <h4 className="text-lg font-black text-[#30534A] mb-2">Best Practice</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Review all NMRDA documents. Verify plot boundaries before purchase.
              </p>
            </div>
          </div>

          <div className="relative group animate-scale" style={{animationDelay: '800ms'}}>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#30534A] to-[#C9862b] rounded-3xl blur opacity-25 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 shadow-lg border-2 border-[#30534A]/10 hover:border-[#30534A]/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#30534A] to-[#C9862b] flex items-center justify-center text-3xl mb-4 shadow-lg">
                📞
              </div>
              <h4 className="text-lg font-black text-[#30534A] mb-2">Need Help?</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our experts are here 24/7. Call us anytime for guidance.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section - Split Design */}
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] animate-scale" style={{animationDelay: '900ms'}}>
          
          {/* Diagonal Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#30534A] to-[#C9862b]" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C9862b] transform skew-x-12 origin-top-right" />
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div style={{
              backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
              backgroundSize: '40px 40px',
              height: '100%'
            }} />
          </div>
          
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
            
            <div className="inline-flex items-center gap-3 mb-5 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-sm font-black text-white tracking-wider">READY TO START?</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Begin Your Property
              <br />Journey Today
            </h3>
            
            <p className="text-white/90 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
              Connect with our team to explore premium plotted developments
            </p>
            
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-[#30534A] rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9862b]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10">Schedule Site Visit</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}