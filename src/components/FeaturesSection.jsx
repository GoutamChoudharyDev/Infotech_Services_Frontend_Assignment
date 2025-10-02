import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "A Resume That Passes ATS Filters",
      description:
        "Get a professionally written, keyword-optimized resume that lands in recruiter inboxes—not rejection piles.",
      icon: "/F1.png",
    },
    {
      title: "A Cover Letter That Gets Read",
      description:
        "Stand out with a cover letter that speaks directly to the role and reflects your strengths.",
      icon: "/F2.png",
    },
    {
      title: "A LinkedIn Profile That Works For You",
      description:
        "Attract the right eyes, start conversations, and show up in recruiter searches.",
      icon: "/F3.png",
    },
    {
      title: "Interview Confidence",
      description:
        "Interview preparation with real HR professionals so you speak clearly, confidently, and convincingly.",
      icon: "/F4.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-pink-100 text-pink-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            What You Get
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight max-w-3xl mx-auto">
            You're Not Just Another Applicant And Your Resume Shouldn't Look Like One
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex justify-center items-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-snug">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
