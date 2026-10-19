import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
function Home() {
    const navigate = useNavigate();
    return (
        <div>
<Header/>
            <hr />
            <div className="col">
                <div className="row" style={{ textAlign: 'center' }}>
                    <h1>Welcom to ProductStore</h1>
                </div>
                <div className="row" style={{ textAlign: 'center' }}>
                    <h5>Manage and explore products for your needs.</h5>
                </div>
                <div className="row">
                    <button onClick={() => navigate(`/products`)}>View Products</button>
                </div>

            </div>

        </div>
    )
}
export default Home