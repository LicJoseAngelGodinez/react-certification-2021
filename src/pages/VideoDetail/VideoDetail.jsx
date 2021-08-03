import React, { useContext } from 'react'
import { DataContext } from '../../Context/AppContext'
import { useRouteMatch } from 'react-router-dom'
import VideoDetailStyles from './VideoDetailStyles'
import VideoCard from '../../components/VideoCard/VideoCard'
import { v4 as uuidv4 } from 'uuid'

function VideoDetail () {

  const {
    params: { id },
  } = useRouteMatch('/:id');

  const { videoData } = useContext(DataContext);  
  
  let vdDataTEmp = videoData.length > 0 ? videoData.find((video) => video.id.videoId === id) : {};

  let vData = !!(vdDataTEmp) ? {
    videoUrl: `https://www.youtube.com/embed/${id}`,
    list: videoData,
    title: vdDataTEmp.snippet.title,
    description: vdDataTEmp.snippet.description
  } : {
    videoUrl: ``,
    list: videoData,
    title: ``,
    description: ``
  };

  return (
    <VideoDetailStyles>
      <div className="vd__wrapper">
        <div className="vd__video">
          <iframe
            width="auto"
            height="480"
            src={vData.videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          ></iframe>
        </div>
        <div className="vd__content">
          <div className="vd__title">
            {vData.title}
          </div>
          <div className="vd__description">
          {vData.description}
          </div>
        </div>
        <div className="vd__list">
          { vData.list.map((video) => (
                <VideoCard
                  key={uuidv4()}
                  id={video.id.videoId}
                  imgUrl={video.snippet.thumbnails.high.url}
                  title={video.snippet.title}
                  description=""
                />
          ))}
        </div>
      </div>
    </VideoDetailStyles>
  )
}

export default VideoDetail;