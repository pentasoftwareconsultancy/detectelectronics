import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Career = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("✅ Your application has been sent successfully!");
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send application. Please try again later.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      id="career-section"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-16 py-16 bg-gray-50"
    >
      <h1 className="text-3xl lg:text-4xl font-extrabold text-[#1a3b7c] mb-8">
        Join Our Team
      </h1>
      <div className="relative flex flex-col lg:flex-row items-center justify-center">
        {/* Left: Form */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 mb-10 lg:mb-0"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow-lg rounded-lg p-8 w-full space-y-6"
          >
            {/* Grid layout for two inputs per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Education */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Education*
                </label>
                <input
                  type="text"
                  name="education"
                  required
                  placeholder="B.Tech / MBA / Diploma"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Experience*
                </label>
                <input
                  type="text"
                  name="experience"
                  required
                  placeholder="2 Years / Fresher"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  placeholder="9876543210"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Resume Upload*
                </label>
                <input
                  type="file"
                  name="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                />
              </div>
            </div>

            {/* Note (full width) */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Note (optional)
              </label>
              <textarea
                name="note"
                rows="4"
                placeholder="Any additional information..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0d2c3c] text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-200"
            >
              {isSubmitting ? "Sending..." : "Submit Application"}
            </button>

            {status && (
              <p className="text-center mt-4 text-gray-700">{status}</p>
            )}
          </form>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="/assets/Career.png" // Replace with your career image URL
            alt="Career"
            className="w-full max-w-md rounded-lg shadow-xl h-[480px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Career;
