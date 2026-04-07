import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    // FormSubmit will handle the rest automatically
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 font-sans bg-[#0a0a0a]"
    >
      <ToastContainer />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            I'd love to hear from you! Fill the form below and I'll reply soon.
          </p>
        </div>

        <div className="bg-gray-900 border border-purple-900/50 rounded-3xl p-8 md:p-12">
          <form 
            action="https://formsubmit.co/boravivek459@gmail.com" 
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
            />

            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
            />

            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
            />

            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="6" 
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none resize-y"
            />

            {/* Hidden fields (recommended) */}
            <input type="hidden" name="_next" value="https://yourportfolio.com/thankyou" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Message from Portfolio!" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 py-4 text-lg font-semibold rounded-2xl transition-all disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Your message will be sent directly to my email
        </p>
      </div>
    </section>
  );
};

export default Contact;