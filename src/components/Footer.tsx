'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-bg border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-xl font-bold font-grotesk">EM</h3>
            <p className="text-sm text-dark-text/60">
              © {currentYear} Eslam Maarouf. All rights reserved.
            </p>
          </div>

          <nav className="flex items-center gap-8 text-sm">
            <a
              href="#home"
              className="text-dark-text/60 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-dark-text/60 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-dark-text/60 hover:text-white transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-dark-text/60 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer