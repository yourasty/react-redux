import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { season } from "../Actions";
import { Link } from "react-router-dom";

export default function Season() {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes.data);
  if (episodes) {
    //get number of seasons
    const seasons = episodes[Object.keys(episodes).length - 1].season;

    let options = [];
    //create season list
    for (let i = 1; i <= seasons; i++) {
      options.push(
        <Link
          className="season_button"
          to="/"
          onClick={() => dispatch(season(i))}
        >
          <div>Season {i}</div>
        </Link>
      );
    }

    return <div className="season">{options}</div>;
  } else {
    return <div className="season">loading...</div>;
  }
}
