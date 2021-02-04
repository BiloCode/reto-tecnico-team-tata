import "./styles.scss";

import Illustration from "assets/images/Illustration.png"
import BenefitsItem from "components/common/BenefitsItem";

const BenefitsLayout = () => (
  <div className="benefits-layout">
    <div className="benefits-layout__header">
      <span className="benefits-layout__title-header">Cuentas con estos beneficios:</span>
    </div>
    <div className="benefits-layout__detail">
      <div className="benefits-layout__information">
        <span className="benefits-layout__subtitle">Cobertura maxima</span>
        <span className="benefits-layout__price">S/1MM</span>
        <span className="benefits-layout__plan">Plan basico</span>
      </div>
      <div className="benefits-layout__container-image">
        <img src={Illustration} className="benefits-layout__image" alt="benefits-image"/>
      </div>
    </div>
    <div className="benefits-layout__items">
      <BenefitsItem title="Lima" active subtitle="(zona de cobertura)" />
      <BenefitsItem title="+30 clínicas" active subtitle="(en red afiliada)" />
      <BenefitsItem title="Medico a domicilio" />
      <BenefitsItem title="Chequeos preventivos" />
      <BenefitsItem title="Reembolso nacional" />
      <BenefitsItem title="Reembolso internacional" />
    </div>
  </div>
);

export default BenefitsLayout;