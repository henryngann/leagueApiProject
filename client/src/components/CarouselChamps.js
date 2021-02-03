import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
const CarouselChamps = (props) => {
  const [skinCount, setSkinCount] = useState(0);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setSkinCount(index);
  };

  return (
    <div
      className="container bg-danger"
      style={{ height: "300px", width: "500px" }}
    >
      <Carousel
        activeIndex={index}
        prevLabel=""
        nextLabel=""
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 h-100 p-3 rounded-3"
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.id}_${skinCount}.jpg`}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-3"
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.id}_${skinCount}.jpg`}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-3"
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.id}_${skinCount}.jpg`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselChamps;
