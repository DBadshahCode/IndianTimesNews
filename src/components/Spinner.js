import React from "react";
import loader from "./ajax-loader.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={loader} alt="loading" />
    </div>
  );
};

export default Spinner;
