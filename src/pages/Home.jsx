import React from "react";
import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";

import WelcomeSection from "../components/WelcomeSection";
import ClientsShowcase from "../components/ClientsShowcase";
// import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ProductsSection />

      {/* <Gallery/> */}
      <ClientsShowcase />
    </>
  );
};

export default Home;
