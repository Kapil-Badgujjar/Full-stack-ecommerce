import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getToken } from '../helpers';
import { API,BEARER } from '../constant';
export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  // let location = useLocation();
  const [user, setUser] = useState(undefined);
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const authToken = getToken();

  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/users/me`, {
        headers: { Authorization: `${BEARER} ${token}` },
      });
      const data = await response.json();

      setUserData(data);
    } catch (error) {
      console.error(error);
      message.error("Error While Getting Logged In User Details");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUser = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  useEffect(()=>{
    let count= 0;
    let subTotal = 0;
    cartItems.map( item => count += 1);
    setCartCount(count);
    cartItems.map( product => subTotal += product.attributes.price * product.attributes.quantity);
    setCartSubTotal(subTotal);
  },[cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex(p => p.id === product.id);
    if(index !== -1) {
      items[index].attributes.quantity += quantity;
    }
    else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  }
  const handleRemoveFromCart = (product) => {
      let items = [...cartItems];
      items = items.filter((p)=> p.id !== product.id );
      setCartItems(items);
  }
  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex(p => p.id === product.id);
    if(type === "inc")
      items[index].attributes.quantity += 1;
    else if(type === "dec"){
      if(items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
      }
    setCartItems(items);
  }
  
  const a = {
    "key": "Value"
  }

  return (
    <Context.Provider value={{ 
      user, setUser,
      userData, setUserData,
      isLoading,  setIsLoading,
      categories, setCategories,
      products, setProducts,
      cartItems, setCartItems,
      cartCount, setCartCount,
      cartSubTotal, setCartSubTotal,
      handleUser, 
      handleAddToCart,
      handleRemoveFromCart,
      handleCartProductQuantity
     }}>
      {children}
    </Context.Provider>
  )
}

export default AppContext;
