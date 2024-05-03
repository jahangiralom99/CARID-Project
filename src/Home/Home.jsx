import Banner from "./Banner/Banner";
import Discount from "./Discount/Discount";
import SelectVehicle from "./SelectVehicle/SelectVehicle";

const Home = () => {
  return (
    <div>
          <Banner />
          <SelectVehicle />
          <Discount/>
    </div>
  );
};

export default Home;
