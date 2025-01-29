import React from "react";
import { BiSolidEnvelope, BiSolidMap, BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#EFEFEF] text-black py-10">
      {/* <hr className="border-t-2 border-gray-800 mx-auto w-full" /> */}
      <div className="container mx-auto py-10 border-t-2 border-gray-800">
        <div className=" mx-8 p-2 flex flex-col md:flex-row justify-between">
          {/* Logo Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-4xl font-redressed text-red-700">
              PanchPokhari Tourism
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-left max-w-72 min-w-48 px-2">
            <h2 className="text-xl font-bold text-yellow-500 mb-4">Reach Us</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <BiSolidPhoneCall className="text-2xl text-black" />
                <span className="text-gray-700 text-base font-Open">
                  +1012 3456 7890
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <BiSolidEnvelope className="text-2xl text-black" />
                <span className="text-gray-700 text-base font-Open">
                  demo@gmail.com
                </span>
              </li>
              <li className="flex space-x-4">
                <BiSolidMap className="text-5xl text-black" />
                <span className="text-gray-700 text-base font-Open">
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </span>
              </li>
            </ul>
          </div>

          <div className="text-left max-w-72 min-w-48 px-2">
            <h2 className="text-xl font-bold text-yellow-500 mb-4">
              PanchPokhari
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <span className="text-gray-700 text-base font-Open">Home</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-gray-700 text-base font-Open">
                  Contact Us
                </span>
              </li>
            </ul>
          </div>

          <div className="text-left max-w-72 min-w-48 px-2">
            <h2 className="text-xl font-bold text-yellow-500 mb-4">
              Find Us On
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-red-700 text-white">
                  <FaTwitter />
                </div>
                <span className="text-gray-700 text-base font-Open">
                  Twitter
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-red-700 text-white">
                  <FaInstagram />
                </div>
                <span className="text-gray-700 text-base font-Open">
                  Instagram
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-red-700 text-white">
                  <FaFacebookF />
                </div>
                <span className="text-gray-700 text-base font-Open">
                  Facebook
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
