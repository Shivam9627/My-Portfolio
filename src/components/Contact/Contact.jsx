import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tilt from "react-parallax-tilt";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_5pk72fp",  // Replace with your EmailJS Service ID
        "template_8uijq1q",  // Replace with your EmailJS Template ID
        form.current,
        "A970p1d4bQAkcKKPS"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setIsLoading(false);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setIsLoading(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32 px-[12vw] md:px-[7vw] lg:px-[20vw] relative"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-10 md:mb-16 max-w-3xl px-2">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-purple-300 mb-2 sm:mb-3 md:mb-4 font-semibold">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">LET'S CONNECT</h2>
        <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4 sm:mb-5 md:mb-6"></div>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
          Send me a message and let's create something amazing together! 💡
        </p>
      </div>

      {/* Contact Form */}
      <Tilt
        className="w-full max-w-2xl px-2 sm:px-4"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={600}
      >
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl p-5 sm:p-8 md:p-10 lg:p-12 shadow-[0_0_60px_0px_rgba(124,58,237,0.2)]">
          <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Email Input */}
            <div className="group">
              <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5 sm:mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="your.email@example.com"
                required
                className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-sm bg-white/5 border border-white/10 text-white placeholder-gray-500 
                transition-all duration-300 hover:border-purple-500/40 focus:outline-none focus:border-purple-500 focus:bg-white/10
                focus:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              />
            </div>

            {/* Name Input */}
            <div className="group">
              <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5 sm:mb-2">Full Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
                className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-sm bg-white/5 border border-white/10 text-white placeholder-gray-500 
                transition-all duration-300 hover:border-purple-500/40 focus:outline-none focus:border-purple-500 focus:bg-white/10
                focus:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              />
            </div>

            {/* Subject Input */}
            <div className="group">
              <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5 sm:mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Let's build something great"
                required
                className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-sm bg-white/5 border border-white/10 text-white placeholder-gray-500 
                transition-all duration-300 hover:border-purple-500/40 focus:outline-none focus:border-purple-500 focus:bg-white/10
                focus:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              />
            </div>

            {/* Message Textarea */}
            <div className="group">
              <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5 sm:mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project, ideas, or just say hello!"
                rows="5"
                required
                className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-sm bg-white/5 border border-white/10 text-white placeholder-gray-500 
                transition-all duration-300 hover:border-purple-500/40 focus:outline-none focus:border-purple-500 focus:bg-white/10
                focus:shadow-[0_0_20px_rgba(124,58,237,0.3)] resize-none"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 
              disabled:from-purple-800 disabled:to-blue-800 disabled:cursor-not-allowed
              py-2.5 sm:py-3 md:py-3 px-4 sm:px-5 md:px-6 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl transition-all duration-300
              shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]
              flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span>✨</span>
                </>
              )}
            </button>
          </form>
        </div>
      </Tilt>

      {/* Contact Info Cards */}
      <div className="mt-12 sm:mt-16 md:mt-20 w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-2">
        <a href="https://github.com/Shivam9627" target="_blank" rel="noopener noreferrer" 
          className="group text-center p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 
          transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]">
          <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">💻</div>
          <h4 className="text-base sm:text-lg font-semibold text-white mb-0.5 sm:mb-1">GitHub</h4>
          <p className="text-xs sm:text-sm text-gray-400">Check out my projects</p>
        </a>
        
        <a href="https://www.linkedin.com/in/shivam-chamoli-405883303" target="_blank" rel="noopener noreferrer"
          className="group text-center p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 
          transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">💼</div>
          <h4 className="text-base sm:text-lg font-semibold text-white mb-0.5 sm:mb-1">LinkedIn</h4>
          <p className="text-xs sm:text-sm text-gray-400">Connect with me</p>
        </a>

        <a href="mailto:shivamchamoli09@gmail.com"
          className="group text-center p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 
          transition-all duration-300 hover:border-pink-500/40 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]">
          <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">📧</div>
          <h4 className="text-base sm:text-lg font-semibold text-white mb-0.5 sm:mb-1">Email</h4>
          <p className="text-xs sm:text-sm text-gray-400">Send me a direct email</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
