"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Search } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import { CiUser } from "react-icons/ci"
import { FiUpload } from "react-icons/fi"
import Image from "next/image"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Fixed Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 bg-slate-900/90 backdrop-blur-xl border-b border-white/10"
      >
        {/* Left - Logo */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Image 
            src="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Logo/3DIMLI%20LOGO.svg" 
            alt="Logo" 
            width={120} 
            height={120}
            className="w-24 h-8 sm:w-28 sm:h-9 md:w-32 md:h-10 lg:w-36 lg:h-11"
          />
          <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 hidden sm:inline-block font-semibold">BETA 1.0.1</span>
        </div>

        {/* Middle - Links + Search */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 flex-1 justify-center max-w-4xl mx-auto">
          <a href="#" className="text-lg xl:text-xl text-gray-300 hover:text-white transition-colors font-medium whitespace-nowrap">Home</a>
          <a href="#" className="text-lg xl:text-xl text-gray-300 hover:text-white transition-colors font-medium whitespace-nowrap">Discover</a>
          <a href="#" className="text-lg xl:text-xl text-gray-300 hover:text-white transition-colors font-medium whitespace-nowrap">Features</a>
          <a href="#" className="text-lg xl:text-xl text-gray-300 hover:text-white transition-colors font-medium whitespace-nowrap">Pricing</a>

          {/* Search Bar */}
          <div className="ml-6 xl:ml-10 flex items-center bg-slate-800/50 border border-gray-600 rounded-lg xl:rounded-xl px-3 xl:px-6 py-2 xl:py-3">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm xl:text-base text-white placeholder-gray-400 w-32 xl:w-48 2xl:w-64"
            />
            <Search className="h-4 w-4 xl:h-5 xl:w-5 text-gray-400 ml-2" />
          </div>
        </div>

        {/* Right - Buttons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          <button className="bg-blue-900/80 hover:bg-blue-800 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg xl:rounded-xl flex items-center space-x-2 xl:space-x-3 hover:bg-blue-800 transition text-sm xl:text-base font-semibold">
            <FaDiscord className="h-4 w-4 xl:h-5 xl:w-5" />
            <span>Discord</span>
          </button>
          <button className="bg-blue-900/80 hover:bg-blue-800 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg xl:rounded-xl flex items-center space-x-2 xl:space-x-3 hover:bg-blue-800 transition text-sm xl:text-base font-semibold">
            <FiUpload className="h-4 w-4 xl:h-5 xl:w-5" />
            <span>Upload</span>
          </button>
          <button className="w-8 h-8 xl:w-10 xl:h-10 rounded-full border border-gray-500 flex items-center justify-center text-white hover:border-gray-400 transition">
            <CiUser className="h-4 w-4 xl:h-5 xl:w-5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-1"
          >
            {isMobileMenuOpen ? <X size={28} className="sm:w-8 sm:h-8" /> : <Menu size={28} className="sm:w-8 sm:h-8" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed top-[88px] sm:top-[104px] left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-gray-800 z-40"
        >
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="flex items-center bg-slate-800/50 border border-gray-600 rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm text-white placeholder-gray-400 flex-1"
              />
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="space-y-1">
              <a href="#" className="block py-2 px-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50">Home</a>
              <a href="#" className="block py-2 px-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50">Discover</a>
              <a href="#" className="block py-2 px-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50">Features</a>
              <a href="#" className="block py-2 px-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50">Pricing</a>
            </div>
            
            {/* Mobile Buttons */}
            <div className="pt-2 space-y-2">
              <button className="w-full bg-blue-900/80 hover:bg-blue-800 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition">
                <FaDiscord className="h-4 w-4" />
                <span>Discord</span>
              </button>
              <button className="w-full bg-blue-900/80 hover:bg-blue-800 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition">
                <FiUpload className="h-4 w-4" />
                <span>Upload</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
