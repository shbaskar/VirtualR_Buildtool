import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import WorkSection from "./components/workSection";



function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-16 px-6">
        <Hero />
        <Feature/>
        <WorkSection/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
      </div>
    </>

  );
}

export default App;
