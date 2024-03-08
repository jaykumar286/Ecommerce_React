import "./ProductList.css";
import ProductImage from "../../assets/product.jpg";

export default function ProductList() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="product-list-title text-center">All Products</h2>
        <a href="" className="product-item text-decoration-none d-inline-block">
          <div className="product-list-box" id="productList">
            <div className="product-img">
              <img src={ProductImage} alt="" />
            </div>
            <div className="product-name text-center">Some Product</div>
            <div className="product-price text-center">1000</div>
          </div>
        </a>
      </div>
    </div>
  );
}


