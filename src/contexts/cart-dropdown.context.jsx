import { createContext } from "react";
import { useState } from "react";

export const CartDropdownContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
})

export const CartDropdownProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen}

    return (
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    )
}