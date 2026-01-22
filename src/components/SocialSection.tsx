import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Code } from "lucide-react";
import SectionHeading from "./SectionHeading";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/CoderGyanaa",
    handle: "@CoderGyanaa",
    color: "hover:text-white hover:bg-[#333]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/gyanaranjansahoo0033",
    handle: "gyanaranjansahoo0033",
    color: "hover:text-white hover:bg-[#0077B5]",
  },
  {
    name: "LeetCode",
    icon: Code,
    url: "https://leetcode.com/u/MS723wNgGs/",
    handle: "MS723wNgGs",
    color: "hover:text-black hover:bg-[#FFA116]",
  },
];

const SocialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Connect With Me"
          subtitle="Find me on these platforms"
        />

        <div ref={ref} className="flex flex-wrap justify-center gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`glass-card p-6 flex items-center gap-4 group transition-all duration-300 cursor-pointer hover:neon-border ${social.color}`}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:bg-transparent transition-colors">
                <social.icon size={24} className="text-primary group-hover:text-inherit transition-colors" />
              </div>
              <div className="text-left">
                <p className="font-display font-semibold text-foreground group-hover:text-inherit">
                  {social.name}
                </p>
                <p className="text-sm text-muted-foreground group-hover:text-inherit/80">
                  {social.handle}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
