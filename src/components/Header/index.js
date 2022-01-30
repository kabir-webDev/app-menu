import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function Header() {
  const [theme, setTheme] = useState(localStorage.theme);
  const [ifUser, setIfUser] = useState("");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const saved = localStorage.getItem("name");
    setIfUser(JSON.parse(saved));
  }, [ifUser]);

  const handleLogin = (name) => {
    localStorage.setItem("name", JSON.stringify(name));
    window.location.reload(true);
  };
  const handleLogut = (name) => {
    localStorage.removeItem("name");
    window.location.reload(true);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(theme);
    root.classList.remove(colorTheme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return (
    <div className=" w-full flex justify-end dark:bg-slate-600 bg-gray-100 transition duration-500 p-3">
      <div className="flex gap-1 mr-5">
        {ifUser === "" || ifUser == null || ifUser === undefined ? (
          <>
            <button
              className="px-5 py-3 bg-indigo-500 rounded-md text-white "
              onClick={() => handleLogin("admin")}
            >
              Admin
            </button>
            <button
              className="px-5 py-3 bg-indigo-500 rounded-md text-white "
              onClick={() => handleLogin("developer")}
            >
              Developer
            </button>
            <button
              className="px-5 py-3 bg-indigo-500 rounded-md text-white "
              onClick={() => handleLogin("designer")}
            >
              Designer
            </button>
          </>
        ) : (
          <>
            <div className="my-auto">
              <p className="text-2xl mr-5 text-slate-800 dark:text-white">
                Hello mr.{" "}
                <span className="text-red-500">
                  {ifUser === "designer"
                    ? "Designer"
                    : ifUser === "developer"
                    ? "Developer"
                    : "Admin"}
                </span>
              </p>
            </div>
            <button
              className="px-5 py-3 bg-red-400 border-2 border-white hover:bg-red-100 hover:border-red-500 rounded-md text-white hover:text-red-500 transition duration-500 "
              onClick={() => handleLogut("designer")}
            >
              Logout
            </button>
          </>
        )}
      </div>
      <span
        className="cursor-pointer  flex items-center justify-center w-10 h-10 bg-indigo-500 rounded-full shadow-lg text-white "
        onClick={() => setTheme(colorTheme)}
      >
        {colorTheme === "light" ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        )}
      </span>
    </div>
  );
}

export default Header;
