import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Bilingual AI-Powered Diet Coach",
    subtitle: "Voice Enabled",
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

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-6 md:p-8 group hover:neon-border transition-all duration-300 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary text-sm font-medium">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
