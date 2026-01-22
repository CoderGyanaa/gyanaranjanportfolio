import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
  { name: "Question", href: "#question" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active section detection
  const updateActiveSection = useCallback(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));
    const scrollPosition = window.scrollY + 150; // Offset for navbar height

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sections[i]);
        return;
      }
    }
    setActiveSection("");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      updateActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    updateActiveSection();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateActiveSection]);

  const isActive = (href: string) => activeSection === href.replace("#", "");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-display font-bold text-foreground"
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveSection("")}
        >
          <span className="text-primary">G</span>yana
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative text-sm font-medium transition-colors duration-300 py-1 ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.name}
              {/* Active/hover underline with glow */}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-primary scale-x-100 shadow-[0_0_10px_hsl(var(--primary))]"
                    : "bg-primary scale-x-0 group-hover:scale-x-100"
                }`}
                style={{
                  transformOrigin: "center",
                }}
              />
              {/* Hover underline */}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary transition-transform duration-300 origin-left ${
                  isActive(link.href) ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                }`}
              />
            </motion.a>
          ))}
          <motion.a
            href="/resume/Gyana_Ranjan_Sahoo_Resume.pdf"
            download
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="btn-primary text-sm"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-card mt-2 mx-4 rounded-xl overflow-hidden"
        >
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 transition-colors duration-300 flex items-center gap-2 ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {isActive(link.href) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                )}
                {link.name}
              </a>
            ))}
            <a
              href="/resume/Gyana_Ranjan_Sahoo_Resume.pdf"
              download
              className="btn-primary text-center"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
