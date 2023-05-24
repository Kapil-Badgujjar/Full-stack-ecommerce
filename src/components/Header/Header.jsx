import "./Header.scss";
import "./Header2.css";
import { Button, Space } from "antd";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
// import { useAuthContext } from "../../context/AuthContext";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
// import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import { removeToken } from "../../helpers";
// import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    setUser(undefined);
    // navigate("/signin", { replace: true });
    navigate("/");
  };
  //   const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) setScrolled(true);
    else setScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div
            className="center"
            onClick={() => {
              navigate("/");
            }}
          >
            SuperMART
          </div>
          <div className="right">
            <TbSearch
              onClick={() => {
                setShowSearch(true);
              }}
            />
            {/* <AiOutlineHeart /> */}
            {user && <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {cartCount > 0 && <span>{cartCount}</span>}
            </span>}
            <Space className="header_space">
              <Space className="auth_buttons">
                {user ? (
                  <>
                    <Button
                      className="auth_button_login buttonType-1"
                    //   href="/"
                      type="link"
                    >
                      {user.username}
                    </Button>
                    <Button
                      className="auth_button_signUp buttonType-2"
                      type="primary"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="auth_button_login buttonType-1"
                      href="/signin"
                      type="link"
                    >
                      Login
                    </Button>
                    <Button
                      className="auth_button_signUp buttonType-2"
                      href="/signup"
                      type="primary"
                    >
                      SignUp
                    </Button>
                  </>
                )}
              </Space>
            </Space>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
