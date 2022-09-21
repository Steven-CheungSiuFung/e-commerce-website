import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { DirectoryCategory } from "../categories-container/categories-container.component.js";

import {
  BackgroundImage,
  Body,
  CategoryContainer,
} from "./category-item.styles";

type CategoryItemProps = {
  category: DirectoryCategory;
};

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default CategoryItem;
