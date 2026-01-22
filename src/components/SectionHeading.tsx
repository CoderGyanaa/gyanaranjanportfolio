import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className = "" }: SectionHeadingProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`text-center mb-16 ${className}`}
    >
      {/* Title with synchronized glow */}
      <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
        {title}
      </h2>
      
      {/* Animated glowing divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="section-divider w-24 h-0.5 mx-auto mb-6 rounded-full"
      />
      
      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
