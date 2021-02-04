import { lazy } from "react";
import { Router } from "@reach/router";
import RedirectView from "./RedirectView";

// Views
const Login = lazy(() => import("views/Login"));
const Steps = lazy(() => import("views/Steps"));
const Thanks = lazy(() => import("views/Thanks"));

const ApplicationRouter = () => (
  <Router>
    <Login path="/" />
    <Steps path="/steps" />
    <Thanks path="/thanks" />
    <RedirectView path="*" />
  </Router>
);

export default ApplicationRouter;