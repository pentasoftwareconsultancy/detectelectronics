import React, { useRef, useState } from "react";
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
        "YOUR_SERVICE_ID",     // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",    // Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY"      // Replace with your EmailJS public key
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
    <section className="flex flex-col items-center w-full mt-16 mb-16 px-4">
      <h1 className="text-3xl font-semibold text-[#0d2c3c] mb-8">
        Career Application Form
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name*</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Education */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Education*</label>
          <input
            type="text"
            name="education"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Experience*</label>
          <input
            type="text"
            name="experience"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone Number*</label>
          <input
            type="tel"
            name="phone"
            required
            pattern="[0-9]{10}"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Gmail */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Gmail*</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Note (optional) */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Note (optional)</label>
          <textarea
            name="note"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
        </div>

        {/* Resume Upload */}
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0d2c3c] text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
        >
          {isSubmitting ? "Sending..." : "Submit Application"}
        </button>

        {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
      </form>
    </section>
  );
};

export default Career;
