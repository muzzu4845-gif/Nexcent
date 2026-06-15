import TeslaLogo from "../assets/Category Logo/image 9.svg";
import Logo1 from "../assets/Category Logo/Logo (2).svg";
import Logo2 from "../assets/Category Logo/Vector (1).svg";
import Logo3 from "../assets/Category Logo/Logo.png";
import Logo4 from "../assets/Category Logo/Logo.svg";
import Logo5 from "../assets/Category Logo/Vector (3).svg";
import Logo6 from "../assets/Category Logo/Logo (1).svg";

export default function Customers() {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row gap-10 items-center">

        {/* Left Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={TeslaLogo}
            alt="Tesla"
            className="w-64 md:w-80 rounded-lg shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <p className="text-gray-500 text-sm md:text-base leading-7">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-green-600">
            Tim Smith
          </h2>

          <p className="text-gray-400 mt-2">
            British Dragon Boat Racing Association
          </p>

          {/* Logos */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="h-8"
              />
            ))}

            <button className="text-green-600 font-semibold hover:text-green-700">
              Meet all customers →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}