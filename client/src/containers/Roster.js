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
      console.log(res.data);
    });

    setLoaded(true);
  }, []);

  const handleUpdate = (id) => {
    history.push(`/champions/${id}/details`);
  };

  if (loaded === "false") {
    return loaded;
  } else {
    return (
      <div>
        {champInfo.map((champion) => (
          <img
            key={champion.id}
            className="mt-5 mx-3"
            width="85px"
            height="85px"
            alt={champion.id}
            onClick={() => handleUpdate(champion.id)}
            src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${champion.image.full}`}
          />
        ))}
      </div>
    );
  }
};

export default Roster;
