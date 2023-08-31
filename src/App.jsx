import "./App.css";
import AboutUs from "./components/HostingClassic/AboutUs";
import Faq from "./components/HostingClassic/Faq";
import Features from "./components/HostingClassic/Features";
import Footer from "./components/HostingClassic/Footer";
import Hero from "./components/HostingClassic/Hero";
import Hosting from "./components/HostingClassic/Hosting";
import Navbar from "./components/HostingClassic/Navbar";
import Performance from "./components/HostingClassic/Performance";
import Pricing from "./components/HostingClassic/Pricing";
import Solutions from "./components/HostingClassic/Solutions";
import Support from "./components/HostingClassic/Support";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <Performance />
      <Features />
      <Hosting />
      <Pricing />
      <Support />
      <AboutUs />
      {/* <Faq /> */}
      <Footer />
    </>
  );
}

export default App;
