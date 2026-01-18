"use client"

import { useState, useEffect } from "react"
import { ArrowRight, MapPin, Phone, Building2, Sparkles, Star, Eye, CheckCircle2, Award, TrendingUp, Calendar } from "lucide-react"

type Project = {
  id: number
  title: string
  image: string
  description: string
  location: string
  status: string
  videoId?: string
}

const projects = {
  ongoing: [
    {
      id: 2,
      title: "Mahalaxmi Nagar-31",
      image: "/ongoingProject8.webp",
      description: "Ready to move residential layout on Besa-Pipla Road, opposite Zudio & Croma. Prime location with up to 90% bank finance.",
      location: "MOUZA - BESA",
      status: "ongoing"
    },
    {
      id: 3,
      title: "Mahalaxmi Nagar-39",
      image: "/ongoingProject5.webp",
      description: "New project on Katol Road, Fetri (Chicholi), touching Outer Ring Road. Fully developed NMRDA & RL sanctioned.",
      location: "MOUZA - FETRI",
      status: "ongoing"
    },
    {
      id: 4,
      title: "Mahalaxmi Nagar-41",
      image: "/ongoingProject3.webp",
      description: "Premium layout near Samruddhi Mahamarg with clubhouse & swimming pool. NMRDA + RL approved. Up to 90% finance.",
      location: "MOUZA - GOMGAON",
      status: "ongoing"
    },
    {
      id: 5,
      title: "Mahalaxmi Nagar - 42",
      image: "/ongoingProject2.webp",
      description: "Well-connected plots near Jamtha, Wardha Road. NMRDA & RL sanctioned with excellent amenities.",
      location: "MOUZA - JAMTHA",
      status: "ongoing"
    },
    {
      id: 6,
      title: "Mahalaxmi Nagar - 43",
      image: "/project43.jpg",
      description: "Ready-to-move plots behind Royal Gondwana School, Shankarpur. Fully developed with 90% finance.",
      location: "MOUZA - SHANKARPUR",
      status: "ongoing"
    },
      { id: 7, title: "Mahalaxmi Nagar - 44", image: "/project44.jpg", description: "", location: "", status: "ongoing" },
    {
      id: 8,
      title: "Mahalaxmi Nagar - 45",
      image: "/project45.jpg",
      description: "Premium plotted development near Samruddhi Mahamarg, close to AIIMS, IIM, MIHAN & D-Mart.",
      location: "MOUZA - SUMTHANA",
      status: "ongoing"
    },
    {
      id: 9,
      title: "Mahalaxmi Nagar - 47",
      image: "/project47.jpg",
      description: "New launch behind Haldiram & AM Cinema on Koradi Road. NMRDA & RL approved with 90% finance.",
      location: "KORADI ROAD (Behind Haldiram)",
      status: "ongoing"
    },
  ],
  completed: [
    {
      id: 10,
      title: "Mahalaxmi Nagar - 37",
      image: "/completedProject1.webp",
      description: "NMRDA & RL sanctioned layout in Kotewada. 75-80% bank loan approved.",
      location: "MOUZA - KOTEWADA",
      status: "completed"
    },
    {
      id: 11,
      title: "Mahalaxmi Nagar - 35",
      image: "/completedProject2.webp",
      description: "Fully delivered premium layout with all amenities completed.",
      location: "MOUZA - KOTEWADA",
      status: "completed"
    },
    {
      id: 12,
      title: "Mahalaxmi Nagar - 34",
      image: "/completedProject3.webp",
      description: "Successfully delivered project with high appreciation value.",
      location: "MOUZA - BAHADURA",
      status: "completed"
    },
  ],
  upcoming: [
    { id: 13, title: "Mahalaxmi Nagar - 48", image: "/plotDef.avif", description: "", location: "", status: "upcoming" },
    { id: 14, title: "Mahalaxmi Nagar - 49", image: "/plotDef.avif", description: "", location: "", status: "upcoming" },
    { id: 15, title: "Mahalaxmi Nagar - 50", image: "/plotDef.avif", description: "", location: "", status: "upcoming" },
  ]
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [playerInstance, setPlayerInstance] = useState<any>(null)

  useEffect(() => {
    if (showVideo && project.videoId) {
      const initPlayer = () => {
        if ((window as any).cloudinary?.videoPlayer) {
          const player = (window as any).cloudinary.videoPlayer(`player-${project.id}`, {
            cloudName: 'dxujnm2sl',
            publicId: project.videoId,
            controls: true,
            autoplay: true,
            fluid: true,
            aspectRatio: '9:16',
            playbackRates: [0.5, 1, 1.5, 2]
          });
          setPlayerInstance(player);
        }
      };
      
      if ((window as any).cloudinary?.videoPlayer) {
        initPlayer();
      } else {
        setTimeout(initPlayer, 500);
      }
    }
    
    return () => {
      if (playerInstance) {
        try {
          playerInstance.dispose();
        } catch (e) {}
      }
    };
  }, [showVideo, project.videoId, project.id])
  
  const handleCloseVideo = () => {
    if (playerInstance) {
      try {
        playerInstance.pause();
      } catch (e) {}
    }
    setShowVideo(false);
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${project.title}. Please share more details.`
    const url = `https://wa.me/+918055353303?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="group relative">
      
      {/* Decorative Corner */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#C9862b] to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-0" />
      
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        
        {/* Image Section with Diagonal Cut */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          {project.videoId && showVideo ? (
            <div className="absolute inset-0 bg-black z-30">
              <button
                onClick={handleCloseVideo}
                className="absolute top-3 right-3 z-50 w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white shadow-2xl"
              >
                ✕
              </button>
              <video
                id={`player-${project.id}`}
                className="cld-video-player w-full h-full"
                controls
              />
            </div>
          ) : (
            <>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
              />
              
              {/* Diagonal Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#30534A]/80 via-transparent to-[#C9862b]/60" />
              
              {project.videoId && (
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/30 transition-all z-10 group/play"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 animate-ping" />
                    <div className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover/play:scale-110 transition-transform shadow-2xl">
                      <div className="w-0 h-0 border-l-[18px] border-l-[#C9862b] border-t-[11px] border-t-transparent border-b-[11px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </button>
              )}

              {/* Floating Number Badge */}
              <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform">
                <span className="text-2xl font-black bg-gradient-to-br from-[#30534A] to-[#C9862b] bg-clip-text text-transparent">
                  {project.title.split('-')[1] || project.id}
                </span>
              </div>

              {/* Status Pill - Floating */}
              <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[#C9862b] text-white text-xs font-bold shadow-lg backdrop-blur-sm transform group-hover:scale-105 transition-transform">
                ● Live
              </div>
            </>
          )}
        </div>

        {/* Content with Overlap Effect */}
        <div className="relative -mt-8 mx-4 bg-white rounded-2xl shadow-xl p-5 border-l-4 border-[#C9862b]">
          
          {/* Title */}
          <h3 className="text-xl font-black text-[#30534A] mb-3 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#C9862b]" />
            {project.title}
          </h3>

          {/* Location with Icon */}
          {project.location && (
            <div className="flex items-start gap-2 mb-4 p-3 bg-gradient-to-r from-[#30534A]/5 to-[#C9862b]/5 rounded-xl">
              <MapPin className="w-4 h-4 text-[#C9862b] flex-shrink-0 mt-0.5" />
              <p className="text-xs font-bold text-[#30534A]">{project.location}</p>
            </div>
          )}

          {/* Description */}
          {project.description && (
            <div className="mb-4">
              <p className={`text-sm text-gray-600 leading-relaxed ${!isExpanded ? 'line-clamp-2' : ''}`}>
                {project.description}
              </p>
              {project.description.length > 120 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#C9862b] text-xs font-bold mt-2 hover:text-[#30534A] transition-colors flex items-center gap-1"
                >
                  {isExpanded ? '− Less' : '+ More'}
                  <ArrowRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </button>
              )}
            </div>
          )}

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#30534A] text-white text-xs font-bold rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" />
              NMRDA
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C9862b] text-white text-xs font-bold rounded-full">
              <TrendingUp className="w-3.5 h-3.5" />
              90% Finance
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleWhatsApp}
            className="w-full bg-gradient-to-r from-[#30534A] to-[#C9862b] text-white py-3.5 rounded-xl font-bold text-sm hover:shadow-xl transition-all flex items-center justify-center gap-2 group/btn relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
            <Phone className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Get Details</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform relative z-10" />
          </button>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "ongoing" | "upcoming">("all")

  useEffect(() => {
    if (!document.getElementById('cloudinary-script')) {
      const script = document.createElement('script');
      script.id = 'cloudinary-script';
      script.src = 'https://unpkg.com/cloudinary-video-player@2.1.3/dist/cld-video-player.min.js';
      script.async = true;
      document.body.appendChild(script);
      
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/cloudinary-video-player@2.1.3/dist/cld-video-player.min.css';
      document.head.appendChild(link);
    }
  }, [])

  const allProjects = [
    ...projects.ongoing,
    ...projects.completed,
    ...projects.upcoming,
  ]

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((project) => project.status === activeTab)

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes slideFromLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideFromRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-slide-left { animation: slideFromLeft 0.8s ease-out forwards; }
        .animate-slide-right { animation: slideFromRight 0.8s ease-out forwards; }
        .animate-scale { animation: scaleUp 0.6s ease-out forwards; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Animated Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9862b]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#30534A]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}} />
      
      {/* Geometric Patterns */}
      <div className="absolute top-40 left-20 w-32 h-32 border-4 border-[#C9862b]/20 rounded-3xl rotate-45 animate-float" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border-4 border-[#30534A]/20 rounded-full animate-float" style={{animationDelay: '2s'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Hero Header Section */}
        <div className="mb-16 animate-slide-left">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            
            {/* Left Side */}
            <div className="lg:max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-5 px-5 py-2 bg-gradient-to-r from-[#30534A]/10 via-[#C9862b]/10 to-[#30534A]/10 rounded-full">
                <Star className="w-5 h-5 text-[#C9862b]" />
                <span className="text-sm font-black text-[#30534A] tracking-widest">EXPLORE PROJECTS</span>
                <div className="w-2 h-2 rounded-full bg-[#C9862b] animate-pulse" />
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#30534A] mb-5 leading-tight">
                Discover Your
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#C9862b]">Dream Property</span>
                  <div className="absolute bottom-2 left-0 w-full h-4 bg-[#C9862b]/20 -rotate-1" />
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Premium plotted developments in Nagpur's most coveted neighborhoods
              </p>
            </div>

            {/* Right Side - Circular Stats */}
            <div className="flex gap-4 justify-center lg:justify-end animate-slide-right">
              <div className="text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#30534A] to-[#30534A]/80 flex flex-col items-center justify-center shadow-xl transform hover:scale-110 transition-all">
                  <div className="text-3xl font-black text-white">{projects.ongoing.length}</div>
                  <div className="text-xs text-white/80 font-bold">Active</div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#C9862b] to-[#C9862b]/80 flex flex-col items-center justify-center shadow-xl transform hover:scale-110 transition-all">
                  <div className="text-3xl font-black text-white">{allProjects.length}</div>
                  <div className="text-xs text-white/80 font-bold">Total</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Artistic Filter Pills */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-3 scrollbar-hide animate-scale" style={{animationDelay: '200ms'}}>
          {[
            { label: "All Projects", value: "all", icon: Building2 },
            { label: "Ongoing", value: "ongoing", icon: TrendingUp },
            { label: "Completed", value: "completed", icon: CheckCircle2 },
            { label: "Upcoming", value: "upcoming", icon: Calendar }
          ].map((tab, i) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all whitespace-nowrap ${
                activeTab === tab.value
                  ? "bg-gradient-to-r from-[#30534A] to-[#C9862b] text-white shadow-2xl scale-105"
                  : "bg-white text-[#30534A] hover:bg-gray-50 border-2 border-gray-200 hover:border-[#C9862b]/30 hover:scale-105"
              }`}
              style={{animationDelay: `${i * 100}ms`}}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - Staggered Layout */}
        <div>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, i) => (
                <div key={project.id} className="animate-scale" style={{animationDelay: `${i * 150}ms`}}>
                  <ProjectCard project={project} index={i} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl">
              <div className="text-6xl mb-4">🏗️</div>
              <p className="text-[#30534A] font-bold text-xl">No projects available</p>
            </div>
          )}
        </div>

        {/* CTA Section - Asymmetric Design */}
        <div className="mt-20 relative animate-scale" style={{animationDelay: '600ms'}}>
          <div className="bg-gradient-to-r from-[#30534A] via-[#C9862b] to-[#30534A] rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="relative p-8 sm:p-12 lg:p-16">
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
                
                {/* Left Content */}
                <div className="text-center lg:text-left mb-8 lg:mb-0 lg:flex-1">
                  <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <Sparkles className="w-5 h-5 text-white" />
                    <span className="text-sm font-bold text-white">LIMITED OFFERS</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                    Ready to Invest in
                    <br />Your Future?
                  </h3>
                  
                  <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                    Schedule a site visit and explore Nagpur's most promising residential developments
                  </p>
                </div>

                {/* Right CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-[#30534A] rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C9862b]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <Phone className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">Contact Us</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}