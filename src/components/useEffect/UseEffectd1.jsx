import React, { useEffect, useState } from "react";

function UseEffectd1() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("Hi i am first");
    if (count >= 1) {
      document.title = `Chats (${count})`;
    } else {
      document.title = `Chats`;
    }
  }, [count]);

  useEffect(() => {
    console.log("I am Second");
  }, []);

  console.log("Hello Outside");

  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center">
      <h1 className="text-4xl text-black font-[Inter] font-semibold">
        {count}
      </h1>
      <button
        className="p-5 text-3xl bg-blue-400 text-white"
        onClick={() => setcount(count + 1)}
      >
        Click Me
      </button>
    </div>
  );
}

export default UseEffectd1;
