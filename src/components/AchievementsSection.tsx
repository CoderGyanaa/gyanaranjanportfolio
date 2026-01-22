import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@/assets/achievements/infosys_2nd_runner_up.jpg";
import img2 from "@/assets/achievements/infosys_duo.jpg";
import img3 from "@/assets/achievements/infosys_mentor.jpeg";
import img4 from "@/assets/achievements/four_member.jpeg";
import img5 from "@/assets/achievements/infosys_bbsr_team.jpeg";
import img6 from "@/assets/achievements/infosys_bbsr.jpeg";
import img7 from "@/assets/achievements/team_kinetix.jpeg";

const achievements = [
  {
    image: img1,
    caption: "Infosys Global Hackathon 2025 – 2nd Runner Up",
    year: "2025",
  },
  {
    image: img2,
    caption: "Third Prize Winners – Hyderabad",
    year: "2025",
  },
  {
    image: img3,
    caption: "Team with Mentor – Global Hackathon",
    year: "2025",
  },
  {
    image: img4,
    caption: "Core Team – Hackathon Finalists",
    year: "2025",
  },
  {
    image: img5,
    caption: "Infosys Bhubaneswar Team",
    year: "2025",
  },
  {
    image: img6,
    caption: "Regional Round – Infosys Campus",
    year: "2025",
  },
  {
    image: img7,
    caption: "Smart India Hackathon 2025 – Team Kinetix",
    year: "2025",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? achievements.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === achievements.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Achievements & Highlights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Capturing moments from hackathons, competitions, and memorable events
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl glass-card cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={achievement.image}
                alt={achievement.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium text-foreground">{achievement.caption}</p>
                  <p className="text-xs text-primary">{achievement.year}</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full glass-card hover:bg-primary/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-4 md:left-8 p-3 rounded-full glass-card hover:bg-primary/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={achievements[selectedImage].image}
                alt={achievements[selectedImage].caption}
                className="max-w-full max-h-[70vh] object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <p className="text-lg font-medium text-foreground">
                  {achievements[selectedImage].caption}
                </p>
                <p className="text-sm text-primary">{achievements[selectedImage].year}</p>
              </div>
            </motion.div>

            <button
              className="absolute right-4 md:right-8 p-3 rounded-full glass-card hover:bg-primary/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AchievementsSection;
