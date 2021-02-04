import { FC } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import "./styles.scss";

type TProps = {
  step : number;
  onClick?(): void;
}

const StepIndicator : FC<TProps> = ({ step , onClick }) => (
  <div className="step-indicator">
    <button onClick={onClick} className="step-indicator__button">
      <AiOutlineLeft />
    </button>
    <span className="step-indicator__text">
      <b>Paso {step + 1}</b> de 7
    </span>
  </div>
);

export default StepIndicator;