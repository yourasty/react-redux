import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {season} from '../Actions'
export default function Season(){

  const dispatch = useDispatch()
  const episodes = useSelector(state => state.episodes.data)
  if (episodes){
    const seasons = episodes[Object.keys(episodes).length-1].season;

    let options = []

    for (let i = 1; i <= seasons; i++){
      options.push(
        <div key={i} className="season_button"  onClick={() => dispatch(season(i))}><div>Season {i}</div></div>
      )
    }

    return (
      <div className="season">
        {options}
      </div>
    )
  }
  else {

    return (
      <div className="season">
        loading...
      </div>
    )

  }


}
