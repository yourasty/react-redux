import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import DOMPurify from 'dompurify'

export default function EpInfo(){

  const episodes = useSelector(state => state.episodes.data)
  const episode = useSelector(state => state.episode)
  if (episodes)
  return (
    <div className='epinfo'>
      <div className="back_button"><Link to='/' className="back_link">BACK</Link></div>
        <div className="epinfo_img_div">
          <div className="epinfo_img_shadow">
            <img className="epinfo_img"
              src={episodes[episode].image.original}
              alt={episodes[episode].image.name}/>
          </div>
        </div>
      <div className="epinfo_desc_title">
        <h3 >
          S{episodes[episode].season}E{episodes[episode].number} {episodes[episode].name}
        </h3>
      </div>
      <div className="epinfo_desc">
        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(episodes[episode].summary)}}></p>
      </div>
    </div>
  )
  else return (
    <div className='EpInfo'>
      loading...
    </div>
  )
}
