import React from "react";
import { Link } from "react-router-dom";

const TalkToUs = () => {
  return (
    <Link to={"/contact"}>
      <div className="hidden items-center gap-3 rounded-lg border-2 px-6 py-2 text-base hover:cursor-pointer md:flex xl:px-8 xl:py-3">
        <div className="hidden size-5 lg:block xl:size-6">
          <img src="./icons/phone.png" alt="" className="object-contain" />
        </div>
        <p className="">Talk To Us</p>
      </div>
    </Link>
  );
};

export default TalkToUs;
