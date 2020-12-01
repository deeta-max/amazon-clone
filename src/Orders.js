import  React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Orders.css";
import Order from "./Order";
import {useStateValue} from  "./StateProvider";

function Orders(){
    const [{basket,user},dispatch] = useStateValue(); 
    const [Orders, setOrders] = useState([]);

    useEffect(() => {
        if(user){
            db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .onSnapshot(snapShot => {
            setOrders(snapShot.docs.map(doc =>({
                id:doc.id,
                data:doc.data()
            })))
        }) 

        }else{
            setOrders([]);
        }
    }, [user]);       

    return(
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders-order">
                {Orders?.map(order  =>
                (
                    <Order order={order} />
                ))}
            </div>
        </div>
    );
};

export default Orders;