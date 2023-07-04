import React from "react";

const Footer = () => (
  <div className="mx-[5%] flex flex-col items-center border-t text-center text-3xl text-white md:mt-[100px]">
    <a href="#">
      <button className="mx-auto my-5  h-[40px] border border-primary px-8 hover:border-2 active:bg-[#A030BF] ">
        ↑
      </button>
    </a>
    <div className="my-10 text-xl">
      Made with <span className="animate-pulse text-3xl">❤️</span> by Sachin
      Choudhary
    </div>
    <div className="text-lg">Thane, Maharastra</div>
    <div className="mb-2 text-sm">
      ©2023 Sachin Choudhary. All Rights Reserved.
    </div>
  </div>
);

export default Footer;
