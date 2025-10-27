import Btn from "../UI/Button";
import Sprite from "/NFT-React/assets/sprite.svg";
import CreateUsers from "../UI/CreateUsers";

function Creators() {
  return (
    <>
      <section className="container PositionBtn">
        <div className="TitleBox">
          <div>
            <h4>Top creators</h4>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </div>
        </div>
        <CreateUsers />
        <Btn className="BtnView AnimationSvg" type="button">
          <svg>
            <use href={`${Sprite}#RocketLaunch`}></use>
          </svg>
          View Rankings
        </Btn>
      </section>
    </>
  );
}

export default Creators;
