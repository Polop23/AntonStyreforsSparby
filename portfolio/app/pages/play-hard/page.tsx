'use client' // For Framer Motion animations
import { motion } from 'framer-motion'

export default function PlayHardPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-8 font-heading text-5xl font-bold text-secondary">
        Play Hard
      </h1>
      <p className="mb-10 text-lg leading-relaxed text-gray-700">
        A gallery for your creative experiments, visual explorations, and side
        projects. This is the place for pure art and expression.
      </p>

      {/* Placeholder Gallery */}
      <div className="columns-2 gap-4 md:columns-3">
        <div className="mb-4 h-48 rounded-lg bg-base-200 p-4 shadow-glow-md">
          Experiment A
        </div>
        <div className="mb-4 h-80 rounded-lg bg-base-200 p-4 shadow-glow-md">
          Experiment B
        </div>
        <div className="mb-4 h-56 rounded-lg bg-base-200 p-4 shadow-glow-md">
          Experiment C
        </div>
        <div className="mb-4 h-48 rounded-lg bg-base-200 p-4 shadow-glow-md">
          Experiment D
        </div>
      </div>
    </motion.div>
  )
}