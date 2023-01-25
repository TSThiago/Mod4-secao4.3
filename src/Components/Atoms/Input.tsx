interface IInput {
    id: string;
    children: string;
    type: string
}

const Input: React.FC<IInput> = (props) => {
    return (
        <>
            <label htmlFor={props.id}>{props.children}</label>
            <input id={props.id} type={props.type} />
        </>

    )
}

export default Input