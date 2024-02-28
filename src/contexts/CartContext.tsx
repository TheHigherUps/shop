"use client"

import { createContext, useContext, useEffect, useState } from "react"

interface CartProps {
    items: string[]
    addItem: (item: string) => void
}
const defaultState: CartProps = {
    items: [],
    addItem: () => null,
}

const CartContext = createContext<CartProps>(defaultState)

function useCart() {
    const cart = useContext(CartContext)
    if (!cart) {
        throw new Error("Cart Context Provider Not Defined")
    }
    return cart
}

function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<string[]>(() => {
        const cartStorage = window.localStorage.getItem("cart")
        if (cartStorage) {
            return JSON.parse(cartStorage)
        } else {
            return []
        }
    })
    function addItem(item: string) {
        setItems((prevItems) => [...prevItems, item])
    }
    useEffect(() => {
        return updateStorage()
    }, [items])
    function updateStorage() {
        localStorage.setItem("cart", JSON.stringify(items))
    }
    const data = { items, addItem }
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export default CartProvider
export { useCart }
