'use client' // For Framer Motion animations
import { motion } from 'framer-motion'

export default function WorkHardPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-8 font-heading text-5xl font-bold text-primary-start">
        Work Hard
      </h1>
      <p className="mb-10 text-lg leading-relaxed text-gray-700">
        This is where your professional projects and achievements will live.
        Each item could be a card in an interactive grid or a slide in a
        carousel.
      </p>

      {/* Placeholder Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-base-200 p-6 shadow-glow-md transition-shadow hover:shadow-glow-lg">
          <h3 className="font-heading text-2xl font-bold">Project One</h3>
          <p className="mt-2 text-gray-600">
            A brief description of your role and the outcome.
          </p>
        </div>
        <div className="rounded-lg bg-base-200 p-6 shadow-glow-md transition-shadow hover:shadow-glow-lg">
          <h3 className="font-heading text-2xl font-bold">Project Two</h3>
          <p className="mt-2 text-gray-600">
            A brief description of your role and the outcome.
          </T>
        </div>
      </div>
    </motion.div>
  )
}