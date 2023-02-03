import { CartCard } from "../Cart-Card";
import { TotalCart } from "../TotalCart";
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
        <div className="filled__cart">
          <ul>
            {cart.map((product) => {
              return (
                <CartCard
                  productCart={product}
                  cart={cart}
                  setcart={setcart}
                  key={product.id}
                />
              );
            })}
          </ul>

          <div className="line"></div>

          <TotalCart cart={cart} setCart={setcart} />
        </div>
      )}
    </StyledCart>
  );
}
