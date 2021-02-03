import { FC } from 'react';
import Base from 'assets/images/Base.png';
import "./styles.scss";

const Background : FC = ({ children }) => (
  <div className="background">
    <div className="background__children-box">
      {children}
    </div>
    <div className="background__image-container">
      <img className="background__image" src={Base} alt="base-default" />
    </div>
  </div>
);

export default Background;