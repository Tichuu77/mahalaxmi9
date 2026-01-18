"use client"

import { useState, useRef, useEffect } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Award, Sparkles } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 3000)
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (res.ok) {
        setSubmitStatus("success")
        setFormState({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 3000)
      }
    } catch (error) {
      console.error(error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      
      {/* Static background decorations - removed animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#30534A]/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C9862b]/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-14 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#30534A]/10 rounded-full border border-[#30534A]/30 mb-4">
            <div className="w-2 h-2 bg-gradient-to-br from-[#30534A] to-[#C9862b] rounded-full" />
            <span className="text-[#30534A] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Get in Touch
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#30534A] mb-4 leading-tight">
            Let's Start a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C9862b] to-[#30534A]">
              Conversation
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#30534A]/70 max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to get started? We'd love to hear from you and help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            
            {/* Phone Card */}
            <a 
              href="tel:+919156315941"
              className="group block relative overflow-hidden bg-white p-6 rounded-2xl border-2 border-[#30534A]/20 hover:border-[#30534A] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#30534A]/10 to-transparent rounded-bl-full" />
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#30534A] to-[#C9862b] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-[#30534A] text-lg mb-1 flex items-center gap-2">
                    Phone
                    <span className="text-xs font-normal px-2 py-0.5 bg-[#30534A]/10 text-[#30534A] rounded-full">Call Now</span>
                  </h3>
                  <p className="text-[#30534A] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#30534A] group-hover:to-[#C9862b] transition-all font-bold text-lg">
                    +91 9156315941
                  </p>
                  <p className="text-[#30534A]/60 text-sm mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Mon-Fri, 9am-6pm
                  </p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:mukeshg201582@gmail.com"
              className="group block relative overflow-hidden bg-white p-6 rounded-2xl border-2 border-[#C9862b]/20 hover:border-[#C9862b] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C9862b]/10 to-transparent rounded-bl-full" />
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9862b] to-[#30534A] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-[#30534A] text-lg mb-1 flex items-center gap-2">
                    Email
                    <span className="text-xs font-normal px-2 py-0.5 bg-[#C9862b]/10 text-[#C9862b] rounded-full">Write Us</span>
                  </h3>
                  <p className="text-[#30534A] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#C9862b] group-hover:to-[#30534A] transition-all font-bold text-base break-all">
                    mukeshg201582@gmail.com
                  </p>
                  <p className="text-[#30534A]/60 text-sm mt-1 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Response in 24 hours
                  </p>
                </div>
              </div>
            </a>

            {/* Address Card */}
            <div className="relative overflow-hidden bg-white p-6 rounded-2xl border-2 border-[#30534A]/20 shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#30534A]/10 to-transparent rounded-bl-full" />
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#30534A] to-[#C9862b] flex items-center justify-center text-white shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-[#30534A] text-lg mb-1">Visit Us</h3>
                  <p className="text-[#30534A]/80 font-semibold">
                    Nagpur, Maharashtra<br />India 441106
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gradient-to-br from-[#30534A] to-[#C9862b] rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Why Choose Us?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm">Quick Response Time</p>
                    <p className="text-xs text-white/80">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm">Free Consultation</p>
                    <p className="text-xs text-white/80">Expert advice at no cost</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm">Trusted by 500+ Clients</p>
                    <p className="text-xs text-white/80">Join our satisfied customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white border-2 border-[#30534A]/20 p-6 sm:p-8 rounded-3xl shadow-2xl">
              {submitStatus === "success" ? (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#30534A] to-[#C9862b] flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#30534A] to-[#C9862b] mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[#30534A]/70 mb-6">We'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="px-6 py-3 bg-gradient-to-r from-[#30534A] to-[#C9862b] text-white rounded-xl font-bold hover:scale-105 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-[#30534A] mb-2">Send Us a Message</h3>
                    <p className="text-sm text-[#30534A]/60">Fill out the form below and we'll get in touch shortly</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name and Email Row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-[#30534A] font-bold mb-2 text-sm">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-[#30534A]/20 rounded-xl text-[#30534A] placeholder:text-[#30534A]/40 focus:border-[#30534A] focus:bg-white focus:outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[#30534A] font-bold mb-2 text-sm">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-[#30534A]/20 rounded-xl text-[#30534A] placeholder:text-[#30534A]/40 focus:border-[#30534A] focus:bg-white focus:outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-[#30534A] font-bold mb-2 text-sm">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-[#30534A]/20 rounded-xl text-[#30534A] placeholder:text-[#30534A]/40 focus:border-[#30534A] focus:bg-white focus:outline-none transition-all"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-[#30534A] font-bold mb-2 text-sm">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-[#30534A]/20 rounded-xl text-[#30534A] placeholder:text-[#30534A]/40 focus:border-[#30534A] focus:bg-white focus:outline-none transition-all resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    {/* Error Message */}
                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-600 text-sm flex items-start gap-2">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Please fill in all required fields and try again.</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-gradient-to-r from-[#30534A] to-[#C9862b] text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}