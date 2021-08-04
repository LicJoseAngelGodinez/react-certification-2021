import React from 'react'
import { DataContext } from '../Context/AppContext';

const KEY = process.env.REACT_APP_API_KEY;

export default ApiYouTube = () => {

  const { searchTerm, setVideoData } = DataContext();

  let url = new URL('https://www.googleapis.com/youtube/v3/search'),
      params = {
        q: searchTerm,
        part: "snippet",
        maxResults: "2",
        type: "video",
        key: KEY,
      };

  url.search = new URLSearchParams(Object.entries(params)).toString();

  fetch(url, {
    method: 'GET'
  }).then(function (response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(function (dataResponse) {
    // This is the JSON from our response
    let resData = [];
    if ( dataResponse.items.length > 0 ) {
      resData = dataResponse.items.filter( (video) => video.id.videoId );
    }
    setVideoData(resData);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
}