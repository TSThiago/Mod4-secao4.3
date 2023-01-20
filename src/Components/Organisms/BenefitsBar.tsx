import Benefit from "../Molecules/Benefit";
import FirstBenefit from "../Molecules/FirstBenefit";

const BenefitsBar: React.FC = () => {
    return (
        <div className='benefitsBar'>
            <FirstBenefit spanChildren="Pagamento rápido e seguro" pChildren="Com cartão"></FirstBenefit>
            <Benefit spanChildren="Até 10 parcelas sem juros" pChildren="Ver mais"></Benefit>
            <Benefit spanChildren="Parcelamento sem cartão" pChildren="Conheça o mercado de crédito"></Benefit>
            <Benefit spanChildren="Via PIX" pChildren="Ver mais"></Benefit>
        </div>
    )
}

export default BenefitsBar;