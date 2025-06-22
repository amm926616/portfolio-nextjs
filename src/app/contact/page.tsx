"use client";

import {
  CV_FORM_DOWNLOAD_LINK,
  CV_LAST_UPDATED,
  CV_SIZE_IN_MB,
  PHONE_NUMBER,
} from "@/src/data/links.data";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebookMessenger, FaTelegram, FaViber } from "react-icons/fa";
import {
  FiCalendar,
  FiDownload,
  FiMail,
  FiPhone,
  FiUser,
} from "react-icons/fi";

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
            className="bg-gray-900/50 border border-gray-800 hover:border-red-500/40 rounded-2xl p-6 transition-all duration-300 group hover:shadow-md hover:shadow-red-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition">
                <FiMail className="text-red-400 text-2xl" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Hiring Inquiry
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              {/* Name */}
              <div>
                <label className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition text-white placeholder:text-gray-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition text-white placeholder:text-gray-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Purpose */}
              <div>
                <label className="block text-gray-400 mb-2">Purpose</label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition text-white"
                >
                  <option value="hire">Hire for Project</option>
                  <option value="fulltime">Full-time Opportunity</option>
                  <option value="collab">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition min-h-[150px] text-white placeholder:text-gray-500 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700"
                  placeholder="Tell me what you have in mind..."
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-medium rounded-lg transition-all shadow hover:shadow-red-500/30"
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
            <div className="bg-gray-900/50 border border-gray-800 hover:border-red-500/40 rounded-2xl p-6 transition-all duration-300 group hover:shadow-md hover:shadow-red-500/20">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition">
                    <FiDownload className="text-red-400 text-3xl" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    My Resume
                  </h3>
                </div>
                <p className="text-xs text-gray-400 hidden sm:block">
                  Last updated: {CV_LAST_UPDATED || "June 2024"}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Download my CV to learn more about my experience, skills, and
                past projects.
              </p>

              {/* Button */}
              <a
                href={CV_FORM_DOWNLOAD_LINK}
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-medium rounded-lg transition-all shadow hover:shadow-red-500/30"
              >
                <FiDownload className="mr-2 text-base" />
                Download CV (PDF)
                <span className="ml-2 text-xs text-white/80">
                  {CV_SIZE_IN_MB || "2.4"} MB
                </span>
              </a>

              {/* Last Updated (mobile) */}
              <p className="text-xs text-gray-500 mt-4 sm:hidden">
                Last updated: {CV_LAST_UPDATED || "June 2024"}
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 hover:border-red-500/40 rounded-2xl p-6 transition-all duration-300 group hover:shadow-md hover:shadow-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition">
                  <FiUser className="text-red-400 text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Direct Contact
                </h3>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Reach out via your preferred communication platform.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <FiMail className="text-red-400 text-lg" />,
                    label: "Email",
                    value: "amm926616@gmail.com",
                    href: "mailto:amm926616@gmail.com",
                  },
                  {
                    icon: <FiPhone className="text-red-400 text-lg" />,
                    label: "Phone/Viber",
                    value: PHONE_NUMBER,
                    href: `tel:${PHONE_NUMBER}`,
                  },
                  {
                    icon: <FaTelegram className="text-red-400 text-lg" />,
                    label: "Telegram",
                    value: "@adamd178",
                    href: "https://t.me/adamd178",
                  },
                  {
                    icon: (
                      <FaFacebookMessenger className="text-red-400 text-lg" />
                    ),
                    label: "Messenger",
                    value: "@adamd178",
                    href: "https://m.me/adamd178",
                  },
                  {
                    icon: <FaViber className="text-red-400 text-lg" />,
                    label: "Viber",
                    value: PHONE_NUMBER,
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-3 -mx-3 rounded-lg hover:bg-gray-700/50 transition-all ${
                      !item.href ? "pointer-events-none" : ""
                    }`}
                  >
                    <div className="p-2 bg-red-500/10 rounded-lg mr-3">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gray-900/50 border border-gray-800 hover:border-red-500/40 rounded-2xl p-6 transition-all duration-300 group hover:shadow-md hover:shadow-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition">
                  <FiCalendar className="text-red-400 text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2">
                  Availability
                  <span className="text-xs font-medium bg-red-500/20 text-red-300 px-2 py-1 rounded-full">
                    Open to Work
                  </span>
                </h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                I am currently accepting the following types of work:
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "Freelance projects",
                  "Full-time positions",
                  "Technical collaborations",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-300 hover:text-white transition"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HireMePage;
