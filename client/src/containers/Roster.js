import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

//https://na.leagueoflegends.com/en-us/champions/aatrox/
const Roster = () => {
  const [champInfo, setChampInfo] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  let history = useHistory();
  useEffect(() => {
    axios.get(`http://localhost:4040/champions`).then((res) => {
      setChampInfo(res.data);
      console.log(champInfo);
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
        <div className="form-floating mt-5">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Search a Champion"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>

        {champInfo
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.id.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((champion) => (
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
