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
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 md:py-4 bg-neutral-900 backdrop-blur-xl"
      >
        {/* Left - Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          <Image
            src="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Logo/3DIMLI%20LOGO.svg"
            alt="Logo"
            width={120}
            height={120}
            className="w-20 h-7 sm:w-24 sm:h-8 md:w-28 md:h-9 lg:w-32 lg:h-10"
            priority
          />
          <span className="hidden sm:flex flex-col justify-center items-start border-l-2 border-r-2 border-white/10 px-2 text-xs md:text-xs lg:text-xs text-gray-400 font-light">
            <span className="leading-tight">BETA</span>
            <span className="leading-tight">1.0.1</span>
          </span>
        </div>

        {/* Middle - Links + Search */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4 xl:space-x-6 flex-1 justify-center max-w-5xl mx-4">
          <a href="#" className="text-xs lg:text-sm text-gray-300 hover:text-white transition-colors font-medium whitespace-nowrap">Home</a>
          <a href="#" className="text-xs lg:text-sm text-gray-300 hover:text-white transition-colors font-medium whitespace-nowrap">Discover</a>
          <a href="#" className="text-xs lg:text-sm text-gray-300 hover:text-white transition-colors font-medium whitespace-nowrap">Features</a>
          <a href="#" className="text-xs lg:text-sm text-gray-300 hover:text-white transition-colors font-medium whitespace-nowrap">Pricing</a>

          {/* Search Bar - Responsive width */}
          <div className="ml-4 lg:ml-6 flex items-center bg-neutral-900 border border-gray-600 rounded-lg md:rounded-xl px-3 py-1.5 lg:px-4 lg:py-2 w-[180px] sm:w-[220px] md:w-[280px] lg:w-[380px] xl:w-[480px]">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-xs lg:text-sm text-white placeholder-gray-400 w-full"
            />
            <span className="border-l-2 border-white/10 pl-2 ml-2">
              <Search className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400" />
            </span>
          </div>
        </div>

        {/* Right - Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
          <button className="shine-btn bg-blue-900/80 hover:bg-blue-800 text-white px-3 py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 rounded-lg flex items-center space-x-1.5 lg:space-x-2 hover:bg-blue-800 transition text-xs lg:text-sm font-semibold">
            <FaDiscord className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5" />
            <span className="hidden lg:inline">Discord</span>
          </button>
          <button className="shine-btn bg-blue-900/80 hover:bg-blue-800 text-white px-3 py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 rounded-lg flex items-center space-x-1.5 lg:space-x-2 hover:bg-blue-800 transition text-xs lg:text-sm font-semibold">
            <FiUpload className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5" />
            <span className="hidden lg:inline">Upload</span>
          </button>
          <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 rounded-full border border-gray-500 flex items-center justify-center text-white hover:border-gray-400 transition">
            <CiUser className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5" />
          </button>
        </div>

        {/* Mobile menu button and search icon */}
        <div className="flex md:hidden items-center space-x-3">
          <button className="text-gray-300 hover:text-white p-1">
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-1"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
          className="md:hidden fixed top-[64px] sm:top-[72px] left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-gray-800 z-40"
        >
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search - Full width on mobile */}
            <div className="flex items-center bg-slate-800/50 border border-gray-600 rounded-lg px-3 py-2 w-full">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm text-white placeholder-gray-400 flex-1"
              />
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
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition">
                <FaDiscord className="h-4 w-4" />
                <span>Discord</span>
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition">
                <FiUpload className="h-4 w-4" />
                <span>Upload</span>
              </button>
              <button className="w-full border border-gray-600 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition hover:border-gray-400">
                <CiUser className="h-4 w-4" />
                <span>Account</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}