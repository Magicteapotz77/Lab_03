import { useState } from "react"
import Header from "../components/Header"
import { products } from "../data/products"
import { useNavigate } from "react-router-dom";
function ProductsList() {
    const navigate = useNavigate();
    const [list, setlist] = useState(products)
    const [search, setSearch] = useState('')

    const [filList, setFilList] = useState(products)



    const handleSearch = (e) => {
        setSearch(e.target.value);

        const keyword = e.target.value.toLowerCase();
        const result = list.filter(product =>
            product.name.toLowerCase().includes(keyword)
        );
        setFilList(result);
        if (keyword === '') {
            setFilList(list)
        }
    }

    const handleFilter = (e) => {
        const selectedGenre = e.target.value;

        if (selectedGenre === "") {
            setFilList(list);
        } else {
            setFilList(list.filter(movie => movie.category === selectedGenre));
        }
    }



    return (
        <div >
            <Header />
            <div className="row m-5" >
                <div className="col md-12   ">
                    <input className="col-md-12" type="text" value={search} onChange={handleSearch} />
                </div>
                <div className="col md-3">
                    <select style={{ alignItems: 'end' }} onChange={handleFilter}>
                        <option value={''}>Tất cả danh mục</option>
                        {list.map(product => (
                            <option key={product.id} value={product.category}>{product.category}</option>
                        ))}

                    </select>
                </div>
                <div className="col md-3">
                    <select>
                        <option>Sắp xếp: Mặc định</option>

                    </select>
                </div>
            </div>
            <div>
                <table>
                    <thead >
                        <th >ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Danh Mục</th>
                        <th>Giá</th>
                        <th>Thao Tác</th>
                    </thead>

                    {filList.map(product => (
                        <tbody>
                            <td key={product.id}>{product.id}</td>
                            <td key={product.id}>{product.name}</td>
                            <td key={product.id}>{product.category}</td>
                            <td key={product.id}>{product.price}</td>
                            <button onClick={() => navigate(`/:${product.id}`)}>Chi tiết</button>
                        </tbody>
                    ))}


                </table>
            </div>

        </div>
    )

}
export default ProductsList