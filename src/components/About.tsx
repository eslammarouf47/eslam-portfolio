'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Mail, Youtube } from 'lucide-react'

const About = () => {
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
    <section id="about" className="relative py-20 md:py-32 px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                alt="Eslam Maarouf"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-grotesk"
              variants={itemVariants}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-dark-text/80 leading-relaxed text-lg"
              variants={itemVariants}
            >
              I'm a passionate video editor and visual storyteller with expertise in cinematic video production. 
              My work focuses on transforming raw footage into compelling visual narratives that captivate and 
              inspire audiences through professional color grading and creative editing.
            </motion.p>

            <motion.p
              className="text-dark-text/80 leading-relaxed text-lg"
              variants={itemVariants}
            >
              With a strong background in creative direction and motion graphics, I specialize in creating premium 
              content that resonates with discerning audiences. Every project is an opportunity to push creative 
              boundaries and deliver excellence in visual storytelling.
            </motion.p>

            <motion.div className="space-y-4 pt-4" variants={containerVariants}>
              {[
                'Cinematography & Color Grading',
                'Professional Video Editing',
                'Motion Graphics & Animation',
                'Creative Direction',
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-3"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-dark-text/80">{skill}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-4 pt-6" variants={itemVariants}>
              <a
                href="https://www.linkedin.com/in/eslam-maarouf-"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-card hover:bg-white/10 rounded-lg transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-dark-text/60 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@eslammarouf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-card hover:bg-white/10 rounded-lg transition-all group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-dark-text/60 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:eslammarouf47@gmail.com"
                className="p-3 bg-dark-card hover:bg-white/10 rounded-lg transition-all group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-dark-text/60 group-hover:text-white transition-colors" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About