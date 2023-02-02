import { Button } from "../Button";
import { StyledCard } from "./style";
import { toast } from "react-toastify";

export function Card({ newProductsList, product, setCart, cart }) {
  function findProduct(id) {
    const productFound = newProductsList.find((product) => product.id == id);
    return productFound;
  }
  function addToCart(e) {
    const buttonId = e.target.id;

    const productFound = findProduct(buttonId);

    const productIndex = cart.indexOf(productFound);

    if (productIndex !== -1) {
      toast.error("Esse produto já foi adicionado ao carrinho");
    } else {
      setCart([...cart, productFound]);
      toast.success("Produto adicionado carrinho");
    }
  }
  return (
    <StyledCard>
      <img src={product.img} alt="" />
      <div className="information__container">
        <h2>{product.name}</h2>
        <span>{product.category}</span>
        <p>R${product.price},00</p>
        <Button
          buttonTitle={"Adicionar"}
          buttonId={product.id}
          callback={(e) => addToCart(e)}
        />
      </div>
    </StyledCard>
  );
}
