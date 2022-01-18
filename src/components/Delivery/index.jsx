import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Component
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";

function Delivery() {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector((store) => {
    console.log(store)
    return store.restaurant.restaurants;}
    );

  useEffect(() => {
    reduxState.restaurants && setRestaurantList(reduxState.restaurants);
  }, [reduxState.restaurants]);

  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in NCR(Delhi)
      </h1>
      <div className="flex justify-between flex-wrap mt-5">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
}

export default Delivery;