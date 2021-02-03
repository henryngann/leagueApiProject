import React from "react";

const ChampLoading = (props) => {
  return (
    <img
      key={props.id}
      style={{ marginTop: "10rem", marginLeft: "5rem" }}
      alt={props.id}
      src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.id}_0.jpg`}
    />
  );
};

export default ChampLoading;
