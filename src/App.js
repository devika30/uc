import React from "react";
import Navbar from "./sections/Navbar";
import MainSection from "./sections/Main";
import Services from "./sections/Services";
import FutureReady from "./sections/FutureReady";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <MainSection />
      <Services />
      <FutureReady />
    </React.Fragment>
  );
}

export default App;