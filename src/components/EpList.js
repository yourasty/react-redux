import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {episode} from '../Actions'
export default function EpList(){

  const data = useSelector(state => state.episodes)
  const season = useSelector(state => state.season)
  const episodes = data.data
  const loaded = data.loaded
  const err = data.error
  const dispatch = useDispatch()



  let options = []
  if (loaded)
  Object.keys(episodes).forEach((key) => {
    if (episodes[key].season === season) options.push(
      <li key={key} className="eplist_item">
        <Link
          to={"/episode/S"+episodes[key].season+"E"+episodes[key].number}
          onClick={() => dispatch(episode(key))}>
          Episode {episodes[key].number} : {episodes[key].name}
        </Link>
      </li>
    )
  })
  else options = err ? 'error, try refreshing' : 'loading...'



  return (
    <div className='eplist'>
      <ul className="eplist_ul">
      {options}
      </ul>
    </div>
  )

}
