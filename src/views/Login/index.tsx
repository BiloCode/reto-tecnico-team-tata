import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import PlanCard from "components/common/PlanCard";

const Login : FC<RouteComponentProps> = () => (
  <div>
    <PlanCard title="Basico" price={160}  />
  </div>
);

export default Login;