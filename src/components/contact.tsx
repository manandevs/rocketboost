import { FiPhone, FiMessageCircle, FiMail } from "react-icons/fi";

const card = [
  {
    title: "Call Us",
    icon: <FiPhone className="w-5 h-5 md:w-8 md:h-8 text-white" />,
    content: <p className="text-white font-medium">+1-844-GSA-4111</p>,
    button: null,
  },
  {
    title: "Chat Live",
    icon: <FiMessageCircle className="w-5 h-5 md:w-8 md:h-8 text-white" />,
    content: (
      <p className="text-gray-200 text-sm mb-4 leading-relaxed">
        We're available Sun 7:00pm EST - Friday 7:00pm EST
      </p>
    ),
    button: (
      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors duration-200">
        Chat Now
      </button>
    ),
  },
  {
    title: "Ask a Question",
    icon: <FiMail className="w-5 h-5 md:w-8 md:h-8 text-white" />,
    content: (
      <p className="text-gray-200 text-sm mb-4 leading-relaxed">
        Fill out our form and we'll get back to you in 24 hours.
      </p>
    ),
    button: (
      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors duration-200">
        Get Started
      </button>
    ),
  },
];

export default function Contact() {
  return (
    <div className="bg-[#1d163f] h-auto py-10 text-white">
      <div className="w-full mx-auto p-6">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-red-500 mb-3">
            Contact Us
          </h1>
          <p className="text-[16px] md:text-lg text-gray-300 italic">
            We're here to help
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {card.map(({ title, icon, content, button }) => (
            <div
              key={title}
              className="bg-[#1d163f] border border-red-600 shadow-md rounded-lg text-white"
            >
              <div className="p-4 md:p-6 flex flex-col justify-start space-y-3.5">
                <div className="flex items-center md:mb-4 space-x-2 lg:space-x-4">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
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

        <div className="space-y-1.5 text-gray-200 pt-6 md:pt-10">
          <p>
            Looking for someone you know?{" "}
            <a
              href="#"
              className="text-red-400 hover:text-red-300 underline transition-colors duration-200"
            >
              Try our Staff Directory.
            </a>
          </p>
          <p>
            For media queries, contact{" "}
            <a
              href="mailto:press@gsa.gov"
              className="text-red-400 hover:text-red-300 underline transition-colors duration-200"
            >
              press@gsa.gov
            </a>{" "}
            or find your regional media contact{" "}
            <a
              href="#"
              className="text-red-400 hover:text-red-300 underline transition-colors duration-200"
            >
              Regional Media Contacts.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
