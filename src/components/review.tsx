import React from "react";

const reviews = [
  {
    text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!"`,
    name: "James Peterson",
    title: "CEO, Tech Corp",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!"`,
    name: "Sarah Johnson",
    title: "Marketing Director",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!"`,
    name: "Mike Franklin",
    title: "Product Manager",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const StarRating = () => (
  <div className="flex gap-1 mb-5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-red-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Review = () => {
  return (
    <div className="bg-[#1d163f] min-h-screen py-12 px-4 text-white font-sans">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight uppercase text-red-500 mb-3">
          Reviews
        </h1>
        <p className="text-lg text-gray-300 italic">
          {"(coming soon)"}
        </p>
      </div>
      <div className="bg-[#2c1e4a] py-10 px-4 sm:px-8 md:px-16 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-xl p-7 md:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 backdrop-blur"
            >
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                {t.text}
              </p>
              <StarRating />
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-red-500"
                />
                <div className="flex flex-col">
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-red-400">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
