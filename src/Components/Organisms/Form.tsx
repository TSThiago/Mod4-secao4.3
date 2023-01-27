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
            imagem: '',
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
            alert(formik.values.nome + " registrado com sucesso!")
        },
        validate: (values) => {
            const errors: { nome?: string, marca?: string, valor?: string, categoria?: string, imagem?: string } = {};
            if (!values.nome) {
                errors.nome = "Preencha esse campo!"
            } else if (/[^a-zA-Z0-9À-ü]/i.test(values.nome)) {
                errors.nome = "Algarismos inválidos"
            }

            if (!values.marca) {
                errors.marca = "Preencha esse campo!"
            }

            if (!values.valor) {
                errors.valor = "Preencha esse campo!"
            } else if (parseFloat(values.valor) < 1 || !parseFloat(values.valor)) {
                errors.valor = "Valor inválido"
            }

            if (!values.categoria) {
                errors.categoria = "Preencha esse campo!"
            } else if (/[^a-zA-Z0-9À-ü]/i.test(values.nome)) {
                errors.categoria = "Algarismos inválidos"
            }

            if (!values.imagem) {
                errors.imagem = "Preencha esse campo!"
            }
            return errors
        }
    })

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(!((!!formik.values.nome) && !!formik.values.marca && (!!formik.values.valor && !!parseFloat(formik.values.valor) && parseFloat(formik.values.valor) > 0) && !!formik.values.categoria && !!formik.values.imagem));
    }, [formik.values]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="nome">Nome:</label>
            <input onChange={formik.handleChange} defaultValue={formik.values.nome} id="nome" type="text" />

            {formik.errors.nome}

            <label htmlFor="marca">Marca:</label>
            <input onChange={formik.handleChange} defaultValue={formik.values.marca} id="marca" type="text" />

            {formik.errors.marca}

            <label htmlFor="valor">Valor:</label>
            <input onChange={formik.handleChange} defaultValue={formik.values.valor} id="valor" type="text" />

            {formik.errors.valor}

            <label htmlFor="categoria">Categoria:</label>
            <input onChange={formik.handleChange} defaultValue={formik.values.categoria} id="categoria" type="text" />

            {formik.errors.categoria}

            <label htmlFor="imagem">URL da imagem:</label>
            <input onChange={formik.handleChange} defaultValue={formik.values.imagem} id="imagem" type="text" />

            {formik.errors.imagem}

            <br></br>
            <button disabled={disabled} type="submit">Cadastrar</button>
        </form>
    )
}

export default Form;