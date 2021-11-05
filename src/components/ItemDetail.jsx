import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const ItemDetail = ({pictureUrl, title, description, price }) => {
    return <>
            
                <Container>
                    <Row>
                        <Col>
                            <img src={pictureUrl} width="90%" alt="lubri" />
                        </Col>
                        <Col>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <h3>{price}</h3>
                        </Col>
                    </Row>
                </Container>
        
  </>;
}

export default ItemDetail;
  