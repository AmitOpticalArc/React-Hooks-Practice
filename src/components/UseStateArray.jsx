import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: "Amit",
      age: 25,
    },
    {
      id: 0,
      myName: "Amit",
      age: 25,
    },
    {
      id: 0,
      myName: "Amit",
      age: 25,
    },
  ];

  const [myArray, setmyArray] = useState(bioData);

  const clearArray = () => {
    setmyArray([]);
  }
  console.log(bioData);
  return (
    <>
      {myArray.map((curElm) => (
          <h1 className="text-4xl text-black bg-blue-400 px-3 flex justify-center py-2 my-4 mx-11 rounded-3xl" key={curElm.id}>
            Name: {curElm.myName} & Age: {curElm.age}
          </h1>
      ))}
      <div className="flex justify-center">
      <button className="text-white bg-black px-5 py-2 text-3xl cursor-pointer rounded-3xl" onClick={clearArray}>Clear</button>
      </div>
    </>
  );
};

export default UseStateArray;
