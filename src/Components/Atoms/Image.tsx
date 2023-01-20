interface IImage {
    src: string;
    alt: string
}

const Image : React.FC<IImage> = (props) => {
    return (
        <img src={props.src} alt={props.alt} />
    )
}   

export default Image