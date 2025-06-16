import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  CheckCircle,
  AlertCircle,
  User,
  AtSign,
  FileText,
  MessageCircle,
} from "lucide-react";

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    from_email: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // EmailJS Configuration - Replace with your actual IDs
  const EMAILJS_SERVICE_ID = "service_l8ivevj"; // Replace with your service ID
  const EMAILJS_TEMPLATE_ID = "template_a059yie"; // Replace with your template ID
  const EMAILJS_PUBLIC_KEY = "S8S22Wm0VXylpDtBQ"; // Replace with your public key

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: false,
      });
    }
  };

  const validateForm = (): boolean => {
    const errors = {
      from_email:
        formData.from_email.trim() === "" || !isValidEmail(formData.from_email),
      message: formData.message.trim() === "",
    };

    setFieldErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submission
    if (!validateForm()) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result.text);
      setSubmitStatus("success");
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
      setFieldErrors({ from_email: false, message: false });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/LeoItaly",
      color: "hover:text-gray-300",
      bg: "hover:bg-gray-800/20",
      description: "Check out my code repositories",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/leonardo-rodovero",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-800/20",
      description: "Connect professionally",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:s240095@dtu.dk",
      color: "hover:text-purple-400",
      bg: "hover:bg-purple-800/20",
      description: "Direct email contact",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-xl border border-purple-500/50 text-purple-200 font-medium shadow-lg">
              <MessageSquare className="w-5 h-5 mr-3" />
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 leading-tight py-2"
            style={{
              textShadow: "0 0 80px rgba(139, 92, 246, 0.3)",
            }}
          >
            Let's Connect
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Ready to collaborate on the next breakthrough in AI? Let's discuss
            how we can build innovative solutions together. I'm always excited
            to work on challenging projects!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500"
              whileHover={{ scale: 1.01, y: -5 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Send Message
                  </h3>
                  <p className="text-purple-300 text-sm">
                    Email and Message are required
                  </p>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div className="space-y-2">
                    <label
                      htmlFor="from_name"
                      className="flex items-center text-sm font-medium text-gray-300"
                    >
                      <User className="w-4 h-4 mr-2 text-purple-400" />
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 border-white/20 focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder="Your full name (optional)"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div className="space-y-2">
                    <label
                      htmlFor="from_email"
                      className="flex items-center text-sm font-medium text-gray-300"
                    >
                      <AtSign className="w-4 h-4 mr-2 text-purple-400" />
                      Email Address *
                    </label>
                    <motion.input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 border-white/20 focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder="your.email@example.com"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                </div>

                {/* Subject Field */}
                <motion.div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="flex items-center text-sm font-medium text-gray-300"
                  >
                    <FileText className="w-4 h-4 mr-2 text-purple-400" />
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 border-white/20 focus:border-purple-500 focus:ring-purple-500/20"
                    placeholder="Project Collaboration, Job Opportunity, etc. (optional)"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="flex items-center text-sm font-medium text-gray-300"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 text-purple-400" />
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none border-white/20 focus:border-purple-500 focus:ring-purple-500/20"
                    placeholder="Tell me about your project, idea, or how we can collaborate. I'd love to hear from you!"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600"
                  } text-white relative overflow-hidden`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full mr-3"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}

                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.button>

                {/* Submit Status */}
                {submitStatus !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center justify-center p-4 rounded-xl border ${
                      submitStatus === "success"
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : "bg-red-500/20 text-red-300 border-red-500/30"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message sent successfully! I'll get back to you within
                        12 hours.
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 mr-2" />
                        Please fill in all required fields correctly.
                      </>
                    )}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Contact Details */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500"
              whileHover={{ scale: 1.01, y: -5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">s240095@dtu.dk</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">
                      Denmark / Remote Worldwide
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Response Time</p>
                    <p className="text-white font-medium">Within 12 hours</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500"
              whileHover={{ scale: 1.01, y: -5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Github className="w-4 h-4 text-white" />
                </div>
                Connect With Me
              </h3>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20 transition-all duration-300 ${link.color} ${link.bg} group hover:border-white/40`}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center">
                      <link.icon className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <span className="font-medium text-white">
                          {link.name}
                        </span>
                        <p className="text-xs text-gray-400">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      className="w-2 h-2 bg-current rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Availability Status */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 border border-green-500/30 relative overflow-hidden"
              whileHover={{ scale: 1.01, y: -5 }}
            >
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    className="w-4 h-4 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="text-green-300 font-bold text-lg">
                    Available for Projects
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm currently open to new opportunities and collaborations in
                  AI/ML, web development, and research projects. Let's create
                  something innovative together!
                </p>
              </div>

              {/* Background decoration */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </section>
  );
};

export default ContactSection;
