import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props){

    const [{basket},dispatch] = useStateValue();

    const RemoveFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:props.id,
        });
    };



    return (
        <div className="checkout-product">
            <img className="checkout-product-image" src={props.image} />
            <div className="checkout-product-info">
                <p className="checkout-product-title">{props.title}</p>
                <p className="checkout-product-price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkout-product-rating">
                {Array(props.rating).fill().map((_,i) => (
                <p>⚡</p>
                 ))}
                </div>
                {!props.hideButton && (
                    <button onClick={RemoveFromBasket}>Remove from Basket</button>
                )}
               
            </div>
        </div>
    );
};

export default CheckoutProduct;
