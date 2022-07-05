import React from "react";
import { MainPageStyle } from "./style";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// PAGES
import Homepage from "../homepage";
import Navbar from "../../components/navbar";
// import Footer from "../../components/footer";
import AboutPage from "../aboutPage";
import Products from "../ProductsPage/products";
import Footer from "../../components/footer";
function Mainpage() {
  return (
    <MainPageStyle>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/product" element={<Products />}></Route>
          {/* <Route path="/contact" element={}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainPageStyle>
  );
}

export default Mainpage;
