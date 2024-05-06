import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

const NavCategory = () => {
  const axios = useAxios();
  const { category } = useParams();

  const { data = [], isLoading } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      const res = await axios.get(`/category-list?category=${category}`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-12 max-w-screen-xl mx-auto px-4">
      {data.map((item) => (
        <div
          className="cursor-pointer hover:border text-center hover:underline rounded-lg"
          key={item._id}
        >
          <img className="inline" src={item.image} alt="category.png" />
          <p className="text-center mt-4">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default NavCategory;
