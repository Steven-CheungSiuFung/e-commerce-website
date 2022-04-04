import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";

import { CategoriesContext } from "../../../contexts/shop-data.context";

import ProductCard from "../../product-card/product-card.component";
import { ProductsCategoryContainer, ProductsCategoryTitle } from "./category.styles.jsx";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
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