import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "Full-time",
    description: "Lead frontend development for multiple client projects, mentoring junior developers, and implementing modern React architectures. Improved application performance by 40% and reduced bundle size by 30%.",
    achievements: [
      "Led a team of 4 developers on a complex e-commerce platform",
      "Implemented micro-frontend architecture serving 100K+ users",
      "Reduced page load times by 40% through optimization techniques",
      "Established development standards and best practices"
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"]
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2021 - 2022",
    type: "Full-time",
    description: "Developed and maintained full-stack applications using modern web technologies. Collaborated with cross-functional teams to deliver high-quality products within tight deadlines.",
    achievements: [
      "Built MVP from scratch that secured $2M in Series A funding",
      "Developed REST APIs serving 50K+ daily active users",
      "Implemented real-time features using WebSocket technology",
      "Collaborated with design team to create responsive UI components"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Jenkins"]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    period: "2020 - 2021",
    type: "Full-time",
    description: "Created responsive web applications and landing pages for various clients. Focused on performance optimization and cross-browser compatibility.",
    achievements: [
      "Delivered 20+ client projects with 98% satisfaction rate",
      "Improved website performance scores by average of 35%",
      "Implemented accessibility standards (WCAG 2.1 AA)",
      "Collaborated with designers to create pixel-perfect implementations"
    ],
    technologies: ["React", "JavaScript", "SASS", "Webpack", "Figma"]
  },
  {
    id: 4,
    title: "Junior Web Developer",
    company: "WebSolutions Inc",
    location: "Boston, MA",
    period: "2019 - 2020",
    type: "Full-time",
    description: "Started my professional journey as a junior developer, learning modern web development practices and contributing to various projects.",
    achievements: [
      "Contributed to 10+ successful project deliveries",
      "Learned and applied modern JavaScript frameworks",
      "Participated in code reviews and agile development processes",
      "Built responsive components and interactive features"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP"]
  }
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my skills and expertise
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                          <span>•</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                            {experience.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <span className="font-medium">{experience.company}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {experience.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-4">
                        <h4 className="font-medium text-sm mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1.5 text-xs">●</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium text-sm mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-muted text-xs rounded-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Want to know more about my experience?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}