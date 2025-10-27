import { BASEURL, BASE } from "../UI/Helpers";

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
                  <img
                    className="PrimaryCard"
                    src={`${BASEURL}Card1.png`}
                    alt="Dog"
                  />
                  <ul className="TrendingImageList">
                    <li>
                      <img src={`${BASEURL}Card1Placeholder.png`} alt="" />
                    </li>
                    <li>
                      <img src={`${BASEURL}Card1Placeholder2.png`} alt="" />
                    </li>
                    <li>
                      <span>1025+</span>
                    </li>
                  </ul>
                </div>
                <div className="CardName Nopadding">
                  <h5>DSGN Animals</h5>
                  <div className="AvatarCard">
                    <img src={`${BASE}MrFox.png`} alt="" />
                    <span>MrFox</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="TabletCard">
              <div className="TrendingCard">
                <div>
                  <img
                    className="PrimaryCard"
                    src={`${BASEURL}Card2.png`}
                    alt="Dog"
                  />
                  <ul className="TrendingImageList">
                    <li>
                      <img src={`${BASEURL}Card2Placeholder.png`} alt="" />
                    </li>
                    <li>
                      <img src={`${BASEURL}Card2Placeholder2.png`} alt="" />
                    </li>
                    <li>
                      <span>1025+</span>
                    </li>
                  </ul>
                </div>
                <div className="CardName Nopadding">
                  <h5>Magic Mushrooms</h5>
                  <div className="AvatarCard">
                    <img src={`${BASE}Shroomie.png`} alt="" />
                    <span>Shroomie</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="DesktopCard">
              <div className="TrendingCard">
                <div>
                  <img
                    className="PrimaryCard"
                    src={`${BASEURL}Card3.png`}
                    alt="Dog"
                  />
                  <ul className="TrendingImageList">
                    <li>
                      <img src={`${BASEURL}Card3Placeholder.png`} alt="" />
                    </li>
                    <li>
                      <img src={`${BASEURL}Card3Placeholder2.png`} alt="" />
                    </li>
                    <li>
                      <span>1025+</span>
                    </li>
                  </ul>
                </div>
                <div className="CardName Nopadding">
                  <h5>Disco Machines</h5>
                  <div className="AvatarCard">
                    <img src={`${BASE}BeKind2Robots.png`} alt="" />
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
