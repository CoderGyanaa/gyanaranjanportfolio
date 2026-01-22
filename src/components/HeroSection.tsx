import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen } from "lucide-react";
import heroImage from "@/assets/hero/home.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-bg grid-pattern flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements - synchronized with particle colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--neon-cyan) / 0.3), transparent)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--neon-purple) / 0.3), transparent)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--neon-blue) / 0.1), transparent 60%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Confident intro - removed B.Tech label */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-foreground">Hi, I'm </span>
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary inline-block"
                style={{
                  textShadow: "0 0 40px hsl(var(--neon-cyan) / 0.5)",
                  filter: "drop-shadow(0 0 20px hsl(var(--neon-cyan) / 0.3))"
                }}
              >
                Gyana Ranjan
              </span>
            </motion.h1>

            {/* Tech stack pills */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-primary">Java</span>
              <span className="mx-2 text-muted-foreground/50">•</span>
              <span className="text-accent">DSA</span>
              <span className="mx-2 text-muted-foreground/50">•</span>
              <span className="text-primary">AI</span>
              <span className="mx-2 text-muted-foreground/50">•</span>
              <span className="text-accent">Full-Stack Development</span>
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-muted-foreground max-w-xl mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I build scalable software, solve real problems, and turn ideas into working systems.
            </motion.p>

            {/* CTA Buttons with enhanced feedback */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a 
                href="#projects" 
                className="btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FolderOpen size={18} />
                View Projects
              </motion.a>
              <motion.a
                href="/resume/Gyana_Ranjan_Sahoo_Resume.pdf"
                download
                className="btn-outline flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image with synchronized glow */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-image-frame animate-float"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
                <img
                  src={heroImage}
                  alt="Gyana Ranjan Sahoo"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator with smooth animation */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
