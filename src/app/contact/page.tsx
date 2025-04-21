"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebookMessenger, FaTelegram, FaViber } from "react-icons/fa";
import { FiDownload, FiMail, FiPhone } from "react-icons/fi";

const HireMePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    purpose: "hire", // Default to hiring
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="text-red-400">Work Together</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Available for freelance projects and full-time opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 border border-gray-700 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FiMail className="text-red-400 mr-3" />
              Hiring Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Purpose</label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
                >
                  <option value="hire">Hire for Project</option>
                  <option value="fulltime">Full-time Opportunity</option>
                  <option value="collab">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition min-h-[150px]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition flex items-center justify-center"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* CV Download */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FiDownload className="text-red-400 mr-3" />
                My Resume
              </h3>
              <p className="text-gray-400 mb-4">
                Download my CV to review my skills and experience
              </p>
              <a
                href="/path-to-your-cv.pdf"
                download
                className="inline-flex items-center px-6 py-2 border border-gray-600 hover:border-red-400 text-gray-300 hover:text-white rounded-lg transition"
              >
                Download CV (PDF)
              </a>
            </div>

            {/* Direct Contact */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Direct Contact
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center">
                  <FiMail className="text-red-400 mr-4 text-xl" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-white hover:text-red-300 transition"
                    >
                      amm926616@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                  <FiPhone className="text-red-400 mr-4 text-xl" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone/Viber</p>
                    <a
                      href="tel:+1234567890"
                      className="text-white hover:text-red-300 transition"
                    >
                      +959457027122
                    </a>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex items-center">
                  <FaTelegram className="text-red-400 mr-4 text-xl" />
                  <div>
                    <p className="text-gray-400 text-sm">Telegram</p>
                    <a
                      href="https://t.me/adamd178"
                      target="_blank"
                      className="text-white hover:text-red-300 transition"
                    >
                      @adamd178
                    </a>
                  </div>
                </div>

                {/* Messenger */}
                <div className="flex items-center">
                  <FaFacebookMessenger className="text-red-400 mr-4 text-xl" />
                  <div>
                    <p className="text-gray-400 text-sm">Messenger</p>
                    <a
                      href="https://m.me/adamd178"
                      target="_blank"
                      className="text-white hover:text-red-300 transition"
                    >
                      @adamd178
                    </a>
                  </div>
                </div>

                {/* Viber */}
                <div className="flex items-center">
                  <FaViber className="text-red-400 mr-4 text-xl" />
                  <div>
                    <p className="text-gray-400 text-sm">Viber</p>
                    <p className="text-white">+95 XXX XXX XXX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Availability
              </h3>
              <p className="text-gray-400">Currently available for:</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Freelance projects</li>
                <li>Full-time positions</li>
                <li>Technical collaborations</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HireMePage;
