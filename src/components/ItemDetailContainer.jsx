import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import { Container } from 'react-bootstrap';
import db from '../firebase/firebase';
import { collection, getDocs } from '@firebase/firestore';

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const {title} = useParams();

    useEffect(() => {
        const getItems = collection(db, 'items');
        
        getDocs(getItems).then((res) => {
            const result = res.docs.map( doc => {
                return {id: doc.id, ...doc.data()};
                
            });
            setItem(result.find(res => res.title  === title))
        })
    }, [title]);

    return(
        <>
            <ItemDetail key={item.id} id={item.id} pictureUrl={item.pictureUrl} title={item.title} description={item.description} price={item.price} item={item} stock={item.stock}/>        </>
    );
}

export default ItemDetailContainer;