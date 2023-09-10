import { useContext } from "react";
import { Cards } from "../components/Cards";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";


export const ShoppingPages = () => {
  const { products } = useContext(ProductsContext);
  const {addPurchase, deletePurchase} = useContext(CartContext)

  const handleAdd = (purchase) => {
    addPurchase(purchase)
  }
  const handleDelete = (id) => {
    deletePurchase(id)
  }
  

  return (
    <>
      <h1>Compras: </h1>
      <hr />

      {products.map((product) => (
         
          <Cards key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            handleAdd={() => handleAdd(product)}
            handleDelete={() => handleDelete(product.id)}
          ></Cards>
        
      ))}
    </>
  );
};
