import React, {useContext} from "react";
import { Context } from "../context/CartContext";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import CartItem from "./CartItem";


const Cart = () => {

    const {clear, cart, unidades, total} = useContext(Context)
    console.log(cart)

    return(
        <>
        <Container>
            <h3>Carrito de Compras</h3>
            <p>Tienes {unidades} items en el Carrito.</p>
        </Container>
    
        {cart.map(e => {
            return <CartItem
                    key={e.id}
                    pictureUrl={e.pictureUrl}
                    title={e.title}
                    price={e.price}
                />
         
        })}
        <Col><Button  onClick={() => clear()}>Limpiar carrito</Button></Col>
        <Container className="carroTotal">
            <Col>
                <Row>
                    <h5>Carrito Total: $ {total}</h5>
                </Row>
                <Row>
                    <Button>Comprar</Button>
                </Row>
            </Col>
        </Container>
    </>)
   
}

export default Cart;