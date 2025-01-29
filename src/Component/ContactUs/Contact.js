import React from "react";
import { BiSolidMessage, BiSolidPhoneCall } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto bg-gray-50 py-6 px-2 md:px-5 w-2/3 mt-7">
      <h2 className="text-center text-black text-2xl md:text-3xl font-Playfair font-medium mb-2">
        Get in Touch
      </h2>
      <p className="text-center text-[16px] text-black mb-8 font-Open">
        Have questions about your trip to Panch Pokhari or need assistance with
        bookings? We're here to help!
      </p>

      <div className=" bg-white flex flex-col gap-2 md:flex-row p-2">
        {/* Contact Information Section */}
        <div className="bg-red-800 relative p-6 pr-28 rounded-lg shadow-md text-left flex-1">
          <h3 className="text-white font-semibold font-Open text-[20px] mb-1">
            Contact Information
          </h3>
          <p className="text-gray-400 mb-12 text-[16px]">
            Say something to get help!
          </p>

          <div className="flex items-center mb-8">
            <BiSolidPhoneCall className="text-xl text-white mx-2" />
            <a
              href="tel:+977-1-23456789"
              className="text-white hover:text-gray-600 text-[12px] pl-4 w-full"
            >
              +977-1-23456789
            </a>
          </div>

          <div className="flex items-center mb-8">
            <BiSolidMessage className="text-xl text-white mx-2" />
            <a
              href="mailto:support@panchpokhari.com"
              className="text-white hover:text-gray-600 text-[12px] pl-4 w-full"
            >
              support@panchpokhari.com
            </a>
          </div>

          <div className="flex items-center mb-[100px] -mr-10">
            <FaMapMarkerAlt className="text-xl text-white mx-2" />
            <p className="text-white pl-4 text-[12px]">
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </p>
          </div>
          <img
            src="/assets/Images/Ellipse 793.png"
            alt="Segment"
            className="absolute bottom-0 right-0 object-contain"
          />
          <img 
            src="/assets/Images/Ellipse 794.png"
            alt="Circle"
            className="absolute bottom-0 right-8 object-contain"
          />
        </div>

        {/* Contact Form Section */}
        <div className=" px-6 py-10 rounded-lg flex-[2]">
          <form>
            <div className="flex gap-4 mb-5">
              <div className="border-b-2 border-slate-600 w-full">
                <p className="font-Open text-xs">First Name</p>
                <input
                  type="text"
                  placeholder="John"
                  className="flex-1 focus:outline-none"
                />
              </div>
              <div className="border-b-2 border-slate-600 w-full">
                <p className="font-Open text-xs">Last Name</p>
                <input
                  type="text"
                  placeholder="Doe"
                  className="flex-1 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-4 mb-8">
              <div className="border-b-2 border-slate-600 w-full">
                <p className="font-Open text-xs">Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 focus:outline-none"
                />
              </div>
              <div className="border-b-2 border-slate-600 w-full">
                <p className="font-Open text-xs">Phone Number</p>
                <input
                  type="tel"
                  placeholder="+1 212 3456 789"
                  className="flex-1 focus:outline-none"
                />
              </div>
            </div>
            <div className="border-b-2 border-slate-600 mb-6">
              <p className="font-Open text-xs">Message</p>
              <textarea
                placeholder="Write your message..."
                className="w-full h-6 resize-none focus:outline-none"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-red-700 text-white text-xs font-Open py-[10px] px-6 rounded-3xl hover:bg-red-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
