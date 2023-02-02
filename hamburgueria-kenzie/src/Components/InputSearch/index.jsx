import { FormContainer } from "./style";
import { Button } from "../Button";
import { toast } from "react-toastify";

export function InputSearch({
  input,
  setInput,
  products,
  setFilteredProducts,
  filteredProducts,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    if (input !== "") {
      const filteredList = products.filter((product) => {
        if (
          product.name.toLowerCase().includes(input.toLowerCase()) ||
          product.category.toLowerCase().includes(input.toLowerCase())
        ) {
          return product;
        }
      });

      if (filteredList.length === 0) {
        toast.error("Não foi possível encontrar os produtos");
      }

      setFilteredProducts(filteredList);
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit" buttonTitle={"Adicionar"} />
    </FormContainer>
  );
}
