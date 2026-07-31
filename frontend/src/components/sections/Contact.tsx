"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    url: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ name: "", email: "", service: "", url: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 w-full" id="contact">
      <div className="w-full max-w-[1100px] mx-auto py-24 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#2ecc71]/20 border border-[#2ecc71] text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg z-50"
          >
            <CheckCircle2 className="w-5 h-5 text-[#2ecc71]" />
            <span className="text-sm font-medium">Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mb-16 flex flex-col gap-3">
        <span className="text-[#C4C9D6] text-[18px] font-medium">Ready to Build Something Great ?</span>
        <h2 className="text-[48px] font-bold text-white tracking-tight leading-tight">
          Get In <span className="text-[#7C6EFA]">Touch</span>
        </h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row bg-[#131929] rounded-[24px] w-full max-w-5xl overflow-hidden shadow-2xl relative"
      >
        {/* Left Side - Info */}
        <div className="flex-1 p-12 bg-gradient-to-br from-[#1E2540] to-[#131929] relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#7C6EFA]/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-[32px] font-bold text-white leading-tight mb-4">
              Let's create something <br/><span className="text-[#7C6EFA]">extraordinary</span>
            </h3>
            <p className="text-[#94A3B8] text-[15px] leading-relaxed max-w-[90%]">
              Whether you have a project in mind or just want to chat about design and tech, feel free to reach out. I typically respond within 24 hours.
            </p>
          </div>

          <div className="relative z-10 mt-12 flex flex-col gap-6">
            <div>
              <p className="text-[#7C6EFA] font-semibold text-[13px] uppercase tracking-wider mb-2">Email</p>
              <a href="mailto:hello@example.com" className="text-white text-[18px] hover:text-[#7C6EFA] transition-colors font-medium">
                hello@example.com
              </a>
            </div>
            <div>
              <p className="text-[#7C6EFA] font-semibold text-[13px] uppercase tracking-wider mb-2">Social</p>
              <div className="flex gap-4">
                {["Twitter", "LinkedIn", "Dribbble", "Github"].map((social) => (
                  <a key={social} href="#" className="text-white hover:text-[#7C6EFA] text-[15px] transition-colors font-medium">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="flex-[1.2] p-12 bg-[#131929] flex flex-col gap-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white text-[13px] font-semibold">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name" 
                className="w-full bg-[#131929] border border-[#2A3050] text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#7C6EFA] transition-colors text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-[13px] font-semibold">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email" 
                className="w-full bg-[#131929] border border-[#2A3050] text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#7C6EFA] transition-colors text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-[13px] font-semibold">Services</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#131929] border border-[#2A3050] text-[#94A3B8] px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#7C6EFA] transition-colors text-sm appearance-none"
              >
                <option value="">Select...</option>
                <option value="ui_ux">UI/UX Design</option>
                <option value="web_dev">Web Development</option>
                <option value="framer">Framer Development</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-[13px] font-semibold">Website Url</label>
              <input 
                type="text" 
                name="url"
                value={formData.url}
                onChange={handleChange}
                placeholder="Your Website or LinkedIn Url" 
                className="w-full bg-[#131929] border border-[#2A3050] text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#7C6EFA] transition-colors text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-white text-[13px] font-semibold">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type Your Message Here" 
                rows={3}
                className="w-full bg-[#131929] border border-[#2A3050] text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#7C6EFA] transition-colors text-sm resize-none"
              />
            </div>
          </div>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 bg-[#5B4FD4] hover:bg-[#4d42b5] text-white font-semibold py-4 rounded-full transition-all hover:shadow-[0_4px_20px_rgba(91,79,212,0.4)] text-sm disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </motion.div>
      </div>
    </section>
  );
};
