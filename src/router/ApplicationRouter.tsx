import { lazy } from "react";
import { Router } from "@reach/router";

// Views
const Login = lazy(() => import("views/Login"));
const Steps = lazy(() => import("views/Steps"));
const Thanks = lazy(() => import("views/Thanks"));

const ApplicationRouter = () => (
  <Router>
    <Login path="/" />
    <Steps path="/steps" />
    <Thanks path="/thanks" />
  </Router>
);

export default ApplicationRouter;