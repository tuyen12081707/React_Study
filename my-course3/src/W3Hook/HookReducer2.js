import React, { useReducer } from 'react'

const intialCart = [

]

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {

      let cartUpdate = [...state];
      let index = cartUpdate.findIndex(cart => cart.id === action.item.id);
      if (index !== -1) {
        cartUpdate[index].quantity += 1;
      } else {
        const itemCart = { ...action.item, quantity: 1 };
        cartUpdate.push(itemCart);

      }

      return cartUpdate;
    }
    case 'DELETE_TO_CART': {
      let cartDelete = [...state];
      let index = cartDelete.findIndex(cart => cart.id === action.item.id);
      console.log(index);
      if (index !== -1) {
        cartDelete.splice(index, 1)

      } else {
        return;
      }
      return cartDelete;
    }

    default:
  }

  return [...state]
}
let arrProduct = [
  { id: 1, name: 'Iphone Xs Max', price: 1000 },
  { id: 2, name: 'SamSung note 10', price: 200 },
  { id: 3, name: 'Glaxy', price: 1500 },
  { id: 4, name: 'Iphone 13', price: 7000 }


]
export default function HookReducer2(props) {
  let [cart, dispatch] = useReducer(cartReducer, intialCart);
  const addtocart = (itemclick) => {
    const action = {
      type: 'ADD_TO_CART',
      item: itemclick
    }
    dispatch(action);
  }
  const deletetocart = (item) => {
    const action = {
      type: 'DELETE_TO_CART',
      item: item
    }
    dispatch(action);
  }
  return (
    <div className='container mt-5'>
      <h3 className='text-center'>Gio Hang</h3>
      <div className='row'>

        {arrProduct.map((item, index) => {
          return <div className='col-3' key={index}>
            <div className="card" >
              <img className="card-img-top" src="https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg" alt="index" />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.price}</p>
                <button className='btn btn-success text-right' onClick={() => { addtocart(item) }}>Add to Cart</button>
              </div>
            </div>
          </div>
        })}

      </div>
      <table className="mt-5 table table-bordered container-fluid">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
              <td><button className='btn btn-danger' onClick={() => { deletetocart(item) }}>Delete</button></td>
            </tr>
          })}

        </tbody>
      </table>

    </div>
  )
}
