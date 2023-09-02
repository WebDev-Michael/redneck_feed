import "./App.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default function App(props) {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
