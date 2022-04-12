import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Features from "./Features";
import DetailedFeatures from "./DetailedFeatures";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Features /> */}
      <DetailedFeatures />
      <Footer />
    </div>
  );
}

export default App;
