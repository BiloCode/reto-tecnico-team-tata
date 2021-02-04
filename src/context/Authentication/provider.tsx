import { FC, useState } from "react";
import AuthenticationContext from "./context";

const AuthenticationProvider : FC = ({ children }) => {
  const [ userData , setUserData ] = useState(null);

  const userDataMutate = (data : any) => (setUserData(() => data));

  return <AuthenticationContext.Provider value={{
    userData,
    userDataMutate
  }}>
    {children}
  </AuthenticationContext.Provider>
};

export default AuthenticationProvider;