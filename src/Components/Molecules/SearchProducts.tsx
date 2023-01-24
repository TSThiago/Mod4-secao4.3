import axios from "axios"
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
    useQueryClient
} from "react-query"
import ProductCard from "./ProductCard";

const qc = new QueryClient();

export async function fetchProducts() {
    const { data } = await axios.get('https://apigenerator.dronahq.com/api/rYKJH80w/produtoML/')
    return data
}

function SearchProducts() {
    return (
        <QueryClientProvider client={qc}>
            <SearchProductsWithData />
        </QueryClientProvider>
    );
}

function SearchProductsWithData() {
    const queryClient = useQueryClient();
    const {data, status} = useQuery("products", fetchProducts);
    return <ProductCard data={data} status={status} />;
} 

export default SearchProducts;