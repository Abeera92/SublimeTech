import React, { useState } from "react";
import {
  FiCheck,
  FiZap,
  FiUsers,
  FiBriefcase,
  FiGlobe,
  FiChevronRight,
} from "react-icons/fi";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Core",
      description: "Best for solo creators & startups",
      icon: FiBriefcase,
      monthlyPrice: 19,
      annualPrice: 190,
      features: [
        "100MB Cloud storage",
        "100+ prompt templates",
        "5 projects included",
        "24/7 email support",
        "Basic analytics",
        "Community access",
      ],
      accentColor: "from-gray-500 to-gray-600",
      popular: false,
    },
    {
      name: "Overdrive",
      description: "Perfect for growing businesses",
      icon: FiZap,
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        "1TB Cloud storage",
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom templates",
        "Team collaboration",
        "Export capabilities",
      ],
      accentColor: "from-teal-400 to-teal-600",
      popular: true,
    },
    {
      name: "Team",
      description: "For large teams & enterprises",
      icon: FiUsers,
      monthlyPrice: 39,
      annualPrice: 390,
      features: [
        "10TB Cloud storage",
        "Unlimited team members",
        "Real-time collaboration",
        "Advanced security",
        "Custom onboarding",
        "SLA guarantee",
        "Dedicated manager",
        "Custom integrations",
      ],
      accentColor: "from-blue-500 to-teal-500",
      popular: false,
    },
  ];

  const savings = {
    Core: "Save $38/year",
    Overdrive: "Save $158/year",
    Team: "Save $78/year",
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-2 rounded-full mb-6">
            <FiGlobe className="text-teal-400" />
            <span className="text-teal-400 text-sm font-medium uppercase tracking-wider">
              Pricing Plans
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-teal-200">
              Flexible Pricing
            </span>
            <br />
            <span className="text-white">For Teams of All Sizes</span>
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include core
            features with no hidden fees.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex bg-gray-800/50 backdrop-blur-sm p-1.5 rounded-full border border-gray-700 mb-4">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                !isAnnual
                  ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                isAnnual
                  ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-teal-500/20 text-teal-300 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>

          {isAnnual && (
            <div className="text-center">
              <p className="text-teal-400 text-sm font-medium animate-pulse">
                🎉 Annual billing saves you 20% on all plans!
              </p>
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                onMouseEnter={() => setHoveredPlan(plan.name)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative group transition-all duration-500 ${
                  isPopular
                    ? "md:scale-105 md:-translate-y-4"
                    : "hover:scale-[1.02] hover:-translate-y-2"
                }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-bold rounded-full shadow-lg shadow-teal-500/30">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full rounded-2xl mt-5 overflow-hidden backdrop-blur-sm ${
                    isPopular
                      ? "bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 border-2 border-teal-500/50 shadow-2xl shadow-teal-500/20"
                      : "bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-teal-500/30"
                  }`}
                >
                  {/* Animated gradient border */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.accentColor} p-0.5 opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  <div className="relative h-full bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden group">
  <div className="top bg-teal-700/80 p-8 pt-10 rounded-t-2xl">
    <div className="flex flex-col items-center mb-8">
      <div
        className={`p-4 rounded-xl bg-gradient-to-br ${plan.accentColor} mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
      >
        <Icon className="text-white text-3xl" />
      </div>
      <h3 className="text-3xl font-extrabold text-white tracking-tight">{plan.name}</h3>
      <p className="text-teal-100 text-center text-sm mt-2 leading-snug max-w-xs">
        {plan.description}
      </p>
    </div>

    {/* Price */}
    <div className="text-center mb-6">
      <div className="flex items-center justify-center gap-1">
        <span className="text-6xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-md">
          ${price}
        </span>
        <span className="text-teal-200 mt-4 text-base font-medium">
          /{isAnnual ? "year" : "month"}
        </span>
      </div>
      {isAnnual && (
        <div className="mt-2">
          {/* Highlight savings more clearly */}
          <span className="text-yellow-300 text-sm font-semibold p-1 px-2 bg-yellow-300/10 rounded-lg">
            {savings[plan.name]}
          </span>
        </div>
      )}
    </div>
  </div>

  {/* Features */}
  <ul className="space-y-4 mb-10 p-8">
    {plan.features.map((feature, idx) => (
      <li key={idx} className="flex items-start gap-3 text-gray-300">
        {/* Feature icon color adjusted for better contrast */}
        <div className="p-1 bg-teal-500/20 rounded-full flex-shrink-0 mt-0.5">
          <FiCheck className="text-teal-400 text-base" />
        </div>
        <span className="leading-relaxed text-base">{feature}</span>
      </li>
    ))}
  </ul>

  {/* CTA Button - FIX: Added a wrapper div with padding to prevent full-width collapse */}
  <div className="p-8 pt-0">
    <button
      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
        isPopular
          ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-xl shadow-teal-500/40 transform hover:scale-[1.02]"
          : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-teal-500/50 transform hover:scale-[1.02]"
      } focus:outline-none focus:ring-4 focus:ring-teal-500/50`}
    >
      Get Started
      <FiChevronRight
        className={`text-xl transition-transform duration-300 ${
          hoveredPlan === plan.name ? "translate-x-1" : ""
        }`}
      />
    </button>
  </div>
</div>
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.accentColor} blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-teal-900/20 border border-teal-500/20 rounded-2xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h4 className="text-xl font-bold text-white mb-2">
                  Need a custom plan?
                </h4>
                <p className="text-gray-300">
                  Contact us for enterprise solutions with custom features and
                  pricing.
                </p>
              </div>
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300 hover:scale-105">
                Contact Sales
              </button>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-8">
            All plans come with a 30-day money-back guarantee. No credit card
            required to start.
          </p>
        </div>
      </div>
    </div>
  );
}
