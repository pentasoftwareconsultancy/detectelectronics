import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

export default function Career() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SHEETDB_URL = "https://sheetdb.io/api/v1/0njojp7n0cd8u";

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const dataObject = Object.fromEntries(formData.entries());

    try {
      // Send email via EmailJS
      await emailjs.send(
        "service_cr8jt81",
        "template_ku5gxv7",
        dataObject,
        "TbOu2fj_P6o9kiPSu"
      );

      // Send data to SheetDB.io
      await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: dataObject }),
      });

      toast.success("✅ Your application has been sent & saved successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to send application. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-16 py-16 bg-gray-50">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="text-3xl lg:text-4xl font-extrabold text-[#2384c5] mb-8 text-center">
        Join Our Team
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-stretch w-full">
        {/* ===== Left: Form ===== */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white shadow-lg rounded-2xl p-8 flex flex-col"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-4 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name*</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Education*</label>
                <input
                  type="text"
                  name="education"
                  required
                  placeholder="B.Tech / MBA / Diploma"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Experience*</label>
                <input
                  type="text"
                  name="experience"
                  required
                  placeholder="2 Years / Fresher"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  placeholder="9876543210"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Resume Upload*</label>
                <input
                  type="file"
                  name="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Note (optional)</label>
              <textarea
                name="note"
                rows="4"
                placeholder="Any additional information..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#2384c5] text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-200`}
            >
              {isSubmitting ? "Sending..." : "Submit Application"}
            </button>
          </form>
        </motion.div>

        {/* ===== Right: Image ===== */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <img
            src="/assets/Career.png"
            alt="Career"
            className="w-full max-w-3xl rounded-lg shadow-xl h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
