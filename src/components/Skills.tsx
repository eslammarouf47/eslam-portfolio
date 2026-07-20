'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Video Editing',
      skills: ['Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve', 'Adobe After Effects'],
    },
    {
      category: 'Graphics & Design',
      skills: ['Photoshop', 'Illustrator', 'Figma', 'Cinema 4D'],
    },
    {
      category: 'Motion & Animation',
      skills: ['After Effects', 'Motion Graphics', 'Keyframe Animation', 'VFX'],
    },
    {
      category: 'Production',
      skills: ['Color Grading', 'Sound Design', 'Cinematography', 'Creative Direction'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
            Skills & Expertise
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.category}
                className="bg-dark-card/30 border border-white/10 p-8 rounded-lg hover:border-white/20 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-grotesk font-semibold mb-6">{category.category}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-dark-text/80 font-inter">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills