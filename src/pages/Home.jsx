import React from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import FAQ from "../components/layout/FAQ";
import JoinWaitList from "../components/layout/JoinWaitList";
import Features from "../components/layout/Features/Features";
import Carousel from "../components/layout/Carousel";
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Features />
      <Carousel />
      <FAQ />
      <JoinWaitList />
      <Footer />
    </div>
  );
};

export default Home;
