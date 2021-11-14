import Button from "@restart/ui/esm/Button";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const ItemDetail = ({pictureUrl, title, description, price }) => {
   
    return<>
           
                    <Container>
                        <hr />
                        <Row>
                            <Col>
                                <img src={pictureUrl} width="100%"  alt="..." />
                            </Col>
                            <Col className="text-center">
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <h3>{price}</h3>
                                <Button>Comprar</Button>
                            </Col>
                        </Row>
                    </Container>
    </>;   
}

export default ItemDetail;
  