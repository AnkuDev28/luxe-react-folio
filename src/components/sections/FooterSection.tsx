import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 bg-background border-t" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold gradient-text">Ankush Kumar</h3>
            <p className="text-muted-foreground mt-2">Computer Science Engineering Student & MERN Stack Developer</p>
            <div className="mt-3 space-y-1">
              <p className="text-sm text-muted-foreground">📧 sehgalankush339@gmail.com</p>
              <p className="text-sm text-muted-foreground">📱 +91 63980 41042 | 📍 Dehradun, India</p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 animated-underline"
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          >
            <p className="text-sm text-muted-foreground flex items-center">
              © 2024 Ankush Kumar. Made with{' '}
              <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" />
              and lots of coffee.
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Back to top</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full"
            />
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-20 right-20 w-3 h-3 bg-secondary/30 rounded-full"
            />
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-10 left-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}