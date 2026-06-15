import PixelgradeImg from "../assets/Animation/rafiki.svg";

export default function Pixelgrade() {
  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={PixelgradeImg}
            alt="Pixelgrade"
            className="w-72 md:w-96"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 leading-tight">
            The unseen of spending three years at Pixelgrade
          </h1>

          <p className="text-gray-500 text-sm md:text-base mt-5 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>

          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}