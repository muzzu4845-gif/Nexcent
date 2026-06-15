// import React from "react";
// import logo from "../assets/Logo/Icon.png";

// const Navbar = () => {
//   return (
//     <nav className="bg-white border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
//         {/* Logo */}
//         <div className="flex items-center gap-2 cursor-pointer">
//           <img
//             src={logo}
//             alt="Nexcent Logo"
//             className="w-9 h-9 object-contain"
//           />
//           <h1 className="text-3xl font-bold text-[#263238]">
//             Nexcent
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-[#4D4D4D]">
//           <li className="hover:text-[#4CAF4F] cursor-pointer transition-colors">
//             Home
//           </li>
//           <li className="hover:text-[#4CAF4F] cursor-pointer transition-colors">
//             Features
//           </li>
//           <li className="hover:text-[#4CAF4F] cursor-pointer transition-colors">
//             Community
//           </li>
//           <li className="hover:text-[#4CAF4F] cursor-pointer transition-colors">
//             Blog
//           </li>
//           <li className="hover:text-[#4CAF4F] cursor-pointer transition-colors">
//             Pricing
//           </li>
//         </ul>

//         {/* Register Button */}
//         <button className="bg-[#4CAF4F] hover:bg-[#43A047] text-white px-5 py-3 rounded text-sm font-medium flex items-center gap-2 transition-all duration-300">
//           Register Now
//           <span>→</span>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import logo from "../assets/Logo/Icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Nexcent Logo"
              className="w-8 h-8 md:w-9 md:h-9 object-contain"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-[#263238]">
              Nexcent
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium text-[#4D4D4D]">
            <li className="hover:text-[#4CAF4F] cursor-pointer">Home</li>
            <li className="hover:text-[#4CAF4F] cursor-pointer">Features</li>
            <li className="hover:text-[#4CAF4F] cursor-pointer">Community</li>
            <li className="hover:text-[#4CAF4F] cursor-pointer">Blog</li>
            <li className="hover:text-[#4CAF4F] cursor-pointer">Pricing</li>
          </ul>

          {/* Desktop Button */}
          <button className="hidden md:flex bg-[#4CAF4F] hover:bg-[#43A047] text-white px-5 py-3 rounded text-sm font-medium items-center gap-2 transition-all duration-300">
            Register Now
            <span>→</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4 text-[#4D4D4D] font-medium">
              <li>Home</li>
              <li>Features</li>
              <li>Community</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>

            <button className="mt-4 w-full bg-[#4CAF4F] text-white py-3 rounded">
              Register Now →
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;