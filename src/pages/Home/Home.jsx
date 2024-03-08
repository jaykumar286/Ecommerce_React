import "./Home.css";
import CategoryItem from "../../components/CategoryItem/CategoryItem";

export default function Home() {
  return (
    <div className="container">
      <div className="container welcome-wrapper">
        <div className="row">
          <h2 className="home-title text-center">Welcome to ShopCart</h2>
          <div
            className="category-list d-flex justify-content-between align-items-center"
            id="categoryList"
          >
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </div>
          <div className="category-title text-center">
            Choose Category for Shopping
          </div>
        </div>
      </div>
    </div>
  );
}
