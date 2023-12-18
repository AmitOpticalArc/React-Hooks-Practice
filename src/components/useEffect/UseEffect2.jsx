import React, { useEffect, useState } from "react";

const UseEffect2 = () => {
  const [widthCount, setwidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    console.log(window.innerWidth);
    setwidthCount(window.innerWidth);
  };
  useEffect(() => {
    console.log("Added event");
    window.addEventListener("resize", actualWidth);

    return () => {
      console.log("Remove Ecent");
      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center">
      <p className="text-4xl text-orange-400 font-[Inter] font-semibold">
        The Actual Size of Screen is ___
      </p>
      <h1 className="text-4xl text-black font-[Inter] font-semibold">
        {widthCount}
      </h1>
    </div>
  );
};

export default UseEffect2;
