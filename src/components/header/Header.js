import { memo, useState } from "react";
import "./Header.scss";
import { HiBars4, HiShoppingCart, HiXMark } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { productCategoryList, shopping } = useSelector((state) => state);
  const [menuToggler, setMenuToggler] = useState(false);

  const CategoriesNavList = () => {
    return (
      <nav className={`categories-nav-list ${menuToggler && "open-menu"}`}>
        <HiXMark
          className="x-icon"
          onClick={() => setMenuToggler(!menuToggler)}
        />

        {productCategoryList &&
          productCategoryList.map((item) => (
            <div
              className="categories-nav-listItem"
              onClick={() => navigate(`shop/${item}`)}
            >
              {item}
            </div>
          ))}
        <div
          className="categories-nav-listItem"
          onClick={() => navigate(`/shop`)}
        >
          All Products
        </div>
      </nav>
    );
  };

  return (
    <header className="header">
      <div className="header-menu">
        <HiBars4
          className="menubar-icon"
          onClick={() => setMenuToggler(!menuToggler)}
        />
        <div className="header-logo" onClick={() => navigate("/")}>
          Smart Style Co.
        </div>
        <div className="header-right">
          <CategoriesNavList />
          <div
            className="header-cart-wrapper"
            onClick={() => navigate("/checkout")}
          >
            <HiShoppingCart className="cart-icon" />
            <div className="count">{shopping.totalNumberofProduct}</div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default memo(Header);
