import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";

const AnimateChamps = () => {
  const [items] = useState([
    {
      title:
        "https://cdn.vox-cdn.com/thumbor/uVG0rtRllX70lBJeTpNRgmkgnzI=/0x0:1280x720/920x613/filters:focal(742x211:946x415):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/53583901/Aatrox_splash.0.jpg",
      id: 0,
    },
    {
      title:
        "https://img.redbull.com/images/c_crop,x_0,y_85,h_405,w_1215/c_fill,w_2560,h_826/q_auto,f_auto/redbullcom/2017/06/12/5df9861f-ebce-4a11-a1af-37b0ffa0e962/fizz-most-annoying-league-champions",
      id: 1,
    },
  ]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const fadingTextPropsTransition = useTransition(
    items[index],
    (item) => item.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { tension: 220, friction: 120 },
    }
  );

  /*return ({
    
    }) */
  return fadingTextPropsTransition.map(({ item, props, key }) => (
    <animated.div key={key} style={{ ...props, position: "absolute" }}>
      <img className="mt-5 mx-3" width="85px" height="85px" src={item.title} />
    </animated.div>
  ));
};

export default AnimateChamps;
