import React, { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
