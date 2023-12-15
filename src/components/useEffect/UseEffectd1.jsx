import React, { useEffect, useState } from "react";

function UseEffectd1() {
  useEffect(() => {
    document.title = `Chats (${count})`
  });
  const [count, setcount] = useState(0);
  console.log("Hello Outside");

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-black font-[Inter] font-semibold">{count}</h1>
      <button className="p-5 text-3xl bg-blue-400 text-white" onClick={
        () => setcount(count + 1)
      }>Click Me</button>
    </div>
  );
}

export default UseEffectd1;
