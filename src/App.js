import React, { useState, useEffect } from "react";
import HeaderNav from "./component/HeaderNav";
import Body from "./component/Body";

const App = () => {
  const [observeChange, setObserveChange] = useState(false);

  const getPosition = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 70) {
      setObserveChange(true);
    } else {
      setObserveChange(false);
    }
  };

  window.addEventListener("scroll", getPosition);

  useEffect(() => {
    getPosition();
  }, []);

  return (
    <div>
      <HeaderNav clr={observeChange ? "red" : " "} />
      <Body />
    </div>
  );
};

export default App;
