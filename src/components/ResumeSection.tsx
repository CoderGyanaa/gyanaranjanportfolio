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
          className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <FileText className="text-primary" size={32} />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Download My Resume
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Explore my education, skills, projects, and achievements in detail.
            Get the complete picture of my professional journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume/Gyana_Ranjan_Sahoo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <FileText size={18} />
              View Resume
            </a>
            <a
              href="/resume/Gyana_Ranjan_Sahoo_Resume.pdf"
              download
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
