import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/Home/HomePage";
import CartPage from "./pages/Cart/CartPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import ShippingPage from "./pages/Shipping/ShippingPage";
import PaymentPage from "./pages/Payment/PaymentPage";
import OrderOverview from "./pages/OrderOverview/OrderOverview";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "80vh",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/profile" component={ProfilePage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/cart/:id?" exact component={CartPage} />
        <Route path="/shipping" exact component={ShippingPage} />
        <Route path="/payment" exact component={PaymentPage} />
        <Route path="/orderoverview" exact component={OrderOverview} />
        <Route path="/orders/:id" exact component={OrderDetails} />
      </main>
      <Footer />
    </>
  );
}

export default App;
