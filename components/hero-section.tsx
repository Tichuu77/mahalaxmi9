"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, MapPin, Phone, Award, TrendingUp, Shield } from "lucide-react"
import Script from "next/script"

export default function HeroSection() {
  const videoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  // Delay video initialization until user is likely to see it
  useEffect(() => {
    setIsLoaded(true)
    
    // Delay video load by 1 second to prioritize critical content
    const timer = setTimeout(() => {
      setIsVideoVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Initialize video player only when script is loaded AND video should be visible
  useEffect(() => {
    if (!scriptLoaded || !isVideoVisible || !videoRef.current) return

    if (window.cloudinary) {
      try {
        window.cloudinary.videoPlayer('cloudinary-player', {
          cloud_name: 'dxujnm2sl',
          publicId: 'Mahalaxmi_1_1_v6khvx',
          controls: false,
          autoplay: true,
          loop: true,
          muted: true,
          fluid: false,
          playsinline: true,
          bigPlayButton: false,
          showLogo: false,
          preload: 'none', // Changed from 'auto' to 'none'
        })
      } catch (error) {
        console.error('Video player initialization failed:', error)
      }
    }
  }, [scriptLoaded, isVideoVisible])

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Load Cloudinary scripts asynchronously with Next.js Script component */}
      {isVideoVisible && (
        <>
          <Script
            src="https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.js"
            strategy="lazyOnload"
            onLoad={() => setScriptLoaded(true)}
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.css"
          />
        </>
      )}

      <section className="relative min-h-screen flex items-center overflow-hidden">
        
        <style>{`
          @keyframes slideIn {
            from { transform: translateX(-20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide {
            animation: slideIn 0.6s ease-out forwards;
          }
        `}</style>

        {/* Video Background with Lazy Loading */}
        <div className="absolute inset-0 z-0">
          {/* Placeholder gradient until video loads */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#30534A] via-[#2a453d] to-[#1f3530]" />
          
          {isVideoVisible && (
            <div ref={videoRef} className="w-full h-full">
              <video
                id="cloudinary-player"
                className="cld-video-player"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  filter: 'brightness(0.9)'
                }}
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-[#30534A]/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Top Badge */}
            <div className={`mb-6 transition-all duration-500 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#30534A]/80 backdrop-blur-sm rounded-full border border-[#C9862b]/30">
                <Shield className="w-3.5 h-3.5 text-[#C9862b]" />
                <span className="text-xs font-bold text-white tracking-wider">RERA • NMRDA APPROVED</span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left - Text Content */}
              <div className="space-y-6">
                <div className={`space-y-3 transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
                    Build Your<br/>
                    <span className="text-[#C9862b]">Dream Home</span>
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#C9862b] to-transparent rounded-full" />
                </div>

                <p className={`text-base sm:text-lg text-white/90 leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                  Premium Residential & Commercial Plots in Heart of Nagpur
                </p>

                {/* CTA Buttons */}
                <div className={`flex flex-col xs:flex-row gap-3 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                  <button 
                    onClick={() => handleScrollToSection("contact")}
                    className="group px-6 py-3 bg-gradient-to-r from-[#30534A] to-[#C9862b] text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-xl hover:shadow-[#C9862b]/30 transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => handleScrollToSection("projects")}
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold text-sm border border-white/30 hover:bg-white/20 transition-all duration-300"
                  >
                    View Projects
                  </button>
                </div>

                {/* Price Banner */}
                <div className={`transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                  <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#C9862b]/90 backdrop-blur-sm rounded-xl shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                    <div className="text-left">
                      <div className="text-xs text-white/80">Starting from</div>
                      <div className="text-xl font-black text-white">₹22 Lakh</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Stats Grid */}
              <div className={`grid grid-cols-3 gap-3 sm:gap-4 transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                
                {/* Stat Card 1 */}
                <div className="col-span-3 sm:col-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 hover:bg-white/15 transition-all duration-300">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#C9862b] mb-2" />
                  <div className="text-2xl sm:text-3xl font-black text-white">70+</div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1">Projects</div>
                </div>

                {/* Stat Card 2 */}
                <div className="col-span-3 sm:col-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 hover:bg-white/15 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-[#30534A] mb-2" />
                  <div className="text-2xl sm:text-3xl font-black text-white">17000+</div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1">Happy Clients</div>
                </div>

                {/* Stat Card 3 */}
                <div className="col-span-3 sm:col-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 hover:bg-white/15 transition-all duration-300">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#C9862b] mb-2" />
                  <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1">RERA Approved</div>
                </div>

                {/* Full Width Feature */}
                <div className="col-span-3 bg-gradient-to-r from-[#30534A] to-[#C9862b] rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/80 mb-1">Prime Locations</div>
                      <div className="text-lg sm:text-xl font-bold text-white">Across Nagpur</div>
                    </div>
                    <MapPin className="w-8 h-8 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 delay-600 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5 bg-black/10 backdrop-blur-sm animate-bounce">
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>
    </>
  )
}

declare global {
  interface Window {
    cloudinary: {
      videoPlayer: (elementId: string, options: any) => any;
    };
  }
}