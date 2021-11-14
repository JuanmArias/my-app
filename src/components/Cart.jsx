import React, {useContext} from "react";
import { Context } from "../context/CartContext";

const Cart = () => {

    const {cart, unidades, total} = useContext(Context)
    
    return(
        <p>el total del carrito es {total} y tenes {unidades} </p>
    )
}

export default Cart;