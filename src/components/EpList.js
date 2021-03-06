import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { episode } from "../Actions";

export default function EpList() {
  const data = useSelector((state) => state.episodes);
  const season = useSelector((state) => state.season);
  const loc = useSelector(state => state.loc)
  const episodes = data.data;
  const loaded = data.loaded;
  const err = data.error;
  const dispatch = useDispatch();

  let options = [];
  if (loaded)
    // episode list according to selected season
    Object.keys(episodes).forEach((key) => {
      if (episodes[key].season === season)
        options.push(
          <li key={key} className="eplist_item">
            <Link to={loc + "episode"} onClick={() => dispatch(episode(key))}>
              Episode {episodes[key].number} : {episodes[key].name}
            </Link>
          </li>
        );
    });
  else options = err ? "error, try refreshing" : "loading...";

  return (
    <div className="eplist">
      <ul className="eplist_ul">{options}</ul>
    </div>
  );
}
