import React from "react";
import bannerImage from "../../public/banner.png";

const Banner = () => {
  return (
    <>
      <div className="max-w-[95%] container mx-auto md-px-20 px-4 flex flex-col md:flex-row md:items-center py-10">
        <div className="md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className="space-y-6">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Hello, Welcomes to learn <br className="hidden md:block" />{" "}
              somthing
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              aliquid, corrupti a sunt amet, aspernatur eius nihil at provident
              officiis animi velit, doloremque maiores autem illum!
            </p>

            <div className="flex flex-col space-y-6">
              <label className="input validator bg-gray-200 dark:bg-white text-gray-800 border">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <button className="btn btn-secondary w-fit">Send Mail</button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 mt-12">
          <img src={bannerImage} className="w-96" alt="banner image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
