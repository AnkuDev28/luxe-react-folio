import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Eye } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Excel Analytics Platform",
    description: "A web app to upload Excel files, generate interactive 2D/3D charts, and deliver AI-powered insights — improving data visualization speed by 70%. Built with MERN stack and Chart.js integration.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "AI"],
    image: "/lovable-uploads/53328ea3-204c-4d7b-b36f-90c773229746.png",
    demoUrl: "https://github.com/ankush6398/Xlense-analytics",
    githubUrl: "https://github.com/ankush6398/Xlense-analytics",
    status: "Live"
  },
  {
    id: 2,
    title: "AI-Based Image Enhancer",
    description: "An AI-powered tool to enhance low-resolution or damaged images, improving clarity and detail using deep learning techniques. Currently in active development.",
    technologies: ["React", "Node.js", "AI/ML", "Deep Learning"],
    image: "/lovable-uploads/0f512c02-a341-4a6e-96c4-33f46a9cd115.png",
    demoUrl: "#",
    githubUrl: "#",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Animated Landing Page",
    description: "A visually dynamic landing page with smooth scroll animations and parallax effects for modern web experiences. Built using React and Shery.js for stunning visual effects.",
    technologies: ["React", "Shery.js", "CSS3", "Animation"],
    image: "/lovable-uploads/a8a67768-dc75-4fbe-97e9-ab018b289a07.png",
    demoUrl: "https://github.com/ankush6398/Design-with-shery.ls",
    githubUrl: "https://github.com/ankush6398/Design-with-shery.ls",
    status: "Live"
  },
  {
    id: 4,
    title: "Document Holder",
    description: "A lightweight SPA for creating, editing, and managing documents entirely in browser storage — no backend required. Perfect for quick document management needs.",
    technologies: ["React", "LocalStorage", "JavaScript", "CSS3"],
    image: "/lovable-uploads/0766b01a-da84-443d-8029-b0d47672e98c.png",
    demoUrl: "https://github.com/ankush6398/Mini-Document_Holder",
    githubUrl: "https://github.com/ankush6398/Mini-Document_Holder",
    status: "Live"
  },
  {
    id: 5,
    title: "MERN Blogging Platform",
    description: "A secure blogging platform with JWT authentication, interactive comments, and likes functionality — boosting user engagement. Built during internship at Zolo Development.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/lovable-uploads/31013a38-a5b8-4a10-8dfe-f375b7aa3a93.png",
    demoUrl: "#",
    githubUrl: "#",
    status: "Live"
  },
  {
    id: 6,
    title: "Portfolio & Calculator",
    description: "Responsive projects including landing page, calculator, and portfolio built during frontend internship. Ensuring cross-browser compatibility and improved accessibility.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: "/lovable-uploads/c08670f8-e7bc-428b-9d67-4a00128b5e23.png",
    demoUrl: "https://github.com/ankush6398/CODSOFT",
    githubUrl: "https://github.com/ankush6398/CODSOFT",
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
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
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
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        disabled={project.githubUrl === '#'}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button 
                        size="sm" 
                        variant="cta" 
                        className="flex-1"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                        disabled={project.demoUrl === '#'}
                      >
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