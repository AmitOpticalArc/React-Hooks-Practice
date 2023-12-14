import React from 'react'
import { useState } from 'react';

function UseStateObject() {
const [myObject, setmyObject] = useState({
  myName:"Amit", myAge:25, degree:"BE"
});
const changeObject = () =>{
  setmyObject({...myObject, myName:"Amit Raju Kuril"}) // spread Operator used
}

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center align-middle">
      <div className="p-4 text-black bg-orange-300 text-3xl font-bold rounded-2xl flex flex-col items-center mb-2">
        Name:{myObject.myName} & Age:{myObject.myAge} & Degree:{myObject.degree}
      </div>
      <div>
        <button className="text-white bg-blue-400 p-5 font-medium rounded-2xl" onClick={changeObject}>
          Update
        </button>
      </div>
    </div>

  );
}

export default UseStateObject