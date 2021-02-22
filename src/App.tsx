import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import NaBarMenus from "./components/NavBarMenus";
import MainHeader from "./components/MainHeader";
import Banner from "./components/Banner";
import OfferItems from "./components/OfferItems";

function App() {
  return (
    <>
      <NavBar />
      <NaBarMenus />
      <MainHeader />
      <Banner />
      <OfferItems />
    </>
  );
}

export default App;
