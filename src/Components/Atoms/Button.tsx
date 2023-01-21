interface IButton {
    children: string;
    OnClick: 
}

const Button : React.FC<IButton> = (props) => {
    return (
        <button onClick={props.OnClick}>{props.children}</button>
    )
}

export default Button;