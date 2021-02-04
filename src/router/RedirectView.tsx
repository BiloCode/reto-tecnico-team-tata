import { FC } from "react";
import { Redirect, RouteComponentProps } from "@reach/router";

const RedirectView : FC<RouteComponentProps> = () => (
  <Redirect to="/" noThrow />
);

export default RedirectView;