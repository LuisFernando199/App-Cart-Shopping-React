import { CartContext } from "./CartContext";
import { useReducer } from "react";

const initialState = [];

export const ProviderCart = ({ children }) => {
  const shoppingReducer = (state, action) => {
    switch (action.type) {
      case "[CARRITO] Agregar Compra":
        return [...state, action.payload];
      case "[CARRITO] Aumentar Cantidad Compra":
        // Implementa la lógica para aumentar la cantidad de compra aquí.
        return state.map((purchase) => {
          const amt = purchase.amount + 1;
          if (purchase.id === action.payload) {
            return { ...purchase, amount: amt };
          }
          return purchase;
        });
      case "[CARRITO] Disminuir Cantidad Compra":
        // Implementa la lógica para disminuir la cantidad de compra aquí.
        return state.map((purchase) => {
          if (purchase.id === action.payload && purchase.amount > 1) {
            return { ...purchase, amount: purchase.amount - 1 };
          }
          return purchase;
        });
      case "[CARRITO] Eliminar Compra":
        return state.filter((purchase) => purchase.id !== action.payload);
      default:
        return state;
    }
  };

  const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState);

  const addPurchase = (purchase) => {
    purchase.amount = 1;
    const action = {
      type: "[CARRITO] Agregar Compra",
      payload: purchase,
    };
    dispatch(action);
  };

  const increasePurchase = (id) => {
    const action = {
      type: "[CARRITO] Aumentar Cantidad Compra",
      payload: id,
    };
    dispatch(action);
  };

  const decreasePurchase = (id) => {
    const action = {
      type: "[CARRITO] Disminuir Cantidad Compra",
      payload: id,
    };
    dispatch(action);
  };

  const deletePurchase = (id) => {
    const action = {
      type: "[CARRITO] Eliminar Compra",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CartContext.Provider
      value={{
        shoppingList,
        addPurchase,
        increasePurchase,
        decreasePurchase,
        deletePurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
