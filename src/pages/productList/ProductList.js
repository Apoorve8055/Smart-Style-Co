import { useNavigate, useParams } from "react-router-dom";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaFilter } from "react-icons/fa";
import Select from "react-select";
import Rating from "react-rating";
import "./ProductList.scss";
import Card from "../../components/card/Card";
import fullStar from "../../assets/png/star-full.png";
import emptyStar from "../../assets/png/star-empty.png";

const priceRangePreSet = {
  "0To100": { title: "Under $100", active: false, range: [0, 100] },
  "100To300": { title: "$100 - $300", active: false, range: [100, 300] },
  "300To400": { title: "$300 - $400", active: false, range: [300, 400] },
  "400To500": { title: "$400 - $500", active: false, range: [400, 500] },
  "500ToAbove": {
    title: "Above $500",
    active: false,
    range: [500, Infinity],
  },
};

const ProductList = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const selectRef = useRef(null);
  const { productList, productCategoryList } = useSelector((state) => state);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [options, setOptions] = useState([]);
  const [rating, setRating] = useState(0);
  const [search, setSearch] = useState("");
  const [filterOpener, setFilterOpener] = useState(false);
  const [selectCategory, setSelectCategory] = useState();

  const [priceRange, setPriceRange] = useState(priceRangePreSet);

  const SVGIcon = (props) => (
    <svg className={props.className} pointerEvents="none">
      <use xlinkHref={props.href} />
    </svg>
  );

  const handlePriceRangeFilter = useCallback(
    (key) => {
      setPriceRange((prevPriceRange) => ({
        ...prevPriceRange,
        [key]: { ...prevPriceRange[key], active: !prevPriceRange[key].active },
      }));
    },
    [priceRange]
  );

  const isPriceInRange = useCallback(
    (price) => {
      for (const [, value] of Object.entries(priceRange)) {
        if (
          value.active &&
          price >= value.range[0] &&
          price <= value.range[1]
        ) {
          return true;
        }
      }
      return false;
    },
    [priceRange]
  );

  const resetFilter = () => {
    setRating(0);
    setPriceRange(priceRangePreSet);
    selectRef.current.setValue({
      value: "All Products",
      label: "All Products",
    });
  };

  useEffect(() => {
    setSelectCategory(category);
    let newFilteredProducts = productList;

    if (Object.values(priceRange).some((range) => range.active)) {
      newFilteredProducts = newFilteredProducts.filter((item) =>
        isPriceInRange(item.price)
      );
    }

    if (category && productCategoryList.includes(category.toLowerCase())) {
      newFilteredProducts = newFilteredProducts.filter(
        (item) => item.category === category.toLowerCase()
      );
    }

    if (rating) {
      console.log("Rating:", rating);
      newFilteredProducts = newFilteredProducts.filter(
        (item) => Math.round(item.rating.rate) === rating
      );
    }

    if (search) {
      console.log(search);
      newFilteredProducts = newFilteredProducts.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(newFilteredProducts);
    const newOptions = productCategoryList.map((item) => ({
      value: item.toLowerCase(),
      label: item,
    }));
    setOptions(newOptions);
  }, [
    category,
    productList,
    productCategoryList,
    isPriceInRange,
    priceRange,
    rating,
    search,
  ]);
  // console.log(productList);
  return (
    <div className="shop">
      <div className="shop-breadcrumbs">
        <div onClick={() => navigate("/")}>Home</div> /
        <div onClick={() => navigate("/Shop")}> SHOP</div>
        <div className="bold" onClick={() => navigate(`/Shop/${category}`)}>
          {category && ` / ${category.toUpperCase()}`}
        </div>
      </div>
      <div className="shop-container">
        <div className={`shop-filter ${filterOpener && "open-filter"}`}>
          <div className="shop-filter-container">
            <div className="shop-filter-heading">Search Products</div>
            <div className="shop-filter-search">
              <input
                type="text"
                placeholder="Search"
                className="search-bar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="shop-filter-container">
            <div className="shop-filter-heading">Categories</div>
            <Select
              ref={selectRef}
              className="shop-filter-select"
              options={options}
              value={options.find((option) => option.value === selectCategory)}
              onChange={(e) => {
                setSelectCategory(e.value);
                navigate(`/Shop/${e.value}`);
              }}
              placeholder="Select..."
            />
          </div>
          <div className="shop-filter-container">
            <div className="shop-filter-heading"> Price range</div>
            <ul className="shop-filter-checkbox-container">
              {priceRange &&
                Object.entries(priceRange)?.map(([key, value]) => (
                  <li key={key}>
                    <input
                      type="checkbox"
                      checked={value.active}
                      onClick={() => handlePriceRangeFilter(key)}
                    />
                    {value.title}
                  </li>
                ))}
            </ul>
          </div>
          <div className="shop-filter-container">
            <div className="shop-filter-heading">Rating </div>
            <Rating
              emptySymbol={<img src={emptyStar} className="icon" />}
              fullSymbol={<img src={fullStar} className="icon" />}
              initialRating={rating}
              onClick={(e) => setRating(e)}
            />

            <div className="shop-filter-rest-wrapper">
              <div className="shop-filter-rest" onClick={resetFilter}>
                Reset
              </div>
              <div
                className="shop-filter-close"
                onClick={() => setFilterOpener(!filterOpener)}
              >
                Close
              </div>
            </div>
          </div>
        </div>
        <div className="shop-items-grid">
          <div className="mobile-filter-wrapper">
            <div
              className="mobile-filter"
              onClick={() => setFilterOpener(!filterOpener)}
            >
              <FaFilter />
              <b>Filter</b>
            </div>
            <div className="mobile-filter">
              <b>Sort By</b>
            </div>
          </div>

          {filteredProducts &&
            filteredProducts.map((item) => <Card item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductList);
