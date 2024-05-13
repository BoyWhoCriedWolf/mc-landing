import { MoreClient } from "./components/MoreClient";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { MultiProtocol } from "./components/MultiProtocol";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
// import { Schedule } from "./components/Schedule";
import { Partner } from "./components/Partner";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <MultiProtocol />
      <Partner />
      <MoreClient />
      {/* <Schedule /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
