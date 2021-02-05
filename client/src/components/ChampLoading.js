import React from "react";

const ChampLoading = (props) => {
  return (
    <img
      key={props.id}
      style={{ marginTop: "15rem", marginLeft: "4.65rem" }}
      alt={props.id}
      src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.id}_0.jpg`}
    />
  );
};

export default ChampLoading;
