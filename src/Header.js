import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header(){
    const [{basket, user},dispatch] = useStateValue();
   
    const handleAuthentication = ()  => {
        if(user) {
            console.log(auth);
            auth.signOut();
        }
    }


    return(<div className="header">
    <Link to="/">
    <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
    </Link>
    
    <div className="header-search">
        <input className="header-search-input" type="text"></input>
        <SearchIcon className="header-search-icon" />
    </div>
    <div className="header-nav">
    <Link to={!user && "/login"}>
        <div onClick={handleAuthentication} className="header-option">
            <span className="header-option-one">Hello {user? user?.email: "Guest"}</span>
            <span className="header-option-two">{user? "Sign Out" : "Sign In"}</span>
        </div>
    </Link>
    <Link to ={user && "/orders"}>
        <div className="header-option">
            <span className="header-option-one">Returns</span>
            <span className="header-option-two">Orders</span>
        </div>
    </Link>
        <div className="header-option">
            <span className="header-option-one">Your</span>
            <span className="header-option-two">Prime</span>
        </div>
    
        <Link to ="/Checkout">
        <div className="header-option-basket">
            <ShoppingBasketIcon />
            <span className="header-option-two header-basket-count">
            {basket?.length}
            </span>
        </div>
        </Link>
        
    </div>
    </div>
    );
};


export default Header;