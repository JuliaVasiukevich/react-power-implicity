import { ReactComponent as Logo } from "../assets/logo.svg";
import { NAVIGATIONS } from "../../constants/navigation.constans";
import "./index.scss";

export const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="nav__link">
        <Logo className="nav__logo" />
      </a>
      <ul className="nav__list">
        {NAVIGATIONS.map((navItem) => (
          <li key={navItem.title} className="nav__item">
            <a href={navItem.path} className="nav__item-link">
              {navItem.title}
            </a>
          </li>
        ))}
      </ul>
      <button className="nav__button">Download for free</button>
    </nav>
  );
};
