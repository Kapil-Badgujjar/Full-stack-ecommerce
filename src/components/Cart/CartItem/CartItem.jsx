import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
  const { cartItems, handleCartProductQuantity, handleRemoveFromCart } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id+"C"} className="cart-product">
          <div className="img-container">
            <img src={"http://localhost:1337" + item.attributes.img.data[0].attributes.url} alt="" />
          </div>
          <div className="product-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose onClick={()=>{handleRemoveFromCart(item)}}/>
            <div className="quantity-buttons">
              <span onClick={() => {handleCartProductQuantity("dec",item)}}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => {handleCartProductQuantity("inc",item)}}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">&#8377; {item.attributes.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;