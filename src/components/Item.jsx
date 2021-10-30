import { Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const Item = ({pictureUrl, title, description, price}) => {
    return<>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Button variant="primary">Agregar al Carrito</Button>
            </Card.Body>
            </Card>
    </>;
}

export default Item;