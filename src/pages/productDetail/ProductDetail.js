import { useNavigate } from "react-router-dom";
import "./ProductDetail.scss";
const ProductDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="product-details-page">
      <div className="shop-breadcrumbs">
        <div onClick={() => navigate("/")}>Home</div> /
        <div onClick={() => navigate("/Shop")}> SHOP</div>
        {/* <div className="bold" onClick={() => navigate(`/Shop/${category}`)}>
          {category && ` / ${category.toUpperCase()}`}
        </div> */}
      </div>
      <div>
        <div>Product Image</div>
        <div>Product Deatils</div>
      </div>
    </div>
  );
};
export default ProductDetail;
