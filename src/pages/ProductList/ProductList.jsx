import { useState, useEffect } from "react";
import axios from "axios";

// CSS import
import "./ProductList.css";

import { getAllProducts } from "../../apis/fakeStoreApis";
import ProductBox from "../../components/ProductBox/ProductBox";
import FilterProducts from "../../components/FilterProducts/FilterProducts";

function ProductList() {
  const [productList, setProductList] = useState([]);

  async function getProductList() {
    const response = await axios.get(getAllProducts());
    setProductList(response.data);
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2 className="product-list-title text-center">All Products</h2>
        <div className="product-list-wrapper d-flex flex-row">
          <FilterProducts />

          {/* list of products */}
          <div className="product-list-box" id="productList">
            {productList.length &&
              productList.map((product) => (
                <ProductBox
                  key={product.id}
                  productImage={product.image}
                  name={product.title}
                  price={product.price}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
