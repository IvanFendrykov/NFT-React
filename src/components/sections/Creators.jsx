import Btn from "../UI/Button";
import Keepitreal from "../../assets/Keepitreal.png";
import DigiLab from "../../assets/DigiLab.png";
import GravityOne from "../../assets/GravityOne.png";
import Juanie from "../../assets/Juanie.png";
import BlueWhale from "../../assets/BlueWhale.png";
import MrFox from "../../assets/MrFox.png";
import Shroomie from "../../assets/Shroomie.png";
import Robotica from "../../assets/Robotica.png";
import RustyRobot from "../../assets/RustyRobot.png";
import Animakid from "../../assets/Animakid.png";
import Dotgu from "../../assets/dotgu.png";
import Ghiblier from "../../assets/Ghiblier.png";
import Sprite from "../../assets/sprite.svg";

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
        <ul className="CreatorsList">
          <li className="CreatorsItem">
            <div className="Position">
              <div className="PositionAbs">1</div>
              <img src={Keepitreal} alt="" />
            </div>
            <div className="CreatorsName">
              <h5>Keepitreal</h5>
              <div>
                <span>Total Sales:</span>
                <span>34.53 ETH</span>
              </div>
            </div>
          </li>
          <li className="CreatorsItem">
            <div className="Position">
              <div>2</div>
              <img src={DigiLab} alt="" />
            </div>
            <div className="CreatorsName">
              <h5>DigiLab</h5>
              <div>
                <span>Total Sales:</span>
                <span>32.13 ETH</span>
              </div>
            </div>
          </li>
          <li className="CreatorsItem">
            <div className="Position">
              <div>3</div>
              <img src={GravityOne} alt="" />
            </div>
            <div className="CreatorsName">
              <h5>GravityOne</h5>
              <div>
                <span>Total Sales:</span>
                <span>28.93 ETH</span>
              </div>
            </div>
          </li>
          <li className="CreatorsItem">
            <div className="Position">
              <div>4</div>
              <img src={Juanie} alt="" />
            </div>
            <div className="CreatorsName">
              <h5>Juanie</h5>
              <div>
                <span>Total Sales:</span>
                <span>25.30 ETH</span>
              </div>
            </div>
          </li>
          <li className="CreatorsItem">
            <div className="Position">
              <div>5</div>
              <img src={BlueWhale} alt="" />
            </div>
            <div className="CreatorsName">
              <h5>BlueWhale</h5>
              <div>
                <span>Total Sales:</span>
                <span>22.22 ETH</span>
              </div>
            </div>
          </li>
          <li className="CreatorsItem">
            <div className="Position">
              <div>6</div>
              <img src={MrFox} alt="" />
            </div>
            <div className="CreatorsName">
              <h5>Mr Fox</h5>
              <div>
                <span>Total Sales:</span>
                <span>19.28 ETH</span>
              </div>
            </div>
          </li>
          <li className="CreatorsItem">
            <div className="Position">
              <div>7</div>
              <img src={Shroomie} alt="" />
            </div>
            <div className="CreatorsName">
              <h5>Shroomie</h5>
              <div>
                <span>Total Sales:</span>
                <span>18.83 ETH</span>
              </div>
            </div>
          </li>
          <li className="CreatorsItem">
            <div className="Position">
              <div>8</div>
              <img src={Robotica} alt="" />
            </div>
            <div className="CreatorsName">
              <h5>Robotica</h5>
              <div>
                <span>Total Sales:</span>
                <span>18.13 ETH</span>
              </div>
            </div>
          </li>
          <li className="CreatorsItem">
            <div className="Position">
              <div>9</div>
              <img src={RustyRobot} alt="" />
            </div>
            <div className="CreatorsName">
              <h5>RustyRobot</h5>
              <div>
                <span>Total Sales:</span>
                <span>17.53 ETH</span>
              </div>
            </div>
          </li>
          <li className="CreatorsItem">
            <div className="Position">
              <div>10</div>
              <img src={Animakid} alt="" />
            </div>
            <div className="CreatorsName">
              <h5>Animakid</h5>
              <div>
                <span>Total Sales:</span>
                <span>16.51 ETH</span>
              </div>
            </div>
          </li>
          <li className="CreatorsItem">
            <div className="Position">
              <div>11</div>
              <img src={Dotgu} alt="" />
            </div>
            <div className="CreatorsName">
              <h5>Dotgu</h5>
              <div>
                <span>Total Sales:</span>
                <span>15.03 ETH</span>
              </div>
            </div>
          </li>
          <li className="CreatorsItem">
            <div className="Position">
              <div>12</div>
              <img src={Ghiblier} alt="" />
            </div>
            <div className="CreatorsName">
              <h5>Ghiblier</h5>
              <div>
                <span>Total Sales:</span>
                <span>14.53 ETH</span>
              </div>
            </div>
          </li>
        </ul>
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
