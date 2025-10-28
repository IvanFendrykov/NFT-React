import Header from "../Header";
import Trending from "../sections/Trending";
import Creators from "../sections/Creators";
import Categories from "../sections/Categories";
import Discover from "../sections/Discover";
function Home() {
  return (
    <>
      <Header />
      <Trending />
      <Creators />
      <Categories />
      <Discover />
    </>
  );
}
export default Home;
