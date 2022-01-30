import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

function AppDetails({ app }) {
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(false);
  const [fetchUser, setFetchUser] = useState(1);

  //This section is Just to implement callback function after clicking on each buttons

  useEffect(() => {
    switch (app) {
      case "Chat":
        setFetchUser(2);
        break;
      case "Teams":
        setFetchUser(3);
        break;
      case "Calendar":
        setFetchUser(4);
        break;
      case "Calls":
        setFetchUser(5);
        break;
      case "Files":
        setFetchUser(6);
        break;
      case "Shifts":
        setFetchUser(7);
        break;
      case "Time":
        setFetchUser(8);
        break;

      default:
        setFetchUser(1);
    }
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${fetchUser}`
      );
      const json = await res.json();
      setUser(json);
      console.log("Fetched Username: ", user?.name);
    };
    fetchData();
  }, [app]);

  return (
    <div className="ml-[46%] text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-slate-400 absolute top-[35%] ">
      {app}
    </div>
  );
}

export default AppDetails;
