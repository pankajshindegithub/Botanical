import React, { useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="w-full mt-15 py-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact <span className="text-green-600">Us</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We love hearing from plant lovers! Whether you want guidance,
            support, or have business inquiries — reach out anytime.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* LEFT SECTION: CONTACT DETAILS */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Email</h2>
              <p className="text-gray-600 mt-2">support@botanicalstore.com</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
              <p className="text-gray-600 mt-2">+91 98765 12345</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Store Location
              </h2>
              <p className="text-gray-600 mt-2">
                Green Valley Road, Mumbai, India – 400072
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Business Hours
              </h2>
              <p className="text-gray-600 mt-2">Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* RIGHT SECTION: FORM */}
          <motion.form
            variants={fadeUp}
            className="bg-green-50 p-8 rounded-xl shadow-sm space-y-6"
          >
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-md border outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md border outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows="6"
                className="w-full px-4 py-3 rounded-md border outline-none resize-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="w-full bg-[#36614d] text-white py-3 mt-4 rounded-md font-medium shadow-md"
              type="button"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
