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
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-8 bg-slate-900/80 backdrop-blur-xl border-b border-white/10"
      >
        {/* Left - Logo */}
        <div className="flex items-center space-x-4">
          <Image src="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Logo/3DIMLI%20LOGO.svg" alt="Logo" width={140} height={140} />
          <span className="text-xl md:text-2xl text-gray-400 hidden sm:inline-block font-semibold">BETA 1.0.1</span>
        </div>

        {/* Middle - Links + Search */}
        <div className="hidden md:flex items-center space-x-12 flex-1 justify-center">
          <a href="#" className="text-2xl text-gray-300 hover:text-white transition-colors font-medium">Home</a>
          <a href="#" className="text-2xl text-gray-300 hover:text-white transition-colors font-medium">Discover</a>
          <a href="#" className="text-2xl text-gray-300 hover:text-white transition-colors font-medium">Features</a>
          <a href="#" className="text-2xl text-gray-300 hover:text-white transition-colors font-medium">Pricing</a>

          {/* Search Bar */}
          <div className="ml-10 flex items-center bg-slate-900/70 border border-gray-700 rounded-xl px-6 py-3">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-xl text-white placeholder-gray-400 w-56 md:w-80"
            />
            <Search className="h-7 w-7 text-gray-400 ml-2" />
          </div>
        </div>

        {/* Right - Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="bg-blue-900 text-white px-7 py-4 rounded-xl flex items-center space-x-3 hover:bg-blue-800 transition text-xl font-semibold">
            <FaDiscord className="h-6 w-6" />
            <span>Discord</span>
          </button>
          <button className="bg-blue-900 text-white px-7 py-4 rounded-xl flex items-center space-x-3 hover:bg-blue-800 transition text-xl font-semibold">
            <FiUpload className="h-6 w-6" />
            <span>Upload</span>
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center text-white">
            <CiUser className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
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
          className="md:hidden fixed top-[120px] left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-gray-800 z-40"
        >
          <div className="px-4 py-3 space-y-4">
            {/* Mobile Search */}
            <div className="flex items-center bg-slate-800 border border-gray-700 rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm text-white placeholder-gray-400 flex-1"
              />
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <a href="#" className="block py-2 text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white transition-colors">Discover</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white transition-colors">Pricing</a>
            </div>
            
            {/* Mobile Buttons */}
            <div className="pt-2 space-y-2">
              <button className="w-full bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-800 transition">
                <FaDiscord className="h-5 w-5" />
                <span>Discord</span>
              </button>
              <button className="w-full bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-800 transition">
                <FiUpload className="h-5 w-5" />
                <span>Upload</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
