import React from "react";
import boatimg from "../assets/images/boatimg.png";

const About = () => {
  return (
    <div className=" lg:pt-32 lg:pb-20 md:py-20 pt-8 pb-5 overflow-x-clip">
      <div className=" mx-auto max-w-[1140px] px-3">
        <div className="flex flex-row flex-wrap -mx-3 items-center">
          <div className="md:w-1/2 w-full justify-center px-3 flex-col md:items-start items-center">
            <h2 className="text-white font-azosans md:text-start text-center md:text-[64px] text-[40px] font-normal" data-aos="flip-left">
              About{" "}
            </h2>
            <div className="flex md:justify-start justify-center">
              <p className="max-w-[510px] text-white md:text-start text-center font-Montserratserrat text-base font-normal" data-aos="flip-right">
                Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae
                viverra amet et. Erat nam molestie. Vitae mollis lacus senectus
                mattis nisl. Porta , adipiscing sed mus diam amet, ac sed
                tellus.{" "}
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full relative z-[1] px-3 flex justify-center" data-aos="flip-left">
            <img
              src={boatimg}
              alt="boat"
              className=" max-md:rotate-[-13deg] w-full"
            />
            <div className="w-[216px] h-[216px] absolute bottom-4 z-[-1] left-[30%] rounded-full bg-[#FDDA60] blur-[131px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
