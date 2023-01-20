interface IH4 {
    children : string
}

const H4 : React.FC<IH4> = (props) => {
    return (
        <h4>{props.children}</h4>
    )
}

export default H4;