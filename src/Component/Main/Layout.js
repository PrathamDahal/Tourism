import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { FaBell, FaMapMarkerAlt, FaShoppingCart, FaUser } from "react-icons/fa";
import { MdSearch, MdTranslate } from "react-icons/md";
import "../../App.css"; // Import the CSS file

const Layout = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isHomePage = location.pathname === "/";

  return (
    <div className="w-full">
      <nav className="flex justify-between items-center w-full absolute top-6 px-4 z-20">
        {/* Logo or Title */}
        <p className="text-red-700 font-redressed text-[34px] px-5">
          Panchpokhari Tourism
        </p>

        {/* Navigation Links */}
        <ul className="flex space-x-4 text-sm gap-x-3 bg-transparent">
          <li>
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500 font-sans transition-colors`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/WhereToGo"
              className={`${
                isActive("/WhereToGo") ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500 font-sans transition-colors`}
            >
              Where To Go
            </Link>
          </li>
          <li>
            <Link
              to="/WhereToStay"
              className={`${
                isActive("/WhereToStay") ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500 font-sans transition-colors`}
            >
              Where To Stay
            </Link>
          </li>
          <li>
            <Link
              to="/LocalProducts"
              className={`${
                isActive("/LocalProducts") ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500 font-sans transition-colors`}
            >
              Local Products
            </Link>
          </li>
          <li>
            <Link
              to="/ContactUs"
              className={`${
                isActive("/ContactUs") ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500 font-sans transition-colors`}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Icons and Links */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-5">
            <Link
              to="/notifications"
              className="hover:text-blue-300 text-white"
            >
              <FaBell className="text-xl" />
            </Link>
            <Link to="/cart" className="hover:text-blue-300 text-white">
              <FaShoppingCart className="text-xl" />
            </Link>
            <Link to="/cart" className="hover:text-blue-300 text-white">
              <MdTranslate className="text-xl font-semibold" />
            </Link>
          </div>

          <button className="py-1.5 px-5 hover:bg-red-700 rounded-2xl">
            <Link
              to="/SignUp"
              className="text-white hover:text-white font-sans text-base transition-colors underline"
            >
              SIGN UP
            </Link>
          </button>
          <button className="py-1.5 px-5 bg-red-500 hover:bg-red-700 rounded-2xl">
            <Link
              to="/login"
              className="hover:text-white text-white font-sans text-base transition-colors"
            >
              LOG IN
            </Link>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`hero relative bg-cover bg-center ${
          isHomePage ? "h-[600px]" : "h-[500px]"
          } text-white flex items-center justify-center`}
        style={{ backgroundImage: `url(/assets/Images/UniversalUpscaler.png)` }}
      >
        {isActive("/") && (
          <>
            <img
              src="/assets/Images/Ellipse 2.png"
              alt="Segment"
              className="absolute bottom-0 right-0 object-contain w-[135px] h-[175px]"
            />
            <img
              src="/assets/Images/Ellipse 3.png"
              alt="Segment"
              className="absolute bottom-0 right-0 object-contain w-[172px] h-[210px]"
            />
            <img
              src="/assets/Images/Ellipse 4.png"
              alt="Segment"
              className="absolute bottom-0 right-0 object-contain w-[205px] h-[240px]"
            />
            <img
              src="/assets/Images/Ellipse 5.png"
              alt="Segment"
              className="absolute bottom-0 right-0 object-contain w-[235px] h-[270px]"
            />
            <img
              src="/assets/Images/Ellipse 6.png"
              alt="Segment"
              className="absolute bottom-0 right-0 object-contain w-[280px] h-[300px]"
            />
          </>
        )}
      </section>

      {isActive("/") ? ( //Home
        <div className="justify-center p-3 absolute top-[300px] left-[20px] w-[580px]">
          <p className="text-4xl font-bold font-Playfair mb-4 text-white">
            Journey Beyond the Ordinary:
            <br /> Discover Panchpokhari
          </p>
          <p className="text-xl mb-4 text-slate-300 font-medium font-Open">
            Experience Nepal's untouched beauty, whether you're exploring from
            afar or from nearby.
          </p>
          <div className="justify-between flex">
            <button className="bg-yellow-500 text-white font-Open py-2 px-6 rounded-full hover:bg-red-600 transition-all">
              START YOUR ADVENTURE
            </button>
            <button className="border-solid border-2 border-white font-Open text-white py-2 px-6 rounded-full hover:bg-red-600 transition-all">
              ADD YOUR ACCOMMODATION
            </button>
          </div>
        </div>
      ) : isActive("/WhereToGo") ? ( //WhereToGo
        <div className="absolute flex flex-col items-center justify-center w-auto h-auto left-1/3 top-1/3">
          <div className="text-center p-6">
            <p className="text-4xl font-bold font-Playfair mb-4 text-white">
              Destinations in Pachpokhari
            </p>
            <div className="flex items-center justify-between px-4 mx-auto mt-4 w-[300px] bg-gray-50 rounded-3xl overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="p-2 flex-1 bg-gray-50 text-black focus:outline-none placeholder-sm placeholder-black"
              />
              <button className="text-gray-700 px-2 py-2 rounded-2xl hover:bg-gray-600 transition-all">
                <MdSearch />
              </button>
            </div>
          </div>
        </div>
      ) : isActive("/WhereToStay") ? ( //WhereToStay
        <div className="absolute flex flex-col items-center justify-center w-auto h-auto left-[320px] top-1/3">
          <div className="text-center p-6">
            <p className="text-[40px] font-bold font-Playfair mb-4 text-white">
              Accomodation in Pachpokhari
            </p>
            <div className="flex items-center h-14 justify-between mx-auto mt-4 w-[680px] rounded-md bg-orange-400 overflow-hidden">
              <div className="flex items-center flex-1 ml-1 bg-gray-50 relative rounded-sm">
                <FaMapMarkerAlt className="absolute left-3 text-black text-xl" />
                <input
                  type="text"
                  placeholder="Where are you going..."
                  className="p-3 pl-10 flex-1 bg-gray-50 font-Open text-black focus:outline-none placeholder-xs placeholder-black"
                />
              </div>
              <div className="flex items-center flex-1 mx-1 bg-gray-50 relative rounded-sm">
                <FaUser className="absolute left-3 text-black text-xl" />
                <input
                  type="text"
                  placeholder="Number of travellers..."
                  className="p-3 pl-10 flex-1 bg-gray-50 font-Open text-black focus:outline-none placeholder-xs placeholder-black"
                />
              </div>
              <button className="text-white px-7 py-[13px] mr-1 rounded-md bg-red-700 transition-all">
                Search
              </button>
            </div>
          </div>
        </div>
      ) : isActive("/LocalProducts") ? ( //LocalProducts
        <div className="absolute flex flex-col items-center justify-center w-auto h-auto left-[400px] top-[300px]">
          <div className="flex items-center justify-between px-4 mx-auto mt-4 w-[550px] bg-gray-50 rounded-3xl overflow-hidden">
            <input
              type="text"
              placeholder="Search for anything..."
              className="p-2 flex-1 bg-gray-50 text-black focus:outline-none placeholder-black placeholder-md"
            />
            <button className="text-gray-800 text-2xl px-2 py-2 rounded-2xl transition-all">
              <MdSearch />
            </button>
          </div>
        </div>
      ) : isActive("/ContactUs") ? (
        <div className="absolute flex flex-col items-center justify-center w-auto h-auto left-[540px] top-1/3">
          <div className="text-center p-6">
            <p className="text-5xl font-bold font-Playfair mb-4 text-white">
              Contact Us
            </p>
          </div>
        </div>
      ) : isActive("/SignUp") ? (
        <div className="absolute flex flex-col items-center justify-center w-auto h-auto left-[540px] top-1/3">
          <div className="text-center p-6">
            <p className="text-5xl font-bold font-Playfair mb-4 text-white">
              Sign Up Page
            </p>
          </div>
        </div>
      ) : (
        <div className="absolute flex flex-col items-center justify-center w-auto h-auto left-[540px] top-1/3">
          <div className="text-center p-6">
            <p className="text-5xl font-bold font-Playfair mb-4 text-white">
              Login Page
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
