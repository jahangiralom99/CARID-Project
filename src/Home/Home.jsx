import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Discount from "./Discount/Discount";
import SelectVehicle from "./SelectVehicle/SelectVehicle";
import HotIdeas from "./HotIdeas/HotIdeas";

const Home = () => {
  return (
    <div>
          <Banner />
          <SelectVehicle />
          <Discount />
          <Categories />
          <HotIdeas/>
    </div>
  );
};

export default Home;
