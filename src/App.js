import "./App.css";
import Landing from "./components/UI/Landing";
import Navbar from "./components/UI/Navbar";
import QuoteForm from "./components/UI/QuoteForm";
import Footer from "./components/UI/Footer";
import React, { Fragment } from "react";
import FAQ from "./components/UI/FAQ";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <div className="container">
        <QuoteForm />
        <FAQ />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
