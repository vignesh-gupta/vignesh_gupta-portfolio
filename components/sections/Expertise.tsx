import React from "react";
import Card from "../Card";

const Expertise = () => {
  return (
    <div className=" h-[40vh]">
      <h2 className="lg:text-4xl md:text-3xl text-2xl">Expertise</h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 py-10">
        {[1,2,3,4].map((val, i)=> <Card key={val} variant={i+1} /> )}
      </div>
    </div>
  );
};

export default Expertise;
