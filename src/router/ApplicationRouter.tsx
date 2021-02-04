import { lazy } from "react";
import { Router } from "@reach/router";
import RedirectView from "./RedirectView";

import { useAuthenticationContext } from "context/Authentication/context";

// Views
const Login = lazy(() => import("views/Login"));
const Steps = lazy(() => import("views/Steps"));
const Thanks = lazy(() => import("views/Thanks"));

const ApplicationRouter = () => {
  const { userData } = useAuthenticationContext();

  return <Router>
    {
      !userData ?
        <Login path="/" /> :
        <>
          <Steps path="/" />
          <Thanks path="/thanks" />
        </>
    }
    <RedirectView path="*" />
  </Router>
};

export default ApplicationRouter;