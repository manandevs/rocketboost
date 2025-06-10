const reviews = [
  {
    text: `We are a local restaurant in Scottsdale area. SEO-Arizona.com helped us with reviews and getting a top google search result which boosted our customer base. You have to spend money to make money.`,
    name: "James Peterson",
    title: "Scottsdale, Arizona",
    img: "https://images.unsplash.com/photo-1725866546799-4cc16f6cba23?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: `Local car-auto mechanic shop in Phoenix Metro area. We were struggling to attract new customers to build our business. SEO-Arizona.com helped us improve our review score and now we finish in the top page of google results for "car mechanic in Phoenix."`,
    name: "Mike Franklin",
    img: "https://images.unsplash.com/photo-1586232902955-df204f34b36e?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Phoenix, Arizona",
  },
  {
    text: `We have an established dental practice in Tempe, but without a strong online presence we could not attract clients from outside our local area. SEO-Arizona.com got us a top google page using keywords "top dentist in Tempe."`,
    name: "Sarah Johnson",
    title: "Tempe, Arizona",
    img: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: `Used car dealership in Mesa and with so many other small businesses in this industry, we struggled a little. Now we get consistent 5-star reviews that really help our google maps results. You get what you pay for.`,
    name: "Tom Brown",
    title: "Mesa, Arizona",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <div className="bg-[#1d163f] h-auto py-10 text-white font-sans">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-red-500 mb-3">
          Reviews
        </h1>
      </div>
      {/* <div className="bg-[#2c1e4a] py-10 px-4 sm:px-8 md:px-16 text-white"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[980px] mx-auto w-full">
        {reviews.map((t, idx) => (
          <div
            key={idx}
            className="w-full bg-[#2c1e4a] rounded-xl p-7 md:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 backdrop-blur mx-auto"
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
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-xs text-red-400">{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Review;
