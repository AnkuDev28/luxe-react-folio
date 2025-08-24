import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Eye } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image: "🛒",
    demoUrl: "#",
    githubUrl: "#",
    status: "Live"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features built with React and Socket.io.",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "Framer Motion"],
    image: "📋",
    demoUrl: "#",
    githubUrl: "#",
    status: "Live"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather and forecasts using OpenWeather API. Features location-based weather, interactive charts, and offline capability.",
    technologies: ["React", "TypeScript", "Chart.js", "PWA", "Tailwind CSS"],
    image: "🌤️",
    demoUrl: "#",
    githubUrl: "#",
    status: "Live"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "A comprehensive analytics dashboard for social media performance tracking with data visualization, export capabilities, and automated reporting features.",
    technologies: ["Next.js", "D3.js", "PostgreSQL", "Prisma", "Chart.js"],
    image: "📊",
    demoUrl: "#",
    githubUrl: "#",
    status: "In Progress"
  },
  {
    id: 5,
    title: "Restaurant Booking System",
    description: "An online reservation system for restaurants with table management, calendar integration, customer notifications, and admin dashboard.",
    technologies: ["React", "Express", "MySQL", "Nodemailer", "Bootstrap"],
    image: "🍽️",
    demoUrl: "#",
    githubUrl: "#",
    status: "Live"
  },
  {
    id: 6,
    title: "Cryptocurrency Tracker",
    description: "A real-time cryptocurrency price tracking application with portfolio management, price alerts, and historical data visualization.",
    technologies: ["Vue.js", "Node.js", "WebSocket", "CoinGecko API", "Vuetify"],
    image: "₿",
    demoUrl: "#",
    githubUrl: "#",
    status: "Live"
  }
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects that demonstrate my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Image/Icon */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div className="text-6xl">{project.image}</div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="glass">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="glass">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="glass">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="cta" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}