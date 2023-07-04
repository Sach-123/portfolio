import React from "react";

const Button = (props) => {
  return (
    <button className="mt-4 h-[40px] w-[160px] border border-primary hover:border-2 active:bg-[#A030BF] ">
      {props.text}
    </button>
  );
};

export default Button;
