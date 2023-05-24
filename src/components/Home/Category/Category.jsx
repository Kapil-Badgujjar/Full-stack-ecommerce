import "./Category.scss";
import { useNavigate } from "react-router-dom";
const Category =( {categories} ) => {
  // console.log(categories);
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        { categories?.data?.map((item) => (
          <div key={item.id+"C"} className="category" onClick={()=>{navigate(`category/${item.id}`)}}>
            <img
              src={
                'http://localhost:1337' +
                item.attributes.img.data.attributes.url } alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
