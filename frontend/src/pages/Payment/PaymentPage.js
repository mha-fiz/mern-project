import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from "../../actions/cartActions";

const ShippingPage = ({ history }) => {
  const [payment, setPayment] = useState("Paypal");
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const dispatch = useDispatch();

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(payment));
    history.push("/orderoverview");
  };

  return (
    <div>
      <form onSubmit={handleShippingSubmit}>
        <input
          type="radio"
          checked
          id="paypal"
          value={payment}
          name="paymentMethod"
          onChange={(e) => setPayment(e.target.value)}
        />
        <>Paypal</>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShippingPage;
