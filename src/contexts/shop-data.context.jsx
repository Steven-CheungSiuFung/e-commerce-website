import { createContext } from "react";
import { useState } from "react";

import ShopData from "../shop-data.json"

export const ProductsContext = createContext({
    products: [],
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(ShopData);
    const value = {products,setProducts};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}