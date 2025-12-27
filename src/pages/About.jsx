import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HeroImg2 from "../assets/HeroImg2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="w-full py-14 mt-15 md:mt-25 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP SECTION */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* TEXT */}
          <motion.div variants={fadeUp}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              About <span className="text-green-600">Our Botanical World</span>
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Welcome to our botanical store — your green space for exploring
              stunning indoor and outdoor plants. Our plants do more than
              decorate; they purify, calm, and bring nature into your home.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Established with passion and love for greenery, our mission is to
              provide premium, handpicked plants to plant lovers and beginners
              around the world.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We grow, care, and nurture plants in natural environments,
              ensuring every customer receives a premium-quality plant with full
              care guidance.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div variants={fadeUp} className="w-full">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              src={HeroImg2}
              alt="about"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </motion.div>

        {/* WHY CHOOSE US SECTION */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            Why Choose Us?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Plants",
                text: "Healthy, well-nurtured plants that stay vibrant & fresh.",
              },
              {
                title: "Expert Care Guide",
                text: "Detailed care instructions to help beginners grow confidently.",
              },
              {
                title: "Fast Delivery",
                text: "Secure packing & fast doorstep delivery without damage.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-6 border rounded-xl shadow-sm bg-white"
              >
                <h3 className="text-xl font-semibold text-green-600">
                  {card.title}
                </h3>
                <p className="mt-3 text-gray-600">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* MISSION */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 bg-green-50 p-10 rounded-xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Our Mission
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            To create a world where nature and people coexist. We aim to make
            plant care enjoyable and easy, making every home greener, healthier,
            and happier.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
