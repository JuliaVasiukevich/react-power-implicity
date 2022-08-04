import { Navbar } from "./components/Navbar/Navbar";
import { Slider } from "./components/Slider/Slider";
import "./styles/index.scss";

export const App = () => {
  return (
    <main className="main">
      <Navbar />
      <Slider />
    </main>
  );
};
