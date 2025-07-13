import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

import { FiSend } from "react-icons/fi"; 

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  useEffect(() => {
    if (statusMsg) {
      const timer = setTimeout(() => setStatusMsg(null), 20000);
      return () => clearTimeout(timer);
    }
  }, [statusMsg]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setStatusMsg({ type: "error", text: "Please complete the reCAPTCHA.👇" });
      return;
    }

    setStatusMsg(null);
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatusMsg({
          type: "success",
          text: "Message sent! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatusMsg({
          type: "error",
          text: "Something went wrong. Please try again.",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="min-h-[90vh] flex items-center justify-center py-28 ">
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row w-full max-w-4xl px-4">
          {/* Left Side: Info */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Let's talk
            </h2>
            <p className="text-white mb-4 text-justify">
              Whether you have an idea for a project or just want to chat, feel free to reach out!
            </p>

            <div className="space-y-6 text-white">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-500 rounded-full p-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 6.86L12 13l9.99-6.14A2 2 0 0020 4H4c-.73 0-1.38.4-1.72 1.02l-.27.84z" />
                    <path d="M22 8.24l-10 6.14-10-6.14V18a2 2 0 002 2h16a2 2 0 002-2V8.24z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-400">m.davenoa@gmail.com</p>
                  <a href="mailto:m.davenoa@gmail.com" className="text-blue-400 hover:underline hover:text-purple-500">
                    Send an email
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-500 rounded-full p-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 12.72 12.72 0 004.52 1.21 1 1 0 011 1v3.09a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.09a1 1 0 011 1 12.72 12.72 0 001.21 4.52 1 1 0 01-.21 1.11l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-400">+254729239023</p>
                  <a href="tel:+254729239023" className="text-blue-400 hover:underline hover:text-purple-500">
                    Call me
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 text-red-500 rounded-full p-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1114.5 9 2.5 2.5 0 0112 11.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-400">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center md:text-left">
              Get In Touch
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
              />
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Enter your Email"
              />
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
              />
              
              {statusMsg && (
                <div className={`text-center mb-4 ${statusMsg.type === "success" ? "text-green-400" : "text-red-400"}`}>
                  {statusMsg.text}
                </div>
              )}

              {/* ✅ New: Animated Send Button with Icon */}
              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-cyan-400 bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:bg-blue-600 hover:cursor-pointer hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] disabled:opacity-60"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <FiSend className="transform transition-transform duration-200 group-hover:translate-x-1" />
}
                </span>
                <span className="absolute left-0 top-0 h-full w-full transform translate-x-[-100%] bg-white/20 opacity-10 blur-md transition-all duration-700 group-hover:translate-x-full"></span>
              </button>

              {/* reCAPTCHA */}
              <div className="relative recaptcha-container">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={setRecaptchaToken}
                />
              </div>
            </form>
          </div>
        </div>
      </RevealOnScroll>
      <ToastContainer position="bottom-right" />
    </section>
  );
};
