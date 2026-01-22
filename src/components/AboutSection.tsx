import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code, Lightbulb, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: Code,
    title: "Java & DSA",
    description: "Strong foundation in core programming",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into solutions",
  },
  {
    icon: Award,
    title: "Hackathon Finalist",
    description: "Infosys Global Hackathon 2025",
  },
  {
    icon: Rocket,
    title: "Full-Stack Ready",
    description: "Backend to frontend development",
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
              I am a final-year Computer Science Engineering student with a strong foundation in Java,
              Data Structures, and problem solving.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              I enjoy building practical software systems, from backend-focused Java applications to
              AI-powered web solutions. I have hands-on experience working on hackathon and academic
              projects where I focused on clean logic, scalability, and real-world usability.
            </p>
            <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
              As an <span className="text-primary font-medium">Infosys Global Hackathon finalist</span>, 
              I thrive in fast-paced environments and enjoy turning complex problems into simple, 
              effective solutions. I am actively preparing for entry-level software engineering roles 
              where I can learn, contribute, and grow.
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
