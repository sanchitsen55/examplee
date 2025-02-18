import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const sections = [
    { title: "About Aussizz", items: ["About us", "Web Stories", "Blog", "Events", "E-book"] },
    { title: "Education", items: ["Study in Australia", "Study in Canada", "Study in New Zealand", "Study in USA", "Study in UK"] },
    { title: "Migration", items: ["Employer Sponsored Visa", "Business Visa", "General Skilled Migration", "Skill Work Regional (Provisional)", "Partner Visa", "Parent Visa"] },
    { title: "Coaching & Offerings", items: ["PTE Online Coaching", "IELTS Coaching", "Get My Policy", "PTE Voucher - India", "Nursing Program"] },
    { title: "Other Links", items: ["Privacy Policy", "Terms & Conditions", "Code of Conduct"] },
    { title: "", items: ["/"] },
  ];

  const [selectedBranch, setSelectedBranch] = useState(null);
  const branches = [
    { country: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
    { country: "India", cities: ["Delhi", "Mumbai", "Bangalore"] },
  ];

  return (

    <footer className="bg-[#F2FBFE] text-black py-10 px-12 w-full">
      <div className="container justify-center  mb-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <img src="/Images/aussizz logo.png" alt="Aussizz Logo" className="mx-auto md:mx-0 w-32" />
          <div className="flex gap-4 justify-center md:justify-start mt-4 text-black flex-wrap">
            <FaFacebook className="w-8 h-8 border px-1 py-1 rounded-full hover:bg-blue-900" size={24} />
            <FaTwitter className=" w-8 h-8 border rounded-full px-1 py-1 hover:bg-blue-900" size={24} />
            <FaInstagram className=" w-8 h-8 border rounded-full px-1 py-1 hover:bg-blue-900" size={24} />
            <FaYoutube className=" w-8 h-8 border rounded-full px-1 py-1 hover:bg-blue-900" size={24} />
            <FaLinkedinIn className=" w-8 h-8 border rounded-full px-1 py-1 hover:bg-blue-900 " size={24} />
          </div>
          <div className="flex gap-4 justify-center md:justify-start mt-4 flex-wrap">
            <button className="bg-red-400 p-2 rounded">Enquire Now</button>
            <button className="bg-blue-100 p-2 rounded hover:bg-blue-700 hover:text-white text-black"> Get Support</button>
          </div>
        </div>

        <div className="text-center rounded p-4 md:text-left shadow-lg   shadow-white">
          <select className="p-2 w-full" onChange={(e) => setSelectedBranch(e.target.value)}>
            <option>Select Branch</option>
            {branches.map((branch, index) => (
              <optgroup key={index} label={branch.country}>
                {branch.cities.map((city, idx) => (
                  <option key={idx} value={city}>{city}</option>
                ))}
              </optgroup>
            ))}
          </select>
          {selectedBranch && <p className="mt-2">Selected: {selectedBranch}</p>}
          <p className="mt-4">1st Floor, Central Business Space, Opp Sukhsagar Complex, Nr. Fortune Landmark Hotel, Ashram Road, Usmanpura, Ahmedabad, Gujarat - 380013, India</p>
          <div className="mt-4">
            <p>📞 +91-79-6682-6682</p>
            <p>📧 info@aussizzgroup.com</p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-2xl font-bold">Scan this and explore all <span className="uppercase text-red-500"> our dynamic products</span> on your screen.</p>
          <div className="flex flex-col md:flex-row items-center mt-4">
            <img src="/Images/Aussizz-aaps scanner image.webp" alt="QR Code" className="w-40 h-40" />
            <div className="flex flex-col gap-6 md:ml-8 space-y-4 mt-4 md:mt-0">
              <img src="/Images/google play.svg" alt="Google Play" className="w-40" />
              <img src="/Images/apple store.svg" alt="App Store" className="w-40" />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />

      <div className="container mx-auto mb-10 grid grid-cols-2 md:grid-cols-6 gap-8 mt-10">
        {sections.map((section, index) => (
          <div key={index} className="text-center space-y-4 md:text-left">
            {section.title && <h3 className="font-bold text-lg mb-2">{section.title}</h3>}
            {section.items.map((item, idx) => (
              item !== "/" ? (
                <p key={idx} className="text-black cursor-pointer transition-transform duration-200 relative hover:translate-x-2 hover:text-red-500">
                  <span className="absolute left-[-10px] opacity-0 hover:opacity-100">-</span> {item}
                </p>
              ) : (
                <img key={idx} src="/Images/ICFF Acccredited.png" alt="Footer Image" className="w-30 mx-auto md:mx-0" />
              )
            ))}
          </div>
        ))}
      </div>
      <hr className="border-gray-300" />
      <p className="text-center mt-4">© 2025 Aussizz. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
