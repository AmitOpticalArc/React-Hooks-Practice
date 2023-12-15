import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: "Amit",
      age: 25,
    },
    {
      id: 1,
      myName: "Amit",
      age: 25,
    },
    {
      id: 2,
      myName: "Amit",
      age: 25,
    },
  ];

  const [myArray, setmyArray] = useState(bioData);

  const clearArray = () => {
    setmyArray([]);
  };

  const removeEle = (id) => {
    const myNewArray = myArray.filter((curElm) => {
      return curElm.id !== id;
    });

    setmyArray(myNewArray);
  };

  return (
    <>
      {myArray.map((curElm) => {
        return (
          <h1
            className="text-4xl text-black bg-blue-400 px-3 flex justify-center py-2 my-4 mx-11 rounded-3xl gap-7"
            key={curElm.id}
          >
            Name: {curElm.myName} & Age: {curElm.age}
            <button
              className="text-white text-2xl p-3 bg-red-500 break-words rounded-2xl hover:bg-green-400"
              onClick={() => removeEle(curElm.id)}
            >
              Remove
            </button>
          </h1>
        );
      })}
      <div className="flex justify-center">
        <button
          className="text-white bg-black px-5 py-2 text-3xl cursor-pointer rounded-3xl"
          onClick={clearArray}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default UseStateArray;
