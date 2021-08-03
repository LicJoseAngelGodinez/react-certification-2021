import React, { useRef, useContext } from 'react'
import { DataContext } from '../../Context/AppContext'
import { v4 as uuidv4 } from 'uuid'
import HomeStyles from './HomeStyles'
import VideoCard from '../../components/VideoCard/VideoCard'

function HomePage() {
  const sectionRef = useRef(null);

  const { videoData } = useContext(DataContext);
  
  return (
    <HomeStyles className="homepage" ref={sectionRef}>
      <div className="homepage__wrapper">
          <div className="homepage__title">
            Hello World!
          </div>
          <div className="homepage__content">
            { videoData.map((video) => (
                <VideoCard
                  key={uuidv4()}
                  id={video.id.videoId}
                  imgUrl={video.snippet.thumbnails.high.url}
                  title={video.snippet.title}
                  description={video.snippet.description}
                />
            ))}
          </div>
      </div>
    </HomeStyles>
  );
}

export default HomePage;
