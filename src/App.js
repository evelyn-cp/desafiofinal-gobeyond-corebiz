import React from "react";
import './App.css';

import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="main">
      <Header/>
      <Banner/>
      <Footer/>
    </main>
  );
}

export default App;
