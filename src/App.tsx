import { MoreClient } from "./components/MoreClient";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { MultiProtocol } from "./components/MultiProtocol";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
// import { Schedule } from "./components/Schedule";
import { Partner } from "./components/Partner";
import { ClientCaseStudies } from "./components/ClientCaseStudies";
import "./App.css";
// import { Cta } from "./components/Cta";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <ClientCaseStudies />
      <MultiProtocol />
      <Partner />
      <MoreClient />
      {/* <Schedule /> */}
      {/* <Cta /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
