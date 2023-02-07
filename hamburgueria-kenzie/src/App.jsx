import { useState, useEffect } from "react";
import { GlobalSTyles } from "./styles/global-styles";
import { ResetStyles } from "./styles/reset";
import { ApplicationBody } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "./services/api";
import { Header } from "./Components/Header";
import { ProductsList } from "./Components/ProductsList";
import { Cart } from "./Components/Cart";

function App() {
  const getCartList = localStorage.getItem("@ProductsCart");
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(getCartList ? JSON.parse(getCartList) : []);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const newProductsList =
    filteredProducts.length > 0 ? filteredProducts : products;

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("@ProductsCart", JSON.stringify(cart));
  }, [cart]);

  function handleClick() {
    setInput("");
    setFilteredProducts([]);
  }

  return (
    <ApplicationBody className="App">
      <ResetStyles />
      <GlobalSTyles />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Header
        input={input}
        setInput={setInput}
        products={products}
        setFilteredProducts={setFilteredProducts}
      />

      <main>
        <div className="main__container">
          {filteredProducts.length > 0 ? (
            <div className="search__results">
              <p>Resultados de busca para: {input}</p>
              <button onClick={handleClick}>Voltar</button>
            </div>
          ) : null}
          <div className="products-and-cart__container">
            <ProductsList
              newProductsList={newProductsList}
              setCart={setCart}
              cart={cart}
            />

            <Cart cart={cart} setcart={setCart} />
          </div>
        </div>
      </main>
    </ApplicationBody>
  );
}

export default App;
