"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, User, ArrowRight, Sparkles, Newspaper, TrendingUp, Play } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Mahalaxmi Launches New Luxury Residential Complex",
    excerpt:
      "Introducing our latest project featuring smart homes and sustainable living spaces in the heart of the city.",
    fullContent:
      "The Mahalaxmi Luxury Residential Complex marks a new milestone in sustainable architecture. Each unit is designed with eco-conscious materials, smart home integration, and green terraces for a natural lifestyle. Residents can enjoy modern amenities, lush gardens, and easy access to urban hotspots. This launch redefines urban luxury with purpose and sustainability at its core.",
    date: "March 15, 2025",
    author: "Mahalaxmi Team",
    category: "Project Launch",
    image: "/luxury-residential-complex.png",
  },
  {
    id: 2,
    title: "Sustainable Development: Our Commitment to Green Living",
    excerpt:
      "Learn how Mahalaxmi Infra is pioneering eco-friendly construction practices and green spaces.",
    fullContent:
      "At Mahalaxmi Infra, sustainability isn't just a trend — it's a commitment. From solar energy integration to rainwater harvesting, every project embraces green building standards. Our mission is to create living spaces that harmonize with nature while minimizing carbon footprint, offering a healthier and cleaner future for generations to come.",
    date: "March 10, 2025",
    author: "Sustainability Team",
    category: "Sustainability",
    image: "/green-sustainable-residential-development.jpg",
  },
  {
    id: 3,
    title: "Customer Success Story: From Dream to Reality",
    excerpt:
      "Meet the families who found their perfect home with Mahalaxmi. Read their inspiring stories.",
    fullContent:
      "For many families, Mahalaxmi projects have turned their dream homes into reality. Our customer-first approach ensures personalized experiences — from choosing the right floor plan to post-possession support. Their heartfelt testimonials remind us why we build not just homes, but lifelong happiness.",
    date: "March 5, 2025",
    author: "Marketing Team",
    category: "Success Stories",
    image: "/happy-family-new-home.jpg",
  },
]

export default function NewsArticles() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
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

  // Progress timeline animation
  useEffect(() => {
    if (!isVisible) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % newsArticles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isVisible])

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <section ref={sectionRef} id="news" className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      
      {/* Static decorative elements - removed animations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9862b]/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#30534A]/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/3 left-10 w-32 h-32 border-4 border-[#30534A]/10 rounded-3xl rotate-45 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        
        {/* Header */}
        <div className={`mb-16 sm:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            
            <div className="lg:flex-1">
              <div className="inline-flex items-center gap-3 mb-5 px-5 py-2 bg-gradient-to-r from-[#30534A]/10 via-[#C9862b]/10 to-[#30534A]/10 rounded-full">
                <Newspaper className="w-5 h-5 text-[#C9862b]" />
                <span className="text-sm font-black text-[#30534A] tracking-widest">LATEST NEWS</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#30534A] mb-5 leading-tight">
                News &
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#C9862b]">Updates</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-3 bg-[#C9862b]/20 transform skew-y-2" />
                </span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-xl">
                Stay informed with our latest developments and success stories
              </p>
            </div>

            {/* Article count */}
            <div className="flex gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#30534A] to-[#C9862b] rounded-2xl blur opacity-40" />
                <div className="relative bg-white rounded-2xl px-8 py-6 shadow-lg border-2 border-[#30534A]/10">
                  <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#30534A] to-[#C9862b] bg-clip-text text-transparent mb-1">
                    {newsArticles.length}
                  </div>
                  <div className="text-xs font-bold text-gray-600">Articles</div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress timeline */}
          <div className="flex items-center gap-2 justify-center">
            {newsArticles.map((_, index) => (
              <div key={index} className="relative flex-1 max-w-xs">
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-[#30534A] to-[#C9862b] transition-all duration-500 ${
                      index === activeIndex ? 'w-full' : index < activeIndex ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Article cards */}
        <div className="space-y-8 mb-16">
          {newsArticles.map((article, index) => {
            const isExpanded = article.id === expandedId
            const isLeft = index % 2 === 0
            
            return (
              <article
                key={article.id}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{transitionDelay: `${index * 150}ms`}}
              >
                {/* Hover glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#30534A] to-[#C9862b] rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  isExpanded ? 'border-[#C9862b] shadow-[#C9862b]/20' : 'border-gray-100 group-hover:border-[#30534A]/30'
                }`}>
                  
                  <div className={`grid ${isLeft ? 'lg:grid-cols-5' : 'lg:grid-cols-5'} gap-0`}>
                    
                    {/* Image section */}
                    <div className={`relative h-64 sm:h-80 lg:h-auto lg:col-span-2 overflow-hidden ${!isLeft ? 'lg:order-2' : ''}`}>
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                        width="600"
                        height="400"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-[#30534A]/80 via-transparent to-[#C9862b]/60" />
                      
                      {/* Number badge */}
                      <div className="absolute top-6 left-6">
                        <div className="w-20 h-20 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                          <span className="text-4xl font-black bg-gradient-to-br from-[#30534A] to-[#C9862b] bg-clip-text text-transparent">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Category badge */}
                      <div className="absolute bottom-6 right-6">
                        <div className="px-5 py-2.5 bg-gradient-to-r from-[#30534A] to-[#C9862b] text-white text-xs font-bold rounded-full shadow-xl flex items-center gap-2">
                          <TrendingUp className="w-3.5 h-3.5" />
                          {article.category}
                        </div>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className={`lg:col-span-3 p-6 sm:p-8 lg:p-10 ${!isLeft ? 'lg:order-1' : ''}`}>
                      
                      {/* Date & author */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-[#C9862b]" />
                          <span className="font-bold">{article.date}</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <User className="w-4 h-4 text-[#30534A]" />
                          <span className="font-bold">{article.author}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-black text-[#30534A] mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#30534A] group-hover:to-[#C9862b] transition-all duration-300">
                        {article.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-base text-gray-600 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>

                      {/* Read more button */}
                      <button
                        onClick={() => toggleExpand(article.id)}
                        className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#30534A] to-[#C9862b] text-white rounded-2xl font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        {isExpanded ? 'Show Less' : 'Read Full Story'}
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} />
                      </button>

                      {/* Expanded content */}
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t-2 border-[#30534A]/10 transition-all duration-300">
                          <div className="p-6 bg-gradient-to-br from-[#30534A]/5 to-[#C9862b]/5 rounded-2xl border-l-4 border-[#C9862b]">
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                              {article.fullContent}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Accent line */}
                  <div className={`h-1.5 bg-gradient-to-r from-[#30534A] via-[#C9862b] to-[#30534A] transition-all duration-300 ${
                    isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#30534A] to-[#C9862b] rounded-3xl blur opacity-30" />
            <div className="relative bg-white rounded-3xl px-8 py-6 sm:px-12 sm:py-8 shadow-xl border-2 border-[#30534A]/10">
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-[#C9862b] mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-black text-[#30534A] mb-2">
                Want More Updates?
              </h3>
              <p className="text-sm text-gray-600 mb-5">
                Subscribe to our newsletter for latest news
              </p>
              <a href="#contact">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#30534A] to-[#C9862b] text-white rounded-2xl font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Subscribe Now
                  <Play className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}