import { FC } from "react";
import "./styles.scss";

const RootLayout : FC = ({ children }) => (
  <div className="root-layout">
    {children}
  </div>
);

export default RootLayout;