import React from "react";

const Passive = (props) => {
  return (
    <img
      key={props.name}
      onClick={props.click}
      src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/passive/${props.image}`}
      alt="passive"
      style={{
        width: "150px",
        height: "150px",
        padding: "40px",
        marginTop: "12.5rem",
      }}
    />
  );
};

export default Passive;
