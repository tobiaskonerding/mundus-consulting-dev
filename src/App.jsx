import Navbar from "./components/Navbar";
import CenterText from "./components/CenterText";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="sm:container mx-auto my-4 px-4 flex flex-col h-screen">
        <Navbar />
        <CenterText />
        <Footer />
      </div>
    </>
  );
}
