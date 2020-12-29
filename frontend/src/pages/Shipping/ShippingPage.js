import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addShippingAddress } from "../../actions/cartActions";

const ShippingPage = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [city, setCity] = useState(shippingAddress.city);

  const dispatch = useDispatch();

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    dispatch(addShippingAddress({ address, postalCode, country, city }));
    history.push("/payment");
  };

  return (
    <div>
      <form onSubmit={handleShippingSubmit}>
        <input
          type="text"
          value={address}
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          value={postalCode}
          placeholder="Postal Code"
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <input
          type="text"
          value={city}
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          value={country}
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShippingPage;
