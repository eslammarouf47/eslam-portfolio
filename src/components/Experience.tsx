'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      year: '2024 - Present',
      title: 'Professional Video Editor & Content Creator',
      company: 'Freelance',
      description: 'Creating high-quality cinematic videos and visual content for diverse clients. Specializing in professional color grading, motion graphics, and creative storytelling.',
    },
    {
      year: '2023 - 2024',
      title: 'Motion Graphics Designer',
      company: 'Digital Creative Agency',
      description: 'Designed and produced compelling motion graphics and animated content for advertising campaigns and brand films.',
    },
    {
      year: '2022 - 2023',
      title: 'Video Editor',
      company: 'Production Studio',
      description: 'Edited and color-graded documentary, commercial, and social media video content for various brands.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 md:py-32 px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-grotesk"
            variants={itemVariants}
          >
            Experience
          </motion.h2>

          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

            <motion.div className="space-y-8" variants={containerVariants}>
              {experiences.map((exp, index) => (
                <motion.div key={exp.title} className="md:pl-24 relative" variants={itemVariants}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-2 top-2 w-12 h-12 bg-dark-card border-2 border-white/30 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  <div className="bg-dark-card/50 p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-lg font-grotesk font-semibold">{exp.title}</h3>
                      <span className="text-sm text-dark-text/60 mt-2 md:mt-0">{exp.year}</span>
                    </div>
                    <p className="text-dark-text/80 font-inter mb-2">{exp.company}</p>
                    <p className="text-dark-text/60 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience