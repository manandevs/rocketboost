import { FaStar, FaSearch, FaFacebookF, FaInstagram } from "react-icons/fa";

const services = [
  {
    title: "Help with Reviews",
    desc: "Improve your online reputation with customer review assistance.",
    price: "$15 (per review)",
    icon: FaStar,
  },
  {
    title: "Top 3 Search Results",
    desc: "Get your business ranked in the top 3 search engine results.",
    price: "$15 (per review)",
    icon: FaSearch,
  },
  {
    title: "Top 5 Search Results",
    desc: "Boost your visibility by reaching the top 5 search results.",
    price: "$15 (per review)",
    icon: FaSearch,
  },
  {
    title: "Top 10 Search Results",
    desc: "Appear in the top 10 search results to increase traffic.",
    price: "$15 (per review)",
    icon: FaSearch,
  },
  {
    title: "Facebook Management",
    desc: "Professional management of your Facebook page and content.",
    price: "$15 (per review)",
    icon: FaFacebookF,
  },
  {
    title: "Instagram Management",
    desc: "Grow your brand with expert Instagram marketing and management.",
    price: "$15 (per review)",
    icon: FaInstagram,
  },
];

const Services = () => (
  <section id="service" className="bg-[#1d163f] h-auto py-10 text-white font-sans">
    <div className="max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-red-500 mb-3">
          Featured Services
        </h1>
        <p className="text-[16px] md:text-lg text-gray-300 italic">
          We Have a Range of Sales-Boosting Marketing Services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ title, desc, icon: Icon, price }, i) => (
          <div
            key={i}
            className="bg-[#1d163f] border border-red-600 shadow-lg rounded-xl p-4 md:p-6 flex flex-col"
          >
            <div className="flex items-center md:mb-4 space-x-2 lg:space-x-4">
              <div className="w-8 h-8 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-red-400 tracking-wide uppercase">
                {title}
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 mt-2.5 pl-1">{desc}</p>
            {price && (
              <pre className="text-red-400 text-sm whitespace-pre-wrap font-mono">
                {price}
              </pre>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
