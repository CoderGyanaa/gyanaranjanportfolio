import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FileText className="text-primary" size={32} />
            </motion.div>
            
            <h2 className="section-heading text-2xl md:text-3xl font-display font-bold mb-4">
              Download My Resume
            </h2>
            
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Explore my education, skills, projects, and achievements in detail.
              Get the complete picture of my professional journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/resume/Gyana_Ranjan_Sahoo_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText size={18} />
                View Resume
              </motion.a>
              <motion.a
                href="/resume/Gyana_Ranjan_Sahoo_Resume.pdf"
                download
                className="btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                Download PDF
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
