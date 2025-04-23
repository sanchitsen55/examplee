
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c3f] text-white pt-16 pb-10">

      {/* Logo + Social Icons */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row justify-between items-center mb-14">
        <h2 className="text-4xl font-bold text-[#2d9cfa] mb-6 lg:mb-0">
          NLITE Technologies LLP
        </h2>
        <div className="flex space-x-6 text-3xl">
          <FaFacebookF className="hover:text-[#2d9cfa] cursor-pointer" />
          <FaTwitter className="hover:text-[#2d9cfa] cursor-pointer" />
          <FaInstagram className="hover:text-[#2d9cfa] cursor-pointer" />
          <FaLinkedinIn className="hover:text-[#2d9cfa] cursor-pointer" />
          <FaYoutube className="hover:text-[#2d9cfa] cursor-pointer" />
        </div>
      </div>

      {/* 4 Columns with even spacing and equal side paddings */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-lg">

        {/* Popular Courses */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Popular <span className="text-[#2d9cfa]">Courses</span>
          </h3>
          <ul className="space-y-2">
            <li>JAVA & REACT</li>
            <li>.Net and React</li>
            <li>Java and Angular</li>
            <li>Python</li>
            <li>DEVOPS</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Quick <span className="text-[#2d9cfa]">Links</span>
          </h3>
          <ul className="space-y-2">
            <li>FAQ’s</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refunds Policy</li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Our <span className="text-[#2d9cfa]">Location</span>
          </h3>
          <p className="text-base flex items-start gap-2 leading-relaxed">
            <FaMapMarkerAlt className="mt-1" />
            1st Floor, Plot no 434,<br />
            Nandankanan Rd, Raghunathpur,<br />
            Bhubaneswar, Odisha 751024
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Contact <span className="text-[#2d9cfa]">Us</span>
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaEnvelope /> <span>contact@nlite.in</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt /> <span>+91 8428448903</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt /> <span>+91 9475484959</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
