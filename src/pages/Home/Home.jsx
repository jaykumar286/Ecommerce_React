import { useEffect, useState } from "react";
import axios from "axios";

import "./Home.css";

import CategoryItem from "../../components/CategoryItem/CategoryItem";
import {getAllCategories} from "../../apis/fakeStoreApis";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);

  async function getCategoryList() {
    const response = await axios.get(getAllCategories());
    setCategoryList(response.data);
  }

  useEffect(() => {
    getCategoryList();
  }, []);

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

            {categoryList.length &&
              categoryList.map((category, index) => (
                <CategoryItem key={index} itemName={category} />
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
