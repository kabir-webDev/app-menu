import React, { useState } from "react";
import "../styles/styles.css";
import AppMenu from "./AppMenu";
import Drag from "./Drag";

function App() {
  const [height, setHeight] = useState();
  return (
    <div className="">
      <AppMenu height={height} />
      <Drag setHeight={setHeight} />
    </div>
  );
}

export default App;
