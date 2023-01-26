import { useFormik } from "formik";
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
    const formik = useFormik({
        initialValues: {
            nome: '',
            marca: '',
            valor: '',
            categoria: '',
            imagem: ''
        },
        onSubmit: (values) => {
            let newProduct: object = values
            let myInit = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            };
            fetch('https://apigenerator.dronahq.com/api/rYKJH80w/produtoML', myInit)
                .then(function (response) {
                    return response.json();
                })
            alert(formik.values.nome + " registardo com sucesso!")
        }
    })
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(!((!!formik.values.nome) && !!formik.values.marca && (!!formik.values.valor && !!parseFloat(formik.values.valor) && parseFloat(formik.values.valor) > 0) && !!formik.values.categoria && !!formik.values.imagem));
    }, [formik.values]);

    return (
        <form onSubmit={formik.submitForm}>
            <label htmlFor="nome">Nome:</label>
            <input onChange={formik.handleChange} defaultValue={formik.values.nome} id="nome" type="text" />
            <label htmlFor="marca">Marca:</label>
            <input onChange={formik.handleChange} defaultValue={formik.values.marca} id="marca" type="text" />
            <label htmlFor="valor">Valor:</label>
            <input onChange={formik.handleChange} defaultValue={formik.values.valor} id="valor" type="text" />
            <label htmlFor="categoria">Categoria:</label>
            <input onChange={formik.handleChange} defaultValue={formik.values.categoria} id="categoria" type="text" />
            <label htmlFor="imagem">Imagem url:</label>
            <input onChange={formik.handleChange} defaultValue={formik.values.imagem} id="imagem" type="text" />
            <br></br>
            <button disabled={disabled} type="submit">Cadastrar</button>
        </form>
    )
}

export default Form;