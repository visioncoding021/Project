import React from "react";
const styleCard = {
    backgroundColor:"#f0f0f0"
   }

   const RestaurentCard = (props)=>{
    console.log(props);
    const {resName,cuisine,rating,diliveryTime} = props.resData;
    return(
       <div className='res-card' style={styleCard}>
        <img
        className='res-logo'
        alt="food-image"
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/2ece2c5f21d615e1bb12163a495bbcbc'/>
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{rating} star</h4>
        <h4>{diliveryTime}</h4>
       </div>
    );
   }
   export default RestaurentCard;