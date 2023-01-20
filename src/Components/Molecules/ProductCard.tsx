import Paragraph from "../Atoms/Paragraph";
import Image from "../Atoms/Image";
import Span from "../Atoms/Span";

interface IProductCard {
    src: string;
    alt: string;
    spanChildren : string;
    pChildren : string
}

const ProductCard: React.FC<IProductCard> = (props) => {
    return (
        <div className="product">
            <Image src={props.src} alt={props.alt}></Image>
            <Span>{props.spanChildren}</Span>
            <Paragraph>{props.pChildren}</Paragraph>
        </div>
    )
}

export default ProductCard