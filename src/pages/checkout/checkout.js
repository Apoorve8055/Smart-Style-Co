import { useDispatch, useSelector } from "react-redux";
import "./checkout.scss";
import { IoAdd, IoRemove } from "react-icons/io5";
import {
  addToCart,
  decrementProductFromCart,
  deleteFromCart,
} from "../../store/productSlice";

const Checkout = () => {
  const { cart, totalPrice } = useSelector((state) => state.shopping);
  const shopping = useSelector((state) => state.shopping);
  const dispatch = useDispatch();
  const incrementProductCount = (id, title, image, price) => {
    dispatch(
      addToCart({
        id: id,
        title: title,
        img: image,
        price: price,
      })
    );
  };

  console.log(shopping);
  return (
    <div className="checkout">
      <div className="checkout-cart">
        <div className="checkout-cart-heading">Shopping Cart</div>
        <hr className="hr" />
        <div className="checkout-cart-list">
          {cart.length === 0 && (
            <div className="empty">
              Shopping cart is empty, please add some products
            </div>
          )}
          {cart?.map(({ id, title, img, price, quantity }) => (
            <div className="checkout-cart-list-item">
              <div className="checkout-item-img-wrapper">
                <img src={img} className="checkout-item-img" />
              </div>

              <div className="checkout-item-details">
                <div className="checkout-item-name">{title}</div>

                <div className="checkout-item-action">
                  <div className="cart-qty-changer">
                    <IoRemove
                      className="box"
                      onClick={() =>
                        dispatch(
                          decrementProductFromCart({ id: id, price: price })
                        )
                      }
                    />
                    <div>{quantity}</div>
                    <IoAdd
                      className="box"
                      onClick={() =>
                        incrementProductCount(id, title, img, price)
                      }
                    />
                  </div>
                  <div
                    className="delete-btn"
                    onClick={() =>
                      dispatch(deleteFromCart({ id: id, price: price }))
                    }
                  >
                    Delete
                  </div>
                  <div className="checkout-product-price">$ {price}</div>
                </div>

                <div />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="checkout-order-summary">
        <div className="checkout-order-summary-title">Order Summary</div>
        <hr className="hr" />
        <div className="checkout-order-total">
          <div>Subtotal</div>
          <div>$ {totalPrice ? totalPrice.toFixed(2) : 0}</div>
        </div>
        <div className="checkout-order-total">
          <div>Estimated Shipping</div>
          <div>$ {totalPrice ? "15" : 0}</div>
        </div>
        <hr className="hr" />
        <div className="checkout-order-total">
          <div>Estimated Total</div>
          <div>$ {totalPrice ? (totalPrice + 15).toFixed(2) : 0}</div>
        </div>
        <div className="checkout-btn">Proceed To Checkout</div>
      </div>
    </div>
  );
};

export default Checkout;
