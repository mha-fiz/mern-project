import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/Home/HomePage";
import CartPage from "./pages/Cart/CartPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
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
        <Route path="/products/:category/:id" component={ProductDetails} />
        <Route path="/cart/:id?" exact component={CartPage} />
      </main>
      <Footer />
    </>
  );
}

export default App;
