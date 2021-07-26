import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HomeStyles from './HomeStyles';
import youtubeData from '../../data/youtube-videos-mock.json';
import VideoCard from '../../components/VideoCard/VideoCard';

function HomePage() {
  const sectionRef = useRef(null);

  const videoData = youtubeData.items.filter( (video) => video.id.videoId );

  return (

      <HomeStyles className="homepage" ref={sectionRef}>

        <div className="homepage__wrapper">

          <div className="homepage__title">

            Welcome to the Challenge!

          </div>


          <div className="homepage__content">

            {
             videoData.map((video) => (
                <VideoCard
                  key={uuidv4()}
                  imgUrl={video.snippet.thumbnails.high.url}
                  title={video.snippet.title}
                  description={video.snippet.description}
                />
              ))
            }

          </div>


        </div>

      </HomeStyles>
  );
}

export default HomePage;
