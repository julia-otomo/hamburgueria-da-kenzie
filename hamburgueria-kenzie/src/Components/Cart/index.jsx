import { CartCard } from "../Cart-Card";
import { StyledCart } from "./style";

export function Cart({ cart, setcart }) {
  return (
    <StyledCart>
      <div className="cart__header">
        <h2>Carrinho de compras</h2>
      </div>

      {cart.length === 0 ? (
        <div className="empty__cart">
          <h2>Sua sacola está vazia</h2>
          <p>Adicione itens</p>
        </div>
      ) : (
        <ul>
          {cart.map((product) => {
            return (
              <CartCard productCart={product} cart={cart} setcart={setcart} />
            );
          })}
        </ul>
      )}
    </StyledCart>
  );
}
