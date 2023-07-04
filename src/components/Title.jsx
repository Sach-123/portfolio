import React from "react";

const Title = (props) => {
  return (
    <div>
      <span className="text-primary">#</span>
      <span>{props.titleText} </span>
      <span className="hidden text-2xl font-light text-primary md:inline-flex lg:text-3xl ">
        ------------------------------------------
      </span>
      <span className="hidden font-light text-primary sm:inline-flex md:hidden">
        ------------------
      </span>
    </div>
  );
};

export default Title;
