import Rooms from "./Home/Rooms/Rooms";
import Categories from "./Home/category/Categories";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <div className="mt-28">
        <Slider></Slider>
      </div>
      <div>
        <Categories></Categories>
      </div>
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
