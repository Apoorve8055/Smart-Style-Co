import { useState } from "react";
import "./Header.scss";
import { HiBars4, HiShoppingCart, HiXMark } from "react-icons/hi2";
const Header = () => {
  const [categories, setCategories] = useState([
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing",
  ]);
  const [menuToggler, setMenuToggler] = useState(false);

  const CategoriesNavList = () => {
    return (
      <nav className={`categories-nav-list ${menuToggler && "open-menu"}`}>
        <HiXMark
          className="x-icon"
          onClick={() => setMenuToggler(!menuToggler)}
        />
        {categories &&
          categories.map((item) => (
            <div className="categories-nav-listItem">{item}</div>
          ))}
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
        <div className="header-logo">Smart Style Co.</div>
        <div className="header-right">
          <CategoriesNavList />
          <HiShoppingCart className="cart-icon" />
        </div>
      </div>
    </header>
  );
};
export default Header;
