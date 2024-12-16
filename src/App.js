import * as React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>My New Homepage</h1>
        {/* You can add more sections here as you build out your Day 2 tasks */}
      </div>
    </>
  );
}

export default App;
