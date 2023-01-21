import { IProduct } from "../Organisms/ProductsSection";
import Product from "./Product";

interface IProductCard {
    productsList: IProduct[];
}

const ProductCard: React.FC<IProductCard> = (props) => {
    return (
        <>
            {props.productsList.map((item, index) => (
                <div className="product">
                    <Product key={index} src={item.imagem} alt={'Imagem de ' + item.nome} spanChildren={item.nome} pChildren={'R$' +item.valor.toFixed(2)}></Product>
                </div>
            ))}

        </>

    )
}

export default ProductCard