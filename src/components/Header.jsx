import ManMoon from "../assets/ManMoon.png";
import Animakid from "../assets/Animakid.png";
import Rocket from "../assets/sprite.svg";
import Btn from "./UI/Button";

function Header() {
  return (
    <>
      <div className="HeaderContainer container">
        <div className="HeaderBox">
          <div>
            <h1>Discover Digital Art & Collect NFTs</h1>
            <p>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </div>
          <div className="HeaderCard Hidden">
            <img className="CardImage" src={ManMoon} alt="Man on moon" />
            <div className="CardName">
              <h5>Space Walking</h5>
              <div className="AvatarCard">
                <img src={Animakid} alt="Avatar" />
                <span>Animakid</span>
              </div>
            </div>
          </div>
          <Btn className=" AnimationSvg" type="button">
            <svg>
              <use href={`${Rocket}#RocketLaunch`}></use>
            </svg>
            Get Started
          </Btn>
          <div className="TotalArtists">
            <ul>
              <li>
                <p>240k+</p>
                <span>Total Sale</span>
              </li>
              <li>
                <p>100k+</p>
                <span>Auctions</span>
              </li>
              <li>
                <p>240k+</p>
                <span>Artists</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="HeaderCard Showed">
          <img className="CardImage" src={ManMoon} alt="Man on moon" />
          <div className="CardName">
            <h5>Space Walking</h5>
            <div className="AvatarCard">
              <img src={Animakid} alt="Avatar" />
              <span>Animakid</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
