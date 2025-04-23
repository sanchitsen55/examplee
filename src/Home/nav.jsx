import  { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="/Images/logo.png"
            alt="Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Right: Nav Links + Button */}
        <div className={`flex md:flex items-center space-x-8 ${menuOpen ? "block" : "hidden"} md:block`}>
          <a href="#" className="text-blue-600 font-semibold text-xl">Home</a>
          <a href="#" className="text-[#a37d52] hover:text-blue-600 transition text-xl">About</a>
          <a href="#" className="text-[#a37d52] hover:text-blue-600 transition text-xl">Courses</a>
          <a href="#" className="text-[#a37d52] hover:text-blue-600 transition text-xl">Blogs</a>
          <a href="#" className="text-[#a37d52] hover:text-blue-600 transition text-xl">Contact Us</a>
          <button className="bg-black text-white px-6 py-3 text-lg rounded-md hover:bg-gray-800 transition font-semibold">
            ENROLL NOW
          </button>
        </div>
      </div>

      {/* Mobile Menu Links (Hidden on larger screens) */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <a href="#" className="block text-[#a37d52] hover:text-blue-600 transition text-xl py-2 px-4">Home</a>
        <a href="#" className="block text-[#a37d52] hover:text-blue-600 transition text-xl py-2 px-4">About</a>
        <a href="#" className="block text-[#a37d52] hover:text-blue-600 transition text-xl py-2 px-4">Courses</a>
        <a href="#" className="block text-[#a37d52] hover:text-blue-600 transition text-xl py-2 px-4">Blogs</a>
        <a href="#" className="block text-[#a37d52] hover:text-blue-600 transition text-xl py-2 px-4">Contact Us</a>
        <button className="block w-full bg-black text-white px-6 py-3 text-lg rounded-md hover:bg-gray-800 transition font-semibold">
          ENROLL NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
