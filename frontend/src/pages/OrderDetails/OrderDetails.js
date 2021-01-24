import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetails, payOrder } from "../../actions/orderActions";
import { PAY_ORDER_RESET } from "../../constant/orderConstant";
import Spinner from "../../components/spinner/Spinner";
import { PayPalButton } from "react-paypal-button-v2";

const OrderDetails = ({ match }) => {
  const orderId = match.params.id;

  const [isPaypalLoaded, setIsPaypalLoaded] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, isLoading, errorMessage } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);

  const dispatch = useDispatch();

  const paymentSubmit = (response) => {
    const paypalPaymentDetails = {
      id: response.id,
      status: response.status,
      update_time: response.update_time,
      payer_email: response.payer.email_address,
    };

    console.log(paypalPaymentDetails);
    dispatch(payOrder(orderId, paypalPaymentDetails));
  };

  if (!isLoading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const addScript = document.createElement("script");
      addScript.type = "text/javascript";
      addScript.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      addScript.async = true;
      addScript.onload = () => setIsPaypalLoaded(true);
      document.body.appendChild(addScript);
    };

    if (!order || orderPay.success) {
      dispatch({ type: PAY_ORDER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setIsPaypalLoaded(true);
      }
    }
  }, [dispatch, orderId, order, orderPay.success]);

  return isLoading ? (
    <Spinner />
  ) : errorMessage ? (
    <h2>{errorMessage}</h2>
  ) : (
    <div>
      <h2>Order {order._id}</h2>
      <div className="shipping-details">
        <h2>Shipping</h2>
        <p>Name: {order.user.name}</p>
        <p>Email: {order.user.email}</p>
        <p>
          Address: {order.shippingAddress.address},{" "}
          {order.shippingAddress.postalCode}, {order.shippingAddress.city},{" "}
          {order.shippingAddress.country}{" "}
        </p>
        {order.isDelivered ? (
          <p style={{ backgroundColor: "green" }}>
            {" "}
            Delivered at {order.paidAt}
          </p>
        ) : (
          <p style={{ backgroundColor: "red" }}>Not Delivered</p>
        )}
      </div>
      <div className="payment-details">
        <h2>Payment</h2>
        <p>Method: {order.paymentMethod}</p>
        {order.isPaid ? (
          <p style={{ backgroundColor: "green" }}> Paid at {order.paidAt}</p>
        ) : (
          <p style={{ backgroundColor: "red" }}>Not Paid</p>
        )}
      </div>
      <div className="order-details">
        {order.orderItems.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} />
            <p>
              {item.name} || {item.qty} x {item.price} = {item.qty * item.price}
            </p>
          </div>
        ))}
      </div>
      <div className="price-details">
        <p>Item(s) price: $ {order.totalPrice} </p>
        <p>Tax: $ {order.taxPrice}</p>
        <p>Shipping: $ {order.shippingPrice} </p>
        <p>Total Price:$ {order.totalPrice}</p>
      </div>
      {!order.isPaid && (
        <div>
          {orderPay.isLoading && <Spinner />}
          {!isPaypalLoaded ? (
            <Spinner />
          ) : (
            <PayPalButton amount={order.totalPrice} onSuccess={paymentSubmit} />
          )}
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
