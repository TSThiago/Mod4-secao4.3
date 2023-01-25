interface IInput {
    id?: string;
    children?: string;
    type: string;
    OnChange: () => void;
    value: string | number | undefined
}

const Input: React.FC<IInput> = (props) => {
    return (
        <>
            <label htmlFor={props.id}>{props.children}</label>
            <input onChange={() => {props.OnChange()}} defaultValue={props.value} id={props.id} type={props.type} />
        </>

    )
}

export default Input