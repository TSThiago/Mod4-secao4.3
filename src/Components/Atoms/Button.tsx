import { IProduct } from "../Molecules/ProductCard";

interface IButton {
    children: string;
    OnClick: () => void
}

const Button : React.FC<IButton> = (props) => {
    return (
        <button onClick={() => {props.OnClick()}}>{props.children}</button>
    )
}

export default Button;