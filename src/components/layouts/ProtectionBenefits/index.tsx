import { useState } from "react";
import "./styles.scss";

import { plan_detail } from "config/plan_detail";
import { plan_card } from "config/plan_card";

import PlanCard from "components/common/PlanCard";
import BenefitsLayout from "../BenefitsLayout";

const ProtectionBenefits = () => {
  const [ planCardActive , setPlanCardActive ] = useState<number>(0);

  const ChangePlanCardActive = (id : number) => () => setPlanCardActive(() => id);
  const currentPlan = plan_detail[planCardActive];

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
    <BenefitsLayout
      price={currentPlan.price}
      image={currentPlan.image}
      plan_name={currentPlan.plan_name}
      benefits_active={currentPlan.benefits_id}
    />
  </div>
}

export default ProtectionBenefits;