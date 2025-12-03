
import React from "react";
import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT PANEL */}
        <div className="space-y-6">

          {/* Appointment Button */}
          <button className="w-full bg-teal-500 hover:bg-teal-400 text-gray-900 font-semibold py-3 rounded">
            BOOK AN APPOINTMENT
          </button>

          {/* Contact Items */}
          <div className="space-y-4">

            <div className="p-5 border border-gray-800 bg-gray-900 rounded-md flex items-start gap-4">
              <FiPhone className="text-teal-400 text-2xl" />
              <div>
                <p className="text-gray-300">+1 (123) 456 7890</p>
                <p className="text-xs text-gray-500">TALK TO AN EXPERT</p>
              </div>
            </div>

            <div className="p-5 border border-gray-800 bg-gray-900 rounded-md flex items-start gap-4">
              <FiMail className="text-teal-400 text-2xl" />
              <div>
                <p className="text-gray-300">info@example.com</p>
                <p className="text-xs text-gray-500">SEND AN EMAIL</p>
              </div>
            </div>

            <div className="p-5 border border-gray-800 bg-gray-900 rounded-md flex items-start gap-4">
              <FiClock className="text-teal-400 text-2xl" />
              <div>
                <p className="text-gray-300">Mon - Fri: 9:00am - 7:00pm</p>
                <p className="text-xs text-gray-500">BUSINESS HOURS</p>
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div className="p-5 border border-gray-800 bg-gray-900 rounded-md space-y-3 text-gray-300 text-sm">
            <p>OUR SERVICES</p>
            <p>VIEW PRICING</p>
            <p>READ FAQS</p>
            <p>CAREERS</p>
          </div>

          {/* Social Icons */}
          {/* <div className="flex gap-3 mt-4">
  <FaFacebookF size={20}
    className="p-3 bg-gray-800 text-gray-300 rounded-full text-xl cursor-pointer 
               hover:bg-teal-500 hover:text-gray-900 transition-all duration-300"
  />
  <FaTwitter
    className="p-3 bg-gray-800 text-gray-300 rounded-full text-xl cursor-pointer 
               hover:bg-teal-500 hover:text-gray-900 transition-all duration-300"
  />
  <FaLinkedinIn
    className="p-3 bg-gray-800 text-gray-300 rounded-full text-xl cursor-pointer 
               hover:bg-teal-500 hover:text-gray-900 transition-all duration-300"
  />
</div> */}

        </div>

        {/* RIGHT FORM PANEL */}
        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 p-10 rounded-md">
          <h2 className="text-center text-2xl font-semibold mb-8">
            Send us a message
          </h2>

          <form className="space-y-6">
            {/* Name fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-400 text-sm">FIRST NAME</label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 bg-gray-950 border border-gray-800 text-gray-300 rounded focus:border-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm">LAST NAME</label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 bg-gray-950 border border-gray-800 text-gray-300 rounded focus:border-teal-500 outline-none"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-400 text-sm">EMAIL ADDRESS</label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 bg-gray-950 border border-gray-800 text-gray-300 rounded focus:border-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm">PHONE NUMBER</label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 bg-gray-950 border border-gray-800 text-gray-300 rounded focus:border-teal-500 outline-none"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="text-gray-400 text-sm">SUBJECT</label>
              <input
                type="text"
                className="w-full mt-1 p-3 bg-gray-950 border border-gray-800 text-gray-300 rounded focus:border-teal-500 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-400 text-sm">DETAILS</label>
              <textarea
                rows="5"
                className="w-full mt-1 p-3 bg-gray-950 border border-gray-800 text-gray-300 rounded focus:border-teal-500 outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button className="w-full bg-teal-500 hover:bg-teal-400 text-gray-900 font-semibold py-3 rounded">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
