import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Zap, 
  Users, 
  Lightbulb,
  ChevronDown,
  ExternalLink,
  Download,
  Send,
  Mail,
  ArrowRight,
  Check,
  Sun,
  Moon,
  Menu,
  X,
  Folder,
  Database,
  Cloud,
  Settings,
  Monitor,
  Server
} from "lucide-react";
import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experience = [
  {
    company: "TechForward Inc.",
    role: "Senior Software Engineer",
    period: "2021 - Present",
    description: "Leading development of enterprise-scale microservices architecture serving 2M+ daily active users. Spearheaded migration from legacy monolith to cloud-native solutions, reducing infrastructure costs by 40%. Mentoring team of 5 engineers and establishing best practices for code quality and CI/CD pipelines.",
    achievements: [
      "Architected real-time analytics platform processing 10M+ events daily",
      "Reduced API response times by 65% through optimization strategies",
      "Led adoption of Kubernetes, achieving 99.99% uptime SLA"
    ],
    technologies: [".NET Core", "React", "Azure", "Kubernetes", "PostgreSQL"]
  },
  {
    company: "DataStream Solutions",
    role: "Full Stack Developer",
    period: "2018 - 2021",
    description: "Built and maintained customer-facing applications for fintech platform handling $50M+ in transactions. Collaborated with cross-functional teams to deliver features that increased user engagement by 35%.",
    achievements: [
      "Developed payment processing module integrated with Stripe and PayPal",
      "Created automated testing suite achieving 90% code coverage",
      "Implemented OAuth 2.0 authentication system for 100K+ users"
    ],
    technologies: ["Node.js", "React", "TypeScript", "MongoDB", "AWS"]
  },
  {
    company: "InnovateTech Labs",
    role: "Junior Developer",
    period: "2016 - 2018",
    description: "Started professional journey building web applications and internal tools. Gained expertise in full-stack development while contributing to client projects across multiple industries.",
    achievements: [
      "Built CRM system that improved sales team efficiency by 50%",
      "Developed responsive web applications for 15+ client projects",
      "Created internal tooling that automated 20+ hours of manual work weekly"
    ],
    technologies: ["C#", ".NET", "JavaScript", "SQL Server", "jQuery"]
  }
];

const skills = {
  languages: ["C#", "TypeScript", "JavaScript", "Python", "SQL", "Go"],
  frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3"],
  backend: [".NET Core", "Node.js", "Express", "GraphQL", "REST APIs"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "SQL Server", "Elasticsearch"],
  cloud: ["Azure", "AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  tools: ["Git", "VS Code", "Jira", "Figma", "Postman", "Linux"]
};

const projects = [
  {
    title: "CloudScale Analytics",
    description: "Real-time data analytics platform with interactive dashboards and ML-powered insights. Built with React, .NET Core, and Azure services.",
    tags: ["React", ".NET Core", "Azure", "Machine Learning"],
    link: "#"
  },
  {
    title: "DevOps Toolkit",
    description: "Open-source CLI tool for automating deployment pipelines. 500+ GitHub stars and used by development teams worldwide.",
    tags: ["Go", "Docker", "Kubernetes", "Open Source"],
    link: "#"
  },
  {
    title: "FinTrack Pro",
    description: "Personal finance management app with bank integrations, budget tracking, and investment portfolio analysis.",
    tags: ["React Native", "Node.js", "Plaid API", "PostgreSQL"],
    link: "#"
  },
  {
    title: "CodeReview AI",
    description: "AI-powered code review assistant that provides intelligent suggestions and detects potential bugs before they reach production.",
    tags: ["Python", "OpenAI", "GitHub API", "FastAPI"],
    link: "#"
  }
];

const testimonials = [
  {
    quote: "One of the most talented engineers I've worked with. Delivers exceptional results consistently.",
    author: "Sarah Chen",
    role: "VP of Engineering, TechForward Inc."
  },
  {
    quote: "Incredible problem-solver with a keen eye for clean, maintainable code.",
    author: "Michael Rodriguez",
    role: "Tech Lead, DataStream Solutions"
  }
];

const stats = [
  { value: "9+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "2M+", label: "Users Served" },
  { value: "15+", label: "Technologies" }
];

const skillCategories = [
  { title: "Languages", icon: Code, color: "text-blue-500", bgColor: "bg-blue-500/10", skills: skills.languages },
  { title: "Frontend", icon: Monitor, color: "text-purple-500", bgColor: "bg-purple-500/10", skills: skills.frontend },
  { title: "Backend", icon: Server, color: "text-green-500", bgColor: "bg-green-500/10", skills: skills.backend },
  { title: "Databases", icon: Database, color: "text-yellow-500", bgColor: "bg-yellow-500/10", skills: skills.databases },
  { title: "Cloud & DevOps", icon: Cloud, color: "text-cyan-500", bgColor: "bg-cyan-500/10", skills: skills.cloud },
  { title: "Tools", icon: Settings, color: "text-red-500", bgColor: "bg-red-500/10", skills: skills.tools },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", (!darkMode).toString());
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50 transition-shadow ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold gradient-text" data-testid="link-logo">JD</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link" data-testid={`link-${link.label.toLowerCase()}`}>
                  {link.label}
                </a>
              ))}
              
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} data-testid="button-theme-toggle" aria-label="Toggle dark mode">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="button-mobile-menu" aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-border"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </a>
                ))}
                <button onClick={toggleDarkMode} className="flex items-center gap-2 nav-link">
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="text-primary font-mono text-sm tracking-wider uppercase">Senior Software Engineer</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I'm <span className="gradient-text">John Doe</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Building scalable software solutions for 9+ years. Passionate about clean code, cloud architecture, and creating impactful digital experiences.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <Card key={stat.label} className="text-center p-4">
                    <div className="text-2xl font-bold gradient-text" data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild data-testid="button-get-in-touch">
                  <a href="#contact">
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" asChild data-testid="button-view-work">
                  <a href="#projects">View My Work</a>
                </Button>
              </div>
            </motion.div>
            
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Profile Image Placeholder */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                        <svg className="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">Your photo here</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 px-4 py-2 glass-card rounded-lg shadow-lg animate-float">
                  <span className="text-sm font-medium">Available for hire</span>
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></span>
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 glass-card rounded-lg shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <span className="font-mono text-sm text-primary">9+ years exp.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <p className="text-primary font-mono text-sm mb-2">About Me</p>
                <h2 className="section-title">Crafting Code That Makes a Difference</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate software engineer with over 9 years of experience building robust, scalable applications. My journey in tech started in 2016, and since then, I've had the privilege of working with amazing teams at companies ranging from innovative startups to enterprise organizations.
                </p>
                <p>
                  I specialize in full-stack development with a focus on .NET and React ecosystems. I believe in writing clean, maintainable code and am passionate about mentoring junior developers and contributing to open-source projects.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to tech communities, or enjoying a good book on software architecture.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" data-testid="button-download-resume">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </motion.div>
            
            {/* Core Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Code, title: "Clean Code", description: "Writing maintainable, well-documented code that stands the test of time.", color: "text-primary", bgColor: "bg-primary/10" },
                { icon: Zap, title: "Performance", description: "Optimizing for speed and efficiency at every layer of the stack.", color: "text-accent", bgColor: "bg-accent/10" },
                { icon: Users, title: "Collaboration", description: "Working effectively with teams to deliver exceptional results.", color: "text-green-500", bgColor: "bg-green-500/10" },
                { icon: Lightbulb, title: "Innovation", description: "Continuously learning and applying cutting-edge technologies.", color: "text-orange-500", bgColor: "bg-orange-500/10" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 space-y-3 glass-card">
                    <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Career Path</p>
            <h2 className="section-title">Work Experience</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A journey through innovative companies where I've built impactful solutions and grown as an engineer.
            </p>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 sm:p-8 relative overflow-hidden glass-card">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold" data-testid={`text-job-role-${index}`}>{job.role}</h3>
                      <p className="text-primary font-medium" data-testid={`text-job-company-${index}`}>{job.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono whitespace-nowrap" data-testid={`text-job-period-${index}`}>{job.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  
                  {expandedJob === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4"
                    >
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" data-testid={`chip-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                    data-testid={`button-toggle-details-${index}`}
                  >
                    <span>{expandedJob === index ? 'Show less' : 'Show more'}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedJob === index ? 'rotate-180' : ''}`} />
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Technical Expertise</p>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit built over 9+ years of solving real-world problems.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 space-y-4 glass-card h-full">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="chip" data-testid={`chip-skill-${skill.toLowerCase()}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Portfolio</p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for building great software.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="block"
                data-testid={`card-project-${index}`}
              >
                <Card className="p-6 glass-card group transition-all duration-300 hover:border-primary/50 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Folder className="w-6 h-6 text-primary" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors" data-testid={`text-project-title-${index}`}>{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline" data-testid="link-github">
              View more on GitHub
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Recommendations</p>
            <h2 className="section-title">What Colleagues Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 sm:p-8 glass-card" data-testid={`card-testimonial-${index}`}>
                  <svg className="w-8 h-8 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                  </svg>
                  <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary font-mono text-sm mb-2">Get in Touch</p>
            <h2 className="section-title mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <Card className="p-8 text-left space-y-6 glass-card">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    data-testid="input-email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="What's this about?"
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  data-testid="input-subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  data-testid="input-message"
                ></textarea>
              </div>
              <Button className="w-full" data-testid="button-send-message">
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </Card>
            
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <a href="mailto:john@example.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="link-email">
                <Mail className="w-5 h-5" />
                john@example.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="link-linkedin">
                <SiLinkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="link-github-footer">
                <SiGithub className="w-5 h-5" />
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="link-twitter">
                <SiTwitter className="w-5 h-5" />
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              2024 John Doe. Built with React & Tailwind CSS.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed with care
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
