import React, { useEffect, useState } from "react";
import Input from "../Atoms/Input";

export interface IProduct {
    nome: string;
    marca: string;
    valor: number;
    categoria: string;
    imagem: string;
    id: number
}

const Form: React.FC = () => {
    const [formValues, setFormValues] = useState({ nome: "", marca: "", valor: "", categoria: "", imagem: "" });
    const [disabled, setDisabled] = useState(true);

    const registerProduct = () => {
        let newProduct: object = {
            nome: formValues.nome,
            marca: formValues.marca,
            valor: parseFloat(formValues.valor),
            categoria: formValues.categoria,
            imagem: formValues.imagem
        } 
        let myInit = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        };
        fetch('https://apigenerator.dronahq.com/api/rYKJH80w/produtoML', myInit)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
        })
        alert(formValues.nome + " registardo com sucesso!")
    }

useEffect(() => {
    setDisabled(!(!!formValues.nome && !!formValues.marca && (!!formValues.valor && !!parseFloat(formValues.valor))  && !!formValues.categoria && !!formValues.imagem));
}, [formValues]);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.id]: event.target.value });
}

return (
    <form >
        <label htmlFor="nome">Nome:</label>
        <input onChange={handleChange} defaultValue={formValues.nome} id={"nome"} type="text" />
        <label htmlFor="marca">Marca:</label>
        <input onChange={handleChange} defaultValue={formValues.marca} id={"marca"} type="text" />
        <label htmlFor="valor">Valor:</label>
        <input onChange={handleChange} defaultValue={formValues.valor} id={"valor"} type="text" />
        <label htmlFor="categoria">Categoria:</label>
        <input onChange={handleChange} defaultValue={formValues.categoria} id={"categoria"} type="text" />
        <label htmlFor="imagem">Imagem url:</label>
        <input onChange={handleChange} defaultValue={formValues.imagem} id={"imagem"} type="text" />
        <br></br>
        <input onClick={registerProduct} disabled={disabled} type="submit"></input>
    </form>
)
}

export default Form;