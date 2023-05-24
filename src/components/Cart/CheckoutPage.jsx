import './Checkoutpage.scss';
import React from 'react'
import { useState,useContext } from 'react';
import { Context } from "../../utils/context";
import {loadStripe} from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";
export default function CheckoutPage() {
    const {cartItems,cartSubTotal} = useContext(Context);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [warnmsg, setWarningMsg] = useState("");
    const stripePromise = loadStripe("pk_test_51N7sEwSJNvGStdPurXtPuJWkZaBF3l3H81kltGMJdR3m5UMwphthF6LUZYOzKFIYg68DkGwQn12HIzXUJIZn1Bpn00GOTn6RJ6");
    const handlePayment = async () => {
        if(name!=""&&phone!=""&&address!=""){
            try{
                const stripe = await stripePromise;
                const res = await makePaymentRequest.post("/api/orders", { products:cartItems, addressdetails: {Name: name,Phone: phone, Address: address} });
                await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
                })
            }
            catch (err){
                console.log(err);
            }
        } else {
            setWarningMsg("Please enter proper details");
            const timer = setTimeout(() => {
                setWarningMsg("");
              }, 2000);
        }
    }
  return (
    <div className="container">
        <div className="form">
            <span className='warnmsg'>{warnmsg}</span>
            <label>Name: </label>
            <input type="text" onChange={(e)=>{setName(e.value)}} value={name}/>
            <label>Phone No. :</label>
            <input type="number" onChange={(e)=>{setPhone(e.value)}} value={phone}/>
            <label>Address : </label>
            <textarea type="text" onChange={(e)=>{setAddress(e.value)}} value={address} rows="10"/>
            <button className="checkout-cta" onClick={handlePayment}>Make Payment</button>
        </div>
    </div>
  )
}
