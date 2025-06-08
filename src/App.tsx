import "./App.css";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Review from "./components/review";
import Services from "./components/services";
function App() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="max-w-[1280px] mx-auto">
        <Hero />
        <Services />
        <Review />
        <Contact />
      </div>
    </div>
  );
}

export default App;
