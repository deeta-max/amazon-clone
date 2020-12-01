import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return(
    <div className="home">
        <div className="home-container">
            <img className="home-image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/GW/Akai-GW-Banner_PC_1X._CB414374623_.jpg"></img>
            <div className="home-row">
            <Product 
            key={1}
            id={1}
            title="Redmi 9 (Ky Blue, 4GB RAM, 64GB Storage) | 3 Months No Cost EMI on BFL"
            price={499.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/71uZrDPrsRL._AC_UL200_SR200,200_.jpg"
            rating={5} />
            <Product 
            key={2}
            id={2}
            title="OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage) awfegewgessdgreh"
            price={299.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/71gag816F7L._AC_UL200_SR200,200_.jpg"
            rating={4} />
            </div>
            <div className="home-row">
            <Product 
            key={3}
            id={1}
            title="Redmi 9 (Ky Blue, 4GB RAM, 64GB Storage) | 3 Months No Cost EMI on BFL"
            price={19.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/71uZrDPrsRL._AC_UL200_SR200,200_.jpg"
            rating={5} />
            <Product 
            key={4}
            id={2}
            title="OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage) awfegewgessdgreh"
            price={299.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/71gag816F7L._AC_UL200_SR200,200_.jpg"
            rating={4} />
            <Product 
            key={5}
            id={2}
            title="OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage) awfegewgessdgreh"
            price={299.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/71gag816F7L._AC_UL200_SR200,200_.jpg"
            rating={4} />
            </div>
            <div className="home-row">
            <Product
            key={6} 
            id={1}
            title="Redmi 9 (Ky Blue, 4GB RAM, 64GB Storage) | 3 Months No Cost EMI on BFL"
            price={19.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/71uZrDPrsRL._AC_UL200_SR200,200_.jpg"
            rating={5} />
            </div>

        </div>
    </div>
    );
};

export default Home;