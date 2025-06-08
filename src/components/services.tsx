import { FaStar, FaSearch, FaFacebookF, FaInstagram } from "react-icons/fa";

const services = [
  {
    title: "Help with Reviews",
    desc: "Improve your online reputation with customer review assistance.",
    price: "$15 (per month)",
    icon: FaStar,
  },
  {
    title: "Top 3 Search Results",
    desc: "Get your business ranked in the top 3 search engine results.",
    price: "$350 (per month)",
    icon: FaSearch,
  },
  {
    title: "Top 5 Search Results",
    desc: "Boost your visibility by reaching the top 5 search results.",
    price: "$250 (per month)",
    icon: FaSearch,
  },
  {
    title: "Top 10 Search Results",
    desc: "Appear in the top 10 search results to increase traffic.",
    price: "$200 (per month)",
    icon: FaSearch,
  },
  {
    title: "Facebook Management",
    desc: "Professional management of your Facebook page and content.",
    price: "$120 (per month)",
    icon: FaFacebookF,
  },
  {
    title: "Instagram Management",
    desc: "Grow your brand with expert Instagram marketing and management.",
    price: "$80 (per month)",
    icon: FaInstagram,
  },
];

const Services = () => (
  <section className="bg-[#1d163f] min-h-screen py-12 px-4 text-white font-sans">
    <div className="max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight uppercase text-red-500 mb-3">
          Featured Services
        </h1>
        <p className="text-lg text-gray-300 italic">
          We Have a Range of Sales-Boosting Marketing Services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ title, desc, icon: Icon, price }, i) => (
          <div
            key={i}
            className="bg-[#1d163f] border border-red-600 shadow-lg rounded-xl p-6 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-400 tracking-wide uppercase">
                {title}
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{desc}</p>
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
