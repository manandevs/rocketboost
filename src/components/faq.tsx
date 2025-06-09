import { useState } from "react";

const faqs = [
  {
    question: "How important are online reviews?",
    answer:
      "Online reviews are super important because it greatly affects your search results from Google Maps or any search result. We help identify happy customers and encourage them to write about their experience at your business. We know you are super busy running a business, so we take this load off your plate.",
  },
  {
    question:
      "I am paying for Top 5 Search Results. Can you guarantee this result?",
    answer:
      "There are many variables that can affect your end results, such as your product or service category and your local market conditions. Cities with very crowded businesses are very competitive and difficult to get the best results. Before we even start and before you pay any money, we will do a deep analysis to understand your local market and give you a good estimation on your end results. Please understand, getting your business to a TOP position takes time—often many weeks or several months.",
  },
  {
    question: "Why does your service cost so much per month?",
    answer:
      "You will find that the best SEO agencies charge between $500-$2000 per month for the same results we are offering. We do not employ expensive workers from New York or Chicago that demand high salaries. We try to use local SEO experts from Arizona in smaller markets without high standards of living. If our results can help you gain 5-20 new customers per month, then the monthly costs pay for themselves back every month. You have to spend money to grow your business.",
  },
  {
    question: "I am thinking about using Paid Advertising on Facebook.",
    answer:
      "Paid Advertising works, but as soon as you end your expensive advertising campaign then the results STOP. With SEO, your search results are organic and stay at the top of search results (as long as you continue with your monthly program). With SEO, your top results STICK at the TOP, not just 1-time ads that go AWAY immediately. Think long-term for your business.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number|null>(null);

  const toggle = (index:number|null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#1d163f] text-white py-12 font-sans">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-500 uppercase mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 italic text-[16px] md:text-lg">
            Helpful insights about our SEO services
          </p>
        </div>

        <div className="space-y-3 md:space-y-5 flex flex-col justify-center items-center">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#2c1e4a00] w-full md:w-3/4 border-b border-b-red-500/50 overflow-hidden transition-all py-1"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full py-4 text-left flex justify-between cursor-pointer items-start text-red-400 font-semibold text-base gap-3 md:text-xl transition-colors"
              >
                <span >
                  <span className="text-[18px] md:text-[23px]">Q.</span>
                  <span className="text-white text-left pl-1.5">
                    {faq.question}
                  </span>
                </span>{" "}
                <span className="text-white text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={` text-gray-300 text-[14px] sm:text-base leading-relaxed transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100 pb-5"
                    : "max-h-0 opacity-0 pb-0"
                } overflow-hidden`}
                style={{ willChange: "max-height, opacity" }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
