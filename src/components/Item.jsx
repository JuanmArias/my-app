import { Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

const Item = ({pictureUrl, title, description, price}) => {
    return<>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Link to={`/itemDetail`} variant="primary">Ir al Producto</Link>
            </Card.Body>
            </Card>
    </>;
}

export default Item;