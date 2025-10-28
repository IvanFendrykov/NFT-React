import { BASEURLCATEG } from "../UI/Helpers";
import imgsCateg from "../../categories.json";

function Categories() {
  return (
    <>
      <section className="container">
        <div className="ListBlur">
          <h4>Browse Categories</h4>
          <ul>
            {imgsCateg.map((u, i) => {
              return (
                <li key={i + 1}>
                  <div className="BlurPosition">
                    <img
                      src={`${BASEURLCATEG}${u.bcImg.replace(/^\//, "")}`}
                      alt={u.bcDesc}
                    />
                    <img
                      src={`${BASEURLCATEG}${u.img.replace(/^\//, "")}`}
                      alt={u.imgDesc}
                    />
                  </div>
                  <p>{u.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      ;
    </>
  );
}

export default Categories;
