import React, {useContext} from "react";
import { ShopCartContext } from "../context/CartContext";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import CartItem from "./CartItem";


const Cart = () => {

    const {cart, total, removeItem, changeQty, clear} = useContext(ShopCartContext)

    return(
        <>
        <Container>
            <Container>
                <h3>Carrito de Compras</h3>
            </Container>
            {cart.map(e => {
                return <CartItem
                        key={e.id}
                        pictureUrl={e.pictureUrl}
                        title={e.title}
                        price={e.price}
                        subTotal={e.subTotal}
                        removeItem={removeItem}
                        changeQty={changeQty}
                        cantidad={e.cantidad}
                    />
            
            })}
            <Col><Button  onClick={() => clear()}>Limpiar carrito</Button></Col>
            <Container className="carroTotal">
                <Col>
                    <Row>
                        <h5>Carrito Total: $ {total}</h5>
                    </Row>
                    <Row>
                    <div className='finish'>
                        <Link to={"/buying"} className="btn btn-primary col-lg-1 col-xl-1 finish-btn">Finalizar compra</Link>
                    </div>
                    </Row>
                </Col>
            </Container>
        </Container>
    </>)
   
}

export default Cart;