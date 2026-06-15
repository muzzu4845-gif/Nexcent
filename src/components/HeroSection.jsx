import React from "react";
import heroImg from "../assets/Animation/Illustration.svg";

const HeroSection = () => {
  return (
    <section className="bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 md:py-16 lg:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4D4D4D] leading-tight">
              Lessons and insights
              <br />
              <span className="text-[#4CAF4F]">
                from 8 years
              </span>
            </h1>

            <p className="text-[#717171] mt-4 text-sm md:text-base">
              Where to grow your business as a photographer:
              site or social media?
            </p>

            <button className="mt-6 bg-[#4CAF4F] hover:bg-green-600 text-white px-6 py-3 rounded transition">
              Register
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <img
              src={heroImg}
              alt="Hero"
              className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[320px] h-auto"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;