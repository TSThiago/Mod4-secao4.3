import Span from "../Atoms/Span"
import Paragraph from "../Atoms/Paragraph"

interface IFirstBenefit {
    spanChildren : string;
    pChildren : string
}

const FirstBenefit : React.FC<IFirstBenefit> = (props) => {
    return (
        <div className="firstBenefit benefit">
            <Span>{props.spanChildren}</Span>
            <Paragraph>{props.pChildren}</Paragraph>
        </div>
    )
} 

export default FirstBenefit;