import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import Wishlist from "../pages/Wishlist";
import Dashboard from "../pages/Dashboard";
import AddProduct from "../pages/AddProduct";
import ProductDetails from "../pages/ProductDetails";
import Orders from "../pages/Orders";


function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<Cart />} />


<Route path="/checkout" element={<Checkout />} />

<Route path="/payment" element={<Payment />} />

<Route path="/wishlist" element={<Wishlist />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
       <Route path="/product/:id" element={<ProductDetails />} />
       <Route path="/orders" element={<Orders />} />
        

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;