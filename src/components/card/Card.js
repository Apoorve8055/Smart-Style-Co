import { IoHeart } from "react-icons/io5";
import "./Card.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, favoriteProduct } from "../../store/productSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoriteProductList = useSelector(
    (state) => state.shopping.favoriteProductList
  );
  const isFavorite = favoriteProductList.some((obj) => obj.id === item.id);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: item?.id,
        title: item?.title,
        img: item?.image,
        price: item?.price,
      })
    );
  };
  const handleAddToFavorite = () => {
    dispatch(
      favoriteProduct({
        id: item?.id,
        img: item?.image,
        price: item?.price,
      })
    );
  };
  return (
    <div className="product-card">
      <div
        className="product-card-img-wrapper"
        onClick={() => navigate(`/shop/product/${item.id}`)}
      >
        <img className="product-card-img" src={item?.image} />
      </div>
      <div className="product-card-details">
        <div
          className="product-card-title"
          onClick={() => navigate(`/shop/product/${item.id}`)}
        >
          {item?.title}
        </div>
        <div className="product-card-category-title">
          <div>{item?.category}</div>
          <div>$ {item?.price}</div>
        </div>
        <div className="product-card-action">
          <div className="product-card-addtocartbtn" onClick={handleAddToCart}>
            ADD TO BAG
          </div>
          <IoHeart
            className={`product-card-like ${isFavorite && "liked"}`}
            onClick={handleAddToFavorite}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
