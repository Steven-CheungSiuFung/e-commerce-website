import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../../store/categories/categories.selector";

import ProductCard from "../../product-card/product-card.component";
import Spinner from "../../spinner/spinner.compoenet";
import {
  ProductsCategoryContainer,
  ProductsCategoryTitle,
} from "./category.styles";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <ProductsCategoryTitle>{category.toUpperCase()}</ProductsCategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductsCategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductsCategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
