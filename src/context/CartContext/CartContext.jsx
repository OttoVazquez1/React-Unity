import { createContext, useContext, useState } from "react";



const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}){
    const [cart, setCart] = useState([])
  
    

    
    
    
    
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
        const newCart = cart.filter(producto => producto.id =! id)
        
        setCart(newCart)
    }
    
    const RemoveCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            RemoveCart,
            eliminateFromCart
            
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider