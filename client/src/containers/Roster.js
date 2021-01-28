import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Roster = () => {
  const [champInfo, setChampInfo] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let history = useHistory();
  useEffect(() => {
    axios.get(`http://localhost:4040/champions`).then((res) => {
      setChampInfo(res.data);
      console.log(res.data, "this is res.data");
      console.log(champInfo);
    });

    setLoaded(true);
    // Update the document title using the browser API
  }, []);

  const handleUpdate = (id) => {
    history.push(`/champions/${id}/details`);
  };
  if (loaded === "false") {
    console.log("wtf");
    return loaded;
  } else {
    return (
      <div>
        {champInfo.map((champion) => (
          <img
            onClick={() => handleUpdate(champion.id)}
            src={`http://ddragon.leagueoflegends.com/cdn/6.8.1/img/champion/${champion.image.full}`}
          />
        ))}
      </div>
    );
  }
};

export default Roster;