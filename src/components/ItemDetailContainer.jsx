import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [itemsDetail, setItems] = useState([]);

    const getItems = () => new Promise (resolve => {
            setTimeout(() => resolve(
                [
                    {id:0, title:'Lubricante', description: 'detalle de un lubricante', price: 200, pictureUrl: 'img/lubricante.jpg'},
                    {id:1, title:'Vibrador', description: 'detalle de un vibrador', price: 1800, pictureUrl: 'img/vibrador.jpg'},
                    {id:2, title:'Esposas', description: 'detalle de esposas', price: 700, pictureUrl: 'img/esposas.jpg'},
                    {id:3, title:'Estimulador', description: 'detalle de un estimulador', price: 10000, pictureUrl: 'img/estimulador.jpg'},
                    {id:4, title:'Plug', description: 'detalle del plug', price: 12000, pictureUrl: 'img/plug.jpg'}
                ]
            ), 2000);
        });

        const ItemList = ({items}) => 
        <div className="item-list">
            {items.map(it => <ItemDetail key={it.id} pictureUrl={it.pictureUrl} title={it.title} description={it.description} price={it.price}/>)}
        </div>

    useEffect(() => {
        getItems().then(res => setItems(res))
        .catch(res => {alert('Error al tratar de renderizar los productos')})
    }, []);

    return (
        <>
            <ItemList items={itemsDetail}/>
        </>
    );
}

export default ItemDetailContainer;