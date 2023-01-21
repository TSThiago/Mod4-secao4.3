import axios from "axios"
import { useEffect, useState } from "react";
import ProductCard from "../Molecules/ProductCard";

export interface IProduct {
    nome: string;
    marca: string;
    valor: number;
    categoria: string;
    imagem: string;
    id: number
}

const ProductsSection: React.FC = () => {
    const [value, setValue] = useState({
        nome: '',
        marca: '',
        valor: 0,
        categoria: '',
        imagem: '',
        id: 0,
    })
    const [productList, setProductList] = useState<IProduct[]>([])

    useEffect(() => {
        getProducts()
    }, [])

    async function fetchProducts(id: number) {
        const { data } = await axios.get('https://apigenerator.dronahq.com/api/rYKJH80w/produtoML/' + id)
        return data
    }

    async function getProducts() {
        let products: IProduct[] = []
        for (let index: number = 1; index < 11; index++) {
            const data: IProduct = await fetchProducts(index);
            const item = { nome: data.nome, marca: data.marca, valor: data.valor, categoria: data.categoria, imagem: data.imagem, id: data.id }
            products.push(item)
        }
        setProductList(products)
    }

    return (
        <div className="products">
            <ProductCard productsList={productList}></ProductCard>
        </div>
    )
}

export default ProductsSection