import { useState } from "react";
import "./App.css";
import AppDetails from "./components/AppDetails";
import AppMenu from "./components/AppMenu";
import Drag from "./components/Drag";
import SearchModal from "./components/SearchModal";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [moreState, setMoreState] = useState([]);
  const [app, setApp] = useState("");

  return (
    <div className=" dark:bg-slate-600 bg-gray-100 h-screen transition duration-500">
      <AppMenu
        setMoreState={setMoreState}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        setApp={setApp}
        app={app}
      />
      <Drag />
      <SearchModal
        moreState={moreState}
        showSearch={showSearch}
        setApp={setApp}
        setShowSearch={setShowSearch}
      />
      {!showSearch ? <AppDetails app={app} /> : ""}
    </div>
  );
}

export default App;
