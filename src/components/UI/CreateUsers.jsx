import users from "../../creators.json";
import { BASE } from "./Helpers.jsx";
function CreateUsers() {
  return (
    <>
      <ul className="CreatorsList">
        {users.map((u, i) => {
          return (
            <li className="CreatorsItem" key={u.name}>
              <div className="Position">
                <div className="PositionAbs">{i + 1}</div>
                <img
                  src={`${BASE}${u.imageurl.replace(/^\//, "")}`}
                  alt={u.name}
                />
              </div>
              <div className="CreatorsName">
                <h5>{u.name}</h5>
                <div>
                  <span>Total Sales:</span>
                  <span>{u.eth} ETH</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CreateUsers;
