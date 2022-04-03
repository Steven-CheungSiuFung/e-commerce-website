import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../../contexts/shop-data.context";

import ProductCard from "../../product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext)
    console.log(categoriesMap);

    

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => 
                <Fragment>
                    <h2>{title.toUpperCase()}</h2>
                    <div className="categories-container">
                        {categoriesMap[title].map((product) => 
                            <ProductCard key={product.id} product={product} />
                        )}
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
  }

export default Shop;