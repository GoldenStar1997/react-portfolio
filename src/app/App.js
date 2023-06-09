import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
// import withRouter from "../hooks/withRouter";
// import AppRoutes from "./routes";
// import Headermain from "../header";
import About from '../pages/about/index'
// import AnimatedCursor  from "../hooks/AnimatedCursor";
import "./App.css";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";

// function _ScrollToTop(props) {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return props.children;
// }
// const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Headermain /> */}
      <Home />
      <About />
      <Portfolio />
      <ContactUs />
    </Router>
  );
}
