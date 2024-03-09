import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

// CSS import
import "./ProductList.css";

import { getAllProducts, getProductByCategory } from "../../apis/fakeStoreApis";
import ProductBox from "../../components/ProductBox/ProductBox";
import FilterProducts from "../../components/FilterProducts/FilterProducts";

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("category");

  async function getProductList() {
    const URL = query ? getProductByCategory(query) : getAllProducts();
    const response = await axios.get(URL);
    setProductList(response.data);
  }

  useEffect(() => {
    getProductList();
  }, [query]);

  return (
    <div className="container">
      <div className="row">
        <h2 className="product-list-title text-center">All Products</h2>
        <div className="product-list-wrapper d-flex flex-row">
          <FilterProducts />

          {/* list of products */}
          <div className="product-list-box" id="productList">
            {productList.length > 0 &&
              productList.map((product) => (
                <ProductBox
                  key={product.id}
                  productId={product.id}
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
