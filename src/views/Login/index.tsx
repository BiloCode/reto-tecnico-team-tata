import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import PlanCard from "components/common/PlanCard";
import Dropdown from "components/common/Dropdown";
import SelectableOption from "components/layouts/SelectableOption";

const Login : FC<RouteComponentProps> = () => (
  <div>
    <PlanCard title="Basico" price={160}  />
    <Dropdown title="Dropdown One" />
    <Dropdown title="Dropdown Two" />
    <Dropdown title="Dropdown Three" />
    <SelectableOption />
  </div>
);

export default Login;