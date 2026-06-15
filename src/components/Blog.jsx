import Image1 from "../assets/Animation/image 18.svg";
import Image2 from "../assets/Animation/image 19.svg";
import Image3 from "../assets/Animation/image 20.svg";

export default function Blog() {
  const blogs = [
    {
      image: Image1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image: Image2,
      title: "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      image: Image3,
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700">
            Caring is the new marketing
          </h1>

          <p className="mt-4 text-sm md:text-base text-gray-500 leading-7">
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="relative">
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-72 object-cover rounded-xl"
              />

              {/* Content Card */}
              <div className="bg-gray-100 rounded-xl shadow-lg p-6 w-[85%] mx-auto -mt-16 relative z-10 text-center">
                <h3 className="text-lg font-semibold text-gray-600 leading-8">
                  {blog.title}
                </h3>

                <button className="mt-5 text-green-600 font-semibold text-lg hover:text-green-700">
                  Readmore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}