    import Icon1 from "../assets/Manage Logo/Icon.svg";
    import Icon2 from "../assets/Manage Logo/Icon (1).svg";
    import Icon3 from "../assets/Manage Logo/Icon (2).svg";

    export default function Manage() {

        
    const features = [
        {
        icon: Icon1,
        title: "Membership Organisations",
        description:
            "Our membership management software provides full automation of membership renewals and payments",
        },
        {
        icon: Icon2,
        title: "National Associations",
        description:
            "Our membership management software provides full automation of membership renewals and payments",
        },
        {
        icon: Icon3,
        title: "Clubs And Groups",
        description:
            "Our membership management software provides full automation of membership renewals and payments",
        },
    ];

   return (
  <section className="bg-white py-12 md:py-16">
    <div className="text-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
        Manage your entire community
        <br />
        <span>in a single system</span>
      </h1>

      <h6 className="text-sm text-gray-500 pt-3">
        Who is Nextcent suitable for?
      </h6>
    </div>

    <div className="max-w-6xl mx-auto px-6 pt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-green-100 flex items-center justify-center mb-5">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              {feature.title}
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
    }