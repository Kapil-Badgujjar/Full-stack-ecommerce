import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Category from "./components/Category/Category";
import Cart from "./components/Cart/Cart";
import NewsLetter from "./components/Footer/Newsletter/Newsletter";
import CheckoutPage from "./components/Cart/CheckoutPage";
import AppContext from "./utils/context";

import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <>
      <AppContext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<SocialCards />} /> */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
          </Routes>
          <NewsLetter />
          <Footer />
        </BrowserRouter>
      </AppContext>
    </>
  );
}

export default App;
