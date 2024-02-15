import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Orderplacedpage = React.lazy(() => import("pages/Orderplacedpage"));
const TC = React.lazy(() => import("pages/TC"));
const Returnrefund = React.lazy(() => import("pages/Returnrefund"));
const Pricacypolicy = React.lazy(() => import("pages/Pricacypolicy"));
const Useraccount = React.lazy(() => import("pages/Useraccount"));
const Payment = React.lazy(() => import("pages/Payment"));
const Contactus = React.lazy(() => import("pages/Contactus"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Cart = React.lazy(() => import("pages/Cart"));
const ShopPage = React.lazy(() => import("pages/ShopPage"));
const Product = React.lazy(() => import("pages/Product"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/product" element={<Product />} />
          <Route path="/shoppage" element={<ShopPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/useraccount" element={<Useraccount />} />
          <Route path="/pricacypolicy" element={<Pricacypolicy />} />
          <Route path="/returnrefund" element={<Returnrefund />} />
          <Route path="/tc" element={<TC />} />
          <Route path="/orderplacedpage" element={<Orderplacedpage />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
