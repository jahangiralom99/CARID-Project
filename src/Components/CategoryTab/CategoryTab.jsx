/* eslint-disable react/prop-types */
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const CategoryTab = ({ category }) => {
  //   const axios = useAxiosPublic;
  const { data = [], isLoading } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      const res = await axios.get(
        `https://carid-project-server.vercel.app/api/v1/category-list?category=${category}`
      );
      return res.data;
    },
  });

  if (isLoading) return <Loading/>;

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-12 px-3">
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

export default CategoryTab;
