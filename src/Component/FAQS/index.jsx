import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiMessageSquare, FiGlobe, FiClock, FiTool, FiCode } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What services does Sublime Tech provide?",
    a: "We specialize in modern web development, UI/UX design, WordPress, Shopify, React applications, mobile-responsive websites, and digital strategy. Our team stays updated with the latest technologies to deliver cutting-edge solutions.",
    icon: FiCode,
    category: "Services"
  },
  {
    q: "How long does it take to complete a project?",
    a: "Most websites are completed within 2–4 weeks depending on complexity. We follow a structured timeline: Discovery (3-5 days), Design (5-7 days), Development (7-10 days), and Testing/Launch (3-5 days). Larger projects may require additional time.",
    icon: FiClock,
    category: "Process"
  },
  {
    q: "Do you offer ongoing support & maintenance?",
    a: "Yes, we offer flexible maintenance plans starting at $99/month. This includes security updates, performance optimization, content updates, and technical support. We also provide one-time support options for ad-hoc needs.",
    icon: FiTool,
    category: "Support"
  },
  {
    q: "Can I request custom design and animations?",
    a: "Absolutely. We specialize in custom designs, GSAP animations, micro-interactions, and brand-specific UI elements. We'll work closely with you to create unique experiences that align with your brand identity.",
    icon: FiMessageSquare,
    category: "Design"
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients across the US, UK, UAE, Europe, and Asia. We're experienced in remote collaboration across time zones and can accommodate different business requirements and compliance needs.",
    icon: FiGlobe,
    category: "Clients"
  },
  {
    q: "What's included in your web development package?",
    a: "Our standard package includes responsive design, SEO optimization, CMS integration, contact forms, basic analytics setup, and 30 days of post-launch support. Additional features can be added based on your requirements.",
    icon: FiCode,
    category: "Services"
  },
  {
    q: "Do you provide hosting and domain services?",
    a: "We partner with reliable hosting providers and can manage hosting setup for you. We recommend premium hosting for better performance and security, but you're free to use your preferred provider.",
    icon: FiTool,
    category: "Services"
  },
  {
    q: "What is your revision policy?",
    a: "We include up to 3 rounds of revisions in our design phase. Additional revisions can be accommodated at a nominal fee. We aim for complete satisfaction and work collaboratively until you're happy with the result.",
    icon: FiMessageSquare,
    category: "Process"
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Services", "Process", "Design", "Support", "Clients"];
  
  const filteredFaqs = activeFilter === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeFilter);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-2 [rounded-full] mb-6">
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
            Everything you need to know about our services, process, and partnership.
            Can't find an answer?{" "}
            <a href="#contact" className="text-teal-400 hover:text-teal-300 underline underline-offset-4">
              Contact our team
            </a>.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 [rounded-full] text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-teal-500 text-white shadow-lg shadow-teal-500/20"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredFaqs.map((item, i) => {
            const Icon = item.icon;
            const isOpen = openIndex === i;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border ${
                  isOpen 
                    ? "border-teal-500/30 shadow-xl shadow-teal-500/5" 
                    : "border-gray-700 hover:border-teal-500/20 hover:shadow-lg transition-all duration-300"
                } rounded-2xl overflow-hidden`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-800/20 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${
                      isOpen 
                        ? "bg-teal-500/20 text-teal-400" 
                        : "bg-gray-700 text-gray-400"
                    }`}>
                      <Icon className="text-lg" />
                    </div>
                    
                    <div className="text-left">
                      <div className="inline-block mb-2">
                        <span className="text-xs font-medium px-2 py-1 [rounded-full] bg-gray-700 text-gray-300">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-100 text-lg leading-tight">
                        {item.q}
                      </h3>
                    </div>
                  </div>
                  
                  <div className={`ml-4 p-2 [rounded-full] transition-all duration-300 ${
                    isOpen 
                      ? "bg-teal-500/20 rotate-180" 
                      : "bg-gray-700"
                  }`}>
                    {isOpen ? (
                      <FiChevronUp className="text-teal-400" />
                    ) : (
                      <FiChevronDown className="text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-12">
                          <div className="border-l-2 border-teal-500/30 pl-4">
                            <p className="text-gray-300 leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
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
                <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold [rounded-full] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20">
                  Contact Support
                </button>
                <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold [rounded-full] border border-white/20 transition-all duration-300">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;