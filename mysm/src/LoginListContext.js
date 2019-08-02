import React, { useState, createContext } from "react";

export const LoginListContext = createContext();

export const LoginListProvider = props => {
  const [logins, setLogins] = useState([
    {
      id: 1,
      name: "Principal"
    },
    {
      id: 2,
      name: "Faculty"
    },
    {
      id: 3,
      name: "Parent"
    }
  ]);

  return (
    <LoginListContext.Provider value={[logins, setLogins]}>
      {props.children}
    </LoginListContext.Provider>
  );
};
