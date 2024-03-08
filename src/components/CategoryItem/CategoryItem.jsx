import { Link } from "react-router-dom";

export default function CategoryItem({ itemName }) {
    return (
        <div className="category-item d-flex align-items-center justify-content-center">
            <Link to="/products">{itemName}</Link>
        </div>
    );
}
