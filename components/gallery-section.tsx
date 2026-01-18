"use client"

import { useEffect, useState, useRef, useMemo } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera, Sparkles, Eye, Grid } from "lucide-react"

const galleryItems = [
  { id: 1, src: "/gallery1.jpg", alt: "Morning View", category: "exterior" },
  { id: 2, src: "/gallery2.jpg", alt: "Well Maintained Square", category: "amenities" },
  { id: 3, src: "/gallery3.jpg", alt: "Good Entrance", category: "exterior" },
  { id: 4, src: "/gallery4.jpg", alt: "Tree covered", category: "landscape" },
  { id: 5, src: "/gallery5.jpg", alt: "Night View", category: "exterior" },
  { id: 6, src: "/gallery6.jpg", alt: "Cozy Living Space", category: "interior" },
  { id: 7, src: "/gallery7.jpg", alt: "Designer Interiors", category: "interior" },
  { id: 8, src: "/gallery8.jpg", alt: "Premium Amenities", category: "amenities" },
  { id: 9, src: "/gallery9.jpg", alt: "Swimming Pool", category: "amenities" },
  { id: 10, src: "/gallery10.jpg", alt: "Evening View", category: "exterior" },
  { id: 11, src: "/gallery11.jpg", alt: "Playground", category: "amenities" },
  { id: 12, src: "/gallery12.jpg", alt: "Top View", category: "exterior" },
]

const categories = ["all", "exterior", "interior", "amenities", "landscape"]

export function GallerySection() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  // Memoize filtered items
  const filteredItems = useMemo(() => 
    activeCategory === "all" 
      ? galleryItems 
      : galleryItems.filter(item => item.category === activeCategory),
    [activeCategory]
  )

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

  // Keyboard navigation
  useEffect(() => {
    if (selectedId === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = galleryItems.findIndex(item => item.id === selectedId)
      
      if (e.key === "ArrowRight") {
        e.preventDefault()
        const newIndex = (currentIndex + 1) % galleryItems.length
        setSelectedId(galleryItems[newIndex].id)
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        const newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
        setSelectedId(galleryItems[newIndex].id)
      } else if (e.key === "Escape") {
        e.preventDefault()
        setSelectedId(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedId])

  const navigateModalImage = (direction: 'prev' | 'next') => {
    if (selectedId === null) return
    const currentIndex = galleryItems.findIndex(item => item.id === selectedId)
    const newIndex = direction === 'prev' 
      ? (currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1)
      : (currentIndex + 1) % galleryItems.length
    setSelectedId(galleryItems[newIndex].id)
  }

  return (
    <section ref={sectionRef} id="gallery" className="py-20 sm:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      
      {/* Simplified CSS - removed unnecessary animations */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Static decorative elements - no animation */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#C9862b]/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#30534A]/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className={`mb-14 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
            
            <div>
              <div className="inline-flex items-center gap-3 mb-5 px-5 py-2 bg-gradient-to-r from-[#30534A]/10 via-[#C9862b]/10 to-[#30534A]/10 rounded-full">
                <Camera className="w-5 h-5 text-[#C9862b]" />
                <span className="text-sm font-black text-[#30534A] tracking-widest">VISUAL SHOWCASE</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#30534A] mb-4 leading-tight">
                Explore Our
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#C9862b]">Gallery</span>
                  <div className="absolute bottom-2 left-0 w-full h-3 bg-[#C9862b]/20 transform -skew-x-12" />
                </span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-xl">
                A visual journey through our premium developments
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#30534A] to-[#C9862b] rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-white rounded-2xl p-4 sm:p-5 shadow-lg text-center border-2 border-[#30534A]/10 group-hover:border-[#30534A]/30 transition-all">
                  <Grid className="w-6 h-6 sm:w-8 sm:h-8 text-[#30534A] mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-black text-[#30534A]">{galleryItems.length}</div>
                  <div className="text-xs text-gray-600 font-bold">Photos</div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9862b] to-[#30534A] rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-white rounded-2xl p-4 sm:p-5 shadow-lg text-center border-2 border-[#C9862b]/10 group-hover:border-[#C9862b]/30 transition-all">
                  <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-[#C9862b] mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-black text-[#C9862b]">{categories.length - 1}</div>
                  <div className="text-xs text-gray-600 font-bold">Categories</div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 sm:gap-3 mt-8 overflow-x-auto pb-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 sm:px-7 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm capitalize transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#30534A] to-[#C9862b] text-white shadow-xl scale-105"
                    : "bg-white text-[#30534A] hover:bg-gray-50 border-2 border-gray-200 hover:border-[#C9862b]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden -mx-4 mb-8">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 pb-4">
            {filteredItems.map((item, i) => (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className="flex-shrink-0 w-[85vw] snap-center"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#30534A] to-[#C9862b] rounded-3xl blur opacity-25 group-active:opacity-75 transition-opacity" />
                  
                  <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#30534A]/95 via-[#30534A]/40 to-transparent" />

                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                          <span className="text-white font-black text-lg">{i + 1}</span>
                        </div>
                        <span className="px-4 py-2 bg-[#C9862b] text-white text-xs font-bold rounded-full uppercase shadow-lg">
                          {item.category}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-white font-black text-2xl mb-3">
                          {item.alt}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white/90">
                            <ZoomIn className="w-5 h-5" />
                            <span className="text-sm font-bold">Tap to view</span>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                            <Camera className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {filteredItems.slice(0, 5).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === 0 ? 'w-8 bg-gradient-to-r from-[#30534A] to-[#C9862b]' : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - Optimized */}
        <div className="hidden sm:block">
          <div className={`columns-2 lg:columns-3 gap-4 sm:gap-5 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {filteredItems.map((item, i) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedId(item.id)}
                className="break-inside-avoid mb-4 sm:mb-5 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  
                  {/* Conditional hover glow */}
                  {hoveredId === item.id && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#30534A] to-[#C9862b] rounded-3xl blur opacity-75" />
                  )}
                  
                  <div className="relative">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      width="600"
                      height={i % 3 === 0 ? 400 : i % 2 === 0 ? 300 : 350}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                      style={{
                        height: i % 3 === 0 ? '400px' : i % 2 === 0 ? '300px' : '350px',
                        objectFit: 'cover'
                      }}
                    />

                    <div className={`absolute inset-0 transition-all duration-500 ${
                      hoveredId === item.id
                        ? 'bg-gradient-to-t from-[#C9862b]/90 via-[#C9862b]/50 to-transparent'
                        : 'bg-gradient-to-t from-black/80 via-black/30 to-transparent'
                    }`} />

                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          hoveredId === item.id ? 'bg-white text-[#30534A]' : 'bg-white/20 backdrop-blur-sm text-white'
                        }`}>
                          <span className="font-black">{i + 1}</span>
                        </div>
                        <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase">
                          {item.category}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-white font-black text-lg sm:text-xl mb-2">
                          {item.alt}
                        </h3>
                        
                        <div className={`flex items-center gap-2 transition-all duration-300 ${
                          hoveredId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}>
                          <div className="flex-1 h-px bg-white/30" />
                          <ZoomIn className="w-4 h-4 text-white" />
                          <span className="text-white text-xs font-bold">View Full</span>
                        </div>
                      </div>
                    </div>

                    {/* Sparkle only when hovered */}
                    {hoveredId === item.id && (
                      <div className="absolute top-3 left-3">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 sm:mt-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-gradient-to-r from-[#30534A] to-[#C9862b] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
            
            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="lg:flex lg:items-center lg:justify-between lg:gap-12">
                
                <div className="text-center lg:text-left mb-6 lg:mb-0 lg:flex-1">
                  <Sparkles className="w-12 h-12 text-white mx-auto lg:mx-0 mb-4" />
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
                    Experience the Quality
                    <br />Firsthand
                  </h3>
                  <p className="text-white/90 text-base sm:text-lg">
                    Schedule a visit to see our developments in person
                  </p>
                </div>

                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-[#30534A] rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl"
                >
                  <Camera className="w-6 h-6" />
                  <span>Book Visit</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal - Optimized */}
      {selectedId !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <div className="relative max-w-6xl w-full h-[90vh]" onClick={(e) => e.stopPropagation()}>
            
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <img
                src={galleryItems.find((item) => item.id === selectedId)?.src}
                alt="Gallery"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('prev') }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110 flex items-center justify-center"
            >
              <ChevronLeft className="w-7 h-7 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('next') }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110 flex items-center justify-center"
            >
              <ChevronRight className="w-7 h-7 text-white" />
            </button>

            {/* Close button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110 flex items-center justify-center"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Info bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent backdrop-blur-md rounded-b-3xl p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-black text-xl sm:text-2xl mb-2">
                    {galleryItems.find((item) => item.id === selectedId)?.alt}
                  </p>
                  <span className="inline-block px-4 py-1.5 bg-[#C9862b] text-white text-xs font-bold rounded-full uppercase">
                    {galleryItems.find((item) => item.id === selectedId)?.category}
                  </span>
                </div>
                <div className="text-white/70 text-base font-bold">
                  {galleryItems.findIndex(item => item.id === selectedId) + 1} / {galleryItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}