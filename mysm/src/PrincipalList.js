import React, { useState } from "react";
import Principal from "./Principal";
const PrincipalList = () => {
  const [principals, setPrincipals] = useState([
    {
      principalJoinId: "ABCD",
      name: "abc",
      email: "abc@gmail.com",
      phoneNumber: "9999999999",
      password: "abc",
      school: "Sc1"
    },
    {
      principalJoinId: "ABCDE",
      name: "abcE",
      email: "abcE@gmail.com",
      phoneNumber: "9999999991",
      password: "abcE",
      school: null
    }
  ]);
  return (
    <div>
      {principals.map(principal => (
        <Principal
          id={principal.principalJoinId}
          name={principal.name}
          email={principal.email}
          phoneNumber={principal.phoneNumber}
        />
      ))}
    </div>
  );
};

export default PrincipalList;
