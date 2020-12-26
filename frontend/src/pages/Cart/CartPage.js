import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "../../actions/cartActions";

const CartPage = ({ history, location, match: { params } }) => {
  const productId = params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const goToCheckOut = () => {
    history.push("/login?redirect=shipping");
  };

  useEffect(() => {
    if (productId) {
      dispatch(addItemToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <>
      {cartItems.length === 0 ? (
        <>
          <p>Your cart is empty</p>
          <Link to="/">Go back</Link>
        </>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-items" key={item.id}>
              <img
                style={{ width: "200px", height: "200px" }}
                src={item.image}
                alt={item.name}
              />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <select
                value={item.qty}
                style={{ marginLeft: "10px" }}
                onChange={(e) =>
                  dispatch(addItemToCart(item.id, Number(e.target.value)))
                }
              >
                {[...Array(item.countInStock).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => removeItem(item.id)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))}
          <div className="subtotal">
            <h3>
              Total {cartItems.reduce((acc, item) => acc + item.qty, 0)} item(s)
            </h3>
            <h4>
              ${" "}
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </h4>
            <button disabled={cartItems.length === 0} onClick={goToCheckOut}>
              Go To Payment
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CartPage;
