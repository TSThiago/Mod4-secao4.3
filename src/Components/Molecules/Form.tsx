import Input from "../Atoms/Input";

export interface IProduct {
    nome: string;
    marca: string;
    valor: number;
    categoria: string;
    imagem: string;
    id: number
}

const Form : React.FC = () => {
    return (
        <form >
            <Input id="nome" type="text">Nome:</Input>
            <Input id="marca" type="text">Marca:</Input>
            <Input id="valor" type="text">Valor:</Input>
            <Input id="categoria" type="text">Categoria:</Input>
            <Input id="imagem" type="text">Imagem:</Input>
        </form>
    )
}

export default Form;