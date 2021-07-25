import React from 'react'
import VideoCardStyles from './VideoCardStyles'

const VideoCard = (props) => {
  const { imgUrl, title, description} = props;
  return (
    <VideoCardStyles className="videocard__wrapper">

      <img src={imgUrl} alt="" />

      <label htmlFor="" className="videocard__title">{title}</label>

      <p className="videocard__desc">
        {description}
      </p>

    </VideoCardStyles>
  )
}

export default VideoCard;
