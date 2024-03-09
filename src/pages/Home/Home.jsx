import "./Home.css";

import CategoryItem from "../../components/CategoryItem/CategoryItem";
import useCategories from "../../hooks/useCategories";

export default function Home() {
  const categoryList = useCategories();

  return (
    <div className="container">
      <div className="container welcome-wrapper">
        <div className="row">
          <h2 className="home-title text-center">Welcome to ShopCart</h2>
          <div
            className="category-list d-flex justify-content-between align-items-center"
            id="categoryList"
          >
            <CategoryItem itemName={"All Product"} />

            {categoryList.length>0 &&
              categoryList.map((category, index) => (
                <CategoryItem
                  key={index}
                  itemName={category}
                  filter={category}
                />
              ))}
          </div>
          <div className="category-title text-center">
            Choose Category for Shopping
          </div>
        </div>
      </div>
    </div>
  );
}
