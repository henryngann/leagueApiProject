import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const SkillContext = () => {
  const selected = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4040/champions/${selected.id}`)
      .then((res) => {});
  }, []);

  return <div></div>;
};

export default SkillContext;
