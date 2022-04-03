import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";

import { CategoriesContext } from "../../../contexts/shop-data.context";

import "./category.styles.scss";
import ProductCard from "../../product-card/product-card.component";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h2 className="products-category-title">{category.toUpperCase()}</h2>
            <div className="products-category-container">
                {products && products.map(product =>
                    <ProductCard key={product.id} product={product} />
                )}
            </div>
        </Fragment>   
    )
}

export default Category;