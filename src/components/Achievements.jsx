import { Users, Handshake, CalendarDays, CreditCard } from "lucide-react";

export default function Achievements() {
  const stats = [
    {
      icon: <Users className="text-green-600 w-7 h-7 md:w-10 md:h-10" />,
      number: "2,245,341",
      title: "Members",
    },
    {
      icon: <Handshake className="text-green-600 w-7 h-7 md:w-10 md:h-10" />,
      number: "46,328",
      title: "Clubs",
    },
    {
      icon: <CalendarDays className="text-green-600 w-7 h-7 md:w-10 md:h-10" />,
      number: "828,867",
      title: "Event Bookings",
    },
    {
      icon: <CreditCard className="text-green-600 w-7 h-7 md:w-10 md:h-10" />,
      number: "1,926,436",
      title: "Payments",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 md:py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-700 leading-tight">
            Helping a local <br />
            <span className="text-green-600">
              business reinvent itself
            </span>
          </h1>

          <p className="text-sm md:text-base text-gray-600 mt-3 md:mt-4">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-4">
              {item.icon}

              <div>
                <h2 className="text-xl md:text-3xl font-bold text-gray-700">
                  {item.number}
                </h2>

                <p className="text-sm md:text-base text-gray-500">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}