import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Brain, 
  Globe, 
  Wrench, 
  Database,
  FileCode,
  Server
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FileCode,
    skills: ["Java", "Python", "JavaScript"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Core CS",
    icon: Brain,
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Problem Solving"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["SQL", "MySQL", "MongoDB", "REST APIs"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Frameworks",
    icon: Server,
    skills: ["Flask", "Tailwind CSS", "Jupyter Notebook"],
    color: "from-teal-500 to-cyan-500",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section 
      id="skills" 
      ref={ref}
      className="relative py-16 md:py-20 lg:py-24 overflow-visible"
      style={{ minHeight: "auto", scrollMarginTop: "80px" }}
    >
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        {/* Skills Grid - Always visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card group p-5 md:p-6"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5 flex-shrink-0`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <category.icon className="text-primary" size={20} />
                  </div>
                </div>
                <h3 className="font-display font-semibold text-base md:text-lg text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm rounded-full bg-secondary/50 text-foreground/80 
                               border border-border/50 hover:border-primary/50 hover:text-primary 
                               transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
