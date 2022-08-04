import "./App.css";
import Landing from "./components/UI/Landing";
import Navbar from "./components/UI/Navbar";
import QuoteForm from "./components/UI/QuoteForm";
import React, { Fragment } from "react";
import FAQ from "./components/UI/FAQ";
import Info from "./components/UI/Info";
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
            <Info />
            <QuoteForm />
            <FAQ />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
