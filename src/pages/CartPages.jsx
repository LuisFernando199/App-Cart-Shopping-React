import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export const CartPages = () => {

const {shoppingList, increasePurchase, decreasePurchase, deletePurchase} = useContext(CartContext)


  const calcTotal = () => {
    return shoppingList.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2) 
  }
  const handlePrint = () => {

    print()
  }


  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {
      shoppingList.map(item => (
        <tr key={item.id}>
        <th scope="row">{item.title}</th>
        <td>{item.price}</td>
        <td>
          <button type="button" className="btn btn-outline-primary" onClick={() => decreasePurchase(item.id)}>-</button>
          <button type="button" className="btn btn-success">{item.amount}</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => increasePurchase(item.id)}>+</button>
        </td>
        <td><button type="button"
        className="btn btn-danger"
        onClick={() => deletePurchase(item.id)}
        >Eliminar</button></td>
      </tr>
    
      ))
    }
  <th><b>TOTAL: </b></th>
  <td></td>
  <td></td>
  <td>${calcTotal()}</td>
  <td></td>
  </tbody>
</table>
<div className='d-grid gap-2'>
<button className='btn btn-success' 
      onClick={handlePrint}
      disabled={shoppingList < 1}
  >Comprar</button>
</div>
</>
  )
}
