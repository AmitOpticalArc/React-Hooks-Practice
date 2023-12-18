import React, { useEffect, useState } from "react";

const UseEffectAPI = () => {
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    console.log(response);
    setusers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2 className="text-4xl text-black flex justify-center">
        List of Github Users
      </h2>
      {
        users.map((currElem) => {
            return (
              <div>
                <div className="m-7 grid grid-cols-3 gap-6">
                  <div className="flex w-full h-full bg-yellow-300 justify-evenly p-3 rounded-3xl">
                    <div>
                      <img src= {currElem.thumbnailUrl} alt="image" />
                    </div>
                    <div>
                      <div className="text-3xl">Amit</div>
                      <div className="mt-3 text-3xl">{currElem.title}</div>
                      <div className="flex gap-7 mt-3 bg-gray-300 px-3 py-2 rounded-3xl">
                        <div>
                          <div className="text-2xl">Article</div>
                          <div className="text-2xl flex justify-center">38</div>
                        </div>
                        <div>
                          <div className="text-2xl">Followers</div>
                          <div className="text-2xl flex justify-center">38</div>
                        </div>
                        <div>
                          <div className="text-2xl">Rating</div>
                          <div className="text-2xl flex justify-center">38</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            //   <div class="grid grid-cols-3 gap-4">
            //       <div>01</div>
            //       <div>01</div>
            //       <div>01</div>
            //       <div>01</div>
            //       <div>01</div>
            //       <div>01</div>
                 
            //       <div>09</div>
            //     </div>
            );
        })
      }
      
    </>
  );
};

export default UseEffectAPI;
