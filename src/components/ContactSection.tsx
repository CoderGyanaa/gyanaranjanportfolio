import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 gradient-bg opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm open to internship and entry-level software engineering opportunities. Feel free to reach out for collaboration or discussion."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Khordha, Odisha, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:gyanaranjansahoo0033@gmail.com"
                    className="text-foreground font-medium hover:text-primary transition-colors break-all"
                  >
                    gyanaranjansahoo0033@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="mailto:gyanaranjansahoo0033@gmail.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Send size={18} />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
