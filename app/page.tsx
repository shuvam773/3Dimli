"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaRegHeart } from "react-icons/fa"
import { BiCart, BiCategory, BiCube } from "react-icons/bi"
import { GoTag } from "react-icons/go"
import { HiUsers } from "react-icons/hi"
import Navbar from "../components/Navbar"
import { FiDownload, FiHeadphones, FiUpload } from "react-icons/fi"
import { CiSearch, CiStar } from "react-icons/ci"
import Image from "next/image"

const typeEffect = [
  "Buy Once, Download Anytime, Keep Forever",
  "Sell for Free, Pay Only When You Earn",
  "Instant Payouts, Full Control, No Limits"
]

type ElementId =
  | "cube"
  | "download"
  | "heart"
  | "star"
  | "users"
  | "cart"
  | "search"
  | "upload"
  | "category"
  | "support"
  | "tags"

export default function HomePage() {
  const heroSectionRef = useRef<HTMLDivElement>(null)
  const [clickedElement, setClickedElement] = useState<ElementId | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [textHeight, setTextHeight] = useState(0)
  const textRef = useRef<HTMLSpanElement>(null);

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
  const elementDescriptions: Record<ElementId, string> = {
    cube: "3D Cube - Represents 3D modeling and design capabilities",
    download: "Download - Easy file downloads and asset management",
    heart: "Favorites - Save and organize your favorite 3D models",
    star: "Featured - Discover top-rated and featured content",
    users: "Community - Join our growing community of creators",
    cart: "Shopping Cart - Purchase your favorite 3D assets",
    search: "Search - Find the perfect 3D model for your project",
    upload: "Upload - Share your creations with the community",
    category: "Categories - Browse models by category",
    support: "Support - Get help from our dedicated team",
    tags: "Tags - Use tags to organize and find assets",
  }

  const elementTitles: Record<ElementId, string> = {
    cube: "3D Models",
    download: "Digital Assets",
    heart: "Favorites",
    star: "Featured Content",
    users: "Community",
    cart: "Marketplace",
    search: "Advanced Search",
    upload: "Sell Your Work",
    category: "Browse Categories",
    support: "24/7 Support",
    tags: "Tag System",
  }

  const elementIcons: Record<ElementId, React.ReactNode> = {
    cube: <BiCube className="w-5 h-5 text-cyan-400" />,
    download: <FiDownload className="w-5 h-5 text-cyan-400" />,
    heart: <FaRegHeart className="w-5 h-5 text-cyan-400" />,
    star: <CiStar className="w-5 h-5 text-cyan-400" />,
    users: <HiUsers className="w-5 h-5 text-cyan-400" />,
    cart: <BiCart className="w-5 h-5 text-cyan-400" />,
    search: <CiSearch className="w-5 h-5 text-cyan-400" />,
    upload: <FiUpload className="w-5 h-5 text-cyan-400" />,
    category: <BiCategory className="w-5 h-5 text-cyan-400" />,
    support: <FiHeadphones className="w-5 h-5 text-cyan-400" />,
    tags: <GoTag className="w-5 h-5 text-cyan-400" />,
  }

  const elementImages: Partial<Record<ElementId, string>> = {
    cube: "/assets/car-model.40128753.png",
    star: "/placeholder.jpg",
    upload: "/assets/car-model.40128753.png",
  }

  // Handle element hover
  const handleElementHover = (elementId: ElementId, event: React.MouseEvent) => {
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

  useEffect(() => {
    if (textRef.current) {
      // Get the maximum height needed (for 2 lines)
      const lineHeight = parseInt(getComputedStyle(textRef.current).lineHeight);
      setTextHeight(lineHeight * 2);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br bg-black bg-blend-saturation relative overflow-hidden">

      {/* Background */}
      <div className="bg-white/3 lg:bg-neutral-200/2 absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute bg-[#ef233c] blur-3xl filter h-44 w-44 md:h-[22rem] md:w-[22rem] lg:h-[28rem] lg:w-[28rem] opacity-15 rounded-full"
            style={{
              left: '10%',
              top: '15%'
            }}
          />
          <div
            className="absolute bg-[#04868b] blur-3xl filter h-44 w-44 md:h-[22rem] md:w-[22rem] lg:h-[28rem] lg:w-[28rem] opacity-20 rounded-full"
            style={{
              right: '45%',
              bottom: '45%'
            }}
          />
        </div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative h-[200vh] pt-20">
        <div className="sticky top-20 h-screen z-10 flex flex-col items-center justify-center px-4 md:px-6 text-center">

          {/* Typing Effect Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-6 leading-tight px-2 flex items-center justify-center"
            style={{
              height: textHeight || 'auto',
              minHeight: textHeight || '3.5rem',
            }}
          >
            <span ref={textRef} className="text-white text-center">
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
              size="sm"
              className="shine-btn bg-transparent border-2 border-white/20 rounded-full text-white px-6 py-4 md:px-10 md:py-6 text-base md:text-sm font-semibold group relative overflow-hidden z-30"
            >
              Explore all products
            </Button>
          </motion.div>


          {/* Floating Elements - Enhanced to match screenshot */}

          {/* Top Left*/}
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
              left: useTransform(topElementsProgress, [0, 0.4], ["13%", `${centerX}%`]),
              top: useTransform(topElementsProgress, [0, 0.4], ["12%", `${centerY}%`]),
              width: useTransform(topElementsProgress, [0, 1], ["72px", "28px"]),
              height: useTransform(topElementsProgress, [0, 1], ["72px", "28px"]),
              opacity: useTransform(topElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/15 flex items-center justify-center  
            rounded-full transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('cube', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(topElementsProgress, [0, 1], ["32px", "16px"]), height: useTransform(topElementsProgress, [0, 1], ["32px", "16px"]) }} className="flex items-center justify-center w-full h-full"
            >
              <BiCube className="text-blue-800 drop-shadow-lg " style={{ width: "80%", height: "80%" }} />
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
              right: useTransform(topElementsProgress, [0, 0.8], ["12%", `${centerX}%`]),
              top: useTransform(topElementsProgress, [0, 0.8], ["14%", `${centerY}%`]),
              width: useTransform(topElementsProgress, [0, 1], ["72px", "26px"]),
              height: useTransform(topElementsProgress, [0, 1], ["72px", "26px"]),
              opacity: useTransform(topElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/15 flex items-center justify-center 
            rounded-full transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('cart', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(topElementsProgress, [0, 1], ["28px", "14px"]), height: useTransform(topElementsProgress, [0, 1], ["28px", "14px"]) }}
              className="flex items-center justify-center w-full h-full"
            >
              <BiCart className="text-green-700 drop-shadow-lg" style={{ width: "80%", height: "80%" }} />
            </motion.div>
          </motion.div>


          {/* Right Top */}
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
              right: useTransform(middleElementsProgress, [0, 1], ["21%", `${centerX}%`]),
              top: useTransform(middleElementsProgress, [0, 1], ["35%", `${centerY}%`]),
              width: useTransform(middleElementsProgress, [0, 1], ["72px", "30px"]),
              height: useTransform(middleElementsProgress, [0, 1], ["72px", "30px"]),
              opacity: useTransform(middleElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/15 flex items-center justify-center  
            rounded-full transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('search', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(middleElementsProgress, [0, 1], ["32px", "16px"]), height: useTransform(middleElementsProgress, [0, 1], ["32px", "16px"]) }}
              className="flex items-center justify-center w-full h-full"
            >
              <CiSearch className="text-blue-500 drop-shadow-lg" style={{ width: "80%", height: "80%" }} />
            </motion.div>
          </motion.div>

          {/* Right Center */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5,
            }}
            style={{
              right: useTransform(middleElementsProgress, [0, 1.2], ["10%", `${centerX}%`]),
              top: useTransform(middleElementsProgress, [0, 1.2], ["58%", `${centerY}%`]),
              width: useTransform(middleElementsProgress, [0, 1], ["72px", "26px"]),
              height: useTransform(middleElementsProgress, [0, 1], ["72px", "26px"]),
              opacity: useTransform(middleElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/15 flex items-center justify-center 
            rounded-full transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('upload', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(middleElementsProgress, [0, 1], ["28px", "14px"]), height: useTransform(middleElementsProgress, [0, 1], ["28px", "14px"]) }}
              className="flex items-center justify-center w-full h-full"
            >
              <FiUpload className="text-green-600 drop-shadow-lg" style={{ width: "80%", height: "80%" }} />
            </motion.div>
          </motion.div>

          {/* Right Bottom */}
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -4, 0],
            }}
            transition={{
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            style={{
              right: useTransform(bottomElementsProgress, [0, 1.8], ["24%", `${centerX}%`]),
              top: useTransform(bottomElementsProgress, [0, 1.8], ["72%", `${centerY}%`]),
              width: useTransform(bottomElementsProgress, [0, 1], ["72px", "28px"]),
              height: useTransform(bottomElementsProgress, [0, 1], ["72px", "28px"]),
              opacity: useTransform(bottomElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/15 flex items-center justify-center 
            rounded-full transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('category', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(bottomElementsProgress, [0, 1], ["28px", "14px"]), height: useTransform(bottomElementsProgress, [0, 1], ["28px", "14px"]) }}
              className="flex items-center justify-center w-full h-full"
            >
              <BiCategory className="text-orange-700 drop-shadow-lg" style={{ width: "80%", height: "80%" }} />
            </motion.div>
          </motion.div>

          {/* Bottom Center */}
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
              left: useTransform(bottomElementsProgress, [0, 1.5], ["44%", `${centerX}%`]),
              bottom: useTransform(bottomElementsProgress, [0, 1.5], ["14%", `${centerY}%`]),
              width: useTransform(bottomElementsProgress, [0, 1], ["72px", "28px"]),
              height: useTransform(bottomElementsProgress, [0, 1], ["72px", "28px"]),
              opacity: useTransform(bottomElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/15 flex items-center justify-center 
            rounded-full transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('support', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(bottomElementsProgress, [0, 1], ["28px", "14px"]), height: useTransform(bottomElementsProgress, [0, 1], ["28px", "14px"]) }}
              className="flex items-center justify-center w-full h-full"
            >
              <FiHeadphones className="text-zinc-600 drop-shadow-lg" style={{ width: "80%", height: "80%" }} />
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
              left: useTransform(bottomElementsProgress, [0, 1.3], ["13%", `${centerX}%`]),
              bottom: useTransform(bottomElementsProgress, [0, 1.3], ["20%", `${centerY}%`]),
              width: useTransform(bottomElementsProgress, [0, 1], ["72px", "26px"]),
              height: useTransform(bottomElementsProgress, [0, 1], ["72px", "26px"]),
              opacity: useTransform(bottomElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/15 flex items-center justify-center 
            rounded-full transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('heart', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(bottomElementsProgress, [0, 1], ["28px", "14px"]), height: useTransform(bottomElementsProgress, [0, 1], ["28px", "14px"]) }}
              className="flex items-center justify-center w-full h-full"
            >
              <FaRegHeart className="text-red-800 drop-shadow-lg" style={{ width: "80%", height: "80%" }} />
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
              left: useTransform(bottomElementsProgress, [0, 1.3], ["30%", `${centerX}%`]),
              bottom: useTransform(bottomElementsProgress, [0, 1.3], ["15%", `${centerY}%`]),
              width: useTransform(bottomElementsProgress, [0, 1], ["72px", "26px"]),
              height: useTransform(bottomElementsProgress, [0, 1], ["72px", "26px"]),
              opacity: useTransform(bottomElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/15 flex items-center justify-center 
            rounded-full transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('star', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(bottomElementsProgress, [0, 1], ["28px", "14px"]), height: useTransform(bottomElementsProgress, [0, 1], ["28px", "14px"]) }}
              className="flex items-center justify-center w-full h-full"
            >
              <CiStar className="text-yellow-500 drop-shadow-lg" style={{ width: "80%", height: "80%" }} />
            </motion.div>
          </motion.div>

          {/* Left Bottom */}
          <motion.div
            animate={{
              y: [0, 12, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            }}
            style={{
              left: useTransform(middleElementsProgress, [0, 1.2], ["23%", `${centerX}%`]),
              top: useTransform(middleElementsProgress, [0, 1.2], ["54%", `${centerY}%`]),
              width: useTransform(middleElementsProgress, [0, 1], ["72px", "26px"]),
              height: useTransform(middleElementsProgress, [0, 1], ["72px", "26px"]),
              opacity: useTransform(middleElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/15 flex items-center justify-center
            rounded-full transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('download', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(middleElementsProgress, [0, 1], ["28px", "14px"]), height: useTransform(middleElementsProgress, [0, 1], ["28px", "14px"]) }}
              className="flex items-center justify-center w-full h-full"
            >
              <FiDownload className="text-green-600 drop-shadow-lg" style={{ width: "80%", height: "80%" }} />
            </motion.div>
          </motion.div>

          {/* Left Center */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3.5,
            }}
            style={{
              left: useTransform(middleElementsProgress, [0, 1.2], ["10%", `${centerX}%`]),
              top: useTransform(middleElementsProgress, [0, 1.2], ["40%", `${centerY}%`]),
              width: useTransform(middleElementsProgress, [0, 1], ["72px", "28px"]),
              height: useTransform(middleElementsProgress, [0, 1], ["72px", "28px"]),
              opacity: useTransform(middleElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/15 flex items-center justify-center
            rounded-full transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('users', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(middleElementsProgress, [0, 1], ["32px", "16px"]), height: useTransform(middleElementsProgress, [0, 1], ["32px", "16px"]) }} className="flex items-center justify-center w-full h-full"
            >
              <HiUsers className="text-purple-700 drop-shadow-lg" style={{ width: "80%", height: "80%" }} />
            </motion.div>
          </motion.div>

          {/* Left Top */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 4,
            }}
            style={{
              left: useTransform(middleElementsProgress, [0, 1.2], ["23%", `${centerX}%`]),
              top: useTransform(middleElementsProgress, [0, 1.2], ["27%", `${centerY}%`]),
              width: useTransform(middleElementsProgress, [0, 1], ["72px", "30px"]),
              height: useTransform(middleElementsProgress, [0, 1], ["72px", "30px"]),
              opacity: useTransform(middleElementsProgress, [0.7, 1], [1, 0]),
            }}
            className="absolute bg-white/15 flex items-center justify-center
            rounded-full transition-all duration-300 z-0 cursor-pointer hover:scale-110"
            onMouseEnter={(e) => handleElementHover('tags', e)}
            onMouseLeave={handleElementLeave}
          >
            <motion.div
              style={{ width: useTransform(middleElementsProgress, [0, 1], ["32px", "16px"]), height: useTransform(middleElementsProgress, [0, 1], ["32px", "16px"]) }} className="flex items-center justify-center w-full h-full"
            >
              <GoTag className="text-orange-500 drop-shadow-lg" style={{ width: "80%", height: "80%" }} />
            </motion.div>
          </motion.div>

          {/* Tooltip Card */}
          {clickedElement && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 0 }}
              style={{
                position: "fixed",
                left: tooltipPosition.x,
                top: tooltipPosition.y,
                transform: "translateX(50%)",
                zIndex: 1000,
              }}
            >
              <div className="bg-slate-900/95 backdrop-blur-sm border-dashed border-slate-700 border-3 rounded-2xl shadow-xl w-[260px] p-4 flex flex-col items-center text-center">

                {/* Icon + Title */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white p-2 rounded-full">
                    {elementIcons[clickedElement]} {/* render icon dynamically */}
                  </div>
                  <h3 className="text-white font-semibold text-sm">
                    {elementTitles[clickedElement]}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  {elementDescriptions[clickedElement]}
                </p>

                {/* Image */}
                {elementImages[clickedElement] && (
                  <div className="w-full rounded-lg overflow-hidden">
                    <Image
                      src={elementImages[clickedElement]}
                      alt={elementTitles[clickedElement]}
                      className="w-full object-cover"
                      width={400} height={200}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          )}

        </div>
      </section>
    </div>
  )
}
