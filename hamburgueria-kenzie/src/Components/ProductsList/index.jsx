import { Card } from "../Card";
import { StyledProductsList } from "./style";

export function ProductsList({ newProductsList, setCart, cart }) {
  return (
    <StyledProductsList>
      {newProductsList.map((product) => {
        return (
          <Card
            newProductsList={newProductsList}
            product={product}
            setCart={setCart}
            cart={cart}
            key={product.id}
          />
        );
      })}
    </StyledProductsList>
  );
}
