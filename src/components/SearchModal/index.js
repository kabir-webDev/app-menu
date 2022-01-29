import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { allItems } from "../../appData.js";

function SearchModal({ moreState, showSearch, setApp, setShowSearch }) {
  const [title, setTitle] = useState("");

  return (
    <div
      className={`${
        showSearch ? "block" : "hidden"
      }  w-[70%] smd:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%] ml-[25%] md:ml-[20%] xl:ml-[12%] 2xl:ml-[10%] shadow-2xl shadow-slate-800 dark:bg-slate-700 bg-white h-[300px] md:h-[390px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] rounded-lg overflow-scroll md:overflow-auto`}
    >
      <div className="text-center ">
        <div className="pt-4 relative mx-auto text-gray-600">
          <input
            className="border-2 border-gray-300 dark:bg-zinc-300 bg-white h-10 px-[2%]  rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            autocomplete="off"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="w-full flex flex-wrap justify-center">
          {title !== "" ? (
            <>
              {allItems
                .filter((post) => {
                  if (title === "") {
                    return post;
                  } else if (
                    post.title.toLowerCase().includes(title.toLowerCase())
                  ) {
                    return post;
                  }
                })
                .map((post, index) => (
                  <div key={index} className="mt-[4%] ">
                    <div
                      onClick={() => {
                        setApp(post.title);
                        setShowSearch(false);
                      }}
                      className="flex flex-col w-[80px] h-[80px] m-3 rounded-md bg-[#6264A7] dark:bg-lime-200 dark:hover:text-red-500 dark:text-slate-800 justify-center items-center   text-white cursor-pointer hover:text-yellow-300 text-3xl"
                    >
                      {post.icon}
                      <h1 className="text-sm">{post.title}</h1>
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <>
              {moreState.map((more, index) => (
                <div key={index} className=" mt-[4%]">
                  <div
                    onClick={() => {
                      setApp(more.title);
                      setShowSearch(false);
                    }}
                    className="flex flex-col w-[80px] h-[80px] m-3 rounded-md dark:bg-lime-200 dark:hover:text-red-500 dark:text-slate-800 bg-[#6264A7] justify-center items-center   text-white cursor-pointer hover:text-lime-300 text- text-3xl"
                  >
                    {more.icon}
                    <h1 className="text-sm">{more.title}</h1>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
