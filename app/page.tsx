"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaDownload, FaReact, FaRegHeart, FaCube, FaPalette, FaMagic, FaStar } from "react-icons/fa"
import Navbar from "../components/Navbar"


const typeEffect = [
  "Buy Once, Download Anytime, Keep Forever",
  "Sell for Free, Pay Only When You Earn",
  "Instant Payouts, Full Control, No Limits"
]

export default function HomePage() {
  const heroSectionRef = useRef<HTMLDivElement>(null)
  const [clickedElement, setClickedElement] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })


  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"],
  })


  const topElementsProgress = useTransform(scrollYProgress, [0, 0.15], [0, 1])
  const middleElementsProgress = useTransform(scrollYProgress, [0.05, 0.2], [0, 1])
  const bottomElementsProgress = useTransform(scrollYProgress, [0.1, 0.25], [0, 1])


  const centerX = 50
  const centerY = 50

  // Element descriptions
  const elementDescriptions = {
    react: "React.js - Modern JavaScript library for building user interfaces",
    cube: "3D Cube - Represents 3D modeling and design capabilities",
    download: "Download - Easy file downloads and asset management",
    heart: "Favorites - Save and organize your favorite 3D models",
    star: "Featured - Discover top-rated and featured content",
    palette: "Design Tools - Creative tools for 3D design and editing",
    magic: "AI Magic - AI-powered features and automation"
  }

  // Handle element hover
  const handleElementHover = (elementId: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.bottom + 10

    setClickedElement(elementId)
    setTooltipPosition({ x, y })
  }

  const handleElementLeave = () => {
    setClickedElement(null)
  }

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
    <div className="min-h-screen bg-gradient-to-br bg-black bg-blend-saturation relative overflow-hidden">

      {/* Background */}
      <div className="bg-white/3 absolute inset-0">

        <div className="absolute inset-0">
          <div className="absolute bg-[#ef233c] block blur-3xl filter h-44 w-44 md:h-[22rem] md:w-[22rem] lg:h-[28rem] lg:w-[28rem] opacity-15 rounded-full left-5 top-1/4 md:left-[17%]" />
          <div className="absolute bg-[#04868b] block blur-3xl filter h-44 w-44 md:h-[22rem] md:w-[22rem] lg:h-[28rem] lg:w-[28rem] opacity-20 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative h-[200vh] pt-32">
        <div className="sticky top-32 h-screen z-10 flex flex-col items-center justify-center px-4 md:px-6 text-center">

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
            className="text-[10px] lg:text-xl px-5 md:px-0 font-medium leading-[1.4] text-white/80 dark:text-neutral-400 max-w-3xl mx-auto mb-8 md:mb-16"
          >
            Your one-stop digital platform for 3D models
            and digital creations.<br className="hidden sm:block" />
            Join our community of creators and collectors today.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center"
          >
            <Button
              size="lg"
              className="shine-btn bg-slate-900/80 border-2 border-white/20 rounded-full text-white px-8 py-6 md:px-10 md:py-7 text-base md:text-lg font-semibold group relative overflow-hidden z-30"
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

          {/* Floating Elements */}

          {/* Top Left */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: useTransform(topElementsProgress, [0, 0.4], ["15%", `${centerX}%`]),
              top: useTransform(topElementsProgress, [0, 0.4], ["15%", `${centerY}%`]),
              width: useTransform(topElementsProgress, [0, 1], ["56px", "28px"]),
              height: useTransform(topElementsProgress, [0, 1], ["56px", "28px"]),
              opacity: useTransform(topElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/10 flex items-center justify-center  
            rounded-full shadow-xl md:shadow-2xl shadow-cyan-400/30 border-2 border-white/20 transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('react', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(topElementsProgress, [0, 1], ["32px", "16px"]), height: useTransform(topElementsProgress, [0, 1], ["32px", "16px"]) }}
            >
              <FaReact className="text-cyan-400 drop-shadow-lg " style={{ width: "100%", height: "100%" }} />
            </motion.div>
          </motion.div>

          {/* Top Right */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{
              right: useTransform(topElementsProgress, [0, 0.8], ["15%", `${centerX}%`]),
              top: useTransform(topElementsProgress, [0, 0.8], ["15%", `${centerY}%`]),
              width: useTransform(topElementsProgress, [0, 1], ["52px", "26px"]),
              height: useTransform(topElementsProgress, [0, 1], ["52px", "26px"]),
              opacity: useTransform(topElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/10 flex items-center justify-center 
            rounded-full shadow-xl md:shadow-2xl shadow-cyan-400/30 border-2 border-white/20 transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('cube', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(topElementsProgress, [0, 1], ["28px", "14px"]), height: useTransform(topElementsProgress, [0, 1], ["28px", "14px"]) }}
            >
              <FaCube className="text-blue-600 drop-shadow-lg" style={{ width: "100%", height: "100%" }} />
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            animate={{
              y: [0, 12, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{
              right: useTransform(middleElementsProgress, [0, 1], ["10%", `${centerX}%`]),
              top: useTransform(middleElementsProgress, [0, 1], ["40%", `${centerY}%`]),
              width: useTransform(middleElementsProgress, [0, 1], ["60px", "30px"]),
              height: useTransform(middleElementsProgress, [0, 1], ["60px", "30px"]),
              opacity: useTransform(middleElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/10 hidden sm:flex items-center justify-center  
            rounded-full shadow-xl md:shadow-2xl shadow-cyan-400/30 border-2 border-white/20 transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('download', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(middleElementsProgress, [0, 1], ["32px", "16px"]), height: useTransform(middleElementsProgress, [0, 1], ["32px", "16px"]) }}
            >
              <FaDownload className="text-green-500 drop-shadow-lg" style={{ width: "100%", height: "100%" }} />
            </motion.div>
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5,
            }}
            style={{
              right: useTransform(bottomElementsProgress, [0, 1.8], ["15%", `${centerX}%`]),
              bottom: useTransform(bottomElementsProgress, [0, 1.8], ["15%", `${centerY}%`]),
              width: useTransform(bottomElementsProgress, [0, 1], ["48px", "24px"]),
              height: useTransform(bottomElementsProgress, [0, 1], ["48px", "24px"]),
              opacity: useTransform(bottomElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/10 flex items-center justify-center 
            rounded-full shadow-xl md:shadow-2xl shadow-cyan-400/30 border-2 border-white/20 transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('heart', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(bottomElementsProgress, [0, 1], ["24px", "12px"]), height: useTransform(bottomElementsProgress, [0, 1], ["24px", "12px"]) }}
            >
              <FaRegHeart className="text-red-600 drop-shadow-lg" style={{ width: "100%", height: "100%" }} />
            </motion.div>
          </motion.div>

          {/* Bottom */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            style={{
              left: useTransform(bottomElementsProgress, [0, 1.5], ["50%", `${centerX}%`]),
              bottom: useTransform(bottomElementsProgress, [0, 1.5], ["10%", `${centerY}%`]),
              width: useTransform(bottomElementsProgress, [0, 1], ["56px", "28px"]),
              height: useTransform(bottomElementsProgress, [0, 1], ["56px", "28px"]),
              opacity: useTransform(bottomElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/10 flex items-center justify-center 
            rounded-full shadow-xl md:shadow-2xl shadow-cyan-400/30 border-2 border-white/20 transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('star', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(bottomElementsProgress, [0, 1], ["28px", "14px"]), height: useTransform(bottomElementsProgress, [0, 1], ["28px", "14px"]) }}
            >
              <FaStar className="text-yellow-500 drop-shadow-lg" style={{ width: "100%", height: "100%" }} />
            </motion.div>
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -4, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2.5,
            }}
            style={{
              left: useTransform(bottomElementsProgress, [0, 1.3], ["15%", `${centerX}%`]),
              bottom: useTransform(bottomElementsProgress, [0, 1.3], ["15%", `${centerY}%`]),
              width: useTransform(bottomElementsProgress, [0, 1], ["52px", "26px"]),
              height: useTransform(bottomElementsProgress, [0, 1], ["52px", "26px"]),
              opacity: useTransform(bottomElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/10 flex items-center justify-center 
            rounded-full shadow-xl md:shadow-2xl shadow-cyan-400/30 border-2 border-white/20 transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('palette', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(bottomElementsProgress, [0, 1], ["28px", "14px"]), height: useTransform(bottomElementsProgress, [0, 1], ["28px", "14px"]) }}
            >
              <FaPalette className="text-orange-500 drop-shadow-lg" style={{ width: "100%", height: "100%" }} />
            </motion.div>
          </motion.div>

          {/* Left */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            }}
            style={{
              left: useTransform(middleElementsProgress, [0, 1.2], ["10%", `${centerX}%`]),
              top: useTransform(middleElementsProgress, [0, 1.2], ["40%", `${centerY}%`]),
              width: useTransform(middleElementsProgress, [0, 1], ["60px", "30px"]),
              height: useTransform(middleElementsProgress, [0, 1], ["60px", "30px"]),
              opacity: useTransform(middleElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/10 hidden sm:flex items-center justify-center
            rounded-full shadow-xl md:shadow-2xl shadow-cyan-400/30 border-2 border-white/20 transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('magic', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(middleElementsProgress, [0, 1], ["32px", "16px"]), height: useTransform(middleElementsProgress, [0, 1], ["32px", "16px"]) }}
            >
              <FaMagic className="text-fuchsia-600 drop-shadow-lg" style={{ width: "100%", height: "100%" }} />
            </motion.div>
          </motion.div>

          {/* Tooltip */}
          {clickedElement && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              style={{
                position: 'fixed',
                left: tooltipPosition.x,
                top: tooltipPosition.y,
                transform: 'translateX(-50%)',
                zIndex: 1000
              }}
            >
              <div className="bg-slate-800/90 backdrop-blur-sm border-2 border-dashed border-cyan-400/60 rounded-lg p-3 shadow-2xl max-w-[200px]">
                <p className="text-white text-xs text-center leading-relaxed">
                  {elementDescriptions[clickedElement as keyof typeof elementDescriptions]}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}