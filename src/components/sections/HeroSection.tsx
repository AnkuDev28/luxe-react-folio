import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Hero3D } from '@/components/Hero3D'
import heroImage from '@/assets/hero-bg.jpg'

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 3D Background Element */}
      <div className="absolute inset-0 opacity-30">
        <Hero3D />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-white/80 font-medium"
          >
            Hi there! I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Ankush Kumar
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl gradient-text font-semibold">
              Full-Stack Developer & AI Enthusiast
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Specializing in MERN stack and AI-powered web applications. Passionate about building scalable, 
              high-performance solutions that improve user engagement and data visualization efficiency.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              View My Work
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto">
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-6 mt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/ankush6398', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/ankush-kumar-1992ba307', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:ankushkumar300@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 group"
              >
                <Icon className="h-6 w-6 text-white group-hover:text-primary transition-colors" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-white/60 text-sm">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}