import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    return (
        <div className="row">
            <div className="col md-3">
                <h4>ProductStore</h4>
            </div>

            <div className="col md-3">
                <button>Home</button>
            </div>
            <div className="col md-3">
                <button onClick={() => navigate(`/products`)}>Products</button>
            </div>
        </div>
    )

}
export default Header