import "./App.css";
import Landing from "./components/UI/Landing";
import Navbar from "./components/UI/Navbar";
import QuoteForm from "./components/UI/QuoteForm";
import Footer from "./components/UI/Footer";
import React, { Fragment } from "react";
import FAQ from "./components/UI/FAQ";
import { useDetectDeviceSize } from "./hooks/useDetectIsMobileView";

function App() {
  const { isMobileView } = useDetectDeviceSize();

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Landing />
        <div className="inner-container">
          <div className="sections">
            <QuoteForm />
            <FAQ />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </Fragment>
  );
}

export default App;
