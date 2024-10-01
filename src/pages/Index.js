import { useRef } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

//Auth
import Login from '../pages/Login';
import Registration from '../pages/Registration';

//layouts
import Header from "./../layouts/Header";
import Footer from "./../layouts/Footer";
import ScrollToTop from "./../layouts/ScrollToTop";


import AboutUs from "./AboutUs";
import Team from "./Team";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Schedule from "./Schedule";
import ErrorPage from "./ErrorPage";
import UnderConstruction from "./UnderConstruction";
import ComingSoon from "./ComingSoon";
import Portfolio from "./Portfolio";
import PortfolioDetails from "./PortfolioDetails";
import Services from "./Services";
import Cart from "./Cart";
import BlogGrid from "./BlogGrid";
import BlogLargeSidebar from "./BlogLargeSidebar";
import BlogListSidebar from "./BlogListSidebar";
import BlogDetail from "./BlogDetail";
import Appointment from "./Appointment";
import WeightCalculator from "./WeightCalculator";
import ContactUs from "./ContactUs";
import Home3 from "./Home3";
import Classes from "./Classes";
import Profile from "./Profile";
import UserDetails from "./UserDetails";
import PaymentSuccessPage from "./PaymentSuccessPage";
import PaymentFailedPage from './PaymentFailedPage';

function Index() {
  const basename = "";
  const scrollTopBtn = useRef(null);

  window.onscroll = () => {
    window.scrollY > 650
      ? scrollTopBtn?.current.setAttribute("style", "display:block")
      : scrollTopBtn?.current.setAttribute("style", "display:none");
  };
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/error-404" exact element={<ErrorPage />} />
        <Route path="/under-maintenance" exact element={<UnderConstruction />} />
        <Route path="/appointment" exact element={<Appointment />} />
        <Route path="/coming-soon" exact element={<ComingSoon />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/page-register" exact element={<Registration />} />
        <Route element={<MainLayout />}>
          <Route path="/" exact element={<Home3 />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/pricing" exact element={<Pricing />} />
          <Route path="/schedule" exact element={<Schedule />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route
            path="/portfolio-details"
            exact
            element={<PortfolioDetails />}
          />
          <Route path="/products" exact element={<Services />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/classes" exact element={<Classes />} />
          <Route path="/Cart" exact element={<Cart />} />
          <Route path="/user-details" exact element={<UserDetails />} />
          <Route path="/payment-success" exact element={<PaymentSuccessPage />} />
          <Route path="/payment-failed" exact element={<PaymentFailedPage />} />
          <Route path="/blog-grid" exact element={<BlogGrid />} />
          <Route
            path="/blog-large-sidebar"
            exact
            element={<BlogLargeSidebar />}
          />
          <Route
            path="/blog-list-sidebar"
            exact
            element={<BlogListSidebar />}
          />
          <Route path="/blog-details/:blogId" exact element={<BlogDetail />} />
          <Route
            path="/weight-calculator"
            exact
            element={<WeightCalculator />}
          />
          <Route path="/contact-us" exact element={<ContactUs />} />
        </Route>
        {/* <Route element={<MainLayout2 />}>
          <Route path="/home-2" exact element={<Home />} />
        </Route>
        <Route element={<MainLayout3 />}>
          <Route path="/home-3" exact element={<Home />} />
        </Route> */}
      </Routes>
      {/* <Switcher /> */}
      <ScrollToTop />
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        ref={scrollTopBtn}
        className="scroltop icon-up"
        type="button"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </BrowserRouter>
  );
}

function MainLayout() {
  return (
    <div className="page-wraper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Index;
