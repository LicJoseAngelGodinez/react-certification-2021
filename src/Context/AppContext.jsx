import React, { useState, useLayoutEffect } from 'react'
import { API_KEY } from '../utils/constants'

const KEY = API_KEY;

// The Context 
const DataContext = React.createContext({});

const DataProvider = ({children}) => {

    const [searchTerm, setSearchTerm] = useState('wizeline');
    const [videoData, setVideoData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {

        function processQueryParams (params) {
            let result = "?";
            for (let i = 0; i < params.length; i++) {
                let param = params[i],
                    connector = i === 0 ? '' : '&';
                result += `${connector}${param.field}=${param.value}`;
            }
            return result;
        };

        let url = new URL('https://content-youtube.googleapis.com/youtube/v3/search'),
            params = [
                { field: "q", value: searchTerm },
                { field: "part", value: "id" },
                { field: "part", value: "snippet" },
                { field: "maxResults", value: 25 },
                { field: "type", value: "video" },
                { field: "key", value: KEY },
            ];
        url.search = processQueryParams(params);
    
        if (isLoading) {
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
                setIsLoading(false);
                setVideoData(resData);
            }).catch(function (err) {
                // There was an error
                console.warn('Something went wrong.', err);
            });
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