interface IA {
    children: string;
    href: string
}

const A : React.FC<IA> = (props) => {
    return (
        <a href={props.href}>{props.children}</a>
    )
}

export default A;