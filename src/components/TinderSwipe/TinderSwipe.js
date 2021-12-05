import React, { useState } from "react";
import "./TinderSwipe.scss";
import TinderCard from "react-tinder-card";

const db = [
  {
    name: "Offroading",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669988/skye%2Btyler/offroading.gif",
  },
  {
    name: "Vegas pool party",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669988/skye%2Btyler/vegas-pool.gif",
  },
  {
    name: "Maya pool",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669986/skye%2Btyler/maya-pool.gif",
  },
  {
    name: "Vegas",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669983/skye%2Btyler/vegas.gif",
  },
  {
    name: "Duck pond",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669982/skye%2Btyler/duck-pond.gif",
  },
  {
    name: "Mansion party",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669978/skye%2Btyler/mansion.gif",
  },
  {
    name: "Club",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669978/skye%2Btyler/club.gif",
  },
  {
    name: "Heliopter ride",
    src: "https://res.cloudinary.com/dmtn5fbdu/image/upload/v1638669976/skye%2Btyler/hellacopters.gif",
  },
];

function TinderSwipe() {
  const [, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="TinderSwipe">
      <div className="cardContainer">
        {db.map((photo) => (
          <TinderCard
            className="swipe"
            key={photo.name}
            onSwipe={(dir) => swiped(dir, photo.name)}
            onCardLeftScreen={() => outOfFrame(photo.name)}
          >
            <div className="card">
              <img src={photo.src} />
              <h3>{photo.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderSwipe;
