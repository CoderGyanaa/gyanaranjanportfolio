import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code, Lightbulb, Rocket } from "lucide-react";

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
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a focus on building practical solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <p className="text-foreground/90 leading-relaxed mb-6">
              I am a final-year Computer Science Engineering student with a strong foundation in Java,
              Data Structures, and problem solving.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              I enjoy building practical software systems, from backend-focused Java applications to
              AI-powered web solutions. I have hands-on experience working on hackathon and academic
              projects where I focused on clean logic, scalability, and real-world usability.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              As an <span className="text-primary font-medium">Infosys Global Hackathon finalist</span>, 
              I thrive in fast-paced environments and enjoy turning complex problems into simple, 
              effective solutions. I am actively preparing for entry-level software engineering roles 
              where I can learn, contribute, and grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="skill-card text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
