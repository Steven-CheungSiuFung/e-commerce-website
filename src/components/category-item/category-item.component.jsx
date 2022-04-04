import { useNavigate } from "react-router-dom";

import { BackgroundImage, Body, CategoryContainer } from "./category-item.styles.jsx";

const CategoryItem = ({category}) => {
    const {title, imageUrl, route} = category;
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
    )
}

export default CategoryItem;