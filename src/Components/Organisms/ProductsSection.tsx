
import { useState } from "react";
import Button from "../Atoms/Button";
import SearchProducts from "../Molecules/SearchProducts";

export interface IProduct {
    nome: string;
    marca: string;
    valor: number;
    categoria: string;
    imagem: string;
    id: number
}


const ProductsSection: React.FC = () => {
    return (
            <SearchProducts></SearchProducts>
    )
}

export default ProductsSection