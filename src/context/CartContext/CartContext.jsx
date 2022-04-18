import { createContext, useContext, useEffect, useState } from "react";



const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}){
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState()

    useEffect(() => {
        var t = 0
        const totals = cart.map( p => p.price * p.cantidad)
        totals.map( p => t = t + p)
        setTotal(t)
        const cartQuantity = cart.length
        setQuantity(cartQuantity)
    }, [cart])
    
    

    function isInCart(id){

        let result = cart.find(p => p.id === id )
        if(result === undefined){
            return false
        }else{
            return true
        }
    }
    

    const addToCart = (producto, id, qty) => {
        if (isInCart(id)){
          
            const oldProduct = cart.find(p => p.id === id)
           
            const newQuantity = oldProduct.cantidad + qty           
            
            const newProduct = { id: oldProduct.id, name: oldProduct.name, foto: oldProduct.foto, price: oldProduct.price, cantidad: newQuantity}
            
            const cartWithoutOld = cart.filter(producto => producto.id =! id)
            
            const cartWithNew = [...cartWithoutOld, newProduct]
            
            setCart(cartWithNew)            
        } else {
           
            const newItem = { id: producto.id, name: producto.name, foto: producto.foto, price: producto.price, cantidad: qty }
            setCart([...cart, newItem]) 
        }
    }

    const eliminateFromCart = (id) => {
        const newCart = [...cart];
        let index = newCart.findIndex(el => el.id === id);
        
        newCart.splice( index, 1 );

        setCart([...newCart]);
    }
    
    const RemoveCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            quantity,
            total,
            addToCart,
            RemoveCart,
            eliminateFromCart
            
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider