import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";

function Order({order}){
    return(
        <div className="order">
            <h2>Order</h2>
            <p className="order-id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton
                />
            ))}
        </div>
    );
};

export default Order;