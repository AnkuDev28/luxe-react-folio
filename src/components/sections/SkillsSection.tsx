import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "📘" },
      { name: "Next.js", level: 85, icon: "🔺" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
      { name: "Framer Motion", level: 80, icon: "🎭" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express", level: 85, icon: "🚀" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "GraphQL", level: 70, icon: "🔗" }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", level: 95, icon: "📝" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "AWS", level: 70, icon: "☁️" },
      { name: "Figma", level: 85, icon: "🎨" },
      { name: "Jest", level: 80, icon: "🧪" }
    ]
  }
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I love working with and have experience building production applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
                    {skillCategory.category}
                  </h3>
                  <div className="space-y-4">
                    {skillCategory.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.6, 
                          delay: (categoryIndex * 0.2) + (techIndex * 0.1) 
                        }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{tech.icon}</span>
                            <span className="font-medium">{tech.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{tech.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${tech.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: (categoryIndex * 0.2) + (techIndex * 0.1) + 0.5,
                              ease: "easeOut"
                            }}
                            className="h-full bg-gradient-to-r from-primary to-secondary group-hover/skill:from-secondary group-hover/skill:to-accent transition-all duration-300"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Git', 'Figma'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}