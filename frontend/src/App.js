import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/Home/HomePage';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: '80vh',
          // backgroundColor: '#D8E2DC',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Route path="/" component={HomePage} exact />
        <Route path="/products/:category/:id" component={ProductDetails} />
      </main>
      <Footer />
    </>
  );
}

export default App;
