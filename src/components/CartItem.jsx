import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'

const CartItem = ({ id, pictureUrl, title, price}) => {

  return (
  <>
        <React.Fragment>
            <Row key={id}>
                <Col><img src={pictureUrl} alt="..." width="100%" /></Col>
                <Col><h5>{title}</h5></Col>
                <Col><h5>${price}</h5></Col>
                <Col>
                    <Row className="buttom-ItemCount">
                        <Col><button>-</button></Col>
                        <Col><p></p></Col>
                        <Col><button>+</button></Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
        
    
</>)
}

export default CartItem;