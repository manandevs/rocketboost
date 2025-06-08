import React from "react";

const card = [
  {
    title: "Call Us",
    iconPath:
      "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    content: <p className="text-red-400 font-medium">1-844-GSA-4111</p>,
    button: null,
  },
  {
    title: "Chat Live",
    iconPath:
      "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
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
    iconPath:
      "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
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
    <div className="bg-[#1d163f] min-h-screen text-white">
      <div className="w-full mx-auto p-6">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight uppercase text-red-500 mb-3">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 italic">We're here to help</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {card.map(({ title, iconPath, content, button }) => (
            <div
              key={title}
              className="bg-[#1d163f] border border-red-600 shadow-md rounded-lg"
            >
              <div className="p-6 flex flex-col justify-start">
                <div className="flex justify-start items-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center m-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={iconPath}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                </div>
                {content}
                {button}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-gray-200">
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
