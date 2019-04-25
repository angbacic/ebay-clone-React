import React from 'react';

export default function AdvertDetails(props){
    return( 
    <div> 
        <p>Title:{props.advert.title}</p>
        <p>Description:{props.advert.description}</p>
        <img src= {props.advert.picture} alt="product_photo" />
        <p>Price:{props.advert.price} EUR</p>
        <p>Email:{props.advert.email}</p>
        <p>Phone Number:{props.advert.phoneNumber}</p>
        </div>
    )
}