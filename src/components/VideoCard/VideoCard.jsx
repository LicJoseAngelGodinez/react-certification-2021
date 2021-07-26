import React from 'react'

const VideoCard = ({ imgUrl, title, description}) => {
  return (
    <div className="videocard__wrapper">
      <img src={imgUrl} alt="" />
      <label htmlFor="" className="videocard__title">{title}</label>
      <p className="videocard__desc">
        {description}
      </p>
    </div>
  )
}

export default VideoCard;
