import { useSearchParams } from "react-router-dom";

import { categories } from "./CategoryData.jsx";
import CategoryBox from "./CategoryBox.jsx";
const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  return (
    <div className=" lg:pt-20  sm:pt-44 flex items-center justify-between overflow-x-auto">
      {categories.map((item) => (
        <CategoryBox
          key={item.label}
          label={item.label}
          icon={item.icon}
          selected={category === item.label}
        ></CategoryBox>
      ))}
    </div>
  );
};

export default Categories;
