import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState();

    const {title} = useParams();

    useEffect(() => {
        const getItems =  new Promise (resolve => {
            setTimeout(() => resolve(
                [
                    {id:0, title:'Lubricante', description: 'detalle de un lubricante', price: 200, pictureUrl: '../img/lubricante.jpg'},
                    {id:1, title:'Vibrador', description: 'detalle de un vibrador', price: 1800, pictureUrl: '../img/vibrador.jpg'},
                    {id:2, title:'Esposas', description: 'detalle de esposas', price: 700, pictureUrl: '../img/esposas.jpg'},
                    {id:3, title:'Estimulador', description: 'detalle de un estimulador', price: 10000, pictureUrl: '../img/estimulador.jpg'},
                    {id:4, title:'Plug', description: 'detalle del plug', price: 12000, pictureUrl: '../img/plug.jpg'}
                ]
            ), 2000);
        });

        getItems.then((res) => {
            setItem(res.find(it => (it.title === title)));
        //.catch(res => {alert('Error al tratar de renderizar los productos')})
        });
    }, [title]);

    return(
        <ItemDetail {...item} />
    )
}

export default ItemDetailContainer;