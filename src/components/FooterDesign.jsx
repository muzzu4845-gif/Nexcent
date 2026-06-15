import FooterImg from "../assets/Animation/pana.svg";

export default function FooterDesign() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={FooterImg}
            alt="Footer Design"
            className="w-64 sm:w-80 md:w-96"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 leading-snug">
            How to design your site footer like we did
          </h1>

          <p className="mt-4 text-gray-500 text-sm md:text-base leading-7">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at
            scelerisque elit erat a magna. Donec quis erat at libero ultrices
            mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui,
            at porta nisi facilisis finibus. In euismod augue vitae nisi
            ultricies, non aliquet urna tincidunt.
          </p>

          <button className="mt-6 px-7 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}