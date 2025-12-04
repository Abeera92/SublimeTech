import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronUp,
  FiChevronDown,
  FiMessageSquare,
  FiCode,
  FiClock,
  FiTool,
  FiGlobe,
} from "react-icons/fi";

const categories = [
  "All",
  "Services",
  "Process",
  "Design",
  "Support",
  "Clients",
];

const faqs = [
  {
    q: "What services does Sublime Tech provide?",
    a: "We specialize in modern web development, UI/UX design, WordPress, Shopify, React applications, mobile-responsive websites, and digital strategy. Our team stays updated with the latest technologies to deliver cutting-edge solutions.",
    icon: FiCode,
    category: "Services",
  },
  {
    q: "How long does it take to complete a project?",
    a: "Most websites are completed within 2–4 weeks depending on complexity. We follow a structured timeline: Discovery (3-5 days), Design (5-7 days), Development (7-10 days), and Testing/Launch (3-5 days). Larger projects may require additional time.",
    icon: FiClock,
    category: "Process",
  },
  {
    q: "Do you offer ongoing support & maintenance?",
    a: "Yes, we offer flexible maintenance plans starting at $99/month. This includes security updates, performance optimization, content updates, and technical support. We also provide one-time support options for ad-hoc needs.",
    icon: FiTool,
    category: "Support",
  },
  {
    q: "Can I request custom design and animations?",
    a: "Absolutely. We specialize in custom designs, GSAP animations, micro-interactions, and brand-specific UI elements. We'll work closely with you to create unique experiences that align with your brand identity.",
    icon: FiMessageSquare,
    category: "Design",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients across the US, UK, UAE, Europe, and Asia. We're experienced in remote collaboration across time zones and can accommodate different business requirements and compliance needs.",
    icon: FiGlobe,
    category: "Clients",
  },
  {
    q: "What's included in your web development package?",
    a: "Our standard package includes responsive design, SEO optimization, CMS integration, contact forms, basic analytics setup, and 30 days of post-launch support. Additional features can be added based on your requirements.",
    icon: FiCode,
    category: "Services",
  },
  {
    q: "Do you provide hosting and domain services?",
    a: "We partner with reliable hosting providers and can manage hosting setup for you. We recommend premium hosting for better performance and security, but you're free to use your preferred provider.",
    icon: FiTool,
    category: "Services",
  },
  {
    q: "What is your revision policy?",
    a: "We include up to 3 rounds of revisions in our design phase. Additional revisions can be accommodated at a nominal fee. We aim for complete satisfaction and work collaboratively until you're happy with the result.",
    icon: FiMessageSquare,
    category: "Process",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);
  const [selectedCat, setSelectedCat] = useState("All");

  const toggle = (index) => {
    setActive((prev) => (prev === index ? null : index));
  };

  const filteredFaqs =
    selectedCat === "All"
      ? faqs
      : faqs.filter((f) => f.category === selectedCat);

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-2 rounded-3xl mb-6">
            <FiMessageSquare className="text-teal-400" />
            <span className="text-teal-400 text-sm font-medium">FAQ</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">
              Frequently Asked
            </span>
            <br />
            <span className="text-white">Questions</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our services, process, and
            partnership. Can't find an answer?{" "}
            <a
              href="#contact"
              className="text-teal-400 hover:text-teal-300 underline underline-offset-4"
            >
              Contact our team
            </a>
            .
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCat(cat);
                  setActive(null);
                }}
                className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer
                  ${
                    selectedCat === cat
                      ? "bg-teal-500 text-white shadow-lg shadow-teal-500/20"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredFaqs.map((item, i) => {
            const Icon = item.icon;
            const isOpen = active === i;

            return (
              <div key={i} className="flex flex-col">
                <motion.div
                  layout
                  className={`rounded-2xl p-6 cursor-pointer 
                              bg-gradient-to-br from-gray-800/50 to-gray-900/50 
                              backdrop-blur-sm transition-all duration-300
                              ${
                                isOpen
                                  ? "border border-teal-500/30 shadow-xl shadow-teal-500/5"
                                  : "border border-gray-700 hover:border-teal-500/20 hover:shadow-lg"
                              }`}
                  onClick={() => toggle(i)}
                >
                  <div className="flex justify-between items-start">
                    {/* Left side: Icon + Question */}
                    <div className="flex items-start gap-4 flex-1">
                      {Icon && (
                        <div
                          className={`p-2 rounded-lg transition-all duration-300 mt-1 ${
                            isOpen
                              ? "bg-teal-500/20 text-teal-400"
                              : "bg-gray-700 text-gray-400"
                          }`}
                        >
                          <Icon className="text-lg" />
                        </div>
                      )}
                      <div className="text-left flex-1">
                        <div className="inline-block mb-1">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-100 text-lg leading-snug break-words">
                          {item.q}
                        </h3>
                      </div>
                    </div>

                    {/* Right side: Chevron */}
                    <div
                      className={`ml-4 p-2 rounded-full transition-all duration-300 mt-1 ${
                        isOpen
                          ? "bg-teal-500/20 rotate-180"
                          : "bg-gray-700"
                      }`}
                    >
                      {isOpen ? (
                        <FiChevronUp className="text-teal-400" />
                      ) : (
                        <FiChevronDown className="text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Answer section with left border */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        layout
                        key={"ans-" + i}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden mt-4 px-4"
                      >
                        <div className="pl-8 border-l-2 border-teal-500/30">
                          <p className="text-gray-300 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Help */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-gray-800/50 to-teal-900/20 border border-gray-700 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-400">
                Our team is here to help you with any additional questions or concerns.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20">
                Contact Support
              </button>
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}