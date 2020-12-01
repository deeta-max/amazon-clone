import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketAmount } from "./reducer";
import { useStateValue } from "./StateProvider";
import axios from "./axios";
import { db } from "./firebase";


function Payment(){
    const history = useHistory();
    const [{basket,user}, dispatch] = useStateValue();
    
    const stripe = useStripe();
    const elements = useElements();
     
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() =>{
        const getClientSecret = async () =>{
            const response = await axios({
                method:"post",
                url:`/payments/create?total=${getBasketAmount(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket]);

    console.log("secret "+clientSecret);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setProcessing(true);

        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(clientSecret)
        .set({
            basket:basket,
            amount: getBasketAmount(basket),
        })
        
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type:'EMPTY_BASKET'
            })
            history.replace("/orders");
        })
        
    }

    const handleChange = e => {
        setDisable(e.empty);
        setError(e.error ? e.error.message:"");
    }

    return(
        <div className="payment">
            <div className="payment-container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p>111 React Amazon</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                         <h3>Review items and delivery</h3>
                    </div>
                    <div className="payments-items">

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
                <div className="payment-section">
                <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment-price-container">
                                <CurrencyFormat
                                 renderText = {(value) => (
                                 <h3>Order  Total: {value}</h3>
                                 )}
                                 decimalScale={2}
                                 value={getBasketAmount(basket)}
                                 displayType={"text"}
                                 thousandSeparator={true}
                                  prefix={"$"}
                                 />
                                 <button disabled={processing || disable || succeeded}>
                                     <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                 </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;