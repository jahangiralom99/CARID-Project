import { useQuery } from "react-query";
import useAxios from "../../Hooks/useAxios";
import Loading from "../../Shared/Loading/Loading";

const FeatureBrands = () => {
  const axios = useAxios();
  const { data = [], isLoading } = useQuery({
    queryKey: ["image"],
    queryFn: async () => {
      const res = await axios.get("/image");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  console.log(data);

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-3">
      <div>
        <h1 className="text-2xl font-semibold">Featured Brands</h1>
        <div className="grid grid-cols-6 gap-5 mt-8">
          {data?.map((item) => (
            <div className="" key={item._id}>
              <img className="object-contain" src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBrands;
