'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
              I'm a passionate video editor and visual storyteller with a keen eye for
              cinematic details. My work focuses on transforming raw footage into
              compelling visual narratives that captivate and inspire audiences.
            </motion.p>

            <motion.p
              className="text-dark-text/80 leading-relaxed text-lg"
              variants={itemVariants}
            >
              With a background in creative direction and motion graphics, I specialize
              in creating premium content that resonates with discerning audiences. Every
              project is an opportunity to push creative boundaries and deliver excellence.
            </motion.p>

            <motion.div className="space-y-4 pt-4" variants={containerVariants}>
              {[
                'Cinematography & Color Grading',
                'Motion Graphics & Animation',
                'Creative Direction',
                'Visual Storytelling',
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About