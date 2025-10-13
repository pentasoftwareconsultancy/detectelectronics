import React, { useState } from "react";
import { FiUser, FiMail, FiMessageCircle, FiPhone } from "react-icons/fi";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // ✅ Replace with your SheetDB.io API URL
  const SHEETDB_URL = "https://sheetdb.io/api/v1/x5q2n92jq3yt4";

  // ===== Handle Input Change =====
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ===== Handle Form Submit =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // 1️⃣ Send email via EmailJS
      await emailjs.send(
        "service_zaoaomo",
        "template_hjgozeg",
        formData,
        "TbOu2fj_P6o9kiPSu"
      );

      // 2️⃣ Send data to SheetDB.io
      const sheetResponse = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }), // SheetDB expects { data: { ... } }
      });

      const sheetResult = await sheetResponse.json();

      setSubmitMessage("Message sent & saved successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });

    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="scroll-smooth bg-gradient-to-r from-[#f0f4f8] to-[#eaf1f6] py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* ===== Left Side: Contact Form ===== */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-[#2384c5] mb-6">
            Send us a message
          </h2>

          {submitMessage && (
            <div
              className={`mb-4 p-3 rounded-lg text-center ${
                submitMessage.includes("successfully")
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}
            >
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3">
              <FiUser className="text-gray-500 text-xl" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="flex-1 outline-none bg-transparent"
                required
              />
            </div>

            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3">
              <FiPhone className="text-gray-500 text-xl" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="flex-1 outline-none bg-transparent"
                required
              />
            </div>

            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3">
              <FiMail className="text-gray-500 text-xl" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="flex-1 outline-none bg-transparent"
                required
              />
            </div>

            <div className="flex items-start gap-3 border border-gray-300 rounded-xl px-4 py-3">
              <FiMessageCircle className="text-gray-500 text-xl mt-1" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="flex-1 outline-none bg-transparent resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-xl font-semibold text-lg transition-all ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#2384c5] hover:bg-[#123e54] text-white"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* ===== Right Side: Contact Info ===== */}
        <div className="bg-white shadow-lg rounded-2xl py-12 px-8 md:px-12 flex flex-col text-center">
          <h2 className="text-3xl font-bold text-[#2384c5] mb-4">
            Contact Info
          </h2>
          <p className="text-gray-600 my-8">
            Reach us via phone, email, or visit our office. We're here to assist
            you!
          </p>

          <div className="space-y-8 text-gray-700">
            <p className="flex items-start justify-center gap-3">
              <MapPin className="flex-shrink-0 mt-1" />
              <span>
                2 Floor Udayog Shree Complex, Near Sudgirni Chowk, Chhatrapati
                Sambhajinagar-431005.
              </span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <Phone /> +91 9922260007
            </p>
            <p className="flex items-center justify-center gap-3">
              <Mail /> info@detectelectronics.com
            </p>
          </div>

          <h3 className="text-lg mt-8 font-semibold text-gray-800">
            Connect with us:
          </h3>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/satish-ajabe-18b00653/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#0077b5] text-white p-3 rounded-full hover:scale-110 transition-transform"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://wa.me/919922260007"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white p-3 rounded-full hover:scale-110 transition-transform"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
