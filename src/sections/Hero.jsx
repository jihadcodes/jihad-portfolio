import React from "react";
import GradientButton from "../components/GradientButton";
import start from '../assets/images/star-Vector.svg'

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="container h-screen  flex flex-col lg:justify-center items-start lg:py-12 max-lg:pt-40 ">
        <h1 className="text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold">
          John Doe
        </h1>
        <h2 className="text-5xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight mt-3 mb-6">Web Developer <br /> & <span className="text-stroke">Designer</span> </h2>
        <GradientButton text="Let's Talk  " link="mailto:jihad.dev.pro@gmail.com" className="" ></GradientButton>
      </div>

      <div className="start ">
        <img className="h-[48vh] lg:h-[80vh] absolute -z-10 top-80 lg:top-32 right-[-35%] lg:right-[-12%]" src={start} alt="Star" />
      </div>
    </div>
  );
};

export default Hero;
