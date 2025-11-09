'use client' // For Framer Motion animations
import { motion } from 'framer-motion'

export default function ThinkBigPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-8 font-heading text-5xl font-bold text-highlight text-gray-900 drop-shadow-sm">
        Think Big
      </h1>
      <p className="mb-10 text-lg leading-relaxed text-gray-700">
        A clean, simple layout for your essays, startup ideas, and long-form
        thought pieces.
      </p>

      {/* Placeholder Article List */}
      <div className="flex flex-col gap-10">
        <div className="rounded-lg p-2 transition-colors">
          <h3 className="font-heading text-3xl font-bold text-gray-900">
            My First Startup Idea
          </h3>
          <p className="mt-2 text-lg text-gray-600">
            A 5-minute read on a new concept for generative art and e-commerce.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-primary-start">
            Read more...
          </span>
        </div>
        <div className="rounded-lg p-2 transition-colors">
          <h3 className="font-heading text-3xl font-bold text-gray-900">
            Thoughts on the Future of Web Design
          </h3>
          <p className="mt-2 text-lg text-gray-600">
            An essay exploring how motion and AI will redefine digital
            experiences.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-primary-start">
            Read more...
          </span>
        </div>
      </div>
    </motion.div>
  )
}