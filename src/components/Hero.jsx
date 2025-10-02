import React from "react";

const Hero = () => {
    return (
        <section className="bg-[#FECDD5] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-6 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug">
                            Your Resume <br />
                            <span className="text-red-600 relative inline-block">
                                Deserves A Yes
                                <span className="absolute left-0 bottom-0 w-full h-1">
                                    <img src="underline.png" alt="underline" />
                                </span>
                            </span>
                            <br />
                            <span>Let’s Make It Happen</span>
                        </h1>

                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                            If Your Resume Isn’t Getting Responses, It’s Time For An Upgrade.
                            Get An ATS-Optimized Resume Crafted By HR Experts To Help You
                            Land More Interviews. Our Resumes Are Designed To Get Your Foot
                            In The Door And Place Your Name At The Top Of The Shortlist.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <button className="bg-white text-red-500 border border-red-500 px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full font-semibold text-sm md:text-base lg:text-base shadow-md hover:bg-red-50 transition cursor-pointer">
                                RESUME PACKAGES
                            </button>
                            <button className="bg-red-500 text-white px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full font-semibold text-sm md:text-base lg:text-base shadow-md hover:bg-red-600 transition cursor-pointer">
                                CONTACT US
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative flex justify-center md:justify-end">

                        {/* Background Circle */}
                        {/* Outer Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] md:w-[380px] md:h-[380px] lg:w-[500px] lg:h-[500px]
                        bg-[#FFE4E9] rounded-full opacity-40 z-0">
                        </div>

                        {/* Inner Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px]
                        bg-[#FECDD5] rounded-full opacity-40 z-0">
                        </div>

                        {/* Main Image */}
                        <img
                            src="/girlLogo.png"
                            alt="girlImg"
                            className="relative z-10 w-40 sm:w-56 md:w-64 lg:w-full max-w-md mx-auto"
                        />

                        {/* Rating Badge for Large Screens */}
                        <div className="hidden lg:flex absolute top-88 -left-1 bg-white rounded-xl shadow-xl 
                            p-2 sm:p-3 md:p-4 px-6 sm:px-10 md:px-14 flex-col items-start z-20 cursor-pointer">
                            <div className="flex items-center gap-1 sm:gap-2 md:gap-2">
                                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">4.9</span>
                                <img src="/fiveStars.png" alt="Stars" className="h-3 sm:h-4 md:h-5" />
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium mt-1">Instructor Rating</p>
                        </div>

                        {/* Rating Badge for Medium and Small Screens */}
                        <div className="flex lg:hidden absolute top-16 md:top-20 sm:top-12 -left-1 md:-left-1 sm:-left-1 
                         bg-white rounded-xl shadow-xl p-1 sm:p-2 md:p-2 px-4 sm:px-6 md:px-8 flex-col items-start z-20 cursor-pointer">
                            <div className="flex items-center gap-1 sm:gap-1 md:gap-1">
                                <span className="text-lg sm:text-xl md:text-xl font-bold text-green-600">4.9</span>
                                <img src="/fiveStars.png" alt="Stars" className="h-2 sm:h-3 md:h-3" />
                            </div>
                            <p className="text-[10px] sm:text-xs md:text-xs text-gray-600 font-medium mt-1">Instructor Rating</p>
                        </div>




                        {/* Resume Count Badge */}
                        <div className="absolute bottom-[-0.8rem] sm:bottom-5 md:bottom-10 -right-1 sm:-right-2 md:-right-4 lg:-right-6 bg-white rounded-xl shadow-xl p-1.5 sm:p-2 md:p-2.5 flex items-center gap-1.5 sm:gap-2 z-20 cursor-pointer hover:scale-105 transition-transform">
                            <div className="bg-red-100 p-1.5 sm:p-2 md:p-3 rounded-lg">
                                <img src="/hat_logo.png" alt="hatImg" className="w-5 sm:w-6 md:w-8" />
                            </div>
                            <div>
                                <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">260+</p>
                                <p className="text-xs sm:text-sm text-gray-600">Online Resume<br />Created</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
