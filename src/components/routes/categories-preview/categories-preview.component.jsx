import { useContext } from "react";
import { CategoriesContext } from "../../../contexts/shop-data.context";
import CategoryPreview from "../../category-preview/category-preview.component";


import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)
    console.log(categoriesMap);

    return (
        <div className="categories-preview-container">
           { Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products} />
                }  
            )}
        </div>
    )
  }

export default CategoriesPreview;