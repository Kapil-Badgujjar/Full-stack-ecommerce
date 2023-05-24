import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
// import { makePaymentRequest } from "../../utils/api";
// makePaymentRequest
const Cart = ({ setShowCart }) => {
    const {cartItems,cartSubTotal} = useContext(Context);
    const navigate = useNavigate();
    // const stripePromise = loadStripe("pk_test_51N7sEwSJNvGStdPurXtPuJWkZaBF3l3H81kltGMJdR3m5UMwphthF6LUZYOzKFIYg68DkGwQn12HIzXUJIZn1Bpn00GOTn6RJ6");
    // const handlePayment = async () => {
    //   try{
    //     const stripe = await stripePromise;
    //     const res = await makePaymentRequest.post("/api/orders", { products:cartItems });
    //     await stripe.redirectToCheckout({
    //       sessionId: res.data.stripeSession.id
    //     })
    //   }
    //   catch (err){
    //     console.log(err);
    //   }
    // }
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span
            className="close-btn"
            onClick={() => {
              setShowCart(false);
            }}
          >
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>
        {!cartItems.length && <div className="empty-cart">
                <BsCartX />
                <span>No product in the cart.</span>
                <button className="return-cta" onClick = { () => { setShowCart(false); navigate('/')}}>RETURN TO SHOP</button>
            </div>}

        {!!cartItems.length &&<>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal : </span>
              <span className="text total">&#8377; {cartSubTotal}</span>
            </div>
            <div className="button">
              <button className="checkout-cta" onClick={()=>{navigate("/checkoutpage")}}>Checkout</button>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
};

export default Cart;
