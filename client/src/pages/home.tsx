import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Zap, 
  Users, 
  Lightbulb,
  ChevronDown,
  Download,
  Send,
  Mail,
  ArrowRight,
  Check,
  Sun,
  Moon,
  Menu,
  X,
  Database,
  Cloud,
  Monitor,
  Server,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen,
  Brain
} from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/lib/theme-provider";

const experience = [
  {
    company: "symphony.is",
    location: "Sarajevo, BiH",
    role: "Software Developer",
    period: "2018 - Current",
    description: "Delivering enterprise React-based web applications for large clients across fashion, healthcare, tech, education, and logistics. Strong focus on clean, maintainable code and scalable frontend architecture.",
    achievements: [
      "Recently adopted an AI-first development approach (Replit, code agents) to increase delivery speed while maintaining high engineering standards",
      "Collaborated across the stack with exposure to .NET and Angular while specializing in React",
      "Built complex, long-running projects with scalable frontend architecture"
    ],
    technologies: ["React", "TypeScript", "JavaScript", ".NET", "Angular"]
  },
  {
    company: "Softray Solutions LLC",
    location: "Sarajevo, BiH",
    role: "Software Developer",
    period: "2017 - 2018",
    description: "Contributed to a .NET healthcare application with a strong focus on ADA-compliant, accessible UI development. Built practical knowledge of accessibility standards and inclusive design within a regulated domain.",
    achievements: [
      "Developed ADA-compliant, accessible UI components for healthcare application",
      "Gained expertise in accessibility standards and inclusive design",
      "Worked within regulated healthcare domain requirements"
    ],
    technologies: [".NET", "Accessibility", "ADA Compliance", "Healthcare"]
  },
  {
    company: "Mostar Designs",
    location: "Mostar, BiH",
    role: "Software Developer",
    period: "2016 - 2017",
    description: "Started career as a junior .NET developer, taking responsibility for implementing a complex CMS as the sole developer under the guidance of a senior architect.",
    achievements: [
      "Built and maintained a full-stack system from the ground up using .NET, MySQL, and Angular",
      "Applied three-layer architecture and core software design principles",
      "Delivered a market-ready product also used internally as a CMS for a tourism-focused website"
    ],
    technologies: [".NET", "MySQL", "Angular", "CMS", "Full-Stack"]
  }
];

const skills = {
  frontend: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: [".NET", ".NET Core", "REST APIs", "Three-Layer Architecture"],
  databases: ["MySQL", "SQL Server"],
  specializations: ["Accessibility (ADA)", "AI-Assisted Development", "Replit", "Code Agents"],
  tools: ["Git", "VS Code", "Agile", "Scrum"]
};

const education = [
  {
    title: "BitCamp - Selective Software Development Bootcamp",
    duration: "6 months",
    description: "Intensive, full-time program focused on .NET and JavaScript, designed to prepare participants for immediate entry into the software industry.",
    highlights: [
      "Selected as one of 50 participants out of 1,400 applicants",
      "Based on aptitude, problem-solving skills, and demonstrated potential for programming",
      "Successfully transitioned into a professional software engineering role upon completion"
    ],
    icon: GraduationCap
  },
  {
    title: "Self-Directed Software Engineering Education",
    duration: "Ongoing",
    description: "Built strong foundations through independent learning, combining hands-on projects with online courses, documentation, and paid learning resources.",
    highlights: [
      "Continuously expanded skills beyond formal education",
      "Maintained long-term growth across frontend, backend, and modern development practices"
    ],
    icon: BookOpen
  },
  {
    title: "Faculty of Philosophy, Psychology",
    duration: "Incomplete",
    description: "Academic background in psychology, providing a strong understanding of human behavior, cognition, and user-centered thinking.",
    highlights: [
      "Strong understanding of human behavior and cognition",
      "User-centered thinking applied to software development"
    ],
    icon: Brain
  }
];

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "3", label: "Companies" },
  { value: "React", label: "Specialization" },
  { value: "AI", label: "Modern Approach" }
];

const skillCategories = [
  { title: "Frontend", icon: Monitor, color: "text-purple-500", bgColor: "bg-purple-500/10", skills: skills.frontend },
  { title: "Backend", icon: Server, color: "text-green-500", bgColor: "bg-green-500/10", skills: skills.backend },
  { title: "Databases", icon: Database, color: "text-yellow-500", bgColor: "bg-yellow-500/10", skills: skills.databases },
  { title: "Specializations", icon: Cloud, color: "text-cyan-500", bgColor: "bg-cyan-500/10", skills: skills.specializations },
  { title: "Tools & Methods", icon: Code, color: "text-red-500", bgColor: "bg-red-500/10", skills: skills.tools },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const isDarkMode = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50 transition-shadow ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold gradient-text" data-testid="link-logo">IMS</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link" data-testid={`link-${link.label.toLowerCase()}`}>
                  {link.label}
                </a>
              ))}
              
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} data-testid="button-theme-toggle" aria-label="Toggle dark mode">
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
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
                <Button variant="ghost" onClick={toggleDarkMode} className="justify-start px-0">
                  {isDarkMode ? <Sun className="w-5 h-5 mr-2" /> : <Moon className="w-5 h-5 mr-2" />}
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </Button>
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
                <p className="text-primary font-mono text-sm tracking-wider uppercase">Software Developer</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I'm <span className="gradient-text">Ivona Malekovic Selimovic</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Software Engineer with 7+ years' experience, specializing in React frontend development with a recent focus on AI-assisted development.
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
                <Button variant="outline" asChild data-testid="button-view-experience">
                  <a href="#experience">View Experience</a>
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
                  <span className="font-mono text-sm text-primary">7+ years exp.</span>
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
                <h2 className="section-title">Crafting Quality Software Solutions</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Software Engineer with 7+ years' experience, specializing in React frontend development. My journey in tech started in 2016, and I've had the privilege of working across fashion, healthcare, tech, education, and logistics industries.
                </p>
                <p>
                  With earlier experience in Angular and .NET, I bring a well-rounded perspective to frontend development. I focus on clean, maintainable code and scalable frontend architecture, developed primarily in React across long-running, complex projects.
                </p>
                <p>
                  Recently, I've adopted an AI-first development approach using Replit and code agents to increase delivery speed while maintaining high engineering standards.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild data-testid="button-linkedin">
                  <a href="https://www.linkedin.com/in/ivona-malekovic-selimovic-2708ab10a/" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </motion.div>
            
            {/* Core Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Code, title: "Clean Code", description: "Writing maintainable, well-documented code that stands the test of time.", color: "text-primary", bgColor: "bg-primary/10" },
                { icon: Zap, title: "AI-Powered", description: "Leveraging AI tools to increase delivery speed while maintaining quality.", color: "text-accent", bgColor: "bg-accent/10" },
                { icon: Users, title: "Accessibility", description: "Building inclusive, ADA-compliant interfaces for all users.", color: "text-green-500", bgColor: "bg-green-500/10" },
                { icon: Lightbulb, title: "Continuous Learning", description: "Always expanding skills across frontend, backend, and modern practices.", color: "text-orange-500", bgColor: "bg-orange-500/10" },
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
              A journey through companies where I've built impactful solutions and grown as an engineer.
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
                      <p className="text-sm text-muted-foreground">{job.location}</p>
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
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                    className="text-sm text-primary"
                    data-testid={`button-toggle-details-${index}`}
                  >
                    <span>{expandedJob === index ? 'Show less' : 'Show more'}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedJob === index ? 'rotate-180' : ''}`} />
                  </Button>
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
              A comprehensive toolkit built over 7+ years of solving real-world problems.
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
                <Card className="p-6 h-full glass-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" data-testid={`chip-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Background</p>
            <h2 className="section-title">Education</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A blend of formal training, selective bootcamp experience, and continuous self-directed learning.
            </p>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 sm:p-8 glass-card">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold" data-testid={`text-edu-title-${index}`}>{edu.title}</h3>
                        <Badge variant="outline">{edu.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Get In Touch</p>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm currently available for new opportunities. Feel free to reach out!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <Card className="p-6 glass-card">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:ivonamalekovic@hotmail.com" className="font-medium" data-testid="link-email">
                        ivonamalekovic@hotmail.com
                      </a>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 glass-card">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+38764454 1426" className="font-medium" data-testid="link-phone">
                        +387 64 454 1426
                      </a>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 glass-card">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium" data-testid="text-location">Sarajevo, BiH</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild data-testid="button-linkedin-icon">
                  <a href="https://www.linkedin.com/in/ivona-malekovic-selimovic-2708ab10a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <SiLinkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 sm:p-8 glass-card">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your name"
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="your@email.com"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="What's this about?"
                      data-testid="input-subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Your message..."
                      data-testid="input-message"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full" data-testid="button-send-message">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ivona Malekovic Selimovic. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/ivona-malekovic-selimovic-2708ab10a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <SiLinkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
