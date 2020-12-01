import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";


function Checkout(){

    const [{basket,user},dispatch] = useStateValue(); 

    return(
    <div className="checkout">
        <div className="checkout-left">
            <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/amazoncards/desktop-CBCC-unloggedin-header.png"></img>
            <div >
            <h3>Hello, {user?.email}</h3>
                <h2 className="checkout-title">Your Shopping Basket</h2>
                
                {basket.map(item => (
                    <CheckoutProduct 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
                


                
            </div>
        </div>
        <div className="checkout-right">
            <Subtotal />
        </div>
    </div>
    );
};

export default Checkout;