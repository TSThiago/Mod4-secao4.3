import Span from "../Atoms/Span"
import Paragraph from "../Atoms/Paragraph"
import H4 from "../Atoms/H4";

interface IBenefit {
    spanChildren : string;
    pChildren : string
}

const Benefit: React.FC<IBenefit> = (props) => {
    return (
        <div className="benefit">
            <Span>{props.spanChildren}</Span>
            <Paragraph>{props.pChildren}</Paragraph>
        </div>
    )
}

export default Benefit;