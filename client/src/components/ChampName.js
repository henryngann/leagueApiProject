import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChampName = (props) => {
  const [title, setTitle] = useState("");
  const selected = useParams();
  useEffect(() => {
    axios.get(`http://localhost:4040/champions/${props.id}`).then((res) => {
      setTitle(res.data[selected.id].title);
    });
  }, []);
  return (
    <>
      <h1
        style={{
          position: "relative",
          color: "white",
          top: "10rem",
          left: "5rem",
          fontSize: "5rem",
          width: "15rem",
        }}
      >
        {props.id}
      </h1>
      <p
        style={{
          position: "relative",
          color: "white",
          top: "10rem",
          left: "5rem",
          fontSize: "1rem",
          width: "15rem",
        }}
      >
        {title}
      </p>
    </>
  );
};

export default ChampName;
