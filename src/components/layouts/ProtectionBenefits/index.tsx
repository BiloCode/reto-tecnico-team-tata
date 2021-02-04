import { useState } from "react";
import { plan_card } from "./config";
import "./styles.scss";

import PlanCard from "components/common/PlanCard";
import BenefitsLayout from "../BenefitsLayout";

const ProtectionBenefits = () => {
  const [ planCardActive , setPlanCardActive ] = useState<number>(0);

  const ChangePlanCardActive = (id : number) => () => setPlanCardActive(() => id);

  return <div className="protection-benefits">
    <div className="protection-benefits__plan-cards">
      {
        plan_card.map((v,i) => (
          <PlanCard
            key={i}
            title={v.title}
            price={v.price}
            select={i === planCardActive}
            onClick={ChangePlanCardActive(i)}
          />
        ))
      }
    </div>
    <BenefitsLayout />
  </div>
}

export default ProtectionBenefits;