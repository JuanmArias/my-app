import React, {useState} from "react";

const Context = React.createContext()

const CartFuncion = ({children}) =>{

    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const onAdd = (producto, cantidad) =>{
        const itemExiste = cart.find(item => item.title === producto.title)
        if(!itemExiste){
            setCart([...cart, {title:producto.title, price:producto.price, cantidad:producto.cantidad, subTotal:(producto.price*cantidad)}])
            setTotal(total+(producto.price*cantidad))
            setUnidades(unidades+1)
        } else {
            const cartAux=cart.map(item=>{
                if(item.title === producto.title){
                    item.cantidad+=cantidad
                    item.subTotal+=(producto.price*cantidad)
                }
                return item
            })
            setCart(cartAux)
            setTotal(total+(producto.price*cantidad))
        }
    }

    return <Context.Provider value={{cart, unidades, total, onAdd}}>
        {children}
    </Context.Provider>
}

export {CartFuncion, Context}