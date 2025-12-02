import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaArrowRight, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState("");
  const [animated, setAnimated] = useState(false);

  // Mouse tracking for interactive gradient
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger animations once on load
    setAnimated(true);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: <FaFacebook />, label: "Facebook", color: "hover:text-blue-500" },
    { icon: <FaInstagram />, label: "Instagram", color: "hover:text-pink-500" },
    { icon: <FaLinkedin />, label: "LinkedIn", color: "hover:text-blue-400" }
  ];

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Contact", href: "#" }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 relative overflow-hidden">
      {/* Interactive Background Gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.10), transparent 30%)`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Static Gradient Orbs (no animation) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      {/* Animated Top Border - Runs Once */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: animated ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10 relative z-10">
        
        {/* Company Info - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white relative inline-block">
              Sublime<span className="text-teal-500">Tech</span>
              {/* Underline animation - runs once */}
              <motion.div
                className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-teal-500 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: animated ? "100%" : 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-teal-500 text-sm font-medium">Innovating Tomorrow</span>
              {/* Static dot (no animation) */}
              <div className="w-2 h-2 bg-teal-500 rounded-full" />
            </div>
          </div>

          <motion.p 
            className="mt-4 text-sm leading-relaxed text-gray-400"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            We create modern, fast and scalable digital solutions for businesses 
            around the world. SublimeTech specializes in web development, UI/UX, 
            branding & automations.
          </motion.p>

          <div className="flex gap-4 mt-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -4, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-teal-500 ${social.color} text-xl p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-teal-500/50 transition-all duration-300 relative group`}
                title={social.label}
              >
                <span className="relative z-10">{social.icon}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-white font-semibold text-lg mb-6 relative">
            Quick Links
            {/* Static dot (no animation) */}
            <div className="absolute -right-4 top-1 w-3 h-3 bg-teal-500 rounded-full" />
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <a 
                  className="hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group py-2"
                  href={link.href}
                >
                  {/* Static dot (no animation) */}
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full" />
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-teal-500 to-transparent group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            {/* Decorative gradient accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl" />
            
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Newsletter
              {/* Underline animation - runs once */}
              <motion.div
                className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-teal-500 to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: animated ? "100%" : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </h3>
          </div>
          
          <motion.p 
            className="text-sm mb-6 text-gray-400 leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            Subscribe to our newsletter to stay updated with new products, features and discounts.
          </motion.p>

          <form onSubmit={handleSubscribe} className="relative">
            {/* Static glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-teal-400/10 to-teal-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
            
            <div className="flex flex-col sm:flex-row gap-3 relative">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3.5 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700 focus:outline-none text-white focus:border-teal-500 transition-all duration-300 relative z-10 focus:ring-2 focus:ring-teal-500/30"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white rounded-lg font-medium relative group overflow-hidden whitespace-nowrap min-w-[140px]"
              >
                <span className="relative flex items-center justify-center gap-3">
                  <FiMail className="text-lg" />
                  <span className="font-semibold">Subscribe</span>
                </span>
              </motion.button>
            </div>
            
            {/* Success/Error message */}
            {email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-xs text-teal-400 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Press Enter or click Subscribe
              </motion.p>
            )}
          </form>

          {/* Stats Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 p-5 rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 backdrop-blur-sm group hover:border-teal-500/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-400 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full" />
                  Community Updates
                </p>
                <p className="text-sm text-white font-medium">
                  Join 5,000+ subscribers receiving weekly insights
                </p>
              </div>
              
              <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20">
                <FaArrowRight className="text-teal-400 text-sm" />
              </div>
            </div>
            
            {/* Progress bar - animate once */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Weekly newsletter</span>
                <span className="text-teal-400">95% open rate</span>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Location - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
            <FaMapMarkerAlt className="text-teal-500" />
            Location
          </h3>
          
          <motion.div 
            className="relative rounded-xl overflow-hidden border-2 border-gray-700 group hover:border-teal-500 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <iframe
              className="w-full h-40"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0148899518454!2d67.03095201500327!3d24.860734151037712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dfecf7d5b07%3A0xe6e1b5a510d94d8d!2sKarachi!5e0!3m2!1sen!2s!4v1692123123123"
              title="Karachi Location"
            />
          </motion.div>

          <div className="space-y-3 mt-4">
            <motion.div 
              className="flex items-center gap-3 group"
              whileHover={{ x: 5 }}
            >
              <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-teal-500/10 transition-colors">
                <FaEnvelope className="text-teal-500 text-sm" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <a href="mailto:support@sublimetech.com" className="text-teal-400 hover:text-teal-300 text-sm transition-colors">
                  support@sublimetech.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-3 group"
              whileHover={{ x: 5 }}
            >
              <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-teal-500/10 transition-colors">
                <FaPhone className="text-teal-500 text-sm" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <a href="tel:+923001234567" className="text-teal-400 hover:text-teal-300 text-sm transition-colors">
                  +92 300 1234567
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar - Enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="border-t border-gray-700 mt-12 pt-6 text-center relative"
        viewport={{ once: true }}
      >
        {/* Animated gradient line - runs once */}
        <motion.div
          className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm order-2 md:order-1">
            © {new Date().getFullYear()} SublimeTech — All Rights Reserved.
          </div>
          
          <div className="order-1 md:order-2 mb-4 md:mb-0">
            {/* Static text (no animation) */}
            <div className="text-white text-lg font-bold tracking-wider">
              <span className="text-teal-500">S</span>UBLIME
              <span className="text-teal-500">T</span>ECH
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-gray-500 text-sm order-3">
            {["Privacy Policy", "Terms", "Cookies"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -2, color: "#2DD4BF" }}
                className="hover:text-teal-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-teal-500 to-transparent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Trust badge */}
        <motion.div
          className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-1">
            <span className="text-teal-500">✓</span>
            <span>Trusted by 500+ clients worldwide</span>
          </div>
          {/* Static star (no animation) */}
          <span className="text-xs">✦</span>
        </motion.div>
      </motion.div>

      {/* Bottom static gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500" />
    </footer>
  );
}