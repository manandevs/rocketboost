import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import Review from "./components/review";
import Contact from "./components/contact";
function App() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto">
        <Navbar />
        <div className="px-6 py-4 md:px-14">
          <Hero />
          <Services />
          <Review />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
