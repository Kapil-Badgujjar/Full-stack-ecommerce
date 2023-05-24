import "./SingleProduct.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import useFetch from "../../hooks/useFetch";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../utils/context";
// import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  let [ quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const data = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const {handleAddToCart} = useContext(Context);
  const { user } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [data])
  console.log(data);
  if(data.length!=0) {
    const product = data.data[0].attributes;
    return (
      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">
            <div className="left">
              <img src={ "http://localhost:1337" + product.img.data[0].attributes.url} alt="" />
            </div>
            <div className="right">
              <span className="name">{product.title}</span>
              <span className="price">&#8377; {product.price}</span>
              <span className="desc">{product.desc}</span>

              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span onClick={()=>{setQuantity(quantity>1 ? quantity-1: quantity=1)}}>-</span>
                  <span>{quantity}</span>
                  <span onClick={()=>{setQuantity(quantity+1)}}>+</span>
                </div>
                <button className="add-to-cart-button" onClick={()=>{if(user) {handleAddToCart(data.data[0],quantity); setQuantity(1);} else navigate("/signin")}}>
                  <FaCartPlus size={20} />
                  ADD TO CART
                </button>
              </div>
              <span className="divider" />
              <div className="info-item">
                <span className="text-bold">
                  Category: <span>{product.categories.data[0].attributes.title}</span>
                </span>
                <span className="text-bold">
                  Share:
                  <span className="social-icons">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    <FaPinterest />
                    <FaLinkedinIn />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <RelatedProducts productId = {id} categoryId = {product.categories.data[0].id} />
        </div>
      </div>
    );
  }
  else return;
};

export default SingleProduct;
