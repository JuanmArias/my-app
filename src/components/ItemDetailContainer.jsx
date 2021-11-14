import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import data from './data/data';
import { Container } from 'react-bootstrap';

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState()
    const [cargando, setCargando] = useState(true)
    const {title} = useParams();

    useEffect(() => {
        const getItems =  new Promise (resolve => {
            setTimeout(() => resolve(data), 10);
        });

        getItems.then((res) => {
            setItem(res.find(it => (it.title === title)));
            setCargando(false)
        //.catch(res => {alert('Error al tratar de renderizar los productos')})
        });
    }, [title]);

    return(

        <Container fluid>{cargando ? <h2 className="text-center">Cargando producto...</h2> : <ItemDetail {...item}/>}</Container>
    )
}

export default ItemDetailContainer;