'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Image from 'next/image'

const Featured = () => {
  const projects = [
    {
      title: 'Minimalist Brand Film',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
      video: 'https://videos.pexels.com/video-files/855356/855356-hd_1920_1080_30fps.mp4',
    },
    {
      title: 'Luxury Product Launch',
      category: 'Cinematic',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
      video: 'https://videos.pexels.com/video-files/855356/855356-hd_1920_1080_30fps.mp4',
    },
    {
      title: 'Motion Graphics Reel',
      category: 'Animation',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      video: 'https://videos.pexels.com/video-files/855356/855356-hd_1920_1080_30fps.mp4',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk">Featured Projects</h2>
            <p className="text-dark-text/60 text-lg">A selection of my finest work</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative card-hover"
                variants={itemVariants}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden bg-dark-card">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all">
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </button>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-dark-text/60 font-inter">{project.category}</p>
                  <h3 className="text-xl font-grotesk font-semibold group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Featured