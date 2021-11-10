import Item from './Item';
import { CardGroup } from 'react-bootstrap';

const ItemList = ({items}) =>
        <div className="item-list">
            <h2 style={{margin:'2rem'}}>Productos</h2>
            <CardGroup>{items.map(it => <Item key={it.id} pictureUrl={it.pictureUrl} title={it.title} description={it.description} price={it.price}/>)}</CardGroup>
        </div>

export default ItemList;