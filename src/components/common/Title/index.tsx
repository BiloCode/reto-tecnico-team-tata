import { FC } from "react";
import "./styles.scss";

const Title : FC = ({ children }) => (
  <span className="title">
    {children}
  </span>
);

export default Title;