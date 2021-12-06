import React from "react";
import "./TinderSwipe.scss";
import TinderCard from "react-tinder-card";

const db = [
  {
    name: "And more to come!",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638676652/skye%2Btyler/bxvnc3rxwz7ovwgd2b7d.jpg",
  },
  {
    name: "Offroading - July 31st 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669988/skye%2Btyler/offroading.gif",
  },
  {
    name: "Vegas Pool Party - August 28th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669988/skye%2Btyler/vegas-pool.gif",
  },
  {
    name: "Birding - Second Day We Met",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638678928/skye%2Btyler/bird.gif",
  },
  {
    name: "Maya Pool - July 11th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669986/skye%2Btyler/maya-pool.gif",
  },
  {
    name: "Vegas - August 27th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669983/skye%2Btyler/vegas.gif",
  },
  {
    name: "Duck Pond - July 14th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669982/skye%2Btyler/duck-pond.gif",
  },
  {
    name: "Mansion Party - July 28th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669978/skye%2Btyler/mansion.gif",
  },
  {
    name: "Club - July 14th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669978/skye%2Btyler/club.gif",
  },
  {
    name: "Heliopter Ride - August 28th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669976/skye%2Btyler/hellacopters.gif",
  },
  {
    name: "Talking Stick Casino - August 5th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638678439/skye%2Btyler/talking-stick.gif",
  },
  {
    name: "Riding Back Home - First Day We Met",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638678929/skye%2Btyler/compressed-golf-cart.gif",
  },
  {
    name: "Vegas Round 2 - August 29th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638678438/skye%2Btyler/sunglasses.gif",
  },
];

function TinderSwipe() {
  return (
    <div className="TinderSwipe">
      <div className="cardContainer">
        {db.map((photo, i) => (
          <TinderCard className="swipe" key={photo.name}>
            <div className={`card ${i % 2 === 0 ? "rotate-left" : ""}`}>
              <img src={photo.src} alt={photo.name} />
              <h3>{photo.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderSwipe;
