import React from "react";
import ExpertiseCard from "../ExpertiseCard";

const Expertise = () => {
  return (
    <div>
      <h2 className="lg:text-4xl md:text-3xl text-2xl">Expertise</h2>

      {/* TODO: Update the Card with actually value */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 py-10">
        {[1,2,3,4].map((val, i)=> <ExpertiseCard key={val} variant={i+1} /> )}
      </div>
    </div>
  );
};

export default Expertise;
