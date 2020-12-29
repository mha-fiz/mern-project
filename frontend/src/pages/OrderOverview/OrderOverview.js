import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../../actions/orderActions";

const OrderOverview = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod, cartItems } = cart;
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, errorMessage } = orderCreate;
  const dispatch = useDispatch();

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(
    cart.itemsPrice <= 500 ? 20 : cart.itemsPrice <= 1000 ? 15 : 5
  );
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const handleOrderOverView = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  useEffect(() => {
    if (success) {
      history.push(`/orders/${order._id}`);
    }
    //eslint-disable-next-line
  }, [history, success]);

  return (
    <div>
      <div className="shipping-overview">
        <h2>Shipping</h2>
        <p>
          Address: {shippingAddress.address}, {shippingAddress.postalCode},{" "}
          {shippingAddress.city}, {shippingAddress.country}{" "}
        </p>
      </div>
      <div className="payment-overview">
        <h2>Payment</h2>
        <p>Method: {paymentMethod}</p>
      </div>
      <div className="order-overview">
        {cartItems.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} />
            <p>
              {item.name} || {item.qty} x {item.price} = {item.qty * item.price}
            </p>
          </div>
        ))}
      </div>
      <div className="price-overview">
        <p>Item(s) price: $ {cart.totalPrice} </p>
        <p>Tax: $ {cart.taxPrice}</p>
        <p>Shipping: $ {cart.shippingPrice} </p>
        <p>Total Price:$ {cart.totalPrice}</p>
        <button disabled={cartItems.length === 0} onClick={handleOrderOverView}>
          Pay
        </button>
        {errorMessage && <h2 style={{ color: "red" }}>{errorMessage}</h2>}
      </div>
    </div>
  );
};

export default OrderOverview;
