import { WatchVideo } from "./components/WatchVideo";
import { MoreClient } from "./components/MoreClient";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { MultiProtocol } from "./components/MultiProtocol";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Schedule } from "./components/Schedule";
import { Partner } from "./components/Partner";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <About />
      {/* <Sponsors /> */}
      <WatchVideo />
      <MultiProtocol />
      <Partner />
      <MoreClient />
      <Schedule />
      {/* <Cta /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      {/* <FAQ />s */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
