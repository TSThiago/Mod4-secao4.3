import Paragraph from "../Atoms/Paragraph";
import Image from "../Atoms/Image";
import Span from "../Atoms/Span";

interface IProduct {
        src: string;
        alt: string;
        spanChildren : string;
        pChildren : string
}

const Product: React.FC<IProduct> = (props) => {
    return (
        <>
            <Image src={props.src} alt={props.alt}></Image>
            <Span>{props.spanChildren}</Span>
            <Paragraph>{props.pChildren}</Paragraph>
        </>
    )
}

export default Product