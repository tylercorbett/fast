import React from "react";
import "./TinderSwipe.scss";
import TinderCard from "react-tinder-card";

const db = [
  {
    name: "Offroading - July 31st 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669988/skye%2Btyler/offroading.gif",
    isVertical: true,
  },
  {
    name: "Vegas pool party - August 28th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669988/skye%2Btyler/vegas-pool.gif",
    isVertical: true,
  },
  {
    name: "Maya pool - July 11th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669986/skye%2Btyler/maya-pool.gif",
    isVertical: true,
  },
  {
    name: "Vegas - August 27th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669983/skye%2Btyler/vegas.gif",
    isVertical: true,
  },
  {
    name: "Duck pond - July 14th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669982/skye%2Btyler/duck-pond.gif",
    isVertical: false,
  },
  {
    name: "Mansion party - July 28th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669978/skye%2Btyler/mansion.gif",
    isVertical: true,
  },
  {
    name: "Club - July 14th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669978/skye%2Btyler/club.gif",
    isVertical: false,
  },
  {
    name: "Heliopter ride - August 28th 2021",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669976/skye%2Btyler/hellacopters.gif",
    isVertical: true,
  },
];

function TinderSwipe() {
  return (
    <div className="TinderSwipe">
      <div className="cardContainer">
        {db.map((photo) => (
          <TinderCard
            className="swipe"
            key={photo.name}
          >
            <div className="card">
              <img src={photo.src} alt={photo.name}/>
              <h3>{photo.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderSwipe;
