import { FC } from "react";
import "./styles.scss";

type TProps = {
  size? : string | number;
}

const Title : FC<TProps> = ({ children, size }) => (
  <span style={{ fontSize : size }} className="title">
    {children}
  </span>
);

export default Title;