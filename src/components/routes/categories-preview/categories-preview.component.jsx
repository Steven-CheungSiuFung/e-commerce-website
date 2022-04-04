import { useContext } from "react";
import { CategoriesContext } from "../../../contexts/shop-data.context";
import CategoryPreview from "../../category-preview/category-preview.component";

import { CategoriesPreviewContainer } from "./categories-preview.styles";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)
    console.log(categoriesMap);

    return (
        <CategoriesPreviewContainer>
           { Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products} />
                }  
            )}
        </CategoriesPreviewContainer>
    )
  }

export default CategoriesPreview;