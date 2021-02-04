import { createContext, useContext } from "react";

interface IContext {
  userData : any | null;
  userDataMutate(data : any) : void;
}

const AuthenticationContext = createContext<IContext>({
  userData : null,
  userDataMutate(){}
});

export const useAuthenticationContext = () => useContext(AuthenticationContext);

export default AuthenticationContext;