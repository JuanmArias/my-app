import React, {useState} from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

const ItemCount = (props) =>{
    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)

    const handleStock={
        sumaStock:()=>{
            if(stock===0){
                alert(`no hay mas stock`)
            } else {
                setUnidades(unidades+1)
                setStock(stock-1)
            }
        },
        restaStock:()=>{
            if(stock===0){
                alert(`no hay mas stock`)
            } else {
                setUnidades(unidades-1)
                setStock(stock+1)
            }
        },
    }

    return(
        <Container>
            <Row>
                <Row className="buttom-ItemCount">
                    <Col><button onClick={handleStock.restaStock}>-</button></Col>
                    <Col><p>{unidades}</p></Col>
                    <Col><button onClick={handleStock.sumaStock}>+</button></Col>
                </Row>
                <div>
                    <p>Stock Disponible {stock}</p>
                </div>
                <div>
                    <button onClick={()=>props.onAdd({unidades})}>agregar al carrito</button>
                </div>
            </Row>
        </Container>
    )

}

export default ItemCount;