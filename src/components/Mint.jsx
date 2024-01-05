import React, { useState } from "react";
import img1 from "../assets/images/bottleimg.png";

const Mint = () => {
  const [count, setcount] = useState(3);
  function add() {
    if (count > 9) {
      setcount(10);
    } else {
      setcount(count + 1);
    }
  }
  function minus() {
    if (count < 4) {
      setcount(3);
    } else {
      setcount(count - 1);
    }
  }
  const maincount = count < 10 ? `0${count}` : count;
  return (
    <div className="relative z-10 pb-2  overflow-x-clip" >
      <div className="container max-w-[1140px] mx-auto px-3">
        <div className="flex sm:flex-row flex-wrap -mx-3 lg:pt-16 md:pt-8 sm:pt-5 pt-4 items-center flex-col-reverse">
          <div className=" md:w-1/2 w-full px-3 flex justify-center sm:pt-0 pt-8" >
            <div className="" ><img src={img1} alt="1" data-aos="zoom-in" /></div>
          </div>
          <div className=" md:w-1/2 w-full px-3" data-aos="zoom-in-up">
            <h2 className="text-white md:text-[64px] sm:text-start text-center text-4xl font-azosans  font-normal leading-[108%]">
              MINT NFT
            </h2>
            <div className="md:pt-[51px] sm:pt-10 pt-5 flex justify-between">
              <div>
                <p className="text-white sm:text-start text-center md:text-4xl sm:text-2xl text-xl  font-Montserratserrat font-extrabold leading-[108%]">
                  9999{" "}
                </p>
                <p className="text-white sm:text-start text-center font-Montserratserrat md:pt-3 sm:pt-2 pt-1 text-base font-normal">
                  of 10,000 minted
                </p>
                <p className="text-white sm:text-start text-center md:text-4xl sm:text-2xl text-xl font-Montserratserrat md:pt-8 sm:pt-6 pt-4 font-extrabold leading-[108%]">
                  Max 9
                </p>
                <p className="text-white sm:text-start text-center font-Montserratserrat text-base md:pt-3 sm:pt-2 pt-1 font-normal">
                  NFTs per transaction
                </p>
              </div>
              <div>
                <p className="text-white sm:text-start text-center md:text-4xl sm:text-2xl text-xl font-Montserrat font-extrabold leading-[108%]">
                  .2 ETH
                </p>
                <p className="text-white sm:text-start text-center font-Montserrat text-base font-normal md:pt-3 sm:pt-2 pt-1">
                  per NFT
                </p>
                <p className="text-white sm:text-start text-center md:text-4xl sm:text-2xl text-xl font-Montserrat md:pt-8 sm:pt-6 pt-4 font-extrabold leading-[108%]">
                  Max 2
                </p>
                <p className="text-white sm:text-start text-center font-Montserrat text-base md:pt-3 sm:pt-2 pt-1 font-normal">
                  Transaction per wallet
                </p>
              </div>
            </div>
            <div className="md:pt-12 sm:pt-8 pt-4 w-full flex items-center gap-3">
              <div
                onClick={minus}
                className="box w-[85px] lg:h-[65px] h-[50px] cursor-pointer bg-white rounded-[4px]  flex justify-center items-center"
              >
                <p className=" font-Montserrat text-black md:text-4xl text-2xl font-[900]">
                  -
                </p>
              </div>
              <div className="lg:p-3 p-1.5 border border-solid rounded-[4px] border-white flex justify-center w-full items-center">
                <p className="text-white font-Montserrat md:text-4xl text-2xl font-[900] ">
                  {maincount}
                </p>
              </div>
              <div
                onClick={add}
                className="box w-[85px] lg:h-[65px] h-[50px] cursor-pointer bg-white rounded-[4px] flex justify-center items-center"
              >
                <p className=" font-Montserrat text-black md:text-4xl text-2xl font-[900]">
                  +
                </p>
              </div>
            </div>
            <button
              className="text-black md:text-2xl text-xl font-azosans font-normal rounded-[4px] hover:scale-[1.1] hover:bg-transparent hover:border-2 border-2 border-transparent transition-all duration-[800] hover:border-white hover:text-white bg-[#FDDA60] md:py-4 py-3 w-full mt-7 shadow-[0px_4px_15px_0px_#FDDA6080]
"
            >
              MINT NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-[173px] h-[173px] rounded-full bg-[#FDDA60] z-[-10] blur-[146px] absolute left-0 top-0"></div>
      <div className="w-[296px] h-[296px] rounded-full bg-[#FDDA60] z-[-10] blur-[146px] absolute right-0 bottom-[20%]"></div>
    </div>
  );
};

export default Mint;
