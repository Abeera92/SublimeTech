import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import bgimg from "../../assets/herobanner.jpg";

export default function ContactHero() {
  const offices = [
    { 
      title: "Gulberg Office", 
      address: "Sublime Tech, Habib Bank Plaza, 301 Gulberg Rd, Gulberg-A, Faisalabad, 38000",
      phone: "+92 300 1234567",
      email: "gulberg@sublimetech.com",
      
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.036577876066!2d73.05736521509928!3d31.421666381375283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922434a824e85cf%3A0x30141256d694c05e!2sHabib%20Bank%20Plaza!5e0!3m2!1sen!2s!4v1698765432100!5m2!1sen!2s",
      lat: 31.421666,
      lng: 73.059554
    },
    { 
      title: "Kohinoor Office", 
      address: "6-A, Zam Zam Tower, Kohinoor Rd, Kohinoor City, Faisalabad, 39800",
      phone: "+92 300 7654321",
      email: "kohinoor@sublimetech.com",
  
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.123456789012!2d73.12345678901234!3d31.23456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3923a123456789ab%3A0x9876543210abcde!2sZam%20Zam%20Tower!5e0!3m2!1sen!2s!4v1698765432101!5m2!1sen!2s",
      lat: 31.234567,
      lng: 73.123456
    },
  ];

  return (
    <>
      {/* HERO BANNER (No change here) */}
      <section
        className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Heading Text */}
        <div className="relative text-center z-10 px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-teal-400" />
            <span className="text-teal-400 text-sm font-medium">Our Locations</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-teal-200">
              Let's Start Something
            </span>
            <br />
            <span className="text-white">Great Together</span>
          </h1>
        
        </div>
      </section>

      <div className="relative z-20 -mt-28 md:-mt-20 pb-20 px-4">
       
        <div className="max-w-4xl mx-auto"> 
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-teal-500/30 transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Map Container */}
                <div className="relative h-54 overflow-hidden">
                  <iframe
                    title={`Map - ${office.title}`}
                    src={office.mapUrl}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  
                  {/* Office Indicator on Map */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium border border-teal-500/30">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-2xl animate-pulse" />
                        <span>{office.title}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Details */}
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-[20px] font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
                      {office.title}
                    </h3>
                  
                  </div>

                  <div className="space-y-2">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-teal-500/10 rounded-lg">
                        <MapPin className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1 font-medium">Address</p>
                        <p className="text-gray-300">{office.address}</p>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-teal-500/10 rounded-lg">
                          <Phone className="w-4 h-4 text-teal-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1 font-medium">Phone</p>
                          <p className="text-white">{office.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-teal-500/10 rounded-lg">
                          <Mail className="w-4 h-4 text-teal-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1 font-medium">Email</p>
                          <p className="text-white">{office.email}</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-8">
                    <button className="flex-1 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20">
                      Get Directions
                    </button>
                    <button className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold rounded-lg border border-gray-700 transition-all duration-300 hover:scale-105">
                      Call Now
                    </button>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-teal-500/0 group-hover:border-teal-500/30 rounded-2xl transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Additional Info (Commented out) */}
        </div>
      </div>

      {/* Custom animations (No change here) */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(5px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </>
  );
}