import { HeaderContainer } from "./style";
import { InputSearch } from "../InputSearch";

export function Header({ input, setInput, products, setFilteredProducts }) {
  return (
    <HeaderContainer>
      <div className="header__container--div">
        <h1>
          Burguer<span>Kenzie</span>
        </h1>
        <InputSearch
          input={input}
          setInput={setInput}
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
    </HeaderContainer>
  );
}
