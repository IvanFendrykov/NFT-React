import { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Btn from "./UI/Button";
import BurgerMenu from "./UI/Burger";
import Svg from "./UI/Svg";

function Nav() {
  const popRef = useRef(null);
  return (
    <>
      <nav className="nav NavigationList" aria-label="Navigashion">
        <Link to="/" className="logo" aria-label="NFT Marketplace">
          <span className="logo-accent">NFT</span>Marketplace
        </Link>
        <ul className="ListDesktop">
          <li>
            <NavLink to="/">Marketplace</NavLink>
          </li>
          <li>
            <NavLink to="/rankings">Rankings</NavLink>
          </li>
          <li>
            <NavLink to="/wallet">Connect a wallet</NavLink>
          </li>
          <li>
            <Btn className="Btn">Sign Up</Btn>
          </li>
        </ul>
        <button
          type="button"
          className="burger-trigger"
          aria-label="Open Menu"
          onClick={() => {
            const el = popRef.current;
            if (el?.showPopover) el.showPopover();
            else el?.classList?.remove("is-hidden");
          }}
        >
          <Svg id="List" />
        </button>
      </nav>
      <BurgerMenu ref={popRef} />
    </>
  );
}
export default Nav;
