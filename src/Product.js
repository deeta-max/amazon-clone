import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product(props){
    const [state, dispatch] =useStateValue();
    const AddToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                key:props.id,
                id:props.id,
                title:props.title,
                image:props.image,
                price:props.price,
                rating:props.rating
            },
        });
    };


    return(
        <div className="product">
        <div className="product-info">
            <p>{props.title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className="product-rating">
            {Array(props.rating).fill().map((_,i) => (
                <p>⚡</p>
            ))}

            </div>
        </div>
        <img src={props.image}></img>
        <button onClick={AddToBasket} >Add to Basket</button>
        </div>
    );
};

export default Product;
