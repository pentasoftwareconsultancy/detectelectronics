import React, { useState } from "react";
import { FiUser, FiMail, FiMessageCircle, FiPhone } from "react-icons/fi";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ===== Handle Input Change =====
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ===== Handle Form Submit =====
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
  };

  return (
    <div className="scroll-smooth bg-gradient-to-r from-[#f0f4f8] to-[#eaf1f6] py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* ===== Left Side: Contact Form ===== */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-[#2384c5] mb-6">
            Send us a message
          </h2>

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
                type="number"
                name="Phone Number"
                value={formData.number}
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

            {/* ===== Buttons ===== */}
            <button
              type="submit"
              className="w-full bg-[#2384c5] text-white py-3 rounded-xl font-semibold text-lg hover:bg-[#123e54] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* ===== Right Side: Contact Info ===== */}
        <div className="bg-white shadow-lg rounded-2xl py-12 px-32 text-center">
          <h2 className="text-3xl font-bold text-[#2384c5] mb-4">
            Contact Info
          </h2>
          <p className="text-gray-600 my-8">
            Reach us via phone, email, or visit our office. We're here to assist you!
          </p>

          <div className="space-y-8 text-gray-700">
            <p className="flex items-start justify-center gap-3">
              <MapPin /> 2 Floor Udayog Shree Complex, Near Sudgirni Chowk, Chhatrapati Sambhajinagar-431005.
            </p>
            <p className="flex items-center justify-center gap-3">
              <Phone /> +91 9922260007
            </p>
            <p className="flex items-center justify-center gap-3">
              <Mail /> info@detectelectronics.com
            </p>
          </div>

          {/* ===== Social Icons ===== */}
          <h3 className="text-lg mt-8 font-semibold text-gray-800">
            Connect with us:
          </h3>
          <div className="flex justify-center gap-6 mt-9">
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