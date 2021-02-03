import { FC } from "react";
import "./styles.scss";

const Description : FC = ({ children }) => (
  <div className="description">
    {children}
  </div>
);

export default Description;