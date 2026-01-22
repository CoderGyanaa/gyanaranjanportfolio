import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github, Star, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Bilingual AI-Powered Diet Coach",
    subtitle: "Voice Enabled • Real-Time Interaction",
    description:
      "A voice-enabled AI chatbot for personalized diet and nutrition management, supporting both English and Hindi. Provides customized meal recommendations, calorie suggestions, and hydration reminders through real-time voice interaction.",
    techStack: ["Python", "Flask", "OpenAI API", "Web Speech API", "Vapi.ai"],
    github: "https://github.com/CoderGyanaa/Bilingual-AI-Powered-Diet-Coach-with-Real-Time-Voice-Support.git",
    demo: "https://vapi.ai/?demo=true&shareKey=9fd88c16-fb27-4c26-8baf-14fd8f737f3c&assistantId=e28f8198-431f-44b5-af46-d448ae273da8",
    featured: true,
  },
  {
    title: "SkillBridge Frontend",
    subtitle: "Adaptive Digital Empowerment Platform",
    description:
      "An adaptive digital empowerment platform designed to enhance learning and career growth. Features a responsive, modern UI with smooth navigation and user-centric design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/CoderGyanaa/SkillBridge_Frontend-Part.git",
    demo: "https://beautiful-salamander-899eb7.netlify.app/",
  },
  {
    title: "SkillBridge Full Stack",
    subtitle: "Multi-Role Platform",
    description:
      "A multi-role web platform designed for students, experts, certifiers, and job providers. Includes role-based dashboards and advanced features such as AI chat, AR/VR labs, and job management tools.",
    techStack: ["Node.js", "TypeScript", "React", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/CoderGyanaa/MetaAchievers_Team339.git",
  },
  {
    title: "AI Assistant",
    subtitle: "Gemini Powered",
    description:
      "A smart AI assistant web application that can answer questions, summarize text, and generate creative ideas through a clean and responsive interface.",
    techStack: ["Python", "Flask", "Google Gemini API"],
    github: "https://github.com/CoderGyanaa/ai-assistant-prompt-engineering.git",
    demo: "https://ai-assistant-17eb.onrender.com/",
  },
];

// Background particles component for the section
const ProjectsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isMobile) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid lines
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'hsla(190, 100%, 50%, 0.03)';
      ctx.lineWidth = 1;

      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Floating dots
    const dots: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    const numDots = 20;

    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      drawGrid();
      
      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(190, 100%, 50%, ${dot.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

// Featured badge component
const FeaturedBadge = () => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
    <Star size={12} className="fill-primary" />
    Flagship Project
  </div>
);

// Project card component
interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
  isHero?: boolean;
}

const ProjectCard = ({ project, index, isInView, isHero = false }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group ${isHero ? 'col-span-full' : ''}`}
    >
      {/* Card glow effect */}
      <div 
        className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/50 via-accent/30 to-primary/50 opacity-0 blur-lg transition-all duration-500 ${
          isHovered ? 'opacity-60' : ''
        }`}
      />
      
      {/* Main card */}
      <div 
        className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
          isHovered ? 'transform -translate-y-2' : ''
        }`}
        style={{
          background: 'linear-gradient(135deg, hsla(240, 15%, 8%, 0.95), hsla(240, 15%, 12%, 0.9))',
          backdropFilter: 'blur(20px)',
          border: isHovered 
            ? '1px solid hsla(190, 100%, 50%, 0.4)' 
            : '1px solid hsla(240, 15%, 20%, 0.5)',
          boxShadow: isHovered
            ? '0 20px 60px -15px hsla(190, 100%, 50%, 0.3), inset 0 1px 0 hsla(190, 100%, 50%, 0.1)'
            : '0 10px 40px -15px hsla(0, 0%, 0%, 0.5)',
        }}
      >
        {/* Inner gradient overlay */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top left, hsla(190, 100%, 50%, 0.1), transparent 50%)',
            opacity: isHovered ? 1 : 0,
          }}
        />

        <div className={`relative z-10 ${isHero ? 'p-8 md:p-10' : 'p-6 md:p-8'}`}>
          {/* Header section */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="mb-3"
                >
                  <FeaturedBadge />
                </motion.div>
              )}
              <h3 
                className={`font-display font-bold text-foreground transition-colors duration-300 ${
                  isHero ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                } ${isHovered ? 'text-primary' : ''}`}
              >
                {project.title}
              </h3>
              <p className="text-primary/80 text-sm font-medium mt-1.5 flex items-center gap-2">
                <Sparkles size={14} className="text-accent" />
                {project.subtitle}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 10 }}
                  animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.6, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-2.5 rounded-xl bg-secondary/60 hover:bg-primary/20 border border-border/50 hover:border-primary/40 transition-all duration-300 group/btn"
                  aria-label="GitHub Repository"
                >
                  <Github size={18} className="text-muted-foreground group-hover/btn:text-primary transition-colors" />
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 10 }}
                  animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.6, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="p-2.5 rounded-xl bg-secondary/60 hover:bg-primary/20 border border-border/50 hover:border-primary/40 transition-all duration-300 group/btn"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={18} className="text-muted-foreground group-hover/btn:text-primary transition-colors" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className={`text-muted-foreground leading-relaxed mb-6 ${isHero ? 'text-base' : 'text-sm'}`}>
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15 + techIndex * 0.05 + 0.2 }}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/5 text-primary/90 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const heroProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <ProjectsBackground />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <SectionHeading
          title="Featured Projects"
          subtitle="A curated selection of projects showcasing my problem-solving skills, system design, and real-world development experience."
        />

        {/* Projects Grid */}
        <div className="space-y-8">
          {/* Hero project */}
          {heroProject && (
            <ProjectCard
              project={heroProject}
              index={0}
              isInView={isInView}
              isHero={true}
            />
          )}

          {/* Other projects in 2-column grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + 1}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
