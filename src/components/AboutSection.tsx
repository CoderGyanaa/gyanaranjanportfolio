import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code, Lightbulb, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: Award,
    title: "2nd Runner-Up",
    description: "Infosys Global Hackathon 2025",
  },
  {
    icon: Code,
    title: "CodeVita Top 2%",
    description: "TCS CodeVita Season 13 — Global Rank 1025",
  },
  {
    icon: Lightbulb,
    title: "AI & Java Focus",
    description: "Prompt Engineering, LLMs & OOP systems",
  },
  {
    icon: Rocket,
    title: "CGPA 8.94 / 10",
    description: "B.Tech CSE — C.V. Raman Global University",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="about" 
      ref={ref}
      className="relative py-16 md:py-20 lg:py-24 overflow-visible"
      style={{
        minHeight: "auto",
        scrollMarginTop: "80px", // Account for sticky header
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Passionate developer with a focus on building practical solutions"
        />

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Text content card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 md:p-8 w-full"
          >
            <p className="text-foreground/90 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              I am a B.Tech Computer Science Engineering graduate (2026) with strong foundations
              in Java, Python, and SQL, and practical experience in AI application development,
              Machine Learning, and data analysis.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              I have built and deployed multiple projects across web, AI, and data domains — from
              backend-focused Java systems with OOP and SQLite, to AI-powered Flask applications
              using Google Gemini and ChatGPT APIs with prompt engineering and n8n automation.
            </p>
            <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
              As the <span className="text-primary font-medium">Second Runner-Up at the Infosys Global
              Hackathon 2025</span> and a <span className="text-primary font-medium">TCS CodeVita Season 13
              global top 2%</span> finalist, I focus on building impactful solutions through consistent
              learning and execution — actively preparing for entry-level software engineering roles.
            </p>
          </motion.div>

          {/* Feature cards grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-3 md:gap-4 w-full"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="skill-card text-center p-4 md:p-6"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <item.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
