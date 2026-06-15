import React from "react";

import logo1 from "../assets/Category Logo/Vector.svg";
import logo2 from "../assets/Category Logo/Vector (1).svg";
import logo3 from "../assets/Category Logo/Logo.png";
import logo4 from "../assets/Category Logo/Logo.svg";
import logo5 from "../assets/Category Logo/Vector (3).svg";
import logo6 from "../assets/Category Logo/Logo (1).svg";
import logo7 from "../assets/Category Logo/Logo.png";

const clientLogos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
];

const OurClients = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#4D4D4D]">
            Our Clients
          </h2>

          <p className="mt-2 text-[14px] md:text-[16px] text-[#717171]">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        {/* Logos */}
        <div className="mt-10 md:mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-6 place-items-center">
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-6 md:h-7 lg:h-8 w-auto object-contain transition duration-300 hover:scale-110"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurClients;