import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    setSubmitted(true);

    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl w-full">
          {/* Contact Form */}
          <div id="contact-section" className="bg-white p-10 rounded-3xl shadow-lg border border-blue-100">
            <h2 className="text-3xl font-bold mb-6 text-[#1E3A8A] text-center">
              Send us a message
            </h2>

            {submitted && (
              <p className="text-green-600 text-center mb-4 font-semibold">
                Your message has been sent successfully!
              </p>
            )}

            {error && (
              <p className="text-red-600 text-center mb-4 font-semibold">
                {error}
              </p>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <FiUser
                  className="absolute top-1/2 left-3 -translate-y-1/2 text-[#6B7280]"
                  size={20}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 border border-[#CBD5E1] rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
                  required
                />
              </div>

              <div className="relative">
                <FiMail
                  className="absolute top-1/2 left-3 -translate-y-1/2 text-[#6B7280]"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 border border-[#CBD5E1] rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
                  required
                />
              </div>

              <div className="relative">
                <FiMessageCircle
                  className="absolute top-3 left-3 text-[#6B7280]"
                  size={20}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-10 pt-3 border border-[#CBD5E1] rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0b367c] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#2563EB] transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-blue-100 flex flex-col justify-center items-center space-y-6">
            <h2 className="text-3xl font-bold mb-4 text-[#1E3A8A] text-center">
              Contact Info
            </h2>
            <p className="text-gray-700 text-center">
              Reach us via phone, email, or visit our office. We're here to
              assist you!
            </p>

            <div className="flex flex-col items-center space-y-4 text-gray-700 text-center w-full max-w-xs">
              {/* Location */}
              <div className="flex items-center space-x-3 w-full">
                <MapPin size={20} className="flex-shrink-0" />
                <div className="leading-snug text-left">
                  2nd Floor UdyogShree Complex <br />
                  Near Sutgirni Chowk
                  <br />
                  Chhatrapati Sambhajinagar-431005
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3 w-full">
                <Phone size={20} />
                <span>9922260007</span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 w-full">
                <Mail size={20} />
                <span>info@detectelectronics.com</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-6 text-center">
              <p className="text-gray-700 mb-2">Follow us on social media:</p>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3B82F6] hover:bg-[#2563EB] text-white p-3 rounded-full transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3B82F6] hover:bg-[#2563EB] text-white p-3 rounded-full transition"
                  aria-label="Twitter"
                >
                  <RiTwitterXLine />
                </a>
                <a
                  href="https://www.instagram.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#EC4899] hover:bg-[#DB2777] text-white p-3 rounded-full transition"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/919922260007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full transition"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-7xl w-full h-[500px]">
        <iframe
          title="Location Map"
          width="100%"
          height="90%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30019.631524906694!2d75.341454!3d19.863045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2802659e88d%3A0x2bd34032db6b808c!2sUlkanagari%2C%20Chhatrapati%20Sambhajinagar%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1759741261934!5m2!1sen!2sus"
        ></iframe>
      </div>
    </div>
  );
}
