import React, { useState, useEffect } from 'react'
import { processQueryParams, createQueryParams, processVideoResponse } from '../utils/utils'
import { fetchVideos } from '../services/videosServices'
import CircularIndeterminate from '../components/Loading'
import { useHistory } from 'react-router-dom'

const KEY = process.env.REACT_APP_API_KEY;
const YOUTUBE_URL = process.env.REACT_APP_YOUTUBE_SEARCH;

const DataContext = React.createContext({});

const DataProvider = ({children}) => {

    const [searchTerm, setSearchTerm] = useState('wizeline');
    const [videos, setVideos] = useState([]);
    const [videoData, setVideoData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const history = useHistory();

    useEffect(() => {
        if (!searchTerm) return;
        async function fetchData () {
            const url = new URL(YOUTUBE_URL);
            url.search = processQueryParams(createQueryParams({value: searchTerm, key: KEY}));
    
            const { items } = await fetchVideos(url);
    
            setVideoData(items);
            setIsLoading(false);
            history.push(`/`);
        }
        fetchData();

    }, [searchTerm, history, setIsLoading]);

    useEffect(() => {
        if (!videoData) return

        const filteredVideos = processVideoResponse(videoData);
        setVideos(filteredVideos);
    }, [videoData])

    return (
        <DataContext.Provider value={{
            searchTerm,
            setSearchTerm,
            videos,
            setVideos,
        }}>
            {isLoading ? <CircularIndeterminate/> : children }
        </DataContext.Provider>
    )
}

export {
    DataContext,
    DataProvider,
}