interface IParagraph {
    children : string
}

const Paragraph : React.FC<IParagraph> = (props) => {
    return (
        <p>{props.children}</p>
    )
}

export default Paragraph;