import React, { useState, useLayoutEffect } from 'react'
import { API_KEY, API_URL_YOUTUBE } from '../utils/constants'
import { processQueryParams, createQueryParams, processVideoResponse } from '../utils/utils'
import { fetchVideos } from '../services/videosServices'

const KEY = API_KEY;

// The Context 
const DataContext = React.createContext({});

const DataProvider = ({children}) => {

    const [searchTerm, setSearchTerm] = useState('wizeline');
    const [videoData, setVideoData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect( () => {

        const getVideos = async (url) => {
            return await fetchVideos(url);
        }

        let url = new URL(API_URL_YOUTUBE);
        url.search = processQueryParams(createQueryParams({value: searchTerm, key: KEY}));
    
        if (isLoading) {
            setIsLoading(false);
            const videos = getVideos(url);
            setVideoData(processVideoResponse(videos.items));
            // fetch(url, {
            //     method: 'GET'
            // }).then(function (response) {
            //     // The API call was successful!
            //     if (response.ok) {
            //         return response.json();
            //     } else {
            //         return Promise.reject(response);
            //     }
            // }).then(function (dataResponse) {
            //     // This is the JSON from our response
            //     let resData = [];
            
            //     if ( dataResponse.items.length > 0 ) {
            //         resData = dataResponse.items.filter( (video) => video.id.videoId );
            //     }
            //     setIsLoading(false);
            //     setVideoData(resData);
            // }).catch(function (err) {
            //     // There was an error
            //     console.warn('Something went wrong.', err);
            // });
        }
    })

    return (
        <DataContext.Provider value={{
            searchTerm,
            setSearchTerm,
            videoData,
            setVideoData,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export {
    DataContext,
    DataProvider,
}