import React, { useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import { IoApps } from "react-icons/io5";
import { VscQuestion } from "react-icons/vsc";
import { menuItems } from "../../appData.js";

function AppMenu({ setMoreState, showSearch, setShowSearch, setApp }) {
  const admin = [
    "Activity",
    "Chat",
    "Teams",
    "Calendar",
    "Calls",
    "Shifts",
    "Files",
    "Time",
  ];
  const designer = ["Activity", "Chat", "Teams", "Shifts", "Files"];
  const developer = ["Activity", "Chat", "Teams", "Calendar"];
  const [general, setGeneral] = useState([]);
  const [user, setUser] = useState();
  const MenuArray = menuItems.filter((item) => general.includes(item.title));
  const [state, setState] = useState({ height: (general.length + 1) * 58 });
  const [datas, setDatas] = useState(MenuArray.slice(0, 7));
  const [dotsItem, setDotItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("name");
    setUser(JSON.parse(saved));
    if (user === "developer") {
      setGeneral(developer);
    } else if (user === "designer") {
      setGeneral(designer);
    } else if (user === "admin") {
      setGeneral(admin);
    }
  }, [user]);

  useEffect(() => {
    setState({ height: (general.length + 1) * 58 });
  }, [general, user]);

  useEffect(() => {
    setDatas(
      MenuArray.slice(
        0,
        Math.floor(
          state.height / ((general.length * 58) / MenuArray.length - 1)
        )
      )
    );
    setDotItems(
      MenuArray.slice(
        Math.floor(
          state.height / ((general.length * 58) / MenuArray.length - 1)
        ),
        MenuArray.length
      )
    );
    setMoreState(dotsItem);
  }, [state.height, user]);

  return (
    <div className="w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px]  fixed h-screen flex flex-col justify-between dark:bg-slate-700 bg-[#EBEBEB] transition duration-500 ">
      <div>
        <Resizable
          enable={{
            top: false,
            right: false,
            bottom: true,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
          maxHeight={(general.length + 1) * 58}
          minHeight={"90"}
          style={{
            marginLeft: 0,
            marginTop: 0,
            zIndex: "1",
          }}
          size={{ width: state.width, height: state.height }}
          onResize={(e, direction, ref, d) => {
            setState({
              height: ref.offsetHeight,
            });
          }}
        >
          {datas.map((item, index) => (
            <MenuItem
              key={index}
              setShowSearch={setShowSearch}
              setApp={setApp}
              item={item}
            />
          ))}

          <div className=" w-full  block text-red-500 dark:text-green-300 dark:hover:text-yellow-400 border-[#EBEBEB] hover:text-[#6242A7] z-10">
            <div className="absolute left-[37%] -mb-[12px] bottom-[35px] ">
              <div className="relative">
                {dotsItem.length !== 0 ? (
                  <HiDotsHorizontal
                    onClick={() => setShowSearch(!showSearch)}
                    className="relative text-2xl cursor-pointer"
                  />
                ) : (
                  <HiDotsHorizontal className="relative text-2xl cursor-pointer" />
                )}

                {dotsItem.length !== 0 && (
                  <div className="absolute flex justify-center items-center bottom-2 left-8 w-4 h-4 rounded-[50%] bg-[#CC4A31] ">
                    <span className="text-[11px] text-white">
                      {dotsItem.length}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute left-[37%] -mb-[12px] bottom-0">
              <AiOutlineMinus className=" text-2xl cursor-pointer" />
            </div>
          </div>
        </Resizable>
      </div>
      <div className="">
        <div
          onClick={() => {
            setApp("Apps");
            setShowSearch(false);
          }}
          className="flex flex-col justify-center items-center p-2 cursor-pointer text-gray-700 dark:text-white dark:hover:text-yellow-400 border-[#EBEBEB] hover:text-[#6242A7]"
        >
          <IoApps className=" text-2xl" />
          <h1 className="text-xs">Apps</h1>
        </div>
        <div
          onClick={() => {
            setApp("Help");
            setShowSearch(false);
          }}
          className="flex flex-col justify-center items-center p-2 cursor-pointer  text-gray-700 dark:text-white dark:hover:text-yellow-400 border-[#EBEBEB] hover:text-[#6242A7]"
        >
          <VscQuestion className=" text-2xl" />
          <h1 className="text-xs">Help</h1>
        </div>
      </div>
    </div>
  );
}

const MenuItem = ({ item, setShowSearch, setApp, app }) => {
  const { icon, title } = item;

  return (
    <>
      <div
        onClick={() => {
          setApp(title);
          setShowSearch(false);
        }}
        className="flex flex-col justify-center items-center p-2  text-gray-700 dark:hover:text-yellow-400 dark:text-white cursor-pointer hover:text-[#6242A7] text-2xl"
      >
        {icon}
        <h1 className="text-xs">{title}</h1>
      </div>
    </>
  );
};

export default AppMenu;
