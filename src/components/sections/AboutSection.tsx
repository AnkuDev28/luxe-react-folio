import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: "6+", label: "Projects Completed" },
    { number: "2", label: "Internships Completed" },
    { number: "70%", label: "Performance Improvement" },
    { number: "2025", label: "Fresh Graduate" }
  ]

  return (
    <section id="about" className="py-20 bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating beautiful, functional web experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/a8f33102-d869-42b6-8daf-d39bddc4941a.png" 
                alt="Ankush Kumar - Computer Science Engineering Student"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce-gentle"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hi, I'm Ankush Kumar</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer specializing in MERN stack and AI-powered web applications. 
                Recently graduated with my Bachelor's in Computer Science & Engineering from Graphic Era Hill University, 
                with hands-on experience gained through internships in building production-ready applications that improve 
                data visualization efficiency and user engagement by up to 70%.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through my internships and academic projects, I've gained experience working with modern technologies 
                like React.js, Node.js, Express.js, MongoDB, and AI integration. As a fresh graduate, I'm eager to 
                learn new technologies and build innovative solutions for real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}