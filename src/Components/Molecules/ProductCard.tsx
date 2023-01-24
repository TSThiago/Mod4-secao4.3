import { IProduct } from "../Organisms/ProductsSection";
import Product from "./Product";
import Button from "../Atoms/Button";
import { useState } from "react"

interface IProductCard {
    data: IProduct[];
    status: string
}

const ProductCard: React.FC<IProductCard> = ({ data, status }) => {
    const [decrescent, setDecrescent] = useState(false)
    const [productList, setProductList] = useState<IProduct[]>([])

    function sortHightoLow() {
        setDecrescent(false)
    }

    function sortLowtoHigh() {
        setDecrescent(true)
    }


    const ProductsCard = (products: IProduct[]) => {
        if (decrescent) {
            return products.sort((a, b) => a.valor && b.valor ? a.valor - b.valor : 0).map((product) => {
                return <div className="product">
                    <Product key={product.id} src={product.imagem} alt={'Imagem de ' + product.nome} spanChildren={product.nome} pChildren={'R$' + product.valor.toFixed(2)}></Product>
                </div>
            });
        } else {
            return products.sort((a, b) => a.valor && b.valor ? b.valor - a.valor : 0).map((product) => {
                return <div className="product">
                    <Product key={product.id} src={product.imagem} alt={'Imagem de ' + product.nome} spanChildren={product.nome} pChildren={'R$' + product.valor.toFixed(2)}></Product>
                </div>
            });
        }

    };
    return (
        <>
            <div className="buttons">
                <Button OnClick={sortLowtoHigh}>Ordem Crescente</Button>
                <Button OnClick={sortHightoLow}>Ordem Decrescente</Button>
            </div >
            <div className="products">
                {status === 'loading' && <div>Loading...</div>}
                {status === 'error' && <div>Error fetching products</div>}
                {status === 'success' && <div>{ProductsCard(data)}</div>}
            </div>
        </>
    );;
}

export default ProductCard;