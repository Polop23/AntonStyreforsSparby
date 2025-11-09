'use client' // Required for Framer Motion

import Link from 'next/link'
// 1. Import 'Variants' from framer-motion
import { motion, Variants } from 'framer-motion'

// 2. Add the ': Variants' type
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child link fades in 0.2s after the previous
      delayChildren: 0.3,
    },
  },
}

// 2. Add the ': Variants' type here as well
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring', // This will now be correctly typed
      stiffness: 100,
    },
  },
}

// A simple component for your main navigation links
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.div variants={itemVariants}>
      {/* (className is on one line to prevent hydration error) */}
      <Link
        href={href}
        className="block text-3xl md:text-5xl font-heading font-bold text-gray-900 transition-colors duration-300 hover:text-primary-start focus:outline-none focus:ring-2 focus:ring-primary-start focus:ring-offset-4 focus:ring-offset-base-100 rounded-lg"
      >
        {label}
      </Link>
    </motion.div>
  )
}

export default function LandingPage() {
  return (
    //<main className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-base-100">
    <main className="relative flex items-center justify-center w-full **min-h-screen** overflow-hidden bg-base-100">
      {/* 1. Fluid Gradient Background */}
      <motion.div
        // Use the new CSS class and a high Z-index to ensure it sits above the main content's background color
        // and is positioned correctly.
        className="absolute inset-0 z-0 animated-gradient"
        
        // We can remove the inline style object completely as the CSS class handles it now.
        // We also remove the 'animate' and 'transition' props since the 'fluid-bg'
        // animation is applied via the CSS class.
      >
        {/* This creates the blur/artistic effect */}
        <div className="absolute inset-0 backdrop-blur-[100px] md:backdrop-blur-[200px]"></div>
      </motion.div>

      {/* 2. Content */}
      <motion.nav
        className="relative z-10 flex flex-col items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <NavLink href="/work-hard" label="Work Hard" />
        <NavLink href="/play-hard" label="Play Hard" />
        <NavLink href="/think-big" label="Think Big" />
      </motion.nav>
    </main>
  )
}