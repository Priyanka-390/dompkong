import React, { useState } from "react";
import blackmonkey from "../assets/images/black-monkey.png";
import redsmall from "../assets/images/redsmallmonkey.png";
import secsmall from "../assets/images/2ndsmall.png";
import thirdsmall from "../assets/images/3rdsmall.png";
import fourthimg from "../assets/images/4thsmall.png";
import fifthimg from "../assets/images/5thsmall.png";
import rightfirst from "../assets/images/right1st.png";
import rightsec from "../assets/images/2ndright.png";
import rightthird from "../assets/images/3rdright.png";
import rightfourth from "../assets/images/4thright.png";
import rightfifth from "../assets/images/5thright.png";
import group2 from "../assets/images/group2.png";
import group3 from "../assets/images/group3.png";

const Kongs = () => {
  const [tab, settab] = useState("tab1");
  function handletab(tabs) {
    settab(tabs);
  }
  return (
    <div className="md:pt-11 pt-6 xl:pb-64 md:pb-32 pb-8 relative overflow-x-clip z-10">
      <div className=".container max-w-[1140px] mx-auto px-3">
        <h2 className="md:text-[64px] text-[40px] text-white font-azosans text-center font-normal leading-[108%]">
          THE kONGS
        </h2>
        <span className="flex flex-nowrap pt-5 overflow-y-scroll gap-5 mx-auto md:justify-center md:items-center">
          <img
            onClick={() => handletab("tab1")}
            src={rightfirst}
            alt="first"
            className="lg:absolute top-0 lg:right-0  xl:right-0 max-sm:w-[100px] max-sm:h-[100px] "
          />
          <img
            onClick={() => handletab("tab2")}
            src={rightsec}
            alt="sec"
            className="lg:absolute top-[20%] lg:right-0  xl:right-[5%] max-sm:w-[100px] max-sm:h-[100px] "
          />
          <img
            onClick={() => handletab("tab3")}
            src={rightthird}
            alt="thord"
            className="lg:absolute top-[41%] lg:right-0  xl:right-[11%]  max-sm:w-[100px] max-sm:h-[100px] "
          />
          <img
            onClick={() => handletab("tab1")}
            src={rightfourth}
            alt="fourth"
            className="lg:absolute bottom-[21%] lg:right-0  xl:right-[5%] border-solid border-4 border-[#FDDA60] rounded-[8px] max-sm:w-[100px] max-sm:h-[100px] "
          />
          <img
            onClick={() => handletab("tab2")}
            src={rightfifth}
            alt="fifth"
            className="lg:absolute bottom-0 lg:right-0  xl:right-0 max-sm:w-[100px] max-sm:h-[100px] "
          />
        </span>
        <div className="flex justify-center items-center flex-col lg:mt-6 py-6 " data-aos="zoom-in">
          {tab === "tab1" && <img src={blackmonkey} alt="blackmonkey" className="max-h-[700]" />}
          {tab === "tab2" && <img src={group2} alt="2" className="max-h-[700]" />}
          {tab === "tab3" && <img src={group3} alt="3" className="max-h-[700]" />}
        </div>
        <span className="flex flex-nowrap overflow-y-scroll gap-5 mx-auto md:justify-center md:items-center">
                  <img
                        onClick={() => handletab("tab2")}
            src={redsmall}
            alt="redsmall"
            className="lg:absolute lg:top-0 top-[12%] left-0 xl:left-0 max-sm:w-[100px] max-sm:h-[100px] "
          />
                  <img
                        onClick={() => handletab("tab3")}
            src={secsmall}
            alt="secsmall"
            className="lg:absolute lg:top-[20%] top-[12%] left-[20%] lg:left-0 xl:left-[5%] max-sm:w-[100px] max-sm:h-[100px]"
          />
                  <img
                        onClick={() => handletab("tab1")}
            src={thirdsmall}
            alt="thirdsmall"
            className="lg:absolute lg:top-[41%] top-[12%] left-[40%] lg:left-0  xl:left-[11%] max-sm:w-[100px] max-sm:h-[100px]"
          />
                  <img
                        onClick={() => handletab("tab2")}
            src={fourthimg}
            alt="fourthimg"
            className="lg:absolute lg:bottom-[21%] max-lg:top-[12%] left-[60%] lg:left-0 xl:left-[5%] max-sm:w-[100px] max-sm:h-[100px]"
          />
                  <img
                        onClick={() => handletab("tab3")}
            src={fifthimg}
            alt="fifthimg"
            className="lg:absolute lg:bottom-0 max-lg:top-[12%] left-[85%] md:left-[90%] lg:left-0 max-sm:w-[100px] max-sm:h-[100px] "
          />
        </span>
      </div>
      <div className="lg:w-[350px] w-[150px] h-[350px] rounded-[50%] bg-[#FDDA60] blur-[179.54052734375px] absolute top-[29%] z-[-10] left-[40%]"></div>
    </div>
  );
};

export default Kongs;
