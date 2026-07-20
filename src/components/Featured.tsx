'use client'

import { motion } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const Featured = () => {
  const projects = [
    {
      title: 'Cinematic Showreel',
      category: 'Showreel',
      description: 'Professional video editing and cinematography compilation',
      image: 'https://img.youtube.com/vi/Ov3J4ch7I00/maxresdefault.jpg',
      video: 'https://youtu.be/Ov3J4ch7I00',
      youtubeId: 'Ov3J4ch7I00',
    },
    {
      title: 'Creative Motion Design',
      category: 'Motion Graphics',
      description: 'Dynamic motion graphics and visual effects',
      image: 'https://img.youtube.com/vi/4NBtkWQ4CpA/maxresdefault.jpg',
      video: 'https://youtu.be/4NBtkWQ4CpA',
      youtubeId: '4NBtkWQ4CpA',
    },
    {
      title: 'Brand Film Production',
      category: 'Commercial',
      description: 'Professional brand storytelling and corporate video',
      image: 'https://img.youtube.com/vi/2TVI33sDZAw/maxresdefault.jpg',
      video: 'https://youtu.be/2TVI33sDZAw',
      youtubeId: '2TVI33sDZAw',
    },
    {
      title: 'Documentary Style',
      category: 'Documentary',
      description: 'Cinematic documentary and narrative filmmaking',
      image: 'https://img.youtube.com/vi/n_d50-ss0Fc/maxresdefault.jpg',
      video: 'https://youtu.be/n_d50-ss0Fc',
      youtubeId: 'n_d50-ss0Fc',
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
            <p className="text-dark-text/60 text-lg">Watch my latest video production work</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="group relative card-hover"
                variants={itemVariants}
              >
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
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
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all">
                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-dark-text/60 font-inter">{project.category}</p>
                  <h3 className="text-xl font-grotesk font-semibold group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-dark-text/70">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* YouTube Channel CTA */}
          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <a
              href="https://www.youtube.com/@eslammarouf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white font-grotesk font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-all group"
            >
              View More on YouTube
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Featured