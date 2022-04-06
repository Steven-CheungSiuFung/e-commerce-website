import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../../store/categories/categories.selector";

import CategoryPreview from "../../category-preview/category-preview.component";

import { CategoriesPreviewContainer } from "./categories-preview.styles";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

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