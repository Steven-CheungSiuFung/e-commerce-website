import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../../store/categories/categories.selector";


import ProductCard from "../../product-card/product-card.component";
import { ProductsCategoryContainer, ProductsCategoryTitle } from "./category.styles.jsx";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <ProductsCategoryTitle>{category.toUpperCase()}</ProductsCategoryTitle>
            <ProductsCategoryContainer>
                {products && products.map(product =>
                    <ProductCard key={product.id} product={product} />
                )}
            </ProductsCategoryContainer>
        </Fragment>   
    )
}

export default Category;