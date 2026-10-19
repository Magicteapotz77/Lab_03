import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
function ProductDetail() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));


    return (
        <div>
            <h1>Product detail</h1>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/products">Product List</Link> |
                <Link to="/about">About</Link> |
            </nav>


            <ul>
                <div>
                    {products.filter((product) => product.id === parseInt(id)).map(
                        (product) => (
                            <div key={product.id}>
                                <h2>{product.name}</h2>
                                <p>Price: ${product.price.toFixed(2)}</p>
                                <p>Product ID: {id}</p>
                            </div>
                        ),
                    )}
                </div>
            </ul>
            <Link to="/products">Back to Product List</Link>
        </div>
    );
}
export default ProductDetail