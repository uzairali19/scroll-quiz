import Image from "next/image";
import React from "react";

const LandingComponent = ({ setSection }) => {
  const handleSection = () => {
    setSection({
      i: 1,
      value: 0,
    });
  }
  return (
    <div className="flex flex-col justify-center items-center content-center h-screen">
      <div className="flex flex-col justify-center items-center w-[505px] text-center bg-white">
        <Image src="/cafe-building.svg" width="48px" height="48px" alt="logo" />
        <h2 className="text-5xl m-5 font-sans subpixel-antialiased font-bold">
          Build Appeal Matcher
        </h2>
        <p className="text-sm font-light leading-tight mb-20">
          Can’t decide where to roam this year? We’ve got you covered. Take our
          quiz to find out your Travel Personality – and we’ll take care of the
          rest.
        </p>
        <p className="text-[10px] font-bold tracking-wider uppercase text-[#ff5a5f]">
          take the quiz!
        </p>
        <div>
          <button className="border-[1px] rounded-full p-3 mt-5" onClick={handleSection}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 21 14"
            >
              <path
                fill="#B4A76C"
                fillRule="nonzero"
                d="M10.5 14L0 3.587 3.615 0 10.5 6.829 17.385 0 21 3.586z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <span className="border-r-[1px] border-slate-200 h-screen absolute -z-10 md:top-[500px] xl:top-[700px] left-[50%]"></span>
    </div>
  );
};

export default LandingComponent;
