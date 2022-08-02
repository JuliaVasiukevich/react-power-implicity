import { Navbar } from "./components/Navbar/Navbar";
import { Swiper } from "./components/Swiper/Swiper";
import './styles/index.scss'

export const App = () => {
  return (
    <main className="main">
      <Navbar />
      <Swiper/>
    </main>
  );
};
