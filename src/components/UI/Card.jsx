import { BASE, BASEURLMARKET } from "./Helpers";
function Card({ data = [], limit, hideNthOnTablet }) {
  const list = typeof limit === "number" ? data.slice(0, limit) : data;
  return (
    <>
      <ul className="DiscoverList">
        {list.map((u, i) => {
          const liClass =
            hideNthOnTablet && i === hideNthOnTablet - 1 ? "Hiddens" : "";
          return (
            <li key={i + 1} className={liClass}>
              <img
                src={`${BASEURLMARKET}${u.image}`}
                alt={u.title}
                loading="lazy"
              />
              <div className="CardName">
                <h5>{u.title}</h5>
                <div className="AvatarCard">
                  <img
                    src={`${BASE}${u.avatarUrl}`}
                    alt={u.name}
                    loading="lazy"
                  />
                  <span>{u.name}</span>
                </div>
                <div className="AvatarPrice">
                  <div>
                    <p>Price</p>
                    <p>{u.price} ETH</p>
                  </div>
                  <div>
                    <p>Highest Bid</p>
                    <p>{u.bid} wETH</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Card;
