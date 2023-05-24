import "./Product.scss";
import { useNavigate } from "react-router-dom";
const Product = ({ item, key }) => { 
  const navigate = useNavigate();
  return (
    <>
      <div className="thumbnail" onClick={()=>{ navigate(`/product/${item.id}`) }}>
        <img
          src={
            "http://localhost:1337" + item.attributes.img.data[0].attributes.url
          }
          alt=""
        />
      </div>
      <div className="prod-details" onClick={()=>{ navigate(`/product/${item.id}`) }}>
        <span className="name">{item.attributes.title}</span>
        <span className="price">&#8377; {item.attributes.price}</span>
      </div>
    </>
  );
};

export default Product;
