import React from "react";
import evening from "../assets/images/evening.png";
import fannie from "../assets/images/fannie.png";
import furniture from "../assets/images/furniture.png";
import nft from "../assets/images/nft.png"

const Roadmap = () => {
  return (
    <div className="lg:pt-28 md:pt-20 pt-16 overflow-x-clip">
      <div className="container max-w-[1140px] mx-auto px-3">
        <h2 className="text-white md:text-[64px] text-4xl font-azosans font-normal text-center">
          Partners
        </h2>
      <div className="flex flex-row flex-wrap lg:pt-[52px] md:pt-8 pt-3 ">
          <div className="lg:w-1/4 sm:w-1/2 w-full flex justify-center md:mt-1 mt-5 relative after:h-full lg:after:w-[5px] lg:after:bg-[#FDDA60] lg:after:absolute after:right-0 after:top-0 after:bottom-0 after:rotate-12  lg:after:shadow-[1px_1px_7px_2px#FDDA60]">
            <div className="flex items-center ">
              <img src={evening} alt="even" data-aos="zoom-in" />
            </div>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 w-full   flex justify-center md:mt-1 mt-5 relative after:h-full lg:after:w-[5px] lg:after:bg-[#FDDA60] lg:after:absolute after:right-0 after:top-0 after:bottom-0 after:rotate-12  lg:after:shadow-[1px_1px_7px_2px#FDDA60]">
            <div className="flex items-center ">
              <img src={nft} alt="even" data-aos="zoom-in-up" className="w-full" />
            </div>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 w-full flex justify-center md:mt-1 mt-5 relative after:h-full lg:after:w-[5px] lg:after:bg-[#FDDA60] lg:after:absolute after:right-0 after:top-0 after:bottom-0 after:rotate-12  lg:after:shadow-[1px_1px_7px_2px#FDDA60]">
            <div className="flex items-center ">
              <img src={furniture} alt="even" data-aos="zoom-in" className="w-full" />
            </div>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 w-full  flex justify-center md:mt-1 mt-5">
            <div className="flex items-center ">
              <img src={fannie} alt="even" data-aos="zoom-in-up" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
