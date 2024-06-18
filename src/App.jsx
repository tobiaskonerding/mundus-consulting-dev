import Navbar from "./components/Navbar";
import TextHero from "./components/TextHero";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div id="hero">
        <div id="overlay-background">
          <div className="sm:container mx-auto py-4 px-4 flex flex-col h-dvh justify-between">
            <Navbar />
            <TextHero />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
