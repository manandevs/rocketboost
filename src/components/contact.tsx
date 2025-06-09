import { FiPhone, FiMail } from "react-icons/fi";

const card = [
  {
    title: "Call or Text Us",
    icon: <FiPhone className="w-5 h-5 md:w-7 md:h-7 text-white" />,
    content: <p className="text-white">949.537.9965</p>,
    button: null,
  },
  {
    title: "Frequently Asked Questions",
    icon: <FiMail className="w-5 h-5 md:w-7 md:h-7 text-white" />,
    content: (
      <p className="text-gray-200 text-sm mb-4 leading-relaxed">
        Fill out our form and we'll get back to you in 24 hours.
      </p>
    ),
    button: (
      <a href="#faq" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 inline-block w-auto rounded transition-colors duration-200 cursor-pointer">
        Get Started
      </a>
    ),
  },
];

export default function Contact() {
  return (
    <div id="contact" className="bg-[#1d163f] h-auto py-10 text-white">
      <div className="w-full mx-auto p-6">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-red-500 mb-3">
            Contact Us
          </h1>
          <p className="text-[16px] md:text-lg text-gray-300 italic">
            We're here to help
          </p>
        </div>
        <div className="flex justify-center items-center max-w-[800px] mx-auto flex-col md:flex-row gap-6">
          {card.map(({ title, icon, content, button }) => (
            <div
              key={title}
              className="md:w-1/2 w-full sm:min-h-[200px] bg-[#1d163f] border border-red-600 shadow-md rounded-lg text-white"
            >
              <div className="p-4 md:p-6 space-y-3.5">
                <div className="flex items-center md:mb-4 space-x-2 lg:space-x-4">
                  <div className="w-8 h-8 md:w-[57px] md:h-[57px] bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-red-400 tracking-wide">{title}</h3>
                </div>
                {content}
                {button}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
