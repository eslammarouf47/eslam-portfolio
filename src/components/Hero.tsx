'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/80 to-dark-bg z-10" />
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%23090909' width='1200' height='800'/%3E%3C/svg%3E"
        >
          <source
            src="https://videos.pexels.com/video-files/855356/855356-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-grotesk leading-tight"
            variants={itemVariants}
          >
            Eslam Maarouf
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-dark-text/80 font-inter"
            variants={itemVariants}
          >
            Video Editor & Visual Storyteller
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-dark-text/60 max-w-2xl mx-auto font-inter"
            variants={itemVariants}
          >
            Crafting cinematic experiences through premium video editing and visual storytelling. 
            Transforming ideas into visual masterpieces with professional color grading and motion graphics.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            variants={itemVariants}
          >
            <a
              href="#portfolio"
              className="px-8 py-3 bg-white text-dark-bg font-grotesk font-semibold rounded-lg hover:bg-white/90 transition-all hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/30 text-white font-grotesk font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-white/50" size={24} />
      </motion.div>
    </section>
  )
}

export default Hero