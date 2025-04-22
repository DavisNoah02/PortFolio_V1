import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Service ID:", import.meta.env.VITE_SERVICE_ID);
    // console.log("Template ID:", import.meta.env.VITE_TEMPLATE_ID);
    // console.log("Public Key:", import.meta.env.VITE_PUBLIC_KEY);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Oops! Something went wrong. Please try again.");
      });
  }

  return (
    <section
      id="contact"
      className="min-h-[90vh] flex items-center justify-center py-12 pb-32 "
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row w-full max-w-4xl px-4">
          {/* Contact Information */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Let's talk
            </h2>
            <p className="text-white mb-4 text-justify">
                Whether you have an idea for a project or just want to chat, feel free to shoot me an {" "}
                <a 
                  href="mailto:your.m.davenoa@gmail.com" 
                  className="text-gray-400  hover:text-cyan-400 transition-colors duration-300"
                >
                email here
                </a>
                !
              </p>

          
            <p className="text-white flex items-center pt-10">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-6  text-3xl" />
              Nairobi, KENYA
            </p>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center md:text-left">
              Get In Touch
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Name..."
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Enter your Email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Your Message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
  type="submit"
  className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium relative overflow-hidden transition-all duration-300 ease-in-out border-2 border-transparent hover:border-cyan-400 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:bg-blue-600"
>
  Send Message
</button>

            </form>
          </div>
        </div>
      </RevealOnScroll>
      <ToastContainer />
    </section>
  );
};