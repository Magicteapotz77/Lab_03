import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <ProductsList />
            </>
          }
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
