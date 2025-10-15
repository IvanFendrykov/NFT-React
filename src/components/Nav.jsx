import { useRef } from "react";
import Btn from "./UI/Button";
import BurgerMenu from "./UI/Burger";

function Nav() {
  const popRef = useRef(null);
  return (
    <>
      <nav className="nav NavigationList" aria-label="Navigashion">
        <a href="/" className="logo" aria-label="NFT Marketplace">
          <span className="logo-accent">NFT</span>Marketplace
        </a>
        <ul className="ListDesktop">
          <li>
            <a href="/marketplace">Marketplace</a>
          </li>
          <li>
            <a href="/rankings">Rankings</a>
          </li>
          <li>
            <a href="/wallet">Connect a wallet</a>
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
          <i className="bi bi-list" aria-hidden="true"></i>
        </button>
      </nav>
      <BurgerMenu ref={popRef} />
    </>
  );
}
export default Nav;
