import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList';
import  data  from './data/data';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const getItems = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 10);
        });

        getItems.then((data) => {
            setProductos(data)
            setCargando(false)
        });
    }, []);

    return (
        <>
            <Container fluid>{cargando ? <h2 className="text-center">Cargando productos...</h2> : <ItemList productos={productos}/>}</Container>
        </>
    );
}

export default ItemListContainer;