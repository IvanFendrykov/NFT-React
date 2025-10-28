import Btn from "../UI/Button";
import Svg from "../UI/Svg";
import Card from "../UI/Card";
import cards from "../../Discover.json";

function Discover() {
  return (
    <>
      <section className="container PositionBtn">
        <div className="TitleBox">
          <h4>Discover More NFTs</h4>
          <p>Explore new trending NFTs</p>
        </div>
        <Card data={cards} limit={3} hideNthOnTablet={3} />
        <Btn className="BtnView" type="button">
          <Svg id="Eye" />
          See All
        </Btn>
      </section>
      ;
    </>
  );
}
export default Discover;
