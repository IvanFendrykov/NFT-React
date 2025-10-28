import Btn from "../UI/Button";
import CreateUsers from "../UI/CreateUsers";
import Svg from "../UI/Svg";

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
          <Svg id="RocketLaunch" />
          View Rankings
        </Btn>
      </section>
    </>
  );
}

export default Creators;
