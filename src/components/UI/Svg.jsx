import { Sprite } from "./Helpers";
function Svg({ id }) {
  return (
    <svg>
      <use href={`${Sprite}#${id}`} />
    </svg>
  );
}
export default Svg;
