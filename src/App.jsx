import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import HowItHelps from "./components/howItHelps/howItHelps";
import Uses from "./components/uses/uses";
import Trust from "./components/trust/trust";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero/>
      <HowItHelps/>
      <Uses/>
      <Trust/>
      <Footer/>
    </main>
  );
};

export default App;
