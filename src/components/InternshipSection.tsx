import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Building2, Calendar, ExternalLink, Github, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Internship {
  company: string;
  role: string;
  duration: string;
  overview: string;
  majorProjects: { name: string; points: string[] }[];
  additionalProjects?: string[];
  featuredProject?: {
    name: string;
    description: string;
    features: string[];
  };
  technologies: string[];
  actions: { label: string; href: string; icon: "link" | "github" }[];
}

const internships: Internship[] = [
  {
    company: "Mirai School of Technology",
    role: "AI Intern",
    duration: "January 2026 – February 2026",
    overview:
      "Successfully completed an AI Internship focused on designing and implementing production-ready AI automation systems using Large Language Models, APIs, workflow automation, and intelligent agents.",
    majorProjects: [
      {
        name: "AI-Powered Developer Portfolio",
        points: ["Webhooks", "Google Sheets logging", "LLM processing", "Automated AI email responses"],
      },
      {
        name: "Healthcare Appointment Automation",
        points: [
          "Google Calendar integration",
          "Appointment scheduling",
          "Conflict detection",
          "Buffer time logic",
          "Working-hour constraints",
        ],
      },
      {
        name: "Telegram AI Appointment Bot",
        points: ["Conversational booking", "Availability checking", "Appointment scheduling"],
      },
    ],
    additionalProjects: [
      "Weather Web Application",
      "Event Registration Automation",
      "AI Calendar Agent",
      "NASA Space Photo Automation",
      "AI LinkedIn Content Generator",
      "Telegram Approval & Feedback Workflow",
    ],
    technologies: [
      "Python",
      "Google Gemini API",
      "REST APIs",
      "n8n",
      "Google Calendar API",
      "Google Sheets API",
      "Telegram Bot API",
      "Prompt Engineering",
      "LLMs",
      "Workflow Automation",
      "Webhooks",
    ],
    actions: [
      {
        label: "View LinkedIn Showcase",
        href: "https://www.linkedin.com/posts/gyanaranjansahoo0033_artificialintelligence-aiengineering-workflowautomation-activity-7429377814807867392-m95y",
        icon: "link",
      },
    ],
  },
  {
    company: "Odisha State Housing Board (OSHB)",
    role: "Summer Intern",
    duration: "June 2025 – July 2025",
    overview:
      "Worked with the IT department to understand software development workflows, documentation, and administrative systems while independently developing a desktop application for employee leave management.",
    majorProjects: [],
    featuredProject: {
      name: "Smart Employee Leave Management System",
      description:
        "Designed and developed a Java desktop application that automates employee leave requests, approvals, cancellations, leave balance tracking, and administrative operations.",
      features: [
        "Employee Login",
        "Admin Login",
        "Apply Leave",
        "Leave Approval",
        "Leave Cancellation",
        "Leave Balance Tracking",
        "SQLite Database",
        "CRUD Operations",
        "Clean Desktop Interface",
      ],
    },
    technologies: ["Java", "Swing", "SQLite", "SQL", "JDBC", "Object-Oriented Programming"],
    actions: [
      {
        label: "View GitHub Repository",
        href: "https://github.com/CoderGyanaa/leave-management-system.git",
        icon: "github",
      },
    ],
  },
];

const InternshipCard = ({ item, index, isInView }: { item: Internship; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary))] border-2 border-background z-10" />

      {/* Card */}
      <div className="relative group">
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/40 via-accent/20 to-primary/40 opacity-0 group-hover:opacity-60 blur-lg transition-all duration-500" />
        <div
          className="relative rounded-2xl p-6 md:p-8 transition-all duration-500 group-hover:-translate-y-1"
          style={{
            background: "linear-gradient(135deg, hsla(240, 15%, 8%, 0.95), hsla(240, 15%, 12%, 0.9))",
            backdropFilter: "blur(20px)",
            border: "1px solid hsla(240, 15%, 20%, 0.5)",
          }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 shrink-0">
                <Building2 className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">{item.company}</h3>
                <p className="text-primary/90 font-medium mt-1 flex items-center gap-2">
                  <Briefcase size={14} />
                  {item.role}
                </p>
                <p className="text-muted-foreground text-sm mt-1 flex items-center gap-2">
                  <Calendar size={14} />
                  {item.duration}
                </p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{item.overview}</p>

          {/* Featured project */}
          {item.featuredProject && (
            <div className="mb-6 p-4 md:p-5 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="font-display font-semibold text-foreground flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-accent" />
                {item.featuredProject.name}
              </h4>
              <p className="text-muted-foreground text-sm mb-3">{item.featuredProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.featuredProject.features.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary/60 text-foreground/80 border border-border/50"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Major projects */}
          {item.majorProjects.length > 0 && (
            <div className="mb-6">
              <h4 className="font-display font-semibold text-foreground mb-3">Major Projects</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {item.majorProjects.map((p) => (
                  <div key={p.name} className="p-4 rounded-xl bg-secondary/30 border border-border/40">
                    <p className="font-medium text-foreground text-sm mb-2">{p.name}</p>
                    <ul className="space-y-1">
                      {p.points.map((pt) => (
                        <li key={pt} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-primary">▹</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional projects */}
          {item.additionalProjects && (
            <div className="mb-6">
              <h4 className="font-display font-semibold text-foreground mb-3">Additional AI Projects</h4>
              <div className="flex flex-wrap gap-2">
                {item.additionalProjects.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 text-xs rounded-lg bg-accent/5 text-foreground/80 border border-accent/20"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="font-display font-semibold text-foreground mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/5 text-primary/90 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {item.actions.map((a) => (
              <motion.a
                key={a.href}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-primary text-sm font-medium transition-all duration-300"
              >
                {a.icon === "github" ? <Github size={16} /> : <ExternalLink size={16} />}
                {a.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const InternshipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="internships"
      className="relative py-16 md:py-20 lg:py-24 overflow-visible"
      style={{ minHeight: "auto", scrollMarginTop: "80px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <SectionHeading
          title="Internship Experience"
          subtitle="Hands-on experience building production-grade AI systems and real-world enterprise applications."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

          <div className="space-y-10">
            {internships.map((item, i) => (
              <InternshipCard key={item.company} item={item} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
