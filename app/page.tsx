"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Menu, X } from "lucide-react"
import { FaDownload, FaReact, FaRegHeart } from "react-icons/fa"

const typeEffect = [
  "Buy Once, Download Anytime, Keep Forever",
  "Sell for Free, Pay Only When You Earn",
  "Instant Payouts, Full Control, No Limits"
]

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Helper to interpolate position
  const interpolate = (start: number, end: number) => start + (end - start) * scrollProgress

  // Center coordinates (approximate, adjust as needed)
  const centerX = "50vw"
  const centerY = "50vh"

  // Typing effect state
  const [typedText, setTypedText] = useState("")
  const [effectIndex, setEffectIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = typeEffect[effectIndex]
    let typingSpeed = isDeleting ? 40 : 80

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setTypedText(currentText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentText.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1200)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setEffectIndex((effectIndex + 1) % typeEffect.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, effectIndex])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-4 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]" />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-between p-4 md:p-6 lg:p-8"
      >
        <motion.div
          className="text-xl md:text-2xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          3dimli
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Portfolio
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            About
          </a>
          <Button
            variant="outline"
            className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent"
          >
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-md p-6 flex flex-col space-y-4 border-t border-white/10"
          >
            <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">
              Portfolio
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">
              About
            </a>
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent mt-2"
            >
              Contact
            </Button>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-120px)] px-4 md:px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 md:mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs md:text-sm text-gray-300 mb-6 md:mb-8">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span>Bringing Ideas to Life in 3D</span>
          </div>
        </motion.div>

        {/* Typing Effect Heading */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight min-h-[2.5rem] md:min-h-[3.5rem] break-words px-2"
        >
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-md md:max-w-xl mx-auto text-sm md:text-base text-gray-300 mb-6 md:mb-8 px-4"
        >
          Discover premium 3D assets with lifetime access. No subscriptions, no strings attached.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center"
        >
          <Button
            size="lg"
            className="shine-btn bg-transparent border-2 rounded-full text-white px-8 py-6 md:px-10 md:py-7 text-base md:text-lg font-semibold group relative overflow-hidden"
          >
            Explore all products
          </Button>

           
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/10 w-full max-w-md md:max-w-2xl px-4"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">500+</div>
            <div className="text-xs md:text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">50+</div>
            <div className="text-xs md:text-sm text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">5+</div>
            <div className="text-xs md:text-sm text-gray-400">Years Experience</div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements - Responsive */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          left: `calc(${interpolate(20, 50)}vw)`,
          top: `calc(${interpolate(25, 50)}vh)`,
          transform: "translate(-50%, -50%)",
        }}
        className="absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center 
          bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 
          rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl shadow-blue-500/30 border-2 border-white/20"
      >
        <FaReact className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white drop-shadow-lg" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          right: `calc(${interpolate(8, 50)}vw)`,
          top: `calc(${interpolate(33, 50)}vh)`,
          transform: "translate(50%, -50%)",
        }}
        className="absolute w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center 
          bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-400 
          rounded-full shadow-xl md:shadow-2xl shadow-cyan-400/30 border-2 border-white/20"
      >
        <FaDownload className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          left: `calc(${interpolate(25, 50)}vw)`,
          bottom: `calc(${interpolate(25, 50)}vh)`,
          transform: "translate(-50%, 50%)",
        }}
        className="absolute w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center 
          bg-gradient-to-br from-pink-500 via-purple-500 to-blue-400 
          rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl shadow-pink-500/30 border-2 border-white/20"
      >
        <FaRegHeart className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white drop-shadow-lg" />
      </motion.div>
    </div>
  )
}