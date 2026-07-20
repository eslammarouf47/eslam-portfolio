'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Instagram, Youtube } from 'lucide-react'
import { useState, FormEvent } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

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

  const socials = [
    { icon: Mail, href: 'mailto:eslammarouf47@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/eslam-maarouf-', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@eslammarouf', label: 'YouTube' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk">Let us Work Together</h2>
            <p className="text-dark-text/60 text-lg">Have a video project in mind? Get in touch and let us create something amazing together.</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-inter mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-dark-card border border-white/10 rounded-lg px-4 py-3 text-dark-text placeholder-dark-text/40 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-inter mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-dark-card border border-white/10 rounded-lg px-4 py-3 text-dark-text placeholder-dark-text/40 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-inter mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-dark-card border border-white/10 rounded-lg px-4 py-3 text-dark-text placeholder-dark-text/40 focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Tell me about your video project..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-white text-dark-bg font-grotesk font-semibold py-3 rounded-lg hover:bg-white/90 transition-all hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? '✓ Message Sent!' : 'Send Project Inquiry'}
            </motion.button>
          </motion.form>

          <motion.div className="flex items-center justify-center gap-8" variants={containerVariants}>
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text/60 hover:text-white transition-colors"
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
