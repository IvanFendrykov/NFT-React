import DogCard from "/NFT-React/assets/images/Card1.png";
import DogCard1 from "/NFT-React/assets/images/Card1Placeholder.png";
import DogCard2 from "/NFT-React/assets/images/Card1Placeholder2.png";
import MashroomCard from "/NFT-React/assets/images/Card2.png";
import MashroomCard1 from "/NFT-React/assets/images/Card2Placeholder.png";
import MashroomCard2 from "/NFT-React/assets/images/Card2Placeholder2.png";
import RobotCard from "/NFT-React/assets/images/Card3.png";
import RobotCard1 from "/NFT-React/assets/images/Card3Placeholder.png";
import RobotCard2 from "/NFT-React/assets/images/Card3Placeholder2.png";
import MrFox from "/NFT-React/assets/MrFox.png";
import Shroomie from "/NFT-React/assets/Shroomie.png";
import BeKind2Robots from "/NFT-React/assets/BeKind2Robots.png";
// Shroomie

function Trending() {
  return (
    <>
      <section className="container">
        <div className="TrendingBox">
          <div className="TitleBox">
            <h4>Trending Collection</h4>
            <p>Checkout our weekly updated trending collection.</p>
          </div>
          <ul className="TrendingCardList">
            <li>
              <div className="TrendingCard">
                <div>
                  <img className="PrimaryCard" src={DogCard} alt="Dog" />
                  <ul className="TrendingImageList">
                    <li>
                      <img src={DogCard1} alt="" />
                    </li>
                    <li>
                      <img src={DogCard2} alt="" />
                    </li>
                    <li>
                      <span>1025+</span>
                    </li>
                  </ul>
                </div>
                <div className="CardName Nopadding">
                  <h5>DSGN Animals</h5>
                  <div className="AvatarCard">
                    <img src={MrFox} alt="" />
                    <span>MrFox</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="TabletCard">
              <div className="TrendingCard">
                <div>
                  <img className="PrimaryCard" src={MashroomCard} alt="Dog" />
                  <ul className="TrendingImageList">
                    <li>
                      <img src={MashroomCard1} alt="" />
                    </li>
                    <li>
                      <img src={MashroomCard2} alt="" />
                    </li>
                    <li>
                      <span>1025+</span>
                    </li>
                  </ul>
                </div>
                <div className="CardName Nopadding">
                  <h5>Magic Mushrooms</h5>
                  <div className="AvatarCard">
                    <img src={Shroomie} alt="" />
                    <span>Shroomie</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="DesktopCard">
              <div className="TrendingCard">
                <div>
                  <img className="PrimaryCard" src={RobotCard} alt="Dog" />
                  <ul className="TrendingImageList">
                    <li>
                      <img src={RobotCard1} alt="" />
                    </li>
                    <li>
                      <img src={RobotCard2} alt="" />
                    </li>
                    <li>
                      <span>1025+</span>
                    </li>
                  </ul>
                </div>
                <div className="CardName Nopadding">
                  <h5>Disco Machines</h5>
                  <div className="AvatarCard">
                    <img src={BeKind2Robots} alt="" />
                    <span>BeKind2Robots</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Trending;
