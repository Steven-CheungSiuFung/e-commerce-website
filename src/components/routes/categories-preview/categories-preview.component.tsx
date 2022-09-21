import { useSelector } from "react-redux";

import { selectCategoriesMap, selectCategoriesIsLoading } from "../../../store/categories/categories.selector";

import CategoryPreview from "../../category-preview/category-preview.component";

import { CategoriesPreviewContainer } from "./categories-preview.styles";
import Spinner from "../../spinner/spinner.compoenet";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    return (
        <CategoriesPreviewContainer>
            { isLoading ? 
                <Spinner /> : 
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }
        </CategoriesPreviewContainer>
    )
  }

export default CategoriesPreview;