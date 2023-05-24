import "./Products.scss";
import Product from "./Product/Product";
import { useEffect } from "react";
const Products = ({ products, headingText, flag }) => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
      <div className="products-container">
        {!flag && <div className="sec-heading">{headingText}</div>}
        <div className="products">
          {products?.data?.map((item) => (
            <div className="product-card" key={item.id+"P"}>
                <Product item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
