import React from "react";

const Passive = (props) => {
  return (
    <img
      key={props.name}
      onClick={props.click}
      src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/passive/${props.image}`}
      alt="passive"
      style={{
        padding: "40px",
        marginTop: "7rem",
      }}
    />
  );
};

export default Passive;
