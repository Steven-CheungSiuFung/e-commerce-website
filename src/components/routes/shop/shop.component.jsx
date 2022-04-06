import { Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../store/categories/categories.action";

import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";


const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray));
        }
        getCategoryMap();
    }, [dispatch])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
  }

export default Shop;