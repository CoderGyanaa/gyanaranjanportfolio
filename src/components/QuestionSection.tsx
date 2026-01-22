import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const questionSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  mobile: z.string().trim().min(1, "Mobile number is required").regex(/^[0-9+\-\s()]+$/, "Please enter a valid mobile number").max(20, "Mobile number is too long"),
  query: z.string().trim().min(1, "Please enter your question").max(1000, "Message must be less than 1000 characters"),
});

type QuestionFormData = z.infer<typeof questionSchema>;

// Environment-based webhook configuration
const TEST_WEBHOOK_URL = "https://gyanaranjan.app.n8n.cloud/webhook-test/7bdc569d-22a9-4910-a709-5d49cd07f9de";
const PROD_WEBHOOK_URL = ""; // Replace with production webhook URL when ready

// Set to true when deploying to production
const IS_PRODUCTION = false;

const WEBHOOK_URL = IS_PRODUCTION && PROD_WEBHOOK_URL ? PROD_WEBHOOK_URL : TEST_WEBHOOK_URL;

const QuestionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuestionFormData>({
    resolver: zodResolver(questionSchema),
  });

  const onSubmit = async (data: QuestionFormData) => {
    // Rate limiting - prevent submissions within 5 seconds
    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setLastSubmitTime(now);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim(),
          mobile: data.mobile.trim(),
          query: data.query.trim(),
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="question" className="py-24 relative">
      <div className="absolute inset-0 gradient-bg opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="text-primary" size={32} />
            <h2 className="section-title mb-0">Have a Question?</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to ask anything about my projects, skills, or opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Thank you!
                </h3>
                <p className="text-muted-foreground">
                  Your message has been sent successfully.
                </p>
                <Button
                  onClick={() => setSubmitStatus("idle")}
                  variant="outline"
                  className="mt-6"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-lg bg-destructive/10 border border-destructive/20"
                  >
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    <p className="text-sm text-destructive">
                      Something went wrong. Please try again later.
                    </p>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      {...register("name")}
                      className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      {...register("email")}
                      className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-foreground">
                    Mobile Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    {...register("mobile")}
                    className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all"
                  />
                  {errors.mobile && (
                    <p className="text-sm text-destructive">{errors.mobile.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="query" className="text-foreground">
                    Your Question / Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="query"
                    placeholder="Write your question here..."
                    rows={5}
                    {...register("query")}
                    className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all resize-none"
                  />
                  {errors.query && (
                    <p className="text-sm text-destructive">{errors.query.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary group relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuestionSection;
