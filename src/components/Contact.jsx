import React from "react";
import { Title, Contactform } from "../components";
import { social } from "../constants";

const Socialcard = ({ title, logo, link }) => (
  <div className="mx-auto my-[25px] h-[50px] w-[50px] transition duration-200 hover:scale-110 ">
    <a href={link} target="_blank">
      <img src={logo} alt={title} />
    </a>
  </div>
);

const Contact = () => {
  return (
    <div
      className="mx-[5%] mb-[50px] mt-[75px] scroll-mt-20 text-3xl text-white sm:mt-0"
      id="contacts"
    >
      <Title titleText="Contacts" />

      <div className="flex flex-col text-2xl md:flex-row">
        <div className="border-dimWhite md:w-[60%] md:border-r md:pr-10">
          <Contactform />
        </div>
        <div className="flex flex-col md:w-[40%]">
          <div className="ml-5 h-[33%] border-b py-10 md:p-10 ">
            ✉️Email
            <p className="mx-auto pt-2 text-lg font-light md:pl-8 md:text-xl">
              sachinchoudhary0203@gmail.com
            </p>
          </div>
          <div className="ml-5 h-[33%] border-b py-10 md:p-10">
            📞Phone
            <p className="pl-8 pt-2 text-xl font-light">+91 9892704500</p>
          </div>
          <div className="ml-5 h-[34%] py-10 md:p-10">
            🚀Social media
            <div className="flex">
              {social.map((item) => (
                <Socialcard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
