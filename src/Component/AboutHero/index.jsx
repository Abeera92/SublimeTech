export default function HeroSection() {
  // Online image options - choose one or rotate randomly
  const heroImages = [
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  ];
  
  // Select random image or use first one
  const heroImage = heroImages[0];

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt="Collaborative workspace with diverse team working together"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.className = 'absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900';
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-white/90 font-medium">Ready to Collaborate</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Let's Start Something
            </span>
            <br />
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Great Together
              </span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Transform your vision into reality with our dedicated team of experts. 
            Let's build something extraordinary.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <button 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 active:scale-95"
              onClick={() => console.log('Contact button clicked')}
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Stats */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "250+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "24/7", label: "Support" },
              { value: "98%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      {/* Add these animations to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(5px); opacity: 0; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </section>
  );
}