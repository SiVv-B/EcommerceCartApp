import React, {useContext} from 'react'
import  Button  from 'react-bootstrap/Button'
import { cartContext } from '../CartContext'
import { getProductData } from '../ProductStore'

function CartProduct({id, quantity}) {
    const cart= useContext(cartContext)
const productData = getProductData(id)

  return (
    <>
    <h3> {productData.title}</h3>
    <p>total : {quantity} </p>
    <p>${(quantity * productData.price).toFixed(2)} </p>
    <Button size='sm' onClick={()=>cart.deleteFromCart(id)}>Remove </Button>
    <hr></hr>
    </>
  )
}

export default CartProduct