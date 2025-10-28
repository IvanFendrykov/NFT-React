import Header from "../Header";
import Trending from "../sections/Trending";
import Creators from "../sections/Creators";
import Categories from "../sections/Categories";

function Home() {
  return (
    <>
      <Header />
      <Trending />
      <Creators />
      <Categories />
    </>
  );
}
export default Home;
