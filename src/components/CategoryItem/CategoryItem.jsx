import { Link } from "react-router-dom";

export default function CategoryItem({ itemName,filter='' }) {
    
    const redirectURL = `/products?category=${filter}`

    return (
        <div className="category-item d-flex align-items-center justify-content-center">
            <Link to={redirectURL}>{itemName}</Link>
        </div>
    );
}
