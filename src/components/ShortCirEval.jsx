import React ,{ useState} from "react";

function ShortCirEval() {
    const [demo, setdemo] = useState("Amit");
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="flex text-2xl font-semibold text-black bg-yellow-400 mb-6 justify-center">
        {demo || "technical"}
      </h1>
      <h1 className="flex text-2xl font-semibold text-black bg-yellow-400 justify-center">
       {demo && "aamit"}
      </h1>
    </div>
  );
}

export default ShortCirEval;
