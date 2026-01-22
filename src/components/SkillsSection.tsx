import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Brain, 
  Globe, 
  Wrench, 
  Database,
  FileCode
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FileCode,
    skills: ["Java", "Python", "SQL"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Core Concepts",
    icon: Brain,
    skills: ["Data Structures & Algorithms", "OOP", "Problem Solving"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "Node.js"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    skills: ["Git", "VS Code", "Flask", "Jupyter Notebook"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL"],
    color: "from-blue-500 to-indigo-500",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <category.icon className="text-primary" size={24} />
                  </div>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary/50 text-foreground/80 
                               border border-border/50 hover:border-primary/50 hover:text-primary 
                               transition-all duration-300"
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
