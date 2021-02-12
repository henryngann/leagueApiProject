import React, { useState, useEffect } from "react";
import "../media/background.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChampLoading = (props) => {
  const selected = useParams();
  const [image, setImage] = useState(0);
  const [length, setLength] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:4040/champions/${selected.id}`).then((res) => {
      setImage(res.data[selected.id].skins[0].num);
      setLength(res.data[selected.id].skins.length - 1);
      console.log(length);
    });
  }, []);
  const increment = () => {
    if (image >= 0 && image < length) {
      setImage(image + 1);
    } else {
      setImage(image);
    }
  };
  const decrement = () => {
    if (image > 0 && image <= length) {
      setImage(image - 1);
    } else {
      setImage(image);
    }
  };
  //
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen  ">
          <div className="modal-content background">
            <div className="modal-body">
              <button
                type="btn"
                className="btn btn-secondary"
                onClick={decrement}
              >
                Before
              </button>
              <img
                key={selected.id}
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${selected.id}_${image}.jpg`}
                alt="Riot won't let you see this skin"
                style={{}}
              />
              <button
                type="btn"
                className="btn btn-secondary"
                onClick={increment}
              >
                Next
              </button>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        className="loadingImage"
        key={props.id}
        alt={props.id}
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.id}_0.jpg`}
      />
    </>
  );
};

export default ChampLoading;
