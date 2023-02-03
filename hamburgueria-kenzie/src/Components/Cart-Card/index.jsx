import { StyledCardCart } from "./style";
import { toast } from "react-toastify";

export function CartCard({ productCart, cart, setcart }) {
  function deleteProductFromCart(e) {
    const buttonId = e.target.id;

    const filteredList = cart.filter((product) => product.id != buttonId);
    setcart(filteredList);
    toast.success("O produto foi retirado do carrinho com sucesso !");
  }
  return (
    <StyledCardCart>
      <img src={productCart.img} alt="" />
      <div className="product__information">
        <div className="product__name">
          <h2>{productCart.name}</h2>
          <p>{productCart.category}</p>
        </div>
        <button id={productCart.id} onClick={(e) => deleteProductFromCart(e)}>
          Remover
        </button>
      </div>
    </StyledCardCart>
  );
}
