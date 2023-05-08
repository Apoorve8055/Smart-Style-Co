import { useNavigate, useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../store/productSliceThunks";
import "./ProductDetail.scss";
import { IoHeart } from "react-icons/io5";
import Select from "react-select";
import { addToCart, favoriteProduct } from "../../store/productSlice";

const options = Array.from({ length: 10 }, (_, i) => ({
  value: `${i + 1}`,
  label: `${i + 1}`,
}));

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productDetails } = useSelector((state) => state);
  const { favoriteProductList } = useSelector((state) => state.shopping);
  const isFavorite = favoriteProductList.some(
    (obj) => obj.id === productDetails.id
  );

  const [selectQty, setSelectQty] = useState(0);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: productDetails?.id,
        img: productDetails?.image,
        price: productDetails?.price,
        qty: selectQty,
      })
    );
  };
  const handleAddToFavorite = () => {
    dispatch(
      favoriteProduct({
        id: productDetails?.id,
        img: productDetails?.image,
        price: productDetails?.price,
      })
    );
  };
  return (
    <div className="product-details-page">
      <div className="shop-breadcrumbs">
        <div onClick={() => navigate("/")}>Home</div> /
        <div onClick={() => navigate("/Shop")}> SHOP</div> /
        <div onClick={() => navigate(`/Shop/${productDetails?.category}`)}>
          {productDetails?.category}
        </div>
        /<div className="bold">{productDetails?.title}</div>
      </div>
      <div className="product-details-wrapper">
        <div className="product-image-section">
          <ReactImageMagnify
            className="product-image"
            {...{
              smallImage: {
                alt: "Small image",
                src: productDetails?.image,
                width: 300,
                height: 400,
              },
              largeImage: {
                src: productDetails?.image,
                width: 1200,
                height: 1800,
              },
              isHintEnabled: true,
              shouldHideHintAfterFirstActivation: false,
              enlargedImagePosition: "over",
              enlargedImageContainerDimensions: {
                width: "150%",
                height: "100%",
              },
              hoverDelayInMs: 0,
              hoverOffDelayInMs: 0,
              pressDuration: 0,
            }}
          />
        </div>
        <div className="product-details-section-wrapper">
          <div className="product-details-section">
            <div className="product-details-title">{productDetails?.title}</div>
            <div className="product-details-category-price">
              <div>{productDetails?.category}</div>
              <div>$ {productDetails?.price}</div>
            </div>
            <div className="product-card-action">
              <Select
                className="product-qty"
                options={options}
                placeholder="QTY 1"
                onChange={(e) => setSelectQty(e.value)}
              />
              <div
                className="product-card-addtocartbtn"
                onClick={handleAddToCart}
              >
                ADD TO BAG
              </div>
              <IoHeart
                className={`product-card-like ${isFavorite && "liked"}`}
                onClick={handleAddToFavorite}
              />
            </div>

            <div className="product-details-heading">DETAILS</div>
            <div className="product-details">{productDetails?.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
