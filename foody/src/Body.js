
import React from 'react';
import RestaurentCard from './components/RestaurentCard.js';

const resObj = [
    {
      resName: "Meghna Food",
      cuisine: "North Indian, South Indian",
      rating: 4.4,
      deliveryTime: 38
    },
    {
      resName: "KFC",
      cuisine: "Burger, Coca-Cola",
      rating: 4.3,
      deliveryTime: 30
    },
    {
      resName: "Punjabi Tadka",
      cuisine: "North Indian, Prathe, Lassi",
      rating: 4.5,
      deliveryTime: 35
    },
    {
      resName: "Café Delight",
      cuisine: "Italian, French",
      rating: 4.7,
      deliveryTime: 25
    },
    {
      resName: "Sushi Haven",
      cuisine: "Japanese, Sushi",
      rating: 4.8,
      deliveryTime: 40
    },
    {
      resName: "Taco Fiesta",
      cuisine: "Mexican, Tacos",
      rating: 4.6,
      deliveryTime: 30
    },
    {
      resName: "Pizza Palace",
      cuisine: "Italian, Pizza",
      rating: 4.5,
      deliveryTime: 35
    },
    {
      resName: "Bollywood Bites",
      cuisine: "Indian, Bollywood",
      rating: 4.2,
      deliveryTime: 40
    },
    {
      resName: "Thai Terrace",
      cuisine: "Thai, Curry",
      rating: 4.6,
      deliveryTime: 35
    },
    {
      resName: "Greek Delights",
      cuisine: "Greek, Gyros",
      rating: 4.4,
      deliveryTime: 30
    },
    {
      resName: "Mamma Mia Pizzeria",
      cuisine: "Italian, Pizza, Pasta",
      rating: 4.9,
      deliveryTime: 25
    },
    {
      resName: "Burger Junction",
      cuisine: "Burgers, Fries",
      rating: 4.3,
      deliveryTime: 30
    },
    {
      resName: "Cantonese Corner",
      cuisine: "Chinese, Dim Sum",
      rating: 4.7,
      deliveryTime: 40
    },
    {
      resName: "Mediterranean Delights",
      cuisine: "Mediterranean, Falafel",
      rating: 4.5,
      deliveryTime: 35
    },
    {
      resName: "Veggie Haven",
      cuisine: "Vegetarian, Vegan",
      rating: 4.8,
      deliveryTime: 30
    },
    {
      resName: "Steakhouse Supreme",
      cuisine: "Steak, Grill",
      rating: 4.6,
      deliveryTime: 45
    },
    {
      resName: "Seafood Shack",
      cuisine: "Seafood, Lobster",
      rating: 4.7,
      deliveryTime: 40
    },
    {
      resName: "Smoothie Paradise",
      cuisine: "Smoothies, Juices",
      rating: 4.9,
      deliveryTime: 25
    },
    {
      resName: "Diner Dazzle",
      cuisine: "American, Diner",
      rating: 4.4,
      deliveryTime: 35
    },
    {
      resName: "Fusion Fare",
      cuisine: "Global Fusion",
      rating: 4.6,
      deliveryTime: 30
    }
   ]
const Body = ()=>{
    return (
       <div className='body'>
         <div className='search'>search</div>
         <div className='res-container'>
           {resObj.map((el,index) => <RestaurentCard key = {index} resData = {el}/>)}
         
         </div>
       </div>
    );
   }

   export default Body;