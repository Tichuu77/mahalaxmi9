import dynamic from 'next/dynamic'
import { Navigation } from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"

// Lazy load components that aren't immediately visible
const AmenitiesSection = dynamic(() => import("@/components/amenities-section").then(mod => ({ default: mod.AmenitiesSection })))
const ProjectsSection = dynamic(() => import("@/components/projects-section").then(mod => ({ default: mod.ProjectsSection })))
const GallerySection = dynamic(() => import("@/components/gallery-section").then(mod => ({ default: mod.GallerySection })))
const WhyChooseUsSection = dynamic(() => import("@/components/why-choose-us-section").then(mod => ({ default: mod.WhyChooseUsSection })))
const UserGuideSection = dynamic(() => import("@/components/user-guide-section").then(mod => ({ default: mod.UserGuideSection })))
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then(mod => ({ default: mod.TestimonialsSection })))
const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => ({ default: mod.FAQSection })))
const ContactSection = dynamic(() => import("@/components/contact-section"))
const CallButton = dynamic(() => import("@/components/call-button"))
const WhatsappButton = dynamic(() => import("@/components/whatsapp-button"))
const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })))
const NewsArticles = dynamic(() => import("@/components/news-articals"))

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection/>
      <AboutSection />
      <AmenitiesSection />
      <ProjectsSection />
      <GallerySection />
      <WhyChooseUsSection />
      <UserGuideSection />
      <TestimonialsSection />
      <NewsArticles/>
      <FAQSection />
      <ContactSection />
      <CallButton/>
      <WhatsappButton />
      <Footer />
    </main>
  )
}