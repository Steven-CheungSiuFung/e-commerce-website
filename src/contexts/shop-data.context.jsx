import { createContext } from "react";
import { useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setcategoriesMap] = useState({});
    const value = {categoriesMap,setcategoriesMap};

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setcategoriesMap(categoryMap);
        }
        getCategoryMap();
    }, [])

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}