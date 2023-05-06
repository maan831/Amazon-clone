import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";

const Header = () => {
  const [{basket,user},dispatch] = useStateValue();
  const handleAuthentication = ()=>{
     if(user){
      auth.signOut();
     }
  }
  return (
    <div className="header">
      <Link to='/'>
      <img src={require('./pngimg.com - amazon_PNG25.png')} alt="logo" className="header-logo" />
      </Link>
     

      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header-option">
          <span className="header-option-lineone">Hello {user?`${user.email}`:" guest"}</span>
          <span className="header-option-linetwo">{user?"SignOut":"SignIn"}</span>
        </div>
        </Link>
        <Link to={'/orders'}>
        <div className="header-option">
        <span className="header-option-lineone">Returns</span>
          <span className="header-option-linetwo">& Orders</span>
        </div>
        </Link>
        <div className="header-option">
        <span className="header-option-lineone">Your</span>
          <span className="header-option-linetwo">Prime</span>
        </div>
        <Link to='/checkout'>
        <div className="header-option-basket">
            <ShoppingBasketIcon/>
            <span className="header-option-linetwo header-basket-count">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
