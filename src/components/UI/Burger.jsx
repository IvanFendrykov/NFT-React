import React from "react";
import Btn from "./Button";

const BurgerMenu = React.forwardRef(function BurgerMenu(_props, popRef) {
  const handleclose = () => {
    const el = popRef?.current;
    if (el?.hidePopover) el.hidePopover();
    else el?.classList?.add("is-hidden");
  };

  const handleItemClick = (e) => {
    const t = e.target;
    if (t.closest("a") || t.closest(".Btn")) handleclose();
  };
  return (
    <div
      popover="auto"
      id="open"
      ref={popRef}
      className="popover"
      role="dialog"
      aria-modal="true"
    >
      <button className="popoverclose" type="button" onClick={handleclose}>
        <i className="bi bi-x-circle" aria-hidden="true"></i>
      </button>
      <ul className="ListBurger" onClick={handleItemClick}>
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
    </div>
  );
});

export default BurgerMenu;
