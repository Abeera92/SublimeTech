import React, { useState, useEffect, useRef } from 'react';
import { FiExternalLink, FiGithub, FiChevronRight, FiAward } from 'react-icons/fi';
// The CSS Cubic Bezier for 'ease-in-out' in Tailwind is: cubic-bezier(0.4, 0, 0.2, 1)

// --- 1. Custom Hook for Counting Animation ---
const useInViewCounter = (endValue, duration = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const initialValue = 0;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let startTime;
                    const animateCount = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const percentage = Math.min(progress / duration, 1);

                        // Simple easing function (ease-out-quad)
                        const easedPercentage = percentage * (2 - percentage);
                        
                        // Handle non-numeric end values like "250+"
                        const numericEndValue = parseInt(endValue, 10);
                        const isPlus = endValue.includes('+');

                        const currentValue = initialValue + easedPercentage * (numericEndValue - initialValue);
                        
                        setCount(Math.floor(currentValue));

                        if (percentage < 1) {
                            requestAnimationFrame(animateCount);
                        } else {
                            // Ensure the final value is displayed, including the '+'
                            setCount(isPlus ? numericEndValue : numericEndValue);
                        }
                    };

                    requestAnimationFrame(animateCount);
                    observer.unobserve(entry.target); // Stop observing after first view
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [endValue, duration]);

    // Format the display value
    const isPlus = endValue.includes('+');
    const displayValue = `${Math.round(count)}${isPlus ? '+' : ''}`;

    return { count, ref, displayValue };
};

// --- 2. CounterStat Component to apply the hook ---
const CounterStat = ({ label, value, gradient }) => {
    const { ref, displayValue } = useInViewCounter(value);

    return (
        <div 
            ref={ref}
            className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center overflow-hidden group hover:border-teal-500/50 transition-all duration-500"
        >
            {/* Animated Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10 group-hover:opacity-20 transition-all duration-700 animate-gradient-x`} />
            
            {/* Moving Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer opacity-0 group-hover:opacity-100" />
            
            <div className="relative z-10">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2 animate-gradient`}>
                    {/* Display the animated value */}
                    {displayValue}
                </div>
                <div className="text-gray-400 text-sm">
                    {label}
                </div>
            </div>
        </div>
    );
};

// --- 3. Main Component ---
const FeaturedProjects = () => {
    // Set a default active ID when not hovering (e.g., the first project)
    const [activeId, setActiveId] = useState(1);

    const projects = [
        // ... (Your projects array remains the same)
        {
          id: 1,
          title: "EcoCommerce Platform",
          description: "Sustainable e-commerce with carbon tracking",
          category: "Web Development",
          tech: ["React", "Node.js", "MongoDB"],
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
          liveLink: "#",
          githubLink: "#"
        },
        {
          id: 2,
          title: "HealthSync Pro",
          description: "Healthcare management system",
          category: "SaaS",
          tech: ["Next.js", "Firebase", "TypeScript"],
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&q=80",
          liveLink: "#",
          githubLink: "#"
        },
        {
          id: 3,
          title: "FinTech Dashboard",
          description: "Real-time investment tracking",
          category: "Finance",
          tech: ["Vue.js", "Python", "PostgreSQL"],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
          liveLink: "#",
          githubLink: "#"
        },
        {
          id: 4,
          title: "EduLearn Pro",
          description: "Interactive AI learning platform",
          category: "EdTech",
          tech: ["React Native", "Express", "OpenAI"],
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80",
          liveLink: "#",
          githubLink: "#"
        },
        {
          id: 5,
          title: "SmartHome Hub",
          description: "IoT smart home automation",
          category: "IoT",
          tech: ["React", "Raspberry Pi", "MQTT"],
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
          liveLink: "#",
          githubLink: "#"
        }
      ];

    // Mouse event handlers are simplified: no need for isHovering state for this smooth effect
    const handleMouseEnter = (id) => {
        setActiveId(id);
    };

    const handleMouseLeave = () => {
        // Option 1: Revert to the first one after a short delay (for a smooth 'settle' effect)
        // You can remove this timeout if you want it to revert instantly.
        setTimeout(() => {
            setActiveId(1);
        }, 300); 
    };

    const statsData = [
        { label: "Projects", value: "250+", gradient: "from-teal-400 via-teal-500 to-teal-600" },
        { label: "Clients", value: "120+", gradient: "from-teal-500 via-teal-600 to-teal-700" },
        { label: "Years", value: "8+", gradient: "from-teal-600 via-teal-700 to-teal-800" },
        { label: "Awards", value: "24", gradient: "from-teal-700 via-teal-800 to-teal-900" },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 py-20 px-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-400/5 rounded-full blur-3xl animate-pulse delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-2 rounded-full mb-6">
                        <FiAward className="text-teal-400" />
                        <span className="text-teal-400 text-sm font-medium uppercase tracking-wider">
                            Featured Work
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-teal-200">
                            Featured Projects
                        </span>
                    </h1>
                    
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Hover over any project to explore details. Each panel expands to reveal more information.
                    </p>
                </div>

                {/* Smooth Accordion Container */}
                <div className="w-full max-w-6xl mx-auto mb-20">
                    <div 
                        className="flex h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-black/30 backdrop-blur-sm"
                        onMouseLeave={handleMouseLeave}
                    >
                        {projects.map((project) => {
                            const isActive = activeId === project.id;
                            
                            return (
                                <div
                                    key={project.id}
                                    // *** SMOOTHER TRANSITION CHANGE HERE ***
                                    className={`relative flex-1 group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                                        isActive ? 'flex-[3]' : 'flex-[1]'
                                    } overflow-hidden`}
                                    onMouseEnter={() => handleMouseEnter(project.id)}
                                    style={{
                                        backgroundImage: `url(${project.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        // Ensuring the flex property transition is also smooth
                                        transition: 'flex 0.7s cubic-bezier(0.4, 0, 0.2, 1), background-image 0.5s linear' 
                                    }}
                                >
                                    {/* Multi-layer Gradient Overlay */}
                                    <div className="absolute inset-0">
                                        {/* Base overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                                            isActive ? 'opacity-60' : 'opacity-70'
                                        }`} />
                                        
                                        {/* Active state overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-t from-teal-900/20 via-transparent to-transparent transition-opacity duration-500 ${
                                            isActive ? 'opacity-100' : 'opacity-0'
                                        }`} />
                                    </div>
                                    
                                    {/* Content Container */}
                                    <div className={`relative h-full p-6 flex flex-col ${
                                        isActive ? 'justify-between' : 'justify-end'
                                    } transition-all duration-700`}>
                                        
                                        {/* Tech Stack (Only visible when active) */}
                                        {isActive && (
                                            <div className="flex flex-wrap gap-2 mb-4 animate-fade-in">
                                                {project.tech.map((tech, index) => (
                                                    <span 
                                                        key={index}
                                                        className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full border border-teal-500/30 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-teal-500/30"
                                                        style={{ animationDelay: `${index * 100}ms` }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        
                                        {/* Project Info */}
                                        <div>
                                            {/* Category */}
                                            <div className="mb-3">
                                                <span className="text-teal-400 text-sm font-medium uppercase tracking-wider transition-all duration-300">
                                                    {project.category}
                                                </span>
                                            </div>
                                            
                                            {/* Title with smooth scaling */}
                                            <h3 className={`text-white font-bold mb-3 transition-all duration-700 transform ${
                                                isActive ? 'text-3xl translate-y-0' : 'text-xl translate-y-2'
                                            }`}>
                                                {project.title}
                                            </h3>
                                            
                                            {/* Description with smooth opacity and height transition */}
                                            <div className={`overflow-hidden transition-all duration-700 ${
                                                isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                                            }`}>
                                                <p className="text-gray-200 leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>
                                            
                                            {/* Action Buttons (Only visible when active) */}
                                            <div className={`overflow-hidden transition-all duration-700 ${
                                                isActive ? 'max-h-32 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                                            }`}>
                                                <div className="flex gap-3">
                                                    <a
                                                        href={project.liveLink}
                                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30"
                                                    >
                                                        <FiExternalLink />
                                                        Live Demo
                                                    </a>
                                                    <a
                                                        href={project.githubLink}
                                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 font-medium rounded-lg border border-gray-600 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                                                    >
                                                        <FiGithub />
                                                        View Code
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Active Indicator Border - Smooth */}
                                    <div className={`absolute inset-0 border-2 border-teal-500/50 rounded-2xl transition-all duration-700 ${
                                        isActive ? 'opacity-100' : 'opacity-0'
                                    }`} />
                                    
                                    {/* Side Border Indicator - Smooth */}
                                    <div className={`absolute top-0 bottom-0 left-0 w-0.5 transition-all duration-700 bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 ${
                                        isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                                    } transform origin-top`} />
                                    
                                    {/* Hover glow effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-teal-500/0 transition-all duration-700 ${
                                        isActive ? 'opacity-30' : 'opacity-0'
                                    }`} />
                                </div>
                            );
                        })}
                    </div>

                    {/* Instructions */}
                    <div className="text-center mt-8">
                        <p className="text-gray-400 text-sm tracking-wide">
                            Hover over any project panel to expand and view details
                        </p>
                    </div>
                </div>

                {/* Stats Section with Animated Counters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
                    {statsData.map((stat, index) => (
                        // *** USE THE NEW COUNTER STAT COMPONENT HERE ***
                        <CounterStat 
                            key={index} 
                            label={stat.label} 
                            value={stat.value} 
                            gradient={stat.gradient} 
                        />
                    ))}
                </div>

                {/* CTA Section (No changes needed here) */}
                <div className="text-center">
                    <div className="relative bg-gradient-to-r from-teal-900/20 to-gray-800/50 border border-teal-500/20 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto backdrop-blur-sm overflow-hidden">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-teal-700/10 animate-gradient-x" />
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Have a project in mind?
                                </h3>
                                <p className="text-gray-300">
                                    Let's collaborate and create something extraordinary together.
                                </p>
                            </div>
                            
                            <div className="flex gap-4">
                                <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30 flex items-center justify-center gap-2 overflow-hidden">
                                    <span className="relative z-10">Start Project</span>
                                    <FiChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                                    {/* Button glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                                </button>
                                
                                <button className="relative px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 transition-all duration-300 overflow-hidden">
                                    <span className="relative z-10">View Portfolio</span>
                                    {/* Hover effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add custom animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes gradient-x {
                    0% { background-position: 0% 0%; }
                    100% { background-position: 200% 0%; }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                
                .animate-gradient-x {
                    background-size: 200% 100%;
                    animation: gradient-x 3s linear infinite;
                }
                
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
                
                /* Smooth transition classes (removed as Tailwind utility classes are now 
                   set to duration-700 for the main accordion and content) 
                .transition-smooth {
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                */
            `}</style>
        </section>
    );
};

export default FeaturedProjects;