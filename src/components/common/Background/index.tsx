import { FC } from 'react';
import "./styles.scss";

import Base from 'assets/images/Base.png';
import Other from 'assets/images/Illustration-base.png';

const Background : FC = ({ children }) => (
  <div className="background">
    <div className="background__children-box">
      {children}
    </div>
    <div className="background__image-container">
      <img className="background__image" src={Base} alt="base-default" />
      <img className="background__image-float" src={Other} alt="base-float" />
    </div>
  </div>
);

export default Background;