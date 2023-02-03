import { toast } from "react-toastify";
import { StyledTotalCart } from "./style";

export function TotalCart({ cart, setCart }) {
  function removeAllProducts() {
    setCart([]);
    toast.success("Todos os produtos foram retirados do carrinho");
  }

  function sumAllProductsPrice(array) {
    const sum = array.reduce((accumulator, currentValue) => {
      return Number(accumulator) + Number(currentValue.price);
    }, 0);

    return sum;
  }

  const sumResult = sumAllProductsPrice(cart);

  return (
    <StyledTotalCart>
      <div className="totalPrice">
        <h2>Total</h2>
        <p>
          {sumResult.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <button onClick={removeAllProducts}>Remover todos</button>
    </StyledTotalCart>
  );
}
