"use client"

import Background from "@/components/Background"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

export default function HomePage() {
  return (
    <div className=" min-h-screen antialiased">
      {/* Background - Full width with more visible elements */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <Background />
      </div>

      {/* Content with container */}
        <div className="container mx-auto px-10">
          <Navbar />
          <Hero />
        </div>
    </div>
  )
}